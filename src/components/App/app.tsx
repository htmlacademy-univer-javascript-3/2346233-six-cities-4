import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../constants/constants';
import { AuthorizationStatus } from '../constants/constants';

import MainPage from '../pages/mainPage/mainPage';
import FavoritesPage from '../pages/favoritesPages/favoritesPage';
import LoginPage from '../pages/loginPage/loginPage';
import OfferPage from '../pages/offerPage/offerPage';
import NotFoundScreen from '../pages/NotFoundPage';
import PrivateRoute from '../privateRoute/privateRoute';

type AppScreenProps = {
  cardsNumber: number;
};

function App({cardsNumber}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage cardsNumber={cardsNumber}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage/>
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
