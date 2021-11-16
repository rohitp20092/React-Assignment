import "./App.css";
import "./assests/css/page.css";
import { data } from "./dummyData";
import league from "./assests/images/national.png";
import perth from "./assests/images/perth.png";
import sharks from "./assests/images/sharks.png";
import logo2 from "./assests/images/logo2.svg";

function App() {
  return (
    <div className="App">
      <div className="container page-container d-flex align-items-center">
        <div className="w-100">
          <div className="overlay-page w-100 position-relative">
            <div className="page-league-box">
              <img className="league-img" alt="league" src={league} />
            </div>
            <div className="page-league-right position-absolute">
              <div>
                <p className="page-title px-4 py-2 text-center">
                  National Basketball Association
                </p>
              </div>
              <div className="league-score-box p-2">
                <div className="team-box py-2">
                  <img className="team-img" alt="league" src={perth} />
                  <span className="name-span-text">{data.home_team.name}</span>
                </div>
                <span className="mx-3 text-white font-weight-bold score-font">
                  {data.home_team.score}&nbsp;&nbsp;/&nbsp;&nbsp;
                  {data.away_team.score}
                </span>
                <div className="team-box py-2">
                  <img className="team-img" alt="league" src={sharks} />
                  <span className="name-span-text">{data.home_team.name}</span>
                </div>
              </div>
              <div className="league-score-box-second py-2 px-3 text-uppercase text-white w-auto border mt-3 font-weight-bold">
                Second quarter 14:37
              </div>
            </div>
          </div>
          <div className="mt-3 location">
            <span className="text-uppercase bg-black px-3 py-2 text-white">
              <img src={logo2} alt="league" width="20px" /> United center
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
