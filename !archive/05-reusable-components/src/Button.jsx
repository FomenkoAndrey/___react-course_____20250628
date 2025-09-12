const Button = ({text, type, disabled, number}) => {
  return (
    <div>
      <h2>Button {number} {disabled ? "disabled" : "enabled"}</h2>
      <button type={type} disabled={disabled}>{text}</button>
    </div>
  );
};

export default Button;
