import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCart, SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCart>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="f75a68" />
        </header>
        <strong>R$ 17.400, 00</strong>
      </SummaryCart>
      <SummaryCart>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="f75a68" />
        </header>
        <strong>R$ 17.400, 00</strong>
      </SummaryCart>
      <SummaryCart variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="fff" />
        </header>
        <strong>R$ 17.400, 00</strong>
      </SummaryCart>
    </SummaryContainer>
  );
}
