import { sideBar } from '../../formInfo.json';
import { StepTracker } from '../ui/StepTracker';

export const FormTracker = () => {
    const html = sideBar.map((item) => {
        const id = crypto.randomUUID();

        return <StepTracker key={id} stepItem={item} />;
    });

    return <div className="sidebar flex">{html}</div>;
};
