import loginImageOne from "./assets/Login Art.png";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      <div className="image-container">
        <img src={loginImageOne} alt="login image" width="816" height="1076" />
      </div>

      <Header />
    </div>
  );
}

export default App;
