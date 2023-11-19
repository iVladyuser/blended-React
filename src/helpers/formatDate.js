import { format } from 'date-fns';

export const formatDate = date => {
  console.log('date', date);
  return format(new Date(date), 'Q MMM yyy');
};
