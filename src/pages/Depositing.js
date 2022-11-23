import Layout from "./../components/Layout";
import AmountInput from "./../components/AmountInput";
import { useState } from "react";
import { currency, depositLimit, depositsDenominations } from "./../settings";

export default function Depositing(props) {
  const [amount, setAmount] = useState("");
  const header = "Enter the amount that you are depositing";

  function denominationsError(amount) {
    if (depositsDenominations === null) {
      return false;
    } else if (depositsDenominations[1] % depositsDenominations[0] === 0) {
      if (amount % depositsDenominations[0] === 0) {
        return false;
      } else {
        return `The smallest denomination to be deposited is: ${depositsDenominations[0]} ${currency}`;
      }
    } else {
      if (
        amount % depositsDenominations[0] === 0 ||
        amount % depositsDenominations[1] === 0 ||
        (amount % depositsDenominations[1]) % depositsDenominations[0] === 0
      ) {
        return false;
      } else {
        return `The smallest denominations to be deposited are: ${depositsDenominations[0]} ${currency} and ${depositsDenominations[1]} ${currency}`;
      }
    }
  }

  function goBack() {
    props.setPage("");
  }

  function confirm() {
    const amountAsNumber = Number(amount);
    const denominationLimitInfo = denominationsError(amountAsNumber);
    if (amountAsNumber < 1) {
      props.setStatementData({
        header: "You have not entered any amount",
        description: "Do you want to correct amount to deposite?",
        page: "depositing"
      });
      props.setPage("error");
    } else if (denominationLimitInfo) {
      props.setStatementData({
        header: denominationLimitInfo,
        description: "Do you want to deposit a different amount?",
        page: "depositing"
      });
      props.setPage("error");
    } else if (depositLimit && amountAsNumber > depositLimit) {
      props.setStatementData({
        header: `The maximum amount you can deposit in this ATM is ${depositLimit} ${currency}`,
        description: "Do you want to deposit a different amount?",
        page: "depositing"
      });
      props.setPage("error");
    } else {
      props.setBalance((prev) => prev + amountAsNumber);
      props.setStatementData({
        description: `You deposited ${amountAsNumber} ${currency} into your account`
      });
      props.setPage("success");
    }
  }

  return (
    <Layout
      header={header}
      balance={props.balance}
      leftButtons={[{ text: "Back", action: goBack }]}
      rightButtons={[{ text: "Confirm", action: confirm }]}
      keyboarListener={{
        onCancel: goBack,
        onConfirm: confirm,
        setAmount: setAmount
      }}
    >
      <AmountInput amount={amount} setAmount={setAmount} />
    </Layout>
  );
}
