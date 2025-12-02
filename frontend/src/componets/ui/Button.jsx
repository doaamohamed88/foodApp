import style from "../modals/modal.module.css";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "submit",
  varient,
  disabled = false,
}) {
  const v = varient || variant;
  const className = v === "close" ? style.closeBtn : style.submitBtn;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}
