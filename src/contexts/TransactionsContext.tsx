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

interface CreateTransactionsInput {
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
}

interface TransactionsContextType {
  transactions: Transactions[];
  fetchTransactions: (querry?: string) => Promise<void>;
  createTransactions: (data: CreateTransactionsInput) => Promise<void>;
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

  async function createTransactions(data: CreateTransactionsInput) {
    const { category, description, price, type } = data;

    const response = await api.post("transactions", {
      description,
      price,
      category,
      type,
      createAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
