export interface IPage {
  title?: string;
}

export interface IChatItem {
  id: string;
  avatar: string;
  title: string;
  lastMessage: string;
  lastMessageTime: number;
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

export interface IChatMessageResponse {
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
}

export interface APIChatResponse {
  response: IChatItemResponse[];
}
