import { TransactionContext } from "../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export function useSummary() {
  const transactions  = useContextSelector(TransactionContext, (context) => {
    return context.transactions;
  });

  const summary = transactions.reduce(
    (acc, transactions) => {
      if (transactions.type === "income") {
        acc.income += transactions.price;
        acc.total += transactions.price;
      } else {
        acc.outcome += transactions.price;
        acc.total -= transactions.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
  return summary;
}
