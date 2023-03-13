import './MessagesHeader.scss';
import MessageIcon from '../../assets/icon-message.svg';

export default function MessagesHeader({ title }: { title: string }) {
  return (
    <header className='message-header'>
      <img src={MessageIcon} alt='message' /> <span>{title}</span>
    </header>
  );
}
