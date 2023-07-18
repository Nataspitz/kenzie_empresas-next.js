import logo from "../../assets/img/logo.png";
import Image from "next/image";
import { ContainerMain } from "../containers/ContainerMain";

interface IPropsHeader {
  headerDash?: boolean;
  children?: React.ReactNode
}

export function Header({ headerDash, children }: IPropsHeader) {
  return (
    <header>
      <ContainerMain>
        <div>
          <Image src={logo} alt="Logo do kenzie empresas" />
          <h1>Kenzie Empresas</h1>
        </div>
        <div>
          {headerDash ? (
            <p>ola</p>
          ) : (
            <>
                {children}
            </>
          )}
        </div>
      </ContainerMain>
    </header>
  );
}
