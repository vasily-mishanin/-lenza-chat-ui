import './Input.scss';
import { useState } from 'react';

interface Props {
  placeholder: string;
}

const CustomTextField: React.FC<Props> = ({ placeholder }) => {
  const [value, setValue] = useState<string>(''); // state to store the input value
  const [lines, setLines] = useState<number>(1); // state to track number of lines

  // function to handle input changes
  const handleChange = (event: React.FormEvent<HTMLDivElement>) => {
    setValue(event.currentTarget.textContent || '');
    setLines(event.currentTarget.childNodes.length);
  };

  // function to prevent default behavior on 'Enter' key press
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div className='custom-text-field'>
      <div
        className={`custom-text-field__placeholder ${
          value ? 'custom-text-field__placeholder--hidden' : ''
        }`}
      >
        {placeholder}
      </div>
      <div
        className={`custom-text-field__input ${
          lines >= 3 ? 'custom-text-field__input--scroll' : ''
        }`}
        contentEditable={true}
        onInput={handleChange}
        onKeyDown={handleKeyDown}
      ></div>
    </div>
  );
};

export default CustomTextField;
