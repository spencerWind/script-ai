import Header from "../components/script-ui/Header";
import { useTransactionContext } from "../hooks/useTransactionContext";
import TransactionItem from "../components/transactions/TransactionItem";
import CreateTransactionForm from "../components/transactions/CreateTransactionForm";

const Transactions = () => {
    const { transactions } = useTransactionContext();

    return (
        <div className="lg:flex gap-16">
            <div className="lg:w-2/3 h-max glass-card p-4 mb-16 pb-32">
                <Header styles={"pb-4 mb-4 border-b border-purple-500"}>
                    All Transactions
                </Header>
                {transactions && transactions.length > 0 ? (
                    <div>
                        <div className="border-b flex px-4 text-sm font-medium">
                            <span className="w-1/3">Name</span>
                            <span className="w-1/3 text-center">Category</span>
                            <span className="w-1/3 text-end">Amount</span>
                        </div>
                        <div>
                            {transactions &&
                                transactions.map((transaction, index) => (
                                    <TransactionItem
                                        key={`${transaction._id}-${index}`}
                                        transaction={transaction}
                                    />
                                ))}
                        </div>
                    </div>
                ) : (
                    <div className="h-16 flex items-center justify-center text-lg">
                        No transactions yet...
                    </div>
                )}
            </div>
            <div className="max-w-[512px]">
                <div className=" h-max glass-card p-4 mb-16">
                    <Header styles={"pb-4 border-b border-violet-500"}>
                        Add Transaction
                    </Header>
                    <CreateTransactionForm />
                </div>
                {transactions && transactions.length > 0 && (
                    <div className="glass-card p-4">
                        <Header styles={"pb-4 border-b border-violet-500 mb-8"}>
                            Actions
                        </Header>
                        <button
                            onClick={() => {
                                document
                                    .getElementById("clearTransactionsModal")
                                    .classList.remove("hidden");
                            }}
                            className="h-10 mb-8 w-48 rounded bg-slate-900 dark:bg-slate-100 font-medium text-slate-50 dark:text-slate-950">
                            Clear Transactions
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Transactions;
