import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const arrIcons =[<FaRegThumbsUp/>,<MdPeople/>,<GiTreeDoor/>,<MdOutlineProductionQuantityLimits/>]
export const Statistics = ({ title, stats }) => {
  return (
    <>
      <div>
        {title && <StatisticTitle>{title}</StatisticTitle>}

        <StatisticsList>
          {stats.map(({ title, total, id },index) => (
            <StatisticItem
              key={id}
              title={title}
              total={total}
              icon={arrIcons[index]}
            />
          ))}
        </StatisticsList>
      </div>
    </>
  );
};
