import { Section } from '../components/Section';
import { Loader } from '../components/Loader';
import { GoBackBtn } from '../components/GoBackBtn';
import { CocktailInfo } from '../components/CocktailInfo';
import { useLocation, useParams } from 'react-router-dom';
import { routes } from '../routes';
import { useEffect, useState } from 'react';
import { getCocktailDetail } from '../api/cocktail-service';

export const CocktailDetail = () => {
  const [info, setInfo] = useState(null);
  const { cocktailId } = useParams();
  useEffect(() => {
    const fetchInfo = async id => {
      const result = await getCocktailDetail(id);
      // console.log('result', result);
      setInfo(result);
    };
    fetchInfo(cocktailId);
  }, [cocktailId]);
  return (
    <Section>
      <CocktailInfo {...info} />
    </Section>
  );
};
