import { ChangeEvent, useState } from "react";

export function useForm<T>(initialState: T) {

    const [values, setValues] = useState(initialState);

    //ChangeEvent es de tipo generico, púede ser un select, input, button, etc.
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleReset = (): void => setValues(initialState);

    return { values, handleChange, handleReset }

}