import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCart, SummaryContainer } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { useContext } from "react";
import { priceFormatter } from "../../utils/formater";

export function Summary() {
  const { transactions } = useContext(TransactionContext);

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

  return (
    <SummaryContainer>
      <SummaryCart>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCart>
      <SummaryCart>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCart>
      <SummaryCart variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCart>
    </SummaryContainer>
  );
}
