import React from 'react';
import './ExpenseDate.css'

const ExpenseDate = (props) => {

    const date = props.date;
    const monthName = date.toLocaleString("en", { month: "long"  });

    return <div className="expense-date">
        <div className="expense-date__month">{monthName}</div>
        <div className="expense-date__year">{date.getFullYear()}</div>
        <div className="expense-date__day">{date.getDate()}</div>        
    </div>
}

export default ExpenseDate;