import { useContext } from 'react';
import { useFormik } from 'formik';
import { FormContext } from '@/context/FormContext';
import { StepHeader } from '@/components/ui/StepHeader';
import { addOnsData } from '@/formInfo.json';

export const AddOns = () => {
    const { title, desc, inputs } = addOnsData;
    const [onlineService, largerStorage, customProfile] = inputs;

    const { handleNext, handlePrev, billing, addOns } = useContext(FormContext);

    const formik = useFormik({
        initialValues: {
            addon: addOns,
        },
        onSubmit: (values) => {
            handleNext(values.addon);
        },
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="step-wrapper bg-neutral-900"
        >
            <StepHeader key={title} title={title} desc={desc} />

            <ul role="list">
                <li
                    className={
                        formik.values.addon.includes('online-service')
                            ? 'addon-list-item active-addon'
                            : 'addon-list-item'
                    }
                >
                    <label className="flex">
                        <input
                            type="checkbox"
                            name="addon"
                            className="addons-input"
                            value="online-service"
                            onChange={formik.handleChange}
                            checked={formik.values.addon.includes(
                                'online-service'
                            )}
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
                            {billing === 'mo'
                                ? `$${onlineService.price.monthly}/mo`
                                : `$${onlineService.price.yearly}/yr`}
                        </p>
                    </label>
                </li>

                <li
                    className={
                        formik.values.addon.includes('larger-storage')
                            ? 'addon-list-item active-addon'
                            : 'addon-list-item'
                    }
                >
                    <label className="flex">
                        <input
                            type="checkbox"
                            name="addon"
                            value="larger-storage"
                            className="addons-input"
                            onChange={formik.handleChange}
                            checked={formik.values.addon.includes(
                                'larger-storage'
                            )}
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
                            {billing === 'mo'
                                ? `$${largerStorage.price.monthly}/mo`
                                : `$${largerStorage.price.yearly}/yr`}
                        </p>
                    </label>
                </li>

                <li
                    className={
                        formik.values.addon.includes('custom-profile')
                            ? 'addon-list-item active-addon'
                            : 'addon-list-item'
                    }
                >
                    <label className="flex">
                        <input
                            type="checkbox"
                            name="addon"
                            value="custom-profile"
                            className="addons-input"
                            onChange={formik.handleChange}
                            checked={formik.values.addon.includes(
                                'custom-profile'
                            )}
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
                            {billing === 'mo'
                                ? `$${customProfile.price.monthly}/mo`
                                : `$${customProfile.price.yearly}/yr`}
                        </p>
                    </label>
                </li>

                <li className="button-wrapper bg-neutral-900 fs-button flex">
                    <button
                        type="button"
                        className="btn back-btn text-primary-900"
                        onClick={handlePrev}
                    >
                        Go Back
                    </button>

                    <button
                        type="submit"
                        className="btn next-btn bg-primary-400 text-neutral-900"
                    >
                        Next Step
                    </button>
                </li>
            </ul>
        </form>
    );
};
