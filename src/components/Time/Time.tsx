import './Time.scss';
import MessageReadIcon from '../../assets/read-message.svg';

export default function Time({
  timestamp,
  read,
}: {
  timestamp: number;
  read?: boolean;
}) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (
    <span className='time'>
      {hours < 10 ? '0' + hours : hours}:
      {minutes < 10 ? '0' + minutes : minutes}
      <span className='read-icon'>
        {read && <img src={MessageReadIcon} alt='message read'></img>}
      </span>
    </span>
  );
}
