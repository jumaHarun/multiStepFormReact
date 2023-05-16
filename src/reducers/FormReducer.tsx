import { FormState, ACTIONTYPE } from '@/types';

const initialState: FormState = {
    step: 1,
    name: '',
    email: '',
    phoneNumber: '',
    billingPlan: '',
    plan: '',
    addOns: [],
};

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
            return { ...state, [action.field]: action.value };
        default:
            throw new Error('Unknown action type');
    }
};
