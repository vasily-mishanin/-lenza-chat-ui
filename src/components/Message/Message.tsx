import { IChatMessage } from '../../interface/page';
import { Avatar } from '../Avatar';
import Time from '../Time/Time';
import './Message.scss';

type MessageProps = {
  chatMessage: IChatMessage;
};

export default function Message({ chatMessage }: MessageProps) {
  const { avatar, name, surname, you } = chatMessage.user;
  const { message, created_at } = chatMessage;

  const messageClass = you ? 'message align-right' : 'message';
  const messageContantClass = you
    ? 'message__content__message my-message'
    : 'message__content__message';

  return (
    <article className={messageClass}>
      {!you && <Avatar src={avatar} size='sm' />}
      <div className='message__content'>
        {!you && (
          <p className='message__content__name'>
            {name} {surname}
          </p>
        )}
        <div className={messageContantClass}>
          <p>{message} </p>
          <p className='time-wrapper'>
            <Time timestamp={created_at} read={you} />
          </p>
        </div>
      </div>
    </article>
  );
}
