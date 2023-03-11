import { wrapper } from '../../utils/wrapper';
import { URLS } from '../../constants/urls';

export const getChatList = () => {
  return wrapper('get', `${URLS.BASE}${URLS.LIST}`);
};

export const getMessagesList = (chatId: string) => {
  return wrapper('get', `${URLS.BASE}${URLS.MESSAGES}${chatId}`);
};
