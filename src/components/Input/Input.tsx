import React, { useRef, useState } from 'react';
import './Input.scss';

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<Props> = ({ placeholder, onChange }) => {
  const [numLines, setNumLines] = useState(3);
  const inputRef = useRef<HTMLDivElement>(null);

  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    const input = event.currentTarget.innerText;
    const height = inputRef.current?.clientHeight || 0;
    const lineHeight = parseFloat(
      getComputedStyle(event.currentTarget).lineHeight
    );
    const lines = Math.max(Math.floor(height / lineHeight), 3);
    setNumLines(lines);
    onChange?.(input.trim());
  };

  return (
    <div
      ref={inputRef}
      contentEditable
      className='input'
      style={{
        fontSize: '15px',
        lineHeight: '1.5',
        wordBreak: 'break-word',
        maxHeight: `${numLines * 1.5}em`,
        minHeight: '4.5em',
        overflowY: numLines > 2 ? 'scroll' : 'hidden',
      }}
      placeholder={placeholder}
      onInput={handleInput}
    />
  );
};

export default Input;
