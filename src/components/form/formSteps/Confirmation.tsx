import { useContext } from 'react';
import { FormContext } from '@/context/FormContext';
import { StepHeader } from '@/components/ui/StepHeader';
import { summaryData } from '@/formInfo.json';

export const Confirmation = () => {
    const { title, desc } = summaryData;

    const { handleNext, handlePrev } = useContext(FormContext);
    return (
        <div className="step-wrapper bg-neutral-900">
            <StepHeader title={title} desc={desc} />

            <h1 className="fs-primary-heading text-primary-400 fw-bold">
                Display Data here
            </h1>

            <ul>
                <li className="button-wrapper bg-neutral-900 fs-button flex">
                    <button
                        className="btn back-btn text-primary-900"
                        onClick={handlePrev}
                    >
                        Go Back
                    </button>

                    <button
                        type="submit"
                        className="btn next-btn bg-primary-400 text-neutral-900"
                        onClick={handleNext}
                    >
                        Next Step
                    </button>
                </li>
            </ul>
        </div>
    );
};
