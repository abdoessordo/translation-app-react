import Match from "../components/Match";
import Weather from "../components/Weather";
import Translate from "../components/Translation";
import { getRandomMatches } from "../api/matchesAPI";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getRandomMatches().then((matches) => {
      setMatches(matches);
    });
  }, []);

  return (
    <>
      {matches.length > 0 &&
        matches.map((match) => {
          return <Match match={match} />;
        })}
      <Translate />
      <br />
      <br />
      <Weather city="Doha" />
    </>
  );
}

export default App;
