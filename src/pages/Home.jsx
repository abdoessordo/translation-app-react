import { getWeather } from "../api/wether";
function App() {
  getWeather().then((res) => {
    console.log(res);
  });

  return <div>RAWAJ</div>;
}

export default App;
