import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  &:hover{
   background: #E6E8EA;

   button {
     opacity: 1;
   }
  }
`;
export const ProductFlag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
`;

export const ProductImage = styled.figure`
  display: flex;
  margin-bottom: 8px;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
`;
export const ProductBody = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 150px;
`;
export const ProductValues = styled.div`
  text-align: center;
  flex-shrink: 0;
  `;
export const ProductInfo = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProductTitle = styled.p`
  /* font-family: Nunito; */
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.p`
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  font-weight: 700;
  font-size: ${props => props.discount ? '12px' : '18px'};
  color: ${props => props.discount ? '#7A7A7A' : '#000'};
  ${props => props.discount ? 'text-decoration: line-through;' : ''};

`;

export const ProductListPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  color: #000;
`;

export const ProductInstallments = styled.small`
  /* font-family: Nunito; */
  font-size: 11px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  color: #7A7A7A;
`;

export const ProductStars = styled.p`
  margin-bottom: 7px;
`;

export const ProductButton = styled.button`
  background: #000000;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  height: 32px;
  min-width: 140px;
  max-width: 328px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 8px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  width: fit-content;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;


export const SkeletonComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 300px;
  div {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    &:after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #000;
      border-color: #000 transparent #000 transparent;
      animation: loader 1.2s linear infinite;
    }
    @keyframes loader {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;