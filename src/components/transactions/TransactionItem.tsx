import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Transaction } from '../../types/transaction';
import { formatAmount } from '../../utils/formatUtils';
import { formatTime } from '../../utils/dateUtils';

interface TransactionItemProps {
  transaction: Transaction;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  return (
    <div className={`p-4 ${transaction.isSalary ? 'bg-emerald-50' : 'bg-white'}`}>
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-3">
          {transaction.type === 'income' ? (
            <ArrowUpRight className="w-5 h-5 text-emerald-500 mt-1" />
          ) : (
            <ArrowDownRight className="w-5 h-5 text-red-500 mt-1" />
          )}
          <div>
            <div className="font-medium">{transaction.fromUser}</div>
            <div className="text-sm text-gray-600">{transaction.toUser}</div>
            <div className="text-xs text-gray-400 mt-1">
              {formatTime(transaction.date)}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className={`font-medium ${
            transaction.type === 'income' ? 'text-emerald-600' : 'text-red-600'
          }`}>
            {transaction.type === 'income' ? '+' : '-'} {formatAmount(transaction.amount)}
          </div>
          {transaction.description && (
            <div className="text-sm text-gray-500 mt-1">
              {transaction.description}
            </div>
          )}
          {transaction.isSalary && (
            <div className="text-xs text-emerald-600 font-medium mt-1">
              ЗП
            </div>
          )}
        </div>
      </div>
    </div>
  );
};