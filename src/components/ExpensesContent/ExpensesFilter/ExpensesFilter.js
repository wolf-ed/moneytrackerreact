import React from 'react';
import './ExpensesFilter.css';


//parent Component of ExpensesFilter: Expenses.js 
const ExpensesFilter = (props) => {
    const onChangeSendYear = event => {
        props.onChangeSetSelectedYear(event.target.value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <p>Selected year: {props.selectedYear}</p>
        <select value={props.selectedYear} onChange={onChangeSendYear}>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;