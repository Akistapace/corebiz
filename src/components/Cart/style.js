import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 350px;
  background: #fff;
  height: 100%;
  z-index: 20;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CartHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
  width: 100%;
`;

export const CartTitle = styled.p`
  font-size: 18px;
`;

export const CartClose = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
  cursor: pointer;
`;

export const CartValues = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: #000;
  color: #fff;
  font-size: 18px;
  span {
    display: block;
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const CartList = styled.div`
  width: 100%;
  padding: 40px 20px;
  height: 100%;
  overflow-y: auto;
`;
