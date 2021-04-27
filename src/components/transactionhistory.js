

function TransactionHistory(){
    return(
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus"> 
                    1st Income
                    <span>10,000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                1st Expense
                    <span>-$5,000</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
        
    )
}

export default TransactionHistory;