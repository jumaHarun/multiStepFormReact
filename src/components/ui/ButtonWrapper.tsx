import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

export const ButtonWrapper = () => {
    const { state, handleNext, handlePrev } = useContext(FormContext)

    return (
        <div className="button-wrapper bg-neutral-900 fs-button flex">
            {state.step > 1 && (
                <button className="btn back-btn text-primary-900" onClick={handlePrev}>
                    Go Back
                </button>
            )}

            <button className="btn next-btn bg-primary-400 text-neutral-900" onClick={handleNext}>
                {state.step === 4 ? 'Confirm' : 'Next Step'}
            </button>
        </div>
    );
};
