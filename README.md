# PRD to Prototype Generator

A web-based tool that converts Product Requirements Documents (PRDs) into functional HTML/JavaScript prototypes using Claude AI.

## Overview

This tool allows users to upload a PRD document and automatically generate a complete, functional prototype based on the requirements. The generated prototype is rendered in the browser and includes all necessary HTML, CSS, and JavaScript for a working demonstration of the product concept.

## Features

- **File Upload**: Support for TXT, MD, DOC, and DOCX files
- **AI-Powered Generation**: Uses Claude 3.5 Sonnet to analyze PRDs and create prototypes
- **Real-time Preview**: Live preview of generated prototypes
- **Download Capability**: Export generated prototypes as HTML files
- **Source Code View**: View and inspect the generated code
- **Responsive Design**: Clean, professional interface with white background and black buttons

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Claude API key from Anthropic

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Claude API key:
   ```
   CLAUDE_API_KEY=sk-ant-your-actual-api-key-here
   ```
   
   Get your API key from [Anthropic Console](https://console.anthropic.com/)

### Running the Application

1. **Development mode**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

2. **Production build**
   ```bash
   npm run build
   npm start
   ```

## Usage

### Step 1: Upload PRD Document
1. Click the upload area or drag and drop a PRD file
2. Supported formats: TXT, MD, DOC, DOCX
3. The content will be displayed in the preview area

### Step 2: Generate Prototype
1. Click the "Generate Prototype" button
2. Wait for the AI to process the PRD (this may take 30-60 seconds)
3. The generated prototype will appear below

### Step 3: Review and Export
1. **Preview**: View the prototype in the embedded iframe
2. **Download**: Click "Download HTML" to save the prototype file
3. **Source Code**: Expand "View Source Code" to see the generated HTML/CSS/JavaScript

## Sample PRD

A sample PRD for a "Defense & Dual-Use VC Deal Sourcing Tool" is included as `sample-prd.txt`. You can use this to test the tool immediately.

## Technical Details

### API Integration

The tool integrates with Claude 3.5 Sonnet with the following configuration:
- **Model**: claude-3-5-sonnet-20241022
- **Max Tokens**: 32,000
- **System Prompt**: Instructs Claude to generate complete, functional HTML prototypes

### Frontend Architecture

- **Framework**: Next.js 14+ with React
- **Styling**: Tailwind CSS
- **File Handling**: HTML5 File API for client-side file reading
- **Iframe Rendering**: Secure iframe with sandbox attributes for prototype display

### Backend API

- **Route**: `POST /api/generate-prototype`
- **Request Body**: `{ "prdContent": "string" }`
- **Response**: `{ "success": boolean, "prototypeCode": "string" }`

### Security Considerations

- API keys stored in environment variables
- CORS protection via Next.js API routes
- Iframe sandboxing for generated prototype execution
- Client-side file validation

## API Routes

### `POST /api/generate-prototype`

Generates a prototype from PRD content.

**Request:**
```json
{
  "prdContent": "Full PRD text content..."
}
```

**Response:**
```json
{
  "success": true,
  "prototypeCode": "<!DOCTYPE html>...</html>"
}
```

**Error Response:**
```json
{
  "error": "Error message description"
}
```

## Styling and Design

- **Color Scheme**: White background with black buttons and accents
- **Typography**: Clean, professional font stack
- **Layout**: Responsive grid system with centered content
- **Components**: Modern UI components with hover effects and transitions
- **Accessibility**: Proper contrast ratios and semantic HTML

## Troubleshooting

### Common Issues

1. **"Claude API key not configured"**
   - Ensure `.env.local` exists with valid `CLAUDE_API_KEY`
   - Restart the development server after adding environment variables

2. **"Failed to generate prototype from Claude API"**
   - Check API key validity
   - Verify internet connection
   - Ensure PRD content is not empty

3. **Prototype not rendering**
   - Check browser console for JavaScript errors
   - Verify the generated HTML is valid
   - Try downloading and opening the HTML file directly

### Development Tips

- Use browser developer tools to inspect generated prototypes
- Check network tab for API request/response details
- Monitor server logs for backend errors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:
1. Check the troubleshooting section above
2. Review the console for error messages
3. Ensure all dependencies are properly installed
4. Verify environment variables are set correctly

## Sample Usage Workflow

1. **Prepare PRD**: Write or obtain a Product Requirements Document
2. **Upload**: Use the web interface to upload your PRD file
3. **Generate**: Click the generate button and wait for AI processing
4. **Review**: Examine the generated prototype in the preview area
5. **Iterate**: Use the source code view to understand the generated code
6. **Export**: Download the HTML file for further development or presentation

The generated prototypes are fully functional and can be:
- Opened directly in web browsers
- Integrated into existing websites
- Used as starting points for full development
- Shared with stakeholders for feedback and validation