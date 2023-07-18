import  Link  from "next/link";

interface IPropdButton{
    page: string;
    text: string;
}

export function Button({ page, text }: IPropdButton ) {
    return(
        <div>
            <Link href={page}>
                {text}
            </Link>
        </div>
    )
}