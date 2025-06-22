import { Input } from "@/components/ui/input";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "@/reactcomponents/Data";
const API_BASE_URL = import.meta.env.VITE_API_URL;
const Dashboard = () => {
  const n = useNavigate();
  const [balance, setBalance] = useState();
  const [filter, setFilter] = useState("");
  const [transactions, setTransactions] = useState([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        const headers = { authorization: "Bearer " + token };

        const balanceRes = await axios.get(`${API_BASE_URL}/account/balance`, { headers });

        if (balanceRes.data.message === "can not get balance") {
          alert("login first");
          n("/auth");
          return;
        }
          const bal= Math.floor(balanceRes.data.balance * 10000) / 10000
        setBalance(bal);

        try {
          const transactionsRes = await axios.get(`${API_BASE_URL}/account/transactions`, { headers });
          const tnx = transactionsRes.data.transactions?.txns || [];
          setTransactions(tnx);
        } catch (e) {
          console.error("Error fetching transactions:", e);
          setTransactions([]);
        }
      } catch (e) {
        console.error("Error fetching balance:", e);
        alert("login first");
        n("/");
      }
    }

    fetchData();
  }, []);

  const setter = (e) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFilter(e.target.value);
    }, 500);
  };

  const userId = localStorage.getItem("userId");

  return (
    <div className="min-h-screen px-4 md:px-6 py-10 bg-gradient-to-br from-white to-indigo-50 text-black">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Balance Card */}
        <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-md flex-col sm:flex-row gap-4 sm:gap-0">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-700">Account Balance</h2>
          <span className="text-xl sm:text-2xl font-bold text-gray-800">₹ {balance ?? "..."}</span>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search User Section */}
          <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-lg sm:text-xl font-bold text-indigo-700 mb-4 underline underline-offset-4">
              Search for a User
            </h2>
            <Input
              name="filter"
              placeholder="Search for name"
              onChange={setter}
              className="mb-4"
            />
            <div className="text-black">
              <Data filter={filter} />
            </div>
          </div>

          {/* Transaction History Section */}
          <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-lg sm:text-xl font-bold text-indigo-700 mb-4 underline underline-offset-4 text-center">
              Transaction History
            </h2>

            {transactions.length === 0 ? (
              <p className="text-center text-gray-600">No transactions found</p>
            ) : (
              <>
                {/* Mobile View */}
                <div className="space-y-4 md:hidden">
                  {transactions.map((txn, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-indigo-50 text-sm">
                      <p>
                        <span className="font-medium">
                          {txn.sender?.toString() === userId ? "Sent to" : "Received from"}
                        </span>
                        : {txn.sender?.toString() === userId ? txn.name : txn.sender}
                      </p>
                      <p>Amount: ₹ {txn.amount}</p>
                      <p>Status: {txn.status}</p>
                      <p>Date: {new Date(txn.timestamp).toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-indigo-100 text-indigo-700">
                      <tr>
                        <th className="py-2 px-4">To/From</th>
                        <th className="py-2 px-4">Amount</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((txn, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2 px-4">
                            {txn.sender?.toString() === userId ? (
                              <span className="text-red-600">Sent to: {txn.name}</span>
                            ) : (
                              <span className="text-green-600">Received from: {txn.sender}</span>
                            )}
                          </td>
                          <td className="py-2 px-4">₹ {txn.amount}</td>
                          <td className="py-2 px-4">{txn.status}</td>
                          <td className="py-2 px-4">{new Date(txn.timestamp).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
