import './ChatItemList.scss';
import type { IChatItem } from '../../interface/page';
import ChatItem from '../ChatItem/ChatItem';
import { useState } from 'react';

export default function ChatItemList({
  chatItems,
}: {
  chatItems: IChatItem[];
}) {
  const [selectedIndex, setSelectedIndex] = useState('');
  const handleItemClick = (itemIndex: string) => {
    setSelectedIndex(itemIndex);
  };

  return (
    <section className='chat-list'>
      <h2 className='chat-list__header'>All chats</h2>
      <ul>
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
