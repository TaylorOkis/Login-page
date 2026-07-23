import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import loginImageOne from "./assets/Login Art.png";
import "./App.css";

function App() {
  return (
    <div className="wrapper form-width">
      <div className="image-container">
        <img src={loginImageOne} alt="login image" width="816" height="1076" />
      </div>

      <Header />
      <LoginForm />
    </div>
  );
}

export default App;
