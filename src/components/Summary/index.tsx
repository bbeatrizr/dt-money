import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCart, SummaryContainer } from "./styles";
import { priceFormatter } from "../../utils/formater";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const summary = useSummary();

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
