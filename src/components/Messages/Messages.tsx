import MessagesHeader from '../MessagesHeader/MessagesHeader';
import './Messages.scss';

export default function Messages({ title }: { title: string }) {
  return (
    <section className='messages-section'>
      <MessagesHeader title={title} />
    </section>
  );
}
