import { sideBar } from '../../formInfo.json';
import { StepTracker } from '../ui/StepTracker';

export const FormTracker = () => {
    return (
        <div className="sidebar flex">
            {sideBar.map((item) => {
                const id = crypto.randomUUID();

                return <StepTracker key={id} stepItem={item} />;
            })}
        </div>
    );
};
