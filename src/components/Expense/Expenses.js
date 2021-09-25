import React from 'react';
import ExptenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {

    return <div className="expenses">
        {props.expenses.map((item, idx) => (    
            <ExptenseItem key={idx} title={item.title} date={item.date} price={item.price} />
        ))}
    </div>
};
        
export default Expenses;

