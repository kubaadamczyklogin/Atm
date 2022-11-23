import { currency } from "./../settings";

export default function AmountInput(props) {
  function changeAmount(event) {
    const amount = event.target.value.replace(/^0+/, "");
    props.setAmount(amount);
  }

  return (
    <label className="amount-input">
      <input
        type="number"
        value={props.amount}
        onChange={changeAmount}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
      <span>{currency}</span>
    </label>
  );
}
