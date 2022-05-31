import { CoverFade } from "./style";

export const Cover = ( {props} ) => {
  console.log('props',props);

  const handleClose = () => {
    props.setIsOpen(!props.isOpen);
  }

  return (
    <CoverFade onClick={ handleClose } />
  )
}