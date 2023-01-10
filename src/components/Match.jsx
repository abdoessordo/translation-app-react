import { useEffect } from "react";
import { useState } from "react";
import { getFifaCode } from "../api/fifaCodeAPI";
import { capitalizeWords } from "./Weather";
import clock from "../assets/clock.svg";
import stadium from "../assets/stadium.svg";

export default function Match({ match }) {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (match) {
      getFifaCode(match.home_team_en).then((code) => {
        setHomeTeam(code);
      });

      getFifaCode(match.away_team_en).then((code) => {
        setAwayTeam(code);
      });

      const setDateTime = (dateTime) => {
        const [date, time] = dateTime.split(" ");
        setTime(time);
        formatDate(date);
      };

      const formatDate = (date) => {
        let newdate = new Date(date);
        const options = {
          day: "numeric",
          month: "long",
        };
        const formatter = new Intl.DateTimeFormat("us-US", options);
        const formatedDate = formatter.format(newdate);

        setDate(capitalizeWords(formatedDate));
      };
      setDateTime(match.local_date);
    }
  }, [match]);

  const formatMatch = (match) => {
    console.log(match);
    // if (match in ["A", "B", "C", "D", "E", "F", "G", "H"]) {
    if (["A", "B", "C", "D", "E", "F", "G", "H"].includes(match)) {
      console.log("yes");
      return `Group ${match}`;
    }
    if (match === "R16") {
      return "Round of 16";
    }
    if (match === "QR") {
      return "Quarter-Final";
    }
    if (match === "semi") {
      return "Semi-Final";
    }
    if (match === "3RD") {
      return "Third Place";
    }
    if (match === "FIN") {
      return "Final";
    }
    return match;
  };

  return (
    <>
      {match && (
        <div key={match.id} className="match">
          {/* Date */}
          <div className="match-date">
            <h1>{date}</h1>
          </div>

          {/* Body */}
          <div className="match-body">
            {/* Teams & Scores */}
            <div className="score">
              {/* Home team */}
              <div className="team">
                {/* crest */}
                <div className="crest-container">
                  <img src={match.home_flag} alt="home team crest" />
                </div>

                {/* name & score */}
                <h1>
                  {homeTeam} - <span className="score">{match.home_score}</span>
                </h1>
              </div>

              {/* VS */}
              <div className="vs">
                <h2>V</h2>
              </div>

              {/* Away team */}
              <div className="team">
                {/* crest */}
                <div className="crest-container">
                  <img src={match.away_flag} alt="away team crest" />
                </div>
                {/* name & score */}
                <h1>
                  {awayTeam} - <span className="score">{match.away_score}</span>
                </h1>
              </div>
            </div>

            <div className="vertical-sep">&nbsp;</div>

            <div className="description">
              {/* Match type */}
              <h2 className="match-type">{formatMatch(match.group)}</h2>

              {/* Time */}
              <div className="match-time">
                {/* match type */}

                {/* icon */}
                <img className="clock" src={clock} alt="clock" />

                {/* time */}
                <h1>{time}</h1>
              </div>
            </div>
          </div>

          {/* Stadium */}
          <div className="match-stadium">
            {/* icon */}
            <img src={stadium} alt="stadium" />
            <h1>{match.stadium}</h1>
          </div>
        </div>
      )}
    </>
  );
}
