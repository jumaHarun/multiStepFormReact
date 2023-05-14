import { StepHeader } from '@/components/ui/StepHeader';
import { FormContext } from '@/context/FormContext';
import { plansData } from '@/formInfo.json';
import { ToggleWrapper } from '@uicomponents/ToggleWrapper';
import { useContext, useState } from 'react';

export const Plans = () => {
    const [isChecked, setIsChecked] = useState(false);
    const { title, desc, inputs } = plansData;
    const [arcade, advanced, pro] = inputs;

    const { handleNext, handlePrev } = useContext(FormContext);

    return (
        <form className="step-wrapper bg-neutral-900">
            <StepHeader key={title} title={title} desc={desc} />

            <ul role="list" className="plans-list ">
                <li className="plans-list-item">
                    <label className="flex">
                        <img src="/images/icon-arcade.svg" alt="Arcade icon" />
                        <p>
                            <span className="text-primary-400 fw-semi-bold">
                                {arcade[0]}
                            </span>
                            <span className="text-primary-900 fs-300">
                                ${arcade[1]}/mo
                            </span>
                        </p>
                        <input
                            type="checkbox"
                            className="plans-input"
                            name="arcade"
                            id="arcade"
                        />
                    </label>
                </li>
                <li className="plans-list-item">
                    <label className="flex">
                        <img
                            src="/images/icon-advanced.svg"
                            alt="Advanced icon"
                        />
                        <p>
                            <span className="text-primary-400 fw-semi-bold">
                                {advanced[0]}
                            </span>
                            <span className="text-primary-900 fs-300">
                                ${advanced[1]}/mo
                            </span>
                        </p>
                        <input
                            type="checkbox"
                            className="plans-input"
                            name="advanced"
                            id="advanced"
                        />
                    </label>
                </li>
                <li className="plans-list-item">
                    <label className="flex">
                        <img src="/images/icon-pro.svg" alt="Pro icon" />
                        <p>
                            <span className="text-primary-400 fw-semi-bold">
                                {pro[0]}
                            </span>
                            <span className="text-primary-900 fs-300">
                                ${pro[1]}/mo
                            </span>
                        </p>
                        <input
                            type="checkbox"
                            className="plans-input"
                            name="pro"
                            id="pro"
                        />
                    </label>
                </li>

                <li>
                    <ToggleWrapper
                        isChecked={isChecked}
                        setIsChecked={setIsChecked}
                    />
                </li>

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
        </form>
    );
};
