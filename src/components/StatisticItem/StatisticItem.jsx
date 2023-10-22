import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import { IconContext } from 'react-icons';

export const StatisticItem = ({ total, title, icon }) => {
  return (
    <div>
      <StatisticBox>
        <IconContext.Provider
          value={{ size: "2em", color:"grey"}}
        >
          {icon}
        </IconContext.Provider>
        <StatisticCounter>{total}</StatisticCounter>
        <StatisticText>{title}</StatisticText>
      </StatisticBox>
    </div>
  );
};
