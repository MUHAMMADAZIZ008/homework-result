import './App.css'
import Button from "./components/button/button"
import Header from "./components/header/header"
import HeroImg from './assets/hero_img.svg'


function App() {
  return <>
    <Header/>
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content--box">
              <h1 className="hero__title">Bring everyone together to build better products.</h1>
              <p className="hero__text">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
              <Button text={'Get Started'}/>
            </div>
            <div className="hero__img--box">
              <img src={HeroImg} alt="" className="hero__img" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
}

export default App
