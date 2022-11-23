import Layout from "./../components/Layout";

export default function ActionSelector(props) {
  const header = "Choose what you want to do:";

  function depositPage() {
    props.setPage("depositing");
  }

  function withdrawPage() {
    props.setPage("withdrawing");
  }

  return (
    <Layout
      header={header}
      balance={props.balance}
      rightButtons={[
        { text: "Deposit money", action: depositPage },
        { text: "Withdraw money", action: withdrawPage }
      ]}
    />
  );
}
