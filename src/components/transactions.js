

import { useContext } from "react";
import GlobalContext from "../context/globalstate"

function Transaction({transaction}) {

  const {deletetransaction} = useContext(GlobalContext)

  const Sign = transaction.amount < 0 ? "-" : "+";


  return (
    <li className={transaction.amount < 0 ? "minus" : "plus" }>
      {transaction.description}
      <span>{Sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deletetransaction(transaction.id)} className="delete-btn">X</button>
    </li>
  );
}

export default Transaction;
 