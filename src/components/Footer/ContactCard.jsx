import { CardContact } from "./style"

export  const ContactCard = (props) => {
  return (
    <CardContact>
      <a href={props.link}>
        {props.children}
        {props.text}
      </a>
    </CardContact>
  )
}