import { IChatMessage } from '../../interface/page';
import Message from '../Message/Message';
import NewMessagesDevider from '../NewMessagesDevider/NewMessagesDevider';
import './MessagesList.scss';

type MessagesListProps = {
  messages: IChatMessage[];
};

export default function MessagesList({ messages }: MessagesListProps) {
  const oldMessages = messages.filter((m) => !m.is_new);
  const newMessages = messages.filter((m) => m.is_new);
  console.log('newMessages', newMessages);

  return (
    <section className='messages-list-section'>
      <div className='messages-lists-wrapper'>
        {oldMessages && oldMessages.length > 0 && (
          <List messages={oldMessages} />
        )}
        {newMessages && newMessages.length > 0 && <NewMessagesDevider />}
        {newMessages && newMessages.length > 0 && (
          <List messages={newMessages} />
        )}
      </div>
    </section>
  );
}

function List({ messages }: MessagesListProps) {
  let lastId = '';
  const preparedMessages = messages.map((message) => {
    if (message.user.id === lastId) {
      message.subsequent = true;
    }
    lastId = message.user.id;
    return message;
  });

  console.log(preparedMessages);

  return (
    <ul className='messages-list'>
      {preparedMessages.map((message) => (
        <li className='messages-list__item' key={message.id}>
          <Message chatMessage={message} />
        </li>
      ))}
    </ul>
  );
}
