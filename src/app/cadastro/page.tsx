import { Header } from "@/components/header/Header";
import { Button } from "@/fragments/Button";

export default function RegisterPage() {
    return(
        <>
            <Header>
                 <Button  text={"Home"} page={"/"} />
                 <Button  text={"Login"} page={"/entrar"} />
            </Header>
        </>
    )
}