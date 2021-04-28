



function Transaction({transaction}) {

  const Sign = transaction.amount < 0 ? "-" : "+";


  return (
    <li className={transaction.amount < 0 ? "minus" : "plus" }>
      {transaction.description}
      <span>{Sign}${Math.abs(transaction.amount)}</span>
      <button className="delete-btn">X</button>
    </li>
  );
}

export default Transaction;
 