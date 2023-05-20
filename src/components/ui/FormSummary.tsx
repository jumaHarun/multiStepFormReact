import { useContext } from 'react';
import { FormContext } from '@/context/FormContext';
import { plansData, addOnsData } from '@/formInfo.json';

export const FormSummary = () => {
    const { plan, billing, addOns } = useContext(FormContext);

    const planText =
        plan === 'arcade' ? 'Arcade' : plan === 'advanced' ? 'Advanced' : 'Pro';
    const currPlan = plansData.plans.find((plan) => plan.name === planText);
    const billingText = billing === 'mo' ? 'Monthly' : 'Yearly';
    const planAmnt =
        billing === 'mo'
            ? `$${currPlan?.price.monthly}/mo`
            : `$${currPlan?.price.yearly}/yr`;
    const addons = addOnsData.inputs.filter((obj) =>
        addOns.includes(obj.value)
    );
    const totalAmnt = () => {
        let planAmnt =
            billing === 'yr' ? currPlan!.price.yearly : currPlan!.price.monthly;
        let addOnsAmnt = 0;

        for (let i = 0; i < addons.length; i++) {
            addOnsAmnt +=
                billing === 'yr'
                    ? addons[i].price.yearly
                    : addons[i].price.monthly;
        }

        if (billing === 'mo') {
            return `$${addOnsAmnt + planAmnt}/mo`;
        } else if (billing === 'yr') {
            return `$${addOnsAmnt + planAmnt}/yr`;
        }
    };

    return (
        <>
            <article className="summary bg-neutral-400">
                <div className="plan-details text-primary-400 fw-semi-bold flex">
                    <div>
                        <p>
                            {planText}({billingText})
                        </p>
                        <button className="change-plan-btn text-primary-900 fw-regular">
                            Change
                        </button>
                    </div>
                    <p>{planAmnt}</p>
                </div>
                <hr />
                <div className="addon-details">
                    {addons.map((el) => (
                        <div key={el.value} className="flex">
                            <p className="text-primary-900">{el.label}</p>

                            <p className="text-primary-400">
                                {billing === 'mo'
                                    ? `$${el.price.monthly}/mo`
                                    : `$${el.price.yearly}/yr`}
                            </p>
                        </div>
                    ))}
                </div>
            </article>
            <section className="total-amount bg-neutral-900 flex">
                <p className="text-primary-900">
                    Total (per {billing === 'mo' ? 'month' : 'year'})
                </p>

                <p className="text-accent-500 fw-semi-bold">+{totalAmnt()}</p>
            </section>
        </>
    );
};
