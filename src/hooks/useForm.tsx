import { useReducer } from 'react';
import { FormState, formReducer, initialState } from '../reducers/FormReducer';

export const useForm = () => {
    const [formState, dispatch] = useReducer(formReducer, initialState);

    const handleNextStep = () => {
        dispatch({ type: 'NEXT_STEP' });
    };

    const handlePrevStep = () => {
        dispatch({ type: 'PREV_STEP' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: e.target.name as keyof FormState,
            value: e.target.value,
        });
    };

    console.log(formState);

    return {
        formState,
        handleNextStep,
        handlePrevStep,
        handleChange,
    };
};
