"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/cn";

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function AuroraCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false,
    });

    if (!gl) return;

    const vertex = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragment = `
      precision highp float;
      varying vec2 v_uv;
      uniform vec2 u_resolution;
      uniform float u_time;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.55;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = p * 2.03 + vec2(17.2);
          a *= 0.5;
        }
        return v;
      }

      vec3 palette(float t) {
        // IBV-inspired blue palette.
        vec3 a = vec3(0.02, 0.05, 0.10);
        vec3 b = vec3(0.08, 0.28, 0.95);
        vec3 c = vec3(0.50, 0.85, 0.97);
        return a + b * sin(6.28318 * (c * t + vec3(0.0, 0.2, 0.4)));
      }

      void main() {
        vec2 uv = (v_uv - 0.5);
        uv.x *= u_resolution.x / u_resolution.y;

        float t = u_time * 0.08;
        vec2 p = uv * 1.6;
        p += vec2(0.0, -0.2);

        float n = fbm(p + t);
        float bands = smoothstep(0.2, 0.9, n);

        float rays = fbm(vec2(p.x * 2.0, p.y * 0.6) - t * 0.6);
        rays = smoothstep(0.35, 0.95, rays);

        float v = bands * 0.9 + rays * 0.6;
        v *= 1.0 - smoothstep(0.6, 1.2, length(uv));

        vec3 col = palette(v + 0.35);
        col = mix(col, vec3(0.07, 0.43, 1.0), v * 0.25);

        gl_FragColor = vec4(col, v * 0.75);
      }
    `;

    const vs = compileShader(gl, gl.VERTEX_SHADER, vertex);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, fragment);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const positionLoc = gl.getAttribLocation(program, "a_position");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resLoc = gl.getUniformLocation(program, "u_resolution");

    const buffer = gl.createBuffer();

    if (positionLoc === -1 || !timeLoc || !resLoc || !buffer) {
      return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );

    let frame = 0;
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { innerWidth: w, innerHeight: h } = window;
      const width = Math.floor(w * dpr);
      const height = Math.floor(h * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
    };

    const render = () => {
      if (prefersReducedMotion) return;
      frame = requestAnimationFrame(render);
      const now = performance.now();
      gl.useProgram(program);
      gl.uniform1f(timeLoc, (now - start) / 1000);

      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(positionLoc);
      gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    resize();
    window.addEventListener("resize", resize);

    if (!prefersReducedMotion) {
      render();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 opacity-70 blur-2xl",
        "[mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]",
        className,
      )}
    />
  );
}
