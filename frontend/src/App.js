
import './App.scss';
import About from './components/About';
import Header from './components/Header';
import Section from './components/Section';
import Basic from './components/Basic'


function App() {
  let component 
  switch (window.location.pathname) {
      case "/":
        component = <Section />
        break
      case "/about":
        component = <About />
        break
      case "/basic":
        component = <Basic />
        break
      default:
        component = <Section />
  }
  return (
    <>
        <Header />
        <div className="container">{component}</div>
    </>
  );
}

export default App;
