import './ChatItemList.scss';
import type { IChatItem } from '../../interface/page';
import ChatItem from '../ChatItem/ChatItem';
import { useState } from 'react';

type ChatIemListProps = {
  chatItems: IChatItem[];
  onChatSelect: (chatId: string, title: string) => void;
};

export default function ChatItemList({
  chatItems,
  onChatSelect,
}: ChatIemListProps) {
  const [selectedIndex, setSelectedIndex] = useState('');

  const handleItemClick = (itemIndex: string, title: string) => {
    setSelectedIndex(itemIndex);
    onChatSelect(itemIndex, title);
  };

  return (
    <section className='chat-list-section'>
      <h2 className='chat-list__header'>All chats</h2>
      <ul className='chat-list'>
        {chatItems.map((item) => (
          <li key={item.id}>
            <ChatItem
              chatItem={item}
              selectedIndex={selectedIndex}
              onItemClick={handleItemClick}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
