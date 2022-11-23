import Layout from "./../components/Layout";

export default function SuccessStatement(props) {
  const header = "Transaction completed";
  const description = props.statementData.description;

  function goBack() {
    props.setStatementData("");
    props.setPage("");
  }

  return (
    <Layout
      header={header}
      description={description}
      balance={props.balance}
      leftButtons={[{ text: "Back", action: goBack }]}
      keyboarListener={{
        onCancel: goBack,
        onConfirm: goBack
      }}
    />
  );
}
