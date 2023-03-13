import React, { FC, useEffect, useState } from 'react';
import { getChatList, getMessagesList } from '../../api/chat';
import ChatItemList from '../../components/ChatItemList/ChatItemList';
import MessagesSection from '../../components/MessagesSection/MessagesSection';
import {
  APIChatsResponse,
  APIMessagesResponse,
  IChatItem,
  IChatMessage,
  IPage,
} from '../../interface/page';

export const PageIndex: FC = () => {
  const [chatList, setChatList] = useState<IChatItem[]>([]);
  const [title, setTitle] = useState('Chat Header');
  const [selectedChatMessages, setSelectedChatMessages] = useState<
    IChatMessage[]
  >([]);

  useEffect(() => {
    const getChatItems = async () => {
      const data = (await getChatList()) as APIChatsResponse;
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

  const hadleSelectChat = async (chatId: string, chatTitle: string) => {
    console.log('hadleSelectChat ', chatId);
    const messages = (await getMessagesList(chatId)) as APIMessagesResponse;
    console.log(messages.response);

    setTitle(chatTitle);
    setSelectedChatMessages(messages.response);
  };

  return (
    <>
      <ChatItemList chatItems={chatList} onChatSelect={hadleSelectChat} />
      <MessagesSection chatTitle={title} messages={selectedChatMessages} />
    </>
  );
};
