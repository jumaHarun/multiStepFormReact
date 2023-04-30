import { ButtonWrapper } from '../ui/ButtonWrapper';
import { AddOns } from './fomSteps/AddOns';
import { Confirmation } from './fomSteps/Confirmation';
import { PersonalInfo } from './fomSteps/PersonalInfo';
import { Plans } from './fomSteps/Plans';
import { Success } from './fomSteps/Success';

export const MultiStepForm = () => {
    return (
        <>
            <PersonalInfo />
            <Plans />
            <AddOns />
            <Confirmation />
            <Success />
            <ButtonWrapper/>
        </>
    );
};
