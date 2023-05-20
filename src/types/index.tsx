export interface FormState {
    step: number;
    name: string;
    email: string;
    phoneNumber: string;
    billingPlan: string;
    plan: string;
    addOns: string[];
}

export interface FormContextObj {
    currentStep: number;
    personalInfo: personalInfoObj;
    plan: string;
    billing: string;
    addOns: string[];
    isSuccess: boolean;
    setIsSuccess: (arg0: boolean) => void;
    setBilling: (prev: BillingPlan) => void;
    setCurrentStep: (arg0: number) => void;
    handleNext: (values: {}) => void;
    handlePrev: () => void;
}

export type ACTIONTYPE =
    | { type: 'HANDLE_NEXT' }
    | { type: 'HANDLE_PREV' }
    | { type: 'HANDLE_CHANGE'; field: string; value: string }
    | { type: 'HANDLE_CONFIRM' };

export type ProviderProps = {
    children: React.ReactNode;
};

export type MultiStepFormProps = {
    step: number;
};

export type personalInfoObj = {
    name: string;
    email: string;
    phoneNumber: string;
};

export type Plan = 'arcade' | 'advanced' | 'pro';

export type BillingPlan = 'mo' | 'yr';

export type AddOnArr = string[];
