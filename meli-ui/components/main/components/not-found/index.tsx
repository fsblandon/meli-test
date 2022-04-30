import { NotFoundContainer } from "../../style";
import Image from 'next/image';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img 
        src="/empty_state.svg"
        alt="empty search"/>
      <p>Parece que no existe lo que estas buscando</p>
    </NotFoundContainer>
  );
};

export default NotFound;