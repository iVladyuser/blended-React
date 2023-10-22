import { formatDistanceToNow } from 'date-fns';
export const getFormatDistanceToNowDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
