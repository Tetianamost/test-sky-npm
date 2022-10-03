import "./App.css";

import StarSky from "react-star-sky";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarSky
          debugFps={true} // Default = false
          pageBackground={true}
          backgroundColor={[0, 0, 10]}
          frameRate={30} // Default = 60
          style={{ opacity: 0.5 }} // applied to the div wrapper
          className={""} // applied to the div wrapper
          starColor={"white"} // Default = 'white', options: 'rainbow', 'white/red/green/etc'[w3color], [r, g, b]
          skyColor={"blue"} // Default = 'black', options: 'white/red/green/etc'[w3color], [r, g, b]
        />
        "Hi from React!"
      </header>
    </div>
  );
}

export default App;
