import { currency } from "./../settings";

export default function AccountBalance({ balance }) {
  return (
    <div className="account-balance">
      <h2>Your account balance:</h2>
      <p>{balance + " " + currency}</p>
    </div>
  );
}
