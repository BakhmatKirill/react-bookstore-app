import { Header, Footer, Mailing, NewBooks } from "./components";
import { Wrapper } from "./ui";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Mailing />
      <NewBooks />
      <Footer />
    </Wrapper>
  );
};
