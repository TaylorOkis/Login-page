import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import loginImageOne from "./assets/Login Art.png";
import "./App.css";
import ImageSwitcher from "./components/ImageSwitcher";

function App() {
  return (
    <div className="wrapper">
      <div className="form">
        <div className="image-container">
          <ImageSwitcher />
        </div>

        <main>
          <Header />
          <LoginForm />
        </main>
      </div>
    </div>
  );
}

export default App;
