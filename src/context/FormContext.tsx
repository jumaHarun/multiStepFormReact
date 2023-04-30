import { createContext } from 'react';
import { initialState } from '../reducers/FormReducer';
import { useForm } from '../hooks/useForm';

export const FormContext = createContext(initialState);

type ProviderProps = {
    children: React.ReactNode;
};

export const FormProvider = ({ children }: ProviderProps) => {
    const form = useForm();

    return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
};
