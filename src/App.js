import "./App.css";

function App() {
  let currentDate = new Date();
  let curHour = currentDate.getHours();
  let curMin = currentDate.getMinutes();
  let curSec = currentDate.getSeconds();
  let exactTime = `${curHour}:${curMin}:${curSec}`; //displaying the current time
  let greeting; //creating an empty varible to change its value dynamically
  let cssStyleForGreet = {}; //creating an empty object
  let cssStyleForPage = {};

  if (exactTime >= `1` && exactTime < `12`) {
    greeting = `Good Morning`;
    cssStyleForGreet.color = `green`;
  } else if (exactTime >= `12` && exactTime < `16`) {
    greeting = `Good AfterNoon`;
    cssStyleForGreet.color = `orange`;
  } else if (exactTime >= `16` && exactTime < `19`) {
    greeting = `Good Evening`;
    cssStyleForGreet.color = `yellow`;
  } else {
    greeting = `Good Night`;
    cssStyleForGreet.color = `black`;
  }

  return (
    <div className="container" style={cssStyleForPage}>
      <h1 className="Greeting">
        Hello!Sir <span style={cssStyleForGreet}> {greeting} </span>{" "}
      </h1>{" "}
    </div>
  );
}

export default App;
