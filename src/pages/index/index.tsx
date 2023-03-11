import React, { FC, useEffect, useState } from 'react';
import { getChatList } from '../../api/chat';
import ChatItemList from '../../components/ChatItemList/ChatItemList';
import Messages from '../../components/Messages/Messages';
import { APIChatResponse, IChatItem, IPage } from '../../interface/page';

export const PageIndex: FC = () => {
  const [chatList, setChatList] = useState<IChatItem[]>([]);
  const [title, setTitle] = useState('Chat Header');

  useEffect(() => {
    const getChatItems = async () => {
      const data = (await getChatList()) as APIChatResponse;
      console.log('getChatList ', data.response);
      const chatItems: IChatItem[] = data.response.map((respItem) => ({
        id: respItem.id,
        avatar: respItem.avatar,
        title: respItem.title,
        lastMessage: respItem.last_message.message,
        lastMessageTime: respItem.last_message.created_at,
      }));

      setChatList(chatItems);
    };

    getChatItems();
  }, []);

  return (
    <>
      <ChatItemList chatItems={chatList} />
      <Messages title={title} />
    </>
  );
};
