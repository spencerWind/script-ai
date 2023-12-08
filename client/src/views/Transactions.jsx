import Header from "../components/script-ui/Header";
import { useTransactionContext } from "../hooks/useTransactionContext";
import TransactionItem from "../components/transactions/TransactionItem";
import CreateTransactionForm from "../components/transactions/CreateTransactionForm";

const Transactions = () => {
    const { transactions } = useTransactionContext();

    return (
        <div className="h-full lg:flex gap-16">
            <div className="lg:w-2/3 glass-card p-4 mb-16">
                <Header styles={"p-2"}>All Transactions</Header>
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
            <div className="lg:w-1/3">
                <div className=" h-max glass-card p-4 mb-16">
                    <Header styles={"p-2 border-b"}>Add Transaction</Header>
                    <CreateTransactionForm />
                </div>
                <div className="glass-card p-4">
                    <Header styles={"p-2 border-b mb-4"}>Actions</Header>
                    <button
                        onClick={() => {
                            document
                                .getElementById("clearTransactionsModal")
                                .classList.remove("hidden");
                        }}
                        className="h-8 px-2 rounded bg-purple-900 text-slate-50 text-sm">
                        Clear Transactions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
