import ActionSelector from "./pages/ActionSelector";
import Depositing from "./pages/Depositing";
import Withdrawing from "./pages/Withdrawing";
import SuccessStatement from "./pages/SuccessStatement";
import ErrorStatement from "./pages/ErrorStatement";

import { useState } from "react";

import "./styles/styles.scss";

export default function App() {
  const [balance, setBalance] = useState(1000);
  const [page, setPage] = useState();
  const [statementData, setStatementData] = useState();

  switch (page) {
    case "depositing":
      return (
        <Depositing
          balance={balance}
          setPage={setPage}
          setBalance={setBalance}
          setStatementData={setStatementData}
        />
      );
    case "withdrawing":
      return (
        <Withdrawing
          balance={balance}
          setPage={setPage}
          setBalance={setBalance}
          setStatementData={setStatementData}
        />
      );
    case "success":
      return (
        <SuccessStatement
          balance={balance}
          setPage={setPage}
          statementData={statementData}
          setStatementData={setStatementData}
        />
      );
    case "error":
      return (
        <ErrorStatement
          balance={balance}
          setPage={setPage}
          statementData={statementData}
          setStatementData={setStatementData}
        />
      );
    default:
      return <ActionSelector balance={balance} setPage={setPage} />;
  }
}
