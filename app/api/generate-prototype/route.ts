import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prdContent } = await request.json();

    if (!prdContent) {
      return NextResponse.json(
        { error: 'PRD content is required' },
        { status: 400 }
      );
    }

    const claudeApiKey = process.env.CLAUDE_API_KEY;
    if (!claudeApiKey) {
      return NextResponse.json(
        { error: 'Claude API key not configured' },
        { status: 500 }
      );
    }

    const systemPrompt = `You are an expert web developer and product designer. Your task is to analyze a Product Requirements Document (PRD) and generate a complete, functional HTML/JavaScript prototype.

Instructions:
1. Read and thoroughly analyze the provided PRD content
2. Generate a complete, self-contained HTML file with embedded CSS and JavaScript
3. Create a visually appealing and functional prototype that implements the key features described in the PRD
4. Return ONLY the raw HTML code without any markdown backticks, code fences, or explanatory text
5. Ensure all JavaScript is inline or embedded within the HTML
6. Use modern, clean design with professional styling
7. Make the prototype interactive and functional
8. Include responsive design elements
9. Use a clean, professional color scheme with white backgrounds and black buttons as specified
10. Focus on creating a realistic prototype that demonstrates the core functionality

The output should be a complete, standalone HTML file that can be directly rendered in a browser and fully functional.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': claudeApiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 32000,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: `Please analyze this PRD and generate a complete HTML/JavaScript prototype:\n\n${prdContent}`
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Claude API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to generate prototype from Claude API' },
        { status: 500 }
      );
    }

    const data = await response.json();
    
    if (!data.content || !data.content[0] || !data.content[0].text) {
      return NextResponse.json(
        { error: 'Invalid response from Claude API' },
        { status: 500 }
      );
    }

    const generatedCode = data.content[0].text;

    return NextResponse.json({ 
      success: true,
      prototypeCode: generatedCode 
    });

  } catch (error) {
    console.error('Error generating prototype:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}