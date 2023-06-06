import { HeaderNavigation, Search, ThemeChanger } from "components";
import { LogoIcon } from "../../assets";
import { useInput } from "../../hooks";
import { Color } from "../../ui";
import { LogoWrapper, StyledHeader } from "./styles";

export const Header = () => {
  const search = useInput();

  return (
    <StyledHeader>
      <LogoWrapper href="/">
        <LogoIcon />
      </LogoWrapper>
      <Search {...search} type="search" placeholder="Search" />
      <HeaderNavigation />
      <ThemeChanger type="checkbox" />
    </StyledHeader>
  );
};
