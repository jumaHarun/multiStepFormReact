import { useContext } from 'react';
import { personalInfoData } from '@/formInfo.json';
import { FormContext } from '@context/FormContext';
import { StepHeader } from '@uicomponents/StepHeader';

export const PersonalInfo = () => {
    const { title, desc, inputs } = personalInfoData;
    const { email, name, phone } = inputs;

    const { state, handleNext } = useContext(FormContext);

    return (
        <form className="step-wrapper bg-neutral-900">
            <StepHeader key={crypto.randomUUID()} title={title} desc={desc} />

            <ul role="list">
                <li>
                    <label>
                        <span className="text-primary-400">{name.label}</span>
                        <input
                            type="text"
                            placeholder={name.placeholder}
                            required
                        />
                    </label>
                </li>

                <li>
                    <label>
                        <span className="text-primary-400">{email.label}</span>
                        <input
                            type="email"
                            placeholder={email.placeholder}
                            required
                        />
                    </label>
                </li>

                <li>
                    <label>
                        <span className="text-primary-400">{phone.label}</span>
                        <input
                            type="tel"
                            placeholder={phone.placeholder}
                            required
                        />
                    </label>
                </li>

                <li className="button-wrapper bg-neutral-900 fs-button flex">
                    <button
                        type="submit"
                        className="btn next-btn bg-primary-400 text-neutral-900"
                        onClick={handleNext}
                    >
                        {state.step === 4 ? 'Confirm' : 'Next Step'}
                    </button>
                </li>
            </ul>
        </form>
    );
};
