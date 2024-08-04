import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Image from "next/image";

const customA11yDark = {
  ...a11yDark,
  'pre[class*="language-"]': {
    ...a11yDark['pre[class*="language-"]'],
    backgroundColor: '#0E0C15', // New background color
    borderRadius: '12px', // Rounded edges
    marginTop: '20px',
    marginBottom: '20px',
  },
};

type CodeBlockProps = {
  language: string;
  value: string;
  theme?: 'a11yDark';
};

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value, theme = 'a11yDark' }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div style={{ position: 'relative', fontFamily: 'monospace' }}>
      <CopyToClipboard text={value} onCopy={handleCopy}>
      <button style={{
          position: 'absolute',
          right: 0,
          top: 0,
          backgroundColor: '#00ab8e', // Green background
          color: 'white', // White text
          border: 'none', // No border
          padding: '5px 10px', // Padding
          margin: '10px 10px',
          borderRadius: '5px', // Rounded edges
          cursor: 'pointer' // Pointer cursor on hover
        }}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={customA11yDark} wrapLongLines={true}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;