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

export interface IChatItemResponce {
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

export interface APIChatResponse {
  response: IChatItemResponce[];
}
