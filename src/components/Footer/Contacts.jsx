import { List } from "./style";
import { ContactCard } from "./ContactCard";

import {ReactComponent as LetterIcon} from '../../assets/icons/letter.svg';
import {ReactComponent as HeadsetIcon} from '../../assets/icons/headset.svg';

export const Contacts = () => {
  return (
    <List>
      <ContactCard
        link="#"
        text="ENTRE EM CONTATO"
      >
        <LetterIcon/>
      </ContactCard>

      <ContactCard
        link="#"
        text="FALE COM O NOSSO CONSULTOR ONLINE"
      >
        <HeadsetIcon/>
      </ContactCard>
    </List>
  )
}