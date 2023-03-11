import './Time.scss';

export default function Time({ timestamp }: { timestamp: number }) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (
    <div className='time'>
      {hours}:{minutes}
    </div>
  );
}
