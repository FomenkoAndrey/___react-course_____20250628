const Button = ({ text, type = 'button', disabled, num }) => {
  return (
      <div>
        {/*{disabled ? <h2>Disabled button</h2> : <h2>{`Button ${num} enabled`}</h2>}*/}
        <h2>{disabled ? 'Disabled button' : `Button ${num} enabled`}</h2>
        <button type={type} disabled={disabled}>{text}</button>
        <hr/>
      </div>
  )
}

export default Button
