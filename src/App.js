import "./App.css";
import Balance from "./components/Balance/Balance";
import Header from "./components/Header/Header";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
import TransactionHistory from "./components/Transaction History/TransactionHistory";
import AddNewTransaction from "./components/Add New Transaction/AddNewTransaction";
import { GlobalProvider } from "./context/GolobalState";

function App() {
  return (
    <>
    <GlobalProvider>
      <Header />
      <div>
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <AddNewTransaction />
      </div>
      </GlobalProvider>
   
    </>
  );
}

export default App;
