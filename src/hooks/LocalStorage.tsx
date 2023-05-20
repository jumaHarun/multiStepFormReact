import { FormState } from '@/types';

export const syncLocalStorage = (form: FormState) => {
    const local = localStorage.getItem('FORM_STATE');

    if (local) {
        localStorage.setItem('FORM_STATE', JSON.stringify(form));
    }

    console.log('local: ', local);
    console.log('formParam: ', form);
};
