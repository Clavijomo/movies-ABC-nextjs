import { Context, useContext } from "react"

export function useGenericContext<T>(context: Context<T | undefined>, errorMessage: string): T {
    const value = useContext(context);
    if (!value) {
        throw new Error(errorMessage)
    }

    return value;
}