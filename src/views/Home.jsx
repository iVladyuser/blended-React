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
        const result = await getTrendingCocktails();
        // console.log(result);
        setCocktails(result);
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

        <CocktailsList cocktails={cocktails} />
      </Section>
    </>
  );
};
