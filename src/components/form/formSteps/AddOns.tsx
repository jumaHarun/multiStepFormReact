import { useContext } from 'react';
import { FormContext } from '@/context/FormContext';
import { StepHeader } from '@/components/ui/StepHeader';
import { addOnsData } from '@/formInfo.json';

export const AddOns = () => {
    const { title, desc, inputs } = addOnsData;
    const [onlineService, largerStorage, customProfile] = inputs;

    const { handleNext, handlePrev } = useContext(FormContext);

    return (
        <form className="step-wrapper bg-neutral-900">
            <StepHeader key={title} title={title} desc={desc} />

            <ul role="list">
                <li className="addon-list-item">
                    <label className="flex">
                        <input
                            type="checkbox"
                            name="online-service"
                            id="online-service"
                            className="addons-input"
                        />
                        <p>
                            <span className="text-primary-400 fw-semi-bold">
                                {onlineService.label}
                            </span>
                            <span className="text-primary-900 fs-300">
                                {onlineService.desc}
                            </span>
                        </p>

                        <p className="text-accent-500">
                            +${onlineService.price}/mo
                        </p>
                    </label>
                </li>

                <li className="addon-list-item">
                    <label className="flex">
                        <input
                            type="checkbox"
                            name="larger-storage"
                            id="larger-storage"
                            className="addons-input"
                        />
                        <p>
                            <span className="text-primary-400 fw-semi-bold">
                                {largerStorage.label}
                            </span>
                            <span className="text-primary-900 fs-300">
                                {largerStorage.desc}
                            </span>
                        </p>

                        <p className="text-accent-500">
                            +${largerStorage.price}/mo
                        </p>
                    </label>
                </li>

                <li className="addon-list-item">
                    <label className="flex">
                        <input
                            type="checkbox"
                            name="custom-profile"
                            id="custom-profile"
                            className="addons-input"
                        />
                        <p>
                            <span className="text-primary-400 fw-semi-bold">
                                {customProfile.label}
                            </span>
                            <span className="text-primary-900 fs-300">
                                {customProfile.desc}
                            </span>
                        </p>

                        <p className="text-accent-500">
                            +${customProfile.price}/mo
                        </p>
                    </label>
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
