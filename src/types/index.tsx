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
    state: FormState | undefined;
    handleNext: (values: {}) => void;
    handlePrev: () => void;
    handleInputChange: (field: string, value: string) => void;
    personalInfo: {};
    plan: {};
    billing: string;
    addOns: string[];
    setBilling: (prev: BillingPlan) => void;
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
