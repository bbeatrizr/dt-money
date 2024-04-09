import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";

export function Transactions() {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transactions) => {
              return (
                <tr key={transactions.id}>
                  <td width="50%">{transactions.description}</td>
                  <PriceHighLight variant={transactions.type}>
                    {transactions.price}
                  </PriceHighLight>
                  <td>{transactions.category}</td>
                  <td>{transactions.createAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
