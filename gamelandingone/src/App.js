import Header from './components/Header/Header.jsx';
import Promo from './components/Promo/Promo.jsx';
import Slider from './components/Slider/Slider.jsx';
import PSpart from './components/PSpart/PSpart.jsx';
import Anounce from './components/Anounce/Anounce.jsx';
import './styles/App.css';
import './styles/reset.css';
import './fonts/fonts.css';

function App() {
  return (
    <>
      <Header />
      <Promo />
      <Slider />
      <PSpart />
      <Anounce />
    </>
  );
}

export default App;
