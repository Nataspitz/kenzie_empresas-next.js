interface IChildren{
    children: React.ReactNode
}

export function ContainerMain({children}: IChildren) {
    return(
        <div>
            {children}
        </div>
    )
}