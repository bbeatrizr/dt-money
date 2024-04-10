import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createAt: string;
}

interface TransactionsContextType {
  transactions: Transactions[];
  fetchTransactions: (querry?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  async function fetchTransactions(querry?: string) {
    const response = await api.get("transactions", {
      params: {
        q: querry,
      },
    });

    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
