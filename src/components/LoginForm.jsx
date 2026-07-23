import AppButton from "./AppButton";
import Divider from "./Divider";
import GoogleLogo from "../assets/Google.svg";
import FacebookLogo from "../assets/Facebook.svg";
import "./LoginForm.css";

export default function LoginForm() {
  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="At least 8 characters"
          required
        />
        <div className="forgot-password">
          <a>Forgot Password</a>
        </div>

        <AppButton
          type="submit"
          text="Sign in"
          textColor="var(--bg)"
          backgroundColor="var(--accent-6)"
          maxWidth="100%"
        />
      </form>

      <Divider />

      <div className="social-buttons">
        <AppButton
          text="Google"
          textColor="var(--secondary-text)"
          backgroundColor="var(--accent-4)"
          maxWidth="100%"
          icon={
            <img src={GoogleLogo} alt="Google Logo" width="28" height="28" />
          }
        />
        <AppButton
          text="Facebook"
          textColor="var(--secondary-text)"
          backgroundColor="var(--accent-4)"
          maxWidth="100%"
          icon={
            <img src={FacebookLogo} alt="Google Logo" width="28" height="28" />
          }
        />
      </div>

      <p className="sign-up">
        Do not have an account? <a>Sign up</a>
      </p>

      <p className="copyright">&copy; 2023 ALL RIGHTS RESERVED</p>
    </>
  );
}
