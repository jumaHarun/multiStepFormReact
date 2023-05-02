import { useContext } from 'react';

import { FormContext } from '../../context/FormContext';

type Props = {
    stepItem: string[];
};

export const StepTracker = ({ stepItem }: Props) => {
    const { step } = useContext(FormContext);
    const [stepNumber, stepDesc] = stepItem;

    const className =
        step === Number(stepNumber)
            ? 'step-no grid fw-bold active '
            : 'step-no grid fw-bold text-neutral-900';

    return (
        <div className="step grid">
            <div className={`${className}`}>{stepNumber}</div>

            <div className="hide">
                <p className="fs-200 text-neutral-100">STEP {stepNumber}</p>
                <h4 className="fw-bold text-neutral-900">
                    {stepDesc.toUpperCase()}
                </h4>
            </div>
        </div>
    );
};
