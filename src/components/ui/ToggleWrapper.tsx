type Props = {
    isChecked: boolean;
    setIsChecked: (isChecked: boolean) => void;
};

export const ToggleWrapper = ({ isChecked, setIsChecked }: Props) => {
    return (
        <div className="toggle-wrapper flex bg-neutral-400">
            <p
                className={`${
                    isChecked ? 'text-primary-900' : 'text-primary-400'
                } fw-semi-bold`}
            >
                Monthly
            </p>

            <label className="switch">
                <input
                    type="checkbox"
                    className="toggle"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <span className="slider bg-primary-400"></span>
            </label>

            <p
                className={`${
                    isChecked ? 'text-primary-400' : 'text-primary-900'
                } fw-semi-bold`}
            >
                Yearly
            </p>
        </div>
    );
};
