import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout/Layout';
import { routes } from '../routes';
import { CocktailDetail, Cocktails, Home } from '../views';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/:cocktailId" element={<CocktailDetail />} />
      </Route>
    </Routes>
  );
};

// - `'/'` - компонент `<Home>`, домашня сторінка з 12 рандомними коктейлями.
// - `'/cocktails'` - компонент `<Cocktails>`, сторінка пошуку коктейлів по інгредієнту.
// - `'/cocktails/:cocktailId'` - компонент `<Country>`, сторінка з детальною
//   інформацією про коктейль
