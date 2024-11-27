import './App.css';
import './index.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Company from './Components/Company';
import { CardSection } from './Components/CardSection';
import { Train } from './Components/Train';
import { SliderSection } from './Components/SliderSection';
import { Improvement } from './Components/Improvment';
import BetaSignUp from './Components/BetaSingUp';
import Footer from './Components/Footer';

export default function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Company/>
      <CardSection/>
      <Train/>
      <SliderSection/>
      <Improvement/>
      <BetaSignUp/>
      <Footer/>
    </main>
  );
}
