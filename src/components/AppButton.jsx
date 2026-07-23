export default function AppButton({
  text,
  textColor,
  backgroundColor,
  maxWidth,
  type,
}) {
  const buttonStyle = {
    color: textColor,
    backgroundColor: backgroundColor,
    width: "100%",
    maxWidth: maxWidth,
    paddingBlock: "14px",
    borderRadius: "12px",
    fontFamily: "var(--roboto)",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <>
      <button type={type} style={buttonStyle}>
        {text}
      </button>
    </>
  );
}
