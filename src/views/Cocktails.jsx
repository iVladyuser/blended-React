import { SearchForm } from '../components/SearchForm';
import { Section } from '../components/Section';
import { CocktailsList } from '../components/CocktailsList';
import { Loader } from '../components/Loader';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchByName } from '../api/cocktail-service';

export const Cocktails = () => {
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    const fetchCocktailsByName = async () => {
      try {
        const result = await searchByName(searchQuery);
        console.log(result);
        setCocktails(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCocktailsByName();
    setLoading(false);
  }, [searchQuery]);

  const onSubmitSearchForm = event => {
    event.preventDefault();
    const form = event.target;
    const searchValue = form.elements.search.value
      .trim()
      .toLowerCase()
      .split(' ')
      .join('+');

    if (searchValue === '') {
      setSearchParams({});
      setCocktails([]);
    }
    if (searchValue === searchQuery) {
      return;
    }
    setSearchParams({ query: searchValue });
    setCocktails([]);
  };
  return (
    <>
      <Section>
        <SearchForm
          onSubmitSearchForm={onSubmitSearchForm}
          value={searchQuery}
        />
        {loading && <Loader />}
        {cocktails && <CocktailsList cocktails={cocktails} />}
        <SearchForm />
      </Section>
    </>
  );
};
