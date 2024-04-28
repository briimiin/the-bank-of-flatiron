import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import AddTransactionForm from './AddTransactionForm';
import SearchBar from './SearchBar';
import { transactions as initialTransactions } from '../Data';
//app
const App = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle adding a new transaction
  const addTransaction = (newTransaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    console.log("Updated Transactions:", updatedTransactions);
    setTransactions(updatedTransactions);
  };
  
  // Function to handle searching/filtering transactions
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1 className="header">The Royal Bank of Flatiron</h1>
      <SearchBar onSearch={handleSearch} />
      <AddTransactionForm onSubmit={addTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
