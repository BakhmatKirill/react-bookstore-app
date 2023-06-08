import { useState } from "react";
import { Menu, Header, Footer, Mailing, NewBooks } from "./components";
import { Wrapper } from "./ui";

export const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <NewBooks />
        <Mailing />
        <Footer />
      </Wrapper>
      <Menu />
    </>
  );
};
