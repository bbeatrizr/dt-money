import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/thames/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
