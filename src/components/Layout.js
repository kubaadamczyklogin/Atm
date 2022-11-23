import AccountBalance from "./AccountBalance";
import TextContent from "./TextContent";
import Keyboard from "./Keyboard";
import Buttons from "./Buttons";

export default function ActionSelector(props) {
  return (
    <>
      <div className="atm-screen">
        <AccountBalance balance={props.balance} />
        <TextContent header={props.header} description={props.description} />
        {props.children}
        <Buttons
          leftButtons={props.leftButtons}
          rightButtons={props.rightButtons}
        />
      </div>
      <Keyboard keyboarListener={props.keyboarListener} />
    </>
  );
}
