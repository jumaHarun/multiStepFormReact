import { useContext } from 'react';
import { FormContext } from '@context/FormContext';
import { PersonalInfo } from '@formSteps/PersonalInfo';
import { Plans } from '@formSteps/Plans';
import { AddOns } from '@formSteps/AddOns';
import { Confirmation } from '@formSteps/Confirmation';
import { Success } from '@formSteps/Success';

export const MultiStepForm = () => {
    const { currentStep, isSuccess } = useContext(FormContext);

    if (isSuccess) {
        return <Success />;
    }
    
    return (
        <div className="form-wrapper">
            {currentStep === 1 ? (
                <PersonalInfo />
            ) : currentStep === 2 ? (
                <Plans />
            ) : currentStep === 3 ? (
                <AddOns />
            ) : currentStep === 4 ? (
                <Confirmation />
            ) : null}
        </div>
    );
};
