import { createContext } from 'react';
import { initialState } from '../reducers/FormReducer';
import { useForm } from '../hooks/useForm';

export const FormContext = createContext(initialState);

type ProviderProps = {
    children: React.ReactNode;
};

export const FormProvider = ({ children }: ProviderProps) => {
    const { formState } = useForm();

    return (
        <FormContext.Provider value={formState}>
            {children}
        </FormContext.Provider>
    );
};
