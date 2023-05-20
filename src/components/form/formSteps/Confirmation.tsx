import { useContext } from 'react';
import { FormContext } from '@/context/FormContext';
import { StepHeader } from '@/components/ui/StepHeader';
import { summaryData } from '@/formInfo.json';
import { FormSummary } from '@/components/ui/FormSummary';

export const Confirmation = () => {
    const { title, desc } = summaryData;

    const { handlePrev, setIsSuccess } = useContext(FormContext);
    return (
        <section className="step-wrapper bg-neutral-900">
            <StepHeader title={title} desc={desc} />

            <FormSummary />

            <ul>
                <li className="button-wrapper bg-neutral-900 fs-button flex">
                    <button
                        className="btn back-btn text-primary-900"
                        onClick={handlePrev}
                    >
                        Go Back
                    </button>

                    <button
                        className="btn next-btn bg-primary-400 text-neutral-900"
                        onClick={() => setIsSuccess(true)}
                    >
                        Confirm
                    </button>
                </li>
            </ul>
        </section>
    );
};
