import { Title, Li, List } from "./style"

export const LocalList = ( {menu} ) => {
  return (
    <List>
      <Title>
        {menu.title}
        Localização
      </Title>
      {menu.items.map(item => (
        <Li key={item.id}>
          {item.title}
        </Li>
      ))}
    </List>
  )
}