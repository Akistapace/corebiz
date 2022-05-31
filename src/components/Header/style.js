import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  background-color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  flex: 1;
  img {
    max-width: 150px;
  }
  @media (max-width: 768px) {
    order: 1;
    img {
      max-width: 125px;
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const Searchbar = styled.div`
  display: flex;
  flex: 2;
  @media (max-width: 768px) {
    order: 3;
    width: 100%;
  }
  form {
    width: 100%;
    display: flex;
    border-bottom: 1px solid black;
  }
  input {
    padding: 5px;
    width: 100%;
    border: none;
    outline: none;
  }
`;

export const ShortcutsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  @media (max-width: 768px) {
    order: 2;
  }
  ul {
    display: flex;
    li {
      margin: 0 10px;
      display: flex;
      cursor: pointer;
    }
    li > svg {
      margin-right: 5px;
    }
    li > span {
      display: block;
      background-color: #F8475F;
      border-radius: 50%;
      min-width: 15px;
      min-height: 15px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 10px;
      align-self: baseline;
      line-height: 1px;
    }
  }
`;

export const BotaoMenu = styled.div`
  display: block;
  @media (max-width: 768px) {
    flex: 1;
  }
  span {
    height: 3.75px;
    width: 25px;
    display: block;
    background-color: black;
    &:nth-child(2) {
      margin: 4px 0;
    }
  }
`;

export const CoverFade = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;

`;
