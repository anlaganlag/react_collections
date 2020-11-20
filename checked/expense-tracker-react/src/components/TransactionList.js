import React from 'react';
import { Transaction } from './Transaction';

import { useCTX } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useCTX();
  console.log(transactions);

  return (
    <>
      <h3>收支情況</h3>
      <ul className="list">
        {transactions.map(transaction => 
            <Transaction key={transaction.id} transaction={transaction} />
        )}
      </ul>
    </>
  )
}
