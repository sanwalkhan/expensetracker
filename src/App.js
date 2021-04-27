
import './App.css';
import Header from "./components/header";
import Balance from "./components/balance"
import AccountSummary from "./components/accountsummary"
import TransactionHistory from "./components/transactionhistory";
import AddTransaction from "./components/addtransactions"

function App() {
  return (
    <div >
      {/* Headerr */}
      <Header />

      {/* Balance */}
      <div className="container">
        <Balance />
        {/* Account Summary */}
        <AccountSummary />
        {/* Transaction History */}

        <TransactionHistory />

        {/* Add Transactions */}

        <AddTransaction />
      </div>

      
    </div>
  );
}

export default App;
