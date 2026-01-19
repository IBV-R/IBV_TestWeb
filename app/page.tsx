'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prdContent, setPrdContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [prototypeCode, setPrototypeCode] = useState('');
  const [error, setError] = useState('');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setError('');
      
      // Read file content
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setPrdContent(content);
      };
      reader.readAsText(file);
    }
  };

  const handleGenerate = async () => {
    if (!prdContent.trim()) {
      setError('Please select a PRD file first');
      return;
    }

    setIsLoading(true);
    setError('');
    setPrototypeCode('');

    try {
      const response = await fetch('/api/generate-prototype', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prdContent }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate prototype');
      }

      setPrototypeCode(data.prototypeCode);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const renderPrototype = () => {
    if (!prototypeCode) return null;

    // Extract and execute scripts
    const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
    const scripts = [];
    let modifiedCode = prototypeCode;
    
    let match;
    while ((match = scriptRegex.exec(prototypeCode)) !== null) {
      scripts.push(match[1]);
      modifiedCode = modifiedCode.replace(match[0], '');
    }

    return (
      <div className="mt-8 w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-black">Generated Prototype</h3>
          <button
            onClick={() => {
              const blob = new Blob([prototypeCode], { type: 'text/html' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'prototype.html';
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            Download HTML
          </button>
        </div>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <iframe
            srcDoc={prototypeCode}
            className="w-full h-96 border-0"
            title="Generated Prototype"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
        <div className="mt-4">
          <details className="bg-gray-50 rounded-lg p-4">
            <summary className="cursor-pointer font-medium text-black hover:text-gray-700">
              View Source Code
            </summary>
            <pre className="mt-2 p-4 bg-white rounded border overflow-auto text-sm text-gray-800">
              <code>{prototypeCode}</code>
            </pre>
          </details>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-black mb-4">
            PRD to Prototype Generator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload your Product Requirements Document and generate a functional HTML/JavaScript prototype using Claude AI
          </p>
        </header>

        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <div className="space-y-6">
            {/* File Upload Section */}
            <div>
              <label htmlFor="file-upload" className="block text-sm font-medium text-black mb-2">
                Upload PRD Document
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <input
                  id="file-upload"
                  type="file"
                  accept=".txt,.md,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-12 h-12 text-gray-400 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    {selectedFile ? (
                      <div className="text-black">
                        <p className="font-medium">{selectedFile.name}</p>
                        <p className="text-sm text-gray-500">
                          {(selectedFile.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    ) : (
                      <div className="text-gray-500">
                        <p className="font-medium">Click to upload or drag and drop</p>
                        <p className="text-sm">TXT, MD, DOC, DOCX files</p>
                      </div>
                    )}
                  </div>
                </label>
              </div>
            </div>

            {/* Generate Button */}
            <div className="flex justify-center">
              <button
                onClick={handleGenerate}
                disabled={!selectedFile || isLoading}
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  selectedFile && !isLoading
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Prototype...
                  </div>
                ) : (
                  'Generate Prototype'
                )}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-medium text-red-800">Error</h3>
                    <p className="text-sm text-red-700 mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Success Message */}
            {prototypeCode && !error && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-medium text-green-800">Success</h3>
                    <p className="text-sm text-green-700 mt-1">Prototype generated successfully!</p>
                  </div>
                </div>
              </div>
            )}

            {/* PRD Content Preview */}
            {prdContent && (
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  PRD Content Preview
                </label>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-48 overflow-y-auto">
                  <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                    {prdContent.length > 1000 
                      ? prdContent.substring(0, 1000) + '...'
                      : prdContent
                    }
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Prototype Display */}
        {renderPrototype()}
      </div>
    </div>
  );
}