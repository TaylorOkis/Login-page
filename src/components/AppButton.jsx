export default function AppButton({
  text,
  textColor,
  backgroundColor,
  maxWidth,
  type = "button",
  icon,
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
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <button type={type} style={buttonStyle}>
        {icon}
        {text}
      </button>
    </>
  );
}
