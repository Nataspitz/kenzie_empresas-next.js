import { ForwardedRef, HTMLAttributes, forwardRef } from "react";

interface IPropsInput extends HTMLAttributes<HTMLInputElement>{
    label?: string;
    type: string;
    error?: any
}

export const Input = forwardRef(
    ({ label, type, error, ...rest }: IPropsInput, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <>
            {label ? <label htmlFor="input">{label}</label> : null}
            <input ref={ref} type={type} {...rest} />
            {error ? <p>{error.message}</p> : null}
        </>
    );
});

Input.displayName = 'Input';
