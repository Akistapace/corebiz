import { LocalList } from './LocalList';
import { Contacts } from './Contacts';
import { Logos } from './Logos';
import {FooterContainer, Wrapper} from './style';

export const Footer = () => {
  return (
    <FooterContainer className="footer">
      <Wrapper>
        <LocalList
          menu={
            {
              title: 'Localização',
              items: [
                {
                  id: 1,
                  title: 'Avenida Andrômeda, 2000. Bloco 6 e 8'
                },
                {
                  id: 2,
                  title: 'Alphavile SP'
                },
                {
                  id: 3,
                  title: 'brasil@corebiz.ag'
                },
                {
                  id: 4,
                  title: ' +55 11 3090 1039'
                }
              ]
            }
          }
        />
        <Contacts />
        <Logos />
      </Wrapper>
    </FooterContainer>
  )
}
