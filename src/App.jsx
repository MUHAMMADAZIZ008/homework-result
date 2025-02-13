import './App.css'
import Button from "./components/button/button"
import Header from "./components/header/header"
import HeroImg from './assets/hero_img.svg'
import ManageCard from './components/manage_card/manage_card'
import SaidCard from './components/said_card/said_card'


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
      <section className='manage'>
        <div className="container">
          <div className="manage__inner">
            <div className="manage__content--box">
              <h2 className="manage__title">What’s different about Manage?</h2>
              <p className="manage__text">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
            </div>
            <div className="manage__card--box">
              <ManageCard btnNumber={1}/>
              <ManageCard btnNumber={2}/>
              <ManageCard btnNumber={3}/>
            </div>
          </div>
        </div>
      </section>
      <section className='said'>
        <div className="container">
          <h2 className="said__title">What they’ve said</h2>
          <div className="said__inner">
            <SaidCard/>
            <SaidCard/>
          </div>
          <div className="said__btn--box">
            <Button text={'Get Started'}/>
          </div>
        </div>
      </section>
      <section className='simplify'>
        <div className="container">
          <div className="simplify__inner">
            <h2 className="simplify__title">Simplify how your team works today.</h2>
            <button className='simplify__btn'>Get Started</button>
          </div>
        </div>
      </section>
    </main>
  </>
}

export default App
