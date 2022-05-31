import { BannerContainer, OverlayBanner, Text, Title } from "./style"
import banner from "../../assets/images/banner.png"
import bannerMobile from "../../assets/images/bannerMobile.png"
import { isMobile } from "react-device-detect";

const ImageBanner = () => {
  if (isMobile) {
    return <img src={bannerMobile} alt="Banner" />
  }
  return <img src={banner} alt="Banner" />
};

export const Banner = (props) => {
  return (
    <BannerContainer>
      <ImageBanner />
      <OverlayBanner>
        <div>
          <Text>Olá, o que você está buscando?</Text>
          <Title>Criar ou migrar seu e-commerce?</Title>
        </div>
      </OverlayBanner>
    </BannerContainer>
  )
}