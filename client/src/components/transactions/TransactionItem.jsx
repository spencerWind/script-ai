/* eslint-disable react/prop-types */


const TransactionItem = ({transaction}) => {
  return (
      <div className="px-4 border-b">
          <div className="w-full flex flex-row items-center font-light">
              <span className="w-1/3 h-12 flex items-center">{transaction.transactionName}</span>
              <span className="w-1/3 text-center">{transaction.categoryName}</span>
              <span className="w-1/3 text-end">
                  <p><span className="font-medium text-sm pr-0.5">$</span>{transaction.transactionAmount.toFixed(2)}</p>
              </span>
          </div>
      </div>
  );
}

export default TransactionItem