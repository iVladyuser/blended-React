import { CocktailsList } from '../components/CocktailsList';
import { Section } from '../components/Section';
import { Loader } from '../components/Loader';
import { useEffect, useState } from 'react';
import { getTrendingCocktails } from '../api/cocktail-service';

export const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const { drinks } = await getTrendingCocktails();
        // console.log(result);
        setCocktails(drinks);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCocktails();
  }, []);
  return (
    <>
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        {cocktails?.length > 0 && <CocktailsList cocktails={cocktails} />}
      </Section>
    </>
  );
};
