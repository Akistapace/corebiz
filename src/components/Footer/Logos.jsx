import { List } from "./style";
import { LogoItem } from "./LogoItem";

export const Logos = () => {
  return (
    <List flex logos>
      <LogoItem
        logo={{
          url: "#",
          img: "corebiz_white.svg",
          alt: "Corebiz",
          title: "Created by"
        }} />

      <LogoItem
        logo={{
          url: "#",
          img: "vtex.svg",
          alt: "Vtex",
          title: "Powered by"
        }} />

    </List>
  )
}