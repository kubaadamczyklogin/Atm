import Layout from "./../components/Layout";
import AmountInput from "./../components/AmountInput";
import { useState } from "react";
import {
  currency,
  withdrawLimit,
  withdrawalsDenominations
} from "./../settings";

export default function Depositing(props) {
  const [amount, setAmount] = useState("");
  const header = "How much do you wont to withdraw?";

  function denominationsError(amount) {
    if (withdrawalsDenominations === null) {
    } else if (
      withdrawalsDenominations[1] % withdrawalsDenominations[0] ===
      0
    ) {
      if (amount % withdrawalsDenominations[0] === 0) {
        return false;
      } else {
        return `The entered amount must be payable in denomination: ${withdrawalsDenominations[0]} ${currency}`;
      }
    } else {
      if (
        amount % withdrawalsDenominations[0] === 0 ||
        amount % withdrawalsDenominations[1] === 0 ||
        (amount % withdrawalsDenominations[1]) % withdrawalsDenominations[0] ===
          0
      ) {
        return false;
      } else {
        return `The entered amount must be payable in denomination:  ${withdrawalsDenominations[0]} ${currency} and ${withdrawalsDenominations[1]} ${currency}`;
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
        description: "Do you want to correct amount to withdraw?",
        page: "withdrawing"
      });
      props.setPage("error");
    } else if (amountAsNumber > props.balance) {
      props.setStatementData({
        header: `You do not have enought money in your account`,
        description: "Do you want to withdraw a different amount?",
        page: "withdrawing"
      });
      props.setPage("error");
    } else if (denominationLimitInfo) {
      props.setStatementData({
        header: denominationLimitInfo,
        description: "Do you want to withdraw a different amount?",
        page: "withdrawing"
      });
      props.setPage("error");
    } else if (withdrawLimit && amountAsNumber > withdrawLimit) {
      props.setStatementData({
        header: `The maximum amount you can withdraw in this ATM is ${withdrawLimit} ${currency}`,
        description: "Do you want to withdraw a different amount?",
        page: "withdrawing"
      });
      props.setPage("error");
    } else {
      props.setBalance((prev) => prev - amountAsNumber);
      props.setStatementData({
        description: `You have withdrawn ${amountAsNumber} ${currency} from your account`
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
