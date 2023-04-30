export interface FormState {
    step: number;
    name: string;
    email: string;
    tel: string;
    billing: 'monthly' | 'yearly';
    plan: 'Arcade' | 'Advanced' | 'Pro';
    addOns: string[];
};

type FormAction =
    | { type: 'NEXT_STEP' }
    | { type: 'PREV_STEP' }
    | { type: 'UPDATE_FIELD'; field: keyof FormState; value: string };

export const initialState: FormState = {
    step: 1,
    name: '',
    email: '',
    tel: '',
    billing: 'monthly',
    plan: 'Arcade',
    addOns: [],
};

export const formReducer = (
    state = initialState,
    action: FormAction
): FormState => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.value };
        case 'NEXT_STEP':
            return { ...state, step: state.step + 1 };
        case 'PREV_STEP':
            return { ...state, step: state.step - 1 };
        default:
            throw new Error('Unknown action type');
    }
};
