import { useContext } from 'react';
import { FormContext } from '@context/FormContext';
import { PersonalInfo } from '@formSteps/PersonalInfo';
import { Plans } from '@formSteps/Plans';
import { AddOns } from '@formSteps/AddOns';
import { Confirmation } from '@formSteps/Confirmation';
import { Success } from '@formSteps/Success';

export const MultiStepForm = () => {
    const { state } = useContext(FormContext);

    return (
        <div className="form-wrapper">
            {state?.step === 1 ? (
                <PersonalInfo />
            ) : state?.step === 2 ? (
                <Plans />
            ) : state?.step === 3 ? (
                <AddOns />
            ) : state?.step === 4 ? (
                <Confirmation />
            ) : (
                <Success />
            )}
        </div>
    );
};
