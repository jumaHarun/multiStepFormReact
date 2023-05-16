import {
    AddOnArr,
    BillingPlan,
    FormContextObj,
    FormState,
    Plan,
    ProviderProps,
    personalInfoObj,
} from '@/types';
import { createContext, useReducer, useState } from 'react';
import { formReducer } from '@reducers/FormReducer';

export const FormContext = createContext({} as FormContextObj);

export const FormProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, { step: 3 } as FormState);
    const [personalInfo, setPersonalInfo] = useState({} as personalInfoObj);
    const [billing, setBilling] = useState<BillingPlan>('mo');
    const [plan, setPlan] = useState<Plan>('arcade');
    const [addOns, setAddOns] = useState<AddOnArr>([]);

    const handleNext = (values: any) => {
        if (state.step === 1) {
            setPersonalInfo(values);
        } else if (state.step === 2) {
            setPlan(values);
        } else if (state.step === 3) {
            setAddOns((prev) => [...prev, values]);
        }

        dispatch({ type: 'HANDLE_NEXT' });
        console.log(addOns);
    };

    const handlePrev = () => {
        dispatch({ type: 'HANDLE_PREV' });
    };

    const handleInputChange = (field: string, value: string) => {
        dispatch({ type: 'HANDLE_CHANGE', field, value });
    };

    return (
        <FormContext.Provider
            value={{
                state,
                handleNext,
                handlePrev,
                handleInputChange,
                personalInfo,
                billing,
                plan,
                addOns,
                setBilling,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};
