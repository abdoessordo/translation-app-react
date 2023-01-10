import Match from "../components/Match";
import Weather from "../components/Weather";
import Translate from "../components/Translation";

function App() {
  return (
    <>
      {/* <h1>Home</h1>
      <Match /> */}
      {/* <Translate />  */}
      <br />
      <br />
      <Weather city="Doha" />
      <Weather city="Tangier" />
      <Weather city="Casablanca" />
      <Weather city="Paris" />
      <Weather city="London" />
    </>
  );
}

export default App;
