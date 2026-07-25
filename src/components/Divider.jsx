import useBreakpoint from "../hooks/useBreakpoint";
import "./Divider.css";

export default function Divider() {
  const { isDesktop } = useBreakpoint();

  return (
    <div className="divider">
      <hr />
      {isDesktop ? (
        <span className="divider-text">Or</span>
      ) : (
        <span className="divider-text">Or sign in With</span>
      )}
      <hr />
    </div>
  );
}
