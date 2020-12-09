import logo from './logo.svg';
import './Main.scss';
import Header from "./Components/Header/Header"
import Slider from "./Components/Slider/Index"
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
    </div>
  );
}

export default App;
