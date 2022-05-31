import styled from "styled-components";

export const CartCard = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  transition: right 0.3s ease-in-out;
`;

export const CartImage = styled.div`
  img {
    width: 100%;
    height: auto;
    max-width: 80px;
  }
`;

export const CartBody = styled.div`
  font-size: 12px;
  margin-left: 10px;
  width: 100%;
`;

export const CartName= styled.strong`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
  display: block;
`;

export const CartPrice = styled.div`
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  font-weight: 700;
  font-size: ${props => props.discount ? '12px' : '14px'};
  color: ${props => props.discount ? '#7A7A7A' : '#000'};
  ${props => props.discount ? 'text-decoration: line-through;' : ''};
`;

export const CartListPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
`;


export const CartRemove = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 8px;
  font-weight: 700;
  &:hover {
    opacity: 0.7;
  }
`;