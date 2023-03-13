import React, { useRef, useState } from 'react';
import './Input.scss';

interface Props {
  placeholder?: string;
  value?: string;
}

const Input: React.FC<Props> = ({ placeholder }) => {
  const [numLines, setNumLines] = useState(3);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLDivElement>(null);

  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    const input = event.currentTarget.innerText;
    const height = inputRef.current?.clientHeight || 0;
    const lineHeight = parseFloat(
      getComputedStyle(event.currentTarget).lineHeight
    );
    const lines = Math.max(Math.floor(height / lineHeight), 3);
    setNumLines(lines);
    setValue(input);
  };

  return (
    <div className='input-wrapper'>
      <div
        ref={inputRef}
        contentEditable
        className='input'
        style={{
          fontSize: '15px',
          lineHeight: '1.5',
          wordBreak: 'break-word',
          maxHeight: `${numLines * 1.5}em`,
          minHeight: '5em',
          overflowY: numLines > 2 ? 'scroll' : 'hidden',
        }}
        placeholder={placeholder}
        onInput={handleInput}
      >
        {!value && placeholder}
      </div>
    </div>
  );
};

export default Input;
