import { IChatMessage } from '../../interface/page';
import MessageInput from '../MessageInput/MessageInput';
import MessagesHeader from '../MessagesHeader/MessagesHeader';
import MessagesList from '../MessagesList/MessagesList';
import './MessagesSection.scss';

type MessagesProps = {
  chatTitle: string;
  messages: IChatMessage[];
};

export default function MessagesSection({
  chatTitle,
  messages,
}: MessagesProps) {
  return (
    <section className='messages-section'>
      <MessagesHeader title={chatTitle} />
      <MessagesList messages={messages} />
      <MessageInput placeholder=' Type messsage' />
    </section>
  );
}
