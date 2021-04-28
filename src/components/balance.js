import React, { useContext } from "react";
import {GlobalContext} from "../context/globalstate"


function Balance() {

  const { transactions } = useContext(GlobalContext)

  const transactionamount = transactions.map(transaction => transaction.transactionamount);

  const total = transactionamount.reduce((acc , item) => (acc+=item) , 0 ).toFixed(2)

  return (
    <div>
      <h4>Current Balance</h4>
      <h1>${total}</h1>
    </div>
  );
}

export default Balance