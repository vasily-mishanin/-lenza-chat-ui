import { useState } from 'react';
import { IChatItem } from '../../interface/page';
import { getCuttedString } from '../../utils/helpers';
import { Avatar } from '../Avatar';
import Time from '../Time/Time';
import './ChatItem.scss';

type ChatItemProps = {
  chatItem: IChatItem;
  onItemClick: (id: string) => void;
  selectedIndex: string;
};

export default function ChatItem({
  chatItem,
  selectedIndex,
  onItemClick,
}: ChatItemProps) {
  const { avatar, title, lastMessage, lastMessageTime, id: itemId } = chatItem;
  const handleSelect = () => {
    onItemClick(itemId);
  };

  const ItemClass =
    itemId === selectedIndex ? 'chat-item selected' : 'chat-item';

  return (
    <article className={ItemClass} onClick={handleSelect}>
      <Avatar src={avatar} size='md' />
      <div className='chat-item__content'>
        <header className='chat-item__header'>
          <p className='chat-item__header-title'>
            {getCuttedString(title, 27)}
          </p>
          <Time timestamp={lastMessageTime} />
        </header>
        <p className='chat-item__message'>{getCuttedString(lastMessage, 65)}</p>
      </div>
    </article>
  );
}
