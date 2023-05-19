import { useContext } from 'react';
import { FormContext } from '@/context/FormContext';

export const ToggleWrapper = () => {
    const { billing, setBilling } = useContext(FormContext);

    const handleToggle = () => {
        return billing === 'mo' ? setBilling('yr') : setBilling('mo');
    };

    return (
        <div className="toggle-wrapper flex bg-neutral-400">
            <p
                className={`${
                    billing === 'mo' ? 'text-primary-400' : 'text-primary-900'
                } fw-semi-bold`}
            >
                Monthly
            </p>

            <label className="switch">
                <input
                    type="checkbox"
                    className="toggle"
                    checked={billing === 'yr'}
                    onChange={handleToggle}
                />
                <span className="slider bg-primary-400"></span>
            </label>

            <p
                className={`${
                    billing === 'yr' ? 'text-primary-400' : 'text-primary-900'
                } fw-semi-bold`}
            >
                Yearly
            </p>
        </div>
    );
};
