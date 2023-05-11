import { useContext } from 'react';

import { FormContext } from '../../context/FormContext';

import { AddOns } from './formSteps/AddOns';
import { Confirmation } from './formSteps/Confirmation';
import { PersonalInfo } from './formSteps/PersonalInfo';
import { Plans } from './formSteps/Plans';
import { Success } from './formSteps/Success';
import { ButtonWrapper } from '../ui/ButtonWrapper';

export const MultiStepForm = () => {
    const { state } = useContext(FormContext);

    const todos = [2, 3, 4, 5];

    return (
        <div className="form-wrapper">
            {state.step === 1 ? (
                <PersonalInfo />
            ) : state.step === 2 ? (
                <Plans />
            ) : state.step === 3 ? (
                <AddOns />
            ) : state.step === 4 ? (
                <Confirmation />
            ) : (
                <Success />
            )}

            {todos.includes(state.step) && <ButtonWrapper />}
        </div>
    );
};
