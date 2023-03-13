import './MessageInput.scss';
import { useState } from 'react';
import AttachIcon from '../../assets/icon-attach.svg';
import SendIcon from '../../assets/icon-send.svg';
import Input from '../Input/Input';

interface Props {
  placeholder: string;
}

const CustomTextField: React.FC<Props> = ({ placeholder }) => {
  const [value, setValue] = useState<string>('');
  const [lines, setLines] = useState<number>(1);

  const handleChange = (event: React.FormEvent<HTMLDivElement>) => {
    setValue(event.currentTarget.textContent || '');
    console.log(
      'event.currentTarget.childNodes.length: ',
      event.currentTarget.childNodes,
      event.currentTarget.childNodes.length
    );
    setLines(event.currentTarget.childNodes.length);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div className='text-section'>
      {/* <div className='custom-text-field'>
        <div
          className={`custom-text-field__placeholder ${
            value ? 'custom-text-field__placeholder--hidden' : ''
          }`}
        >
          {placeholder}
        </div>
        <div
          className={`custom-text-field__input  ${
            lines >= 2 ? 'custom-text-field__input--scroll' : ''
          }`}
          contentEditable
          onInput={handleChange}
          onKeyDown={handleKeyDown}
        ></div>
      </div> */}
      <Input placeholder='Type messsage' />
      <div className='text-section__icons'>
        <img src={AttachIcon} alt='attach' />
        <img src={SendIcon} alt='send' />
      </div>
    </div>
  );
};

export default CustomTextField;
