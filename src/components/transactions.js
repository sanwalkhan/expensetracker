



function Transaction({transaction}) {

  const Sign = transaction.amount < 0 ? "-" : "+";


  return (
    <li className="minus">
      {transaction.description}
      <span>{Sign}${transaction.amount}</span>
      <button className="delete-btn">X</button>
    </li>
  );
}

export default Transaction;
 