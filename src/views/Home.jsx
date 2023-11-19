import { CocktailsList } from '../components/CocktailsList';
import { Section } from '../components/Section';
import { Loader } from '../components/Loader';
import { useEffect, useState } from 'react';
import {getTrendingCocktails} from '../api/cocktail-service'

export const Home = () => {
  const [coctails, setCocktails] = useState([]);
  useEffect(() => {
    try {
      const result = getTrendingCocktails();
    } catch (error) {
      
    }
  });
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
