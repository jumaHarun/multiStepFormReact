import {
    AddOnArr,
    BillingPlan,
    FormContextObj,
    Plan,
    ProviderProps,
    personalInfoObj,
} from '@/types';
import { createContext, useState } from 'react';

export const FormContext = createContext({} as FormContextObj);

export const FormProvider = ({ children }: ProviderProps) => {
    const [currentStep, setCurrentStep] = useState(2);
    const [personalInfo, setPersonalInfo] = useState<personalInfoObj>({
        name: '',
        email: '',
        phoneNumber: '',
    });
    const [billing, setBilling] = useState<BillingPlan>('mo');
    const [plan, setPlan] = useState<Plan>('arcade');
    const [addOns, setAddOns] = useState<AddOnArr>([]);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleNext = (values: any) => {
        if (currentStep === 1) {
            setPersonalInfo(values);
            setCurrentStep(2);
        } else if (currentStep === 2) {
            setPlan(values);
            setCurrentStep(3);
        } else if (currentStep === 3) {
            setAddOns((prev) => [...prev, ...values]);
            setCurrentStep(4);
        } else if (currentStep === 4) {
            console.log('Confirm');
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    return (
        <FormContext.Provider
            value={{
                currentStep,
                personalInfo,
                billing,
                plan,
                addOns,
                isSuccess,
                setIsSuccess,
                setBilling,
                setCurrentStep,
                handleNext,
                handlePrev,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};
