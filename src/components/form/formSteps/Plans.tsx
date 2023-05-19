import { useContext } from 'react';
import { useFormik } from 'formik';
import { StepHeader } from '@/components/ui/StepHeader';
import { FormContext } from '@/context/FormContext';
import { plansData } from '@/formInfo.json';
import { ToggleWrapper } from '@uicomponents/ToggleWrapper';

export const Plans = () => {
    const { title, desc, monthsOff, plans } = plansData;
    const [arcade, advanced, pro] = plans;

    const { handleNext, handlePrev, billing,plan } = useContext(FormContext);

    const formik = useFormik({
        initialValues: {
            plan: plan,
        },
        onSubmit: (values) => {
            handleNext(values.plan);
        },
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="step-wrapper bg-neutral-900"
        >
            <StepHeader key={crypto.randomUUID()} title={title} desc={desc} />

            <ul role="list" className="plans-list">
                <div className="plan-grid grid">
                    <li
                        className={
                            formik.values.plan === 'arcade'
                                ? 'plans-list-item hover-state active-plan'
                                : 'plans-list-item hover-state'
                        }
                        tabIndex={1}
                    >
                        <label className="flex">
                            <img
                                src="/images/icon-arcade.svg"
                                alt="Arcade icon"
                            />
                            <p>
                                <span className="text-primary-400 fw-semi-bold">
                                    {arcade.name}
                                </span>
                                <span className="text-primary-900 fs-300">
                                    {billing === 'mo' ? (
                                        `$${arcade.price.monthly}/mo`
                                    ) : (
                                        <>
                                            ${arcade.price.yearly}/yr
                                            <span className="text-primary-400 fs-200 fw-semi-bold">
                                                {monthsOff} months free
                                            </span>
                                        </>
                                    )}
                                </span>
                            </p>
                            <input
                                type="radio"
                                className="plans-input"
                                name="plan"
                                id="arcade"
                                value="arcade"
                                onChange={formik.handleChange}
                            />
                        </label>
                    </li>
                    <li
                        className={
                            formik.values.plan === 'advanced'
                                ? 'plans-list-item hover-state active-plan'
                                : 'plans-list-item hover-state'
                        }
                        tabIndex={2}
                    >
                        <label className="flex">
                            <img
                                src="/images/icon-advanced.svg"
                                alt="Advanced icon"
                            />
                            <p>
                                <span className="text-primary-400 fw-semi-bold">
                                    {advanced.name}
                                </span>
                                <span className="text-primary-900 fs-300">
                                    {billing === 'mo' ? (
                                        `$${advanced.price.monthly}/mo`
                                    ) : (
                                        <>
                                            ${advanced.price.yearly}/yr
                                            <span className="text-primary-400 fs-200 fw-semi-bold">
                                                {monthsOff} months free
                                            </span>
                                        </>
                                    )}
                                </span>
                            </p>
                            <input
                                type="radio"
                                className="plans-input"
                                name="plan"
                                id="advanced"
                                value="advanced"
                                onChange={formik.handleChange}
                            />
                        </label>
                    </li>
                    <li
                        className={
                            formik.values.plan === 'pro'
                                ? 'plans-list-item hover-state active-plan'
                                : 'plans-list-item hover-state'
                        }
                        tabIndex={3}
                    >
                        <label className="flex">
                            <img src="/images/icon-pro.svg" alt="Pro icon" />
                            <p>
                                <span className="text-primary-400 fw-semi-bold">
                                    {pro.name}
                                </span>
                                <span className="text-primary-900 fs-300">
                                    {billing === 'mo' ? (
                                        `$${pro.price.monthly}/mo`
                                    ) : (
                                        <>
                                            ${pro.price.yearly}/yr
                                            <span className="text-primary-400 fs-200 fw-semi-bold">
                                                {monthsOff} months free
                                            </span>
                                        </>
                                    )}
                                </span>
                            </p>
                            <input
                                type="radio"
                                className="plans-input"
                                name="plan"
                                id="pro"
                                value="pro"
                                onChange={formik.handleChange}
                            />
                        </label>
                    </li>
                </div>

                <li tabIndex={4}>
                    <ToggleWrapper />
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
