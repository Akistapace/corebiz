import styled from "styled-components"

export const FooterContainer = styled.footer`
  padding: 25px 5%;
  background: #000000;
  color: #fff;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  flex: 1;
  align-self: center;
  ${props => props.flex ? 'display: flex' : ''};
  ${props => props.logos ? 'justify-content: flex-end;' : ''};

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
    ${props => props.logos ? 'max-width: 250px; flex-wrap: wrap' : ''};
    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }
`;

export const Title = styled.legend`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;
  &::after {
    content: '';
    display: block;
    width: 44px;
    height: 5px;
    background-color: #fff;
    margin-top: 16px;
  }
`;

export const Li = styled.li`
  font-size: 13px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 15px;
`;

export const CardContact = styled.li`
  background: #FFFFFF;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
  max-width: 200px;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 25px;
  align-self: center;
  > a {
    height: 38px;
    display: grid;
    grid-template-columns: 30px 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px 15px;
    width: 100%;
  }
  >a > svg {
    margin-right: 15px;
    width: 25px;
  }
`;

export const LogoComponent = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
  a {
    display: flex;
    align-self: center;
    flex-direction: column;
  }
  a > span {
    font-size: 11px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 2px;
  }
  a > img {
    /* max-height: 70px; */
    width: 100%;
    height: auto;
    max-width: 110px;
  }
`;
