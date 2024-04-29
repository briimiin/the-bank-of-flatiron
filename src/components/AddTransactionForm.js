import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTransactionForm = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, description, category, amount });
    // Clear form fields
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className='transaction-form'>
      <div className='input'>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Date"
          className="form-input date-input"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input description-input"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-input"
        />
      </div>
      <button type="submit" className='submit-button'>Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
