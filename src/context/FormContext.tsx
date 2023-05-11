import { createContext, useReducer } from 'react';
import { formReducer, initialState, FormState } from '../reducers/FormReducer';

interface FormContext {
    state: FormState;
    handleNext?: () => void;
    handlePrev?: () => void;
    handleInputChange?: (field: keyof FormState, value: string) => void;
}

export const FormContext = createContext<FormContext>({
    state: initialState,
});

type ProviderProps = {
    children: React.ReactNode;
};

export const FormProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleNext = () => {
        dispatch({ type: 'HANDLE_NEXT' });
    };

    const handlePrev = () => {
        dispatch({ type: 'HANDLE_PREV' });
    };

    const handleInputChange = (field: keyof FormState, value: string) => {
        console.log('Handle change');

        dispatch({ type: 'HANDLE_CHANGE', field, value });
    };

    const handleConfirm = () => {
        dispatch({ type: 'HANDLE_CONFIRM' });
    };

    return (
        <FormContext.Provider
            value={{
                state,
                handleNext,
                handlePrev,
                handleInputChange,
                handleConfirm,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};
