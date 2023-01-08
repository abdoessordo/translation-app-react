import { useEffect } from "react";
import { useState } from "react";
import { getRandomMatches } from "../api/matches";

export default function Match({ match }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getRandomMatches().then((matches) => setMatches(matches));
  }, []);

  const makeMatchBox = (match) => {
    return (
      <div key={match.id}>
        <img src={match.home_flag} alt="home team crest" />
        <h1>{match.home_team_en}</h1>
        <h2>{match.away_team_en}</h2>
        <img src={match.away_flag} alt="away team crest" />
      </div>
    );
  };

  return (
    <div>
      <h1>Match</h1>
      {matches.map((match) => makeMatchBox(match))}
    </div>
  );
}
