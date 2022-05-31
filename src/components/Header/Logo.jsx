import { HeaderLogo } from "./style";
import logo from "../../assets/logos/logo.svg";

export const Logo = () => {
  return (
    <HeaderLogo>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </HeaderLogo>
  )
}