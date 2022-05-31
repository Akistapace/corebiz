import { HeaderContainer, HeaderWrapper, BotaoMenu } from "./style";
import { isMobile } from "react-device-detect";
import { SearchBar } from "./SearchBar";
import { Shortcuts } from "./Shortcuts";
import { Logo } from "./Logo";

const RenderHeader = (props) => {
  if (isMobile) {
    return (
      <>
        <HeaderWrapper>
          <BotaoMenu>
            <span></span>
            <span></span>
            <span></span>
          </BotaoMenu>
          <Logo />
          <Shortcuts />
        </HeaderWrapper>
        <SearchBar />
      </>
    )
  }
  return (
    <>
      <Logo />
      <SearchBar />
      <Shortcuts />
    </>
  )
}

export const Header = () => {
  return (
    <HeaderContainer>
      <RenderHeader/>
    </HeaderContainer>
  )
}
