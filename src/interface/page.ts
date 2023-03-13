export interface IPage {
  title?: string;
}

export interface IChatItemResponse {
  id: string;
  avatar: string;
  title: string;
  last_message: {
    created_at: number;
    message: string;
    user_name: string;
    user_surname: string;
  };
}

export interface IChatItem {
  id: string;
  avatar: string;
  title: string;
  lastMessage: string;
  lastMessageTime: number;
}

export interface IChatMessage {
  id: string;
  created_at: number;
  user: {
    id: string;
    name: string;
    surname: string;
    avatar: string;
    you: true;
  };
  message: string;
  is_new: true;
  subsequent?: boolean;
}

export interface APIChatsResponse {
  response: IChatItemResponse[];
}

export interface APIMessagesResponse {
  response: IChatMessage[];
}
