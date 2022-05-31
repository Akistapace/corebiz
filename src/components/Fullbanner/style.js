import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    height: 270px;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const OverlayBanner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 30px;
  @media (max-width: 768px) {
    width: 100%;
  }
  > div {
    max-width: 440px;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

export const Title = styled.h2`
  display: flex;
  color: #fff;
  font-size: 45px;
  font-weight: 900;
  line-height: 45px;
  letter-spacing: 0em;
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
  }
`;

export const Text = styled.p`
  display: flex;
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
  }
`;

