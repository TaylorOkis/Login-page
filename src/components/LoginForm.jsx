import AppButton from "./AppButton";
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
    </>
  );
}
