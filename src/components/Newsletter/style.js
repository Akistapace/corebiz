import styled from "styled-components";

export const NewsletterContainer = styled.section`
  background-color: #F2F2F2;
  padding: 24px;
`;

export const NewsWrapper = styled.div`
  max-width: 856px;
  margin: auto;
  h2 {
    text-align: center;
    margin-bottom: 16px;
  }
  form {
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  input {
    height: 48px;
    width: 100%;
    border-radius: 5px;
    padding: 17px 16px;
    background: #FFFFFF;
    border: 1px solid transparent;

    font-family: 'Lato', sans-serif;;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    &::placeholder {
      font-family: 'Lato', sans-serif;;
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;

export const Box = styled.div`
  width: 100%;
  margin-right: 8px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 22px;
  }
`;

export const ErrorMsg = styled.p`
  color: #D7182A;
  margin-top: 8px;
  font-family: 'Lato', sans-serif;;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Button = styled.button`
  background: #000000;
  border-radius: 5px;
  color: #fff;
  font-family: 'Lato', sans-serif;;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  height: 48px;
  min-width: 140px;
  max-width: 328px;
  width: ${props => (props.large ? "100%" : "fit-content")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SuccessMsg = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  p {
    font-family: 'Lato', sans-serif;;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;
  }
  strong {
    font-family: 'Lato', sans-serif;;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
  }
  button {
    margin: 15px auto 0 auto
  }
`