import { personalInfoData } from '../../../formInfo.json';
import { StepHeader } from '../../ui/StepHeader';

export const PersonalInfo = () => {
    const { title, desc, inputs } = personalInfoData;

    console.log(inputs);

    return (
        <div>
            <StepHeader key={crypto.randomUUID()} title={title} desc={desc} />
        </div>
    );
};
