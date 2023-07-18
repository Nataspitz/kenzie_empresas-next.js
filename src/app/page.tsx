import { Header } from "@/components/header/Header";
import { Button } from "@/fragments/Button";
import Image from "next/image";
import banner from "../assets/img/home.png";
import { ContainerMain } from "@/components/containers/ContainerMain";

export default function Home() {
  return (
    <>
      <Header>
        <Button text={"Login"} page={"/entrar"} />
        <Button text={"Cadastrar"} page={"/cadastro"} />
      </Header>
      <main>
        <ContainerMain>
          <section>
            <div>
              <Image src={banner} alt="Banner da home page" />
            </div>
            <div>
              <select name="comoanies" id="slc-home">
                <option value="">Selecione Setor</option>
              </select>
            </div>
          </section>
        </ContainerMain>
      </main>
    </>
  );
}
