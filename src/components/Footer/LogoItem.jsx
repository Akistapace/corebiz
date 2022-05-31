import {LogoComponent} from  './style';

export const LogoItem = ({ logo }) => {
  return (
    <LogoComponent>
      <a href={logo.url}>
        {logo.title && <span>{logo.title}</span>}
        <img src={`/src/assets/logos/${logo.img}`} alt={logo.alt} />
      </a>
    </LogoComponent>
  )
}