import './App.css'
import logo from './/assets/carnival.png'
import './time'

function App() {
  const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

let secValue = 11,
  minValue = 2,
  hourValue = 2,
  dayValue = 15;

const timeFunction = setInterval(() => {
  secValue--;

  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0) {
    dayValue--;
    hourValue = 24;
  }

  if (dayValue === 0) {
    clearInterval(timeFunction);
  }
  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); //1000ms = 1s
  return (
    <>
       <section className="container">
      <img src={logo} alt="" className="logo" />
      <header>Career Carnival 2024</header>
      <p>
        Our website is under construction. We're working hard to improve our
        website and we'll ready to launch after.
      </p>
      {/* <div className="time-content">
        <div className="time days">
          <span className="number"></span>
          <span className="text">days</span>
        </div>
        <div className="time hours">
          <span className="number"></span>
          <span className="text">hours</span>
        </div>
        <div className="time minutes">
          <span className="number"></span>
          <span className="text">minutes</span>
        </div>
        <div className="time seconds">
          <span className="number"></span>
          <span className="text">seconds</span>
        </div>
      </div> */}

      <div className="email-content">
        <p>Subscribe now to get the latest updates!</p>

        <div className="input-box">
          <input type="email" placeholder="Enter your email" />
          <button>Notify Me</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
