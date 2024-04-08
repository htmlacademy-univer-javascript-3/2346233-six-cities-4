import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../constants/constants';
import { Offer } from '../../types/offer';

import MainPage from '../pages/mainPage/mainPage';
import FavoritesPage from '../pages/favoritesPages/favoritesPage';
import LoginPage from '../pages/loginPage/loginPage';
import OfferPage from '../pages/offerPage/offerPage';
import NotFoundScreen from '../pages/NotFoundPage';
import PrivateRoute from '../privateRoute/privateRoute';

type AppScreenProps = {
  cardsNumber: number;
  offers: Offer[];
};

function App({cardsNumber, offers}: AppScreenProps): JSX.Element {
  const favorites = offers.filter((o) => o.isFavorite);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage cardsNumber={cardsNumber} offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage favorites={favorites}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
