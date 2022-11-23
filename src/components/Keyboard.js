export default function Keyboard({ keyboarListener = {} }) {
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "000"];
  const actions = ["cancel", "clear", "enter", ""];

  function digitClick(digit) {
    if ("setAmount" in keyboarListener)
      keyboarListener.setAmount((prev) => Number(prev + digit));
  }

  function actionClick(action) {
    switch (action) {
      case "cancel":
        if ("onCancel" in keyboarListener) keyboarListener.onCancel();
        break;
      case "clear":
        if ("setAmount" in keyboarListener) keyboarListener.setAmount("");
        break;
      case "enter":
        if ("onConfirm" in keyboarListener) keyboarListener.onConfirm();
        break;
      default:
        return false;
    }
  }

  return (
    <div className="keyboard">
      <div className="digits">
        {digits.map((item) => (
          <button
            key={item}
            onClick={
              item
                ? () => {
                    digitClick(item);
                  }
                : () => false
            }
            disabled={item === ""}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="actions">
        {actions.map((item) => (
          <button
            className={item}
            key={item}
            onClick={
              item
                ? () => {
                    actionClick(item);
                  }
                : () => false
            }
            disabled={item === ""}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
