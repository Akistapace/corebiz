import styled from "styled-components";

export const ContainerProducts = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding-top: 25px;
  padding-bottom: 50px;
  @media ( min-width: 769px ) {
    .swiper-pagination {
      display: none;
    }
  }
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 900;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
  margin-bottom: 20px;
  &::after {
    content: '';
    display: block;
    width: 44px;
    height: 5px;
    background-color: #C0C0C0;
    margin-top: 16px;
  }
`;

export const Arrow = styled.button`
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${props => props.left ? 'left: 0;' : 'right: 0;'}
  @media ( max-width: 768px ) {
    display: none;
  }
`;