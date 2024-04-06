import MainPage from '../pages/mainPage/mainPage';

type AppScreenProps = {
  cardsNumber: number;
};

function App({cardsNumber}: AppScreenProps): JSX.Element {
  return (
    <MainPage cardsNumber = {cardsNumber}/>
  );
}

export default App;
