import Layout from "./../components/Layout";

export default function ErrorStatement(props) {
  const header = props.statementData.header;
  const description = props.statementData.description;

  function goBack() {
    props.setStatementData("");
    props.setPage("");
  }

  function newAmount() {
    props.setStatementData("");
    props.setPage(props.statementData.page);
  }

  return (
    <Layout
      header={header}
      description={description}
      balance={props.balance}
      leftButtons={[{ text: "No, go back", action: goBack }]}
      rightButtons={[{ text: "Yes, change the amount", action: newAmount }]}
      keyboarListener={{
        onCancel: goBack,
        onConfirm: newAmount
      }}
    />
  );
}
