export interface FormState {
    step: number;
    name: string;
    email: string;
    phoneNumber: string;
    billingPlan: string;
    plan: string;
    addOns: string[];
}

export const initialState: FormState = {
    step: 2,
    name: '',
    email: '',
    phoneNumber: '',
    billingPlan: '',
    plan: '',
    addOns: [],
};

type ACTIONTYPE =
    | { type: 'HANDLE_NEXT' }
    | { type: 'HANDLE_PREV' }
    | { type: 'HANDLE_CHANGE'; field: keyof FormState; value: string }
    | { type: 'HANDLE_CONFIRM' };

export const formReducer = (state = initialState, action: ACTIONTYPE) => {
    switch (action.type) {
        case 'HANDLE_NEXT':
            if (state.step >= 4) {
                return { ...state };
            }
            return { ...state, step: state.step + 1 };
        case 'HANDLE_PREV':
            return { ...state, step: state.step - 1 };
        case 'HANDLE_CHANGE':
            console.log('Change');
            return { ...state, [action.field]: action.value };
        case 'HANDLE_CONFIRM':
            console.log('Confirm');
            break;
        default:
            throw new Error('Unknown action type');
    }
};
