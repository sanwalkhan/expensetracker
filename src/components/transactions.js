



function Transaction({transaction}) {
  return (
    <li className="plus">
      {transaction.description}
      <span>{transaction.transactionamount}</span>
      <button className="delete-btn">X</button>
    </li>
  );
}

export default Transaction;
 