import { personalInfoObj } from '@/types';
import { useContext } from 'react';
import { useFormik } from 'formik';

import { personalInfoData } from '@/formInfo.json';
import { FormContext } from '@context/FormContext';
import { StepHeader } from '@uicomponents/StepHeader';

export const PersonalInfo = () => {
    const { title, desc, inputs } = personalInfoData;
    const { email, name, phone } = inputs;

    const { handleNext } = useContext(FormContext);

    const validate = (values: personalInfoObj) => {
        const errors = {} as personalInfoObj;

        if (!values.name) {
            errors.name = 'This field is required';
        } else if (values.name.length > 35) {
            errors.name = 'Must be less than 35 characters';
        }

        if (!values.email) {
            errors.email = 'This field is required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }

        if (!values.phoneNumber) {
            errors.phoneNumber = 'This field is required';
        } else if (
            !/^\d{10,}$/.test(
                values.phoneNumber.replace(/[\s()+\-\.]|ext/gi, '')
            )
        ) {
            errors.phoneNumber = 'Invalid phone number';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
        },
        validate,
        onSubmit: (values) => {
            handleNext(values);
        },
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="step-wrapper bg-neutral-900"
        >
            <StepHeader key={crypto.randomUUID()} title={title} desc={desc} />

            <ul role="list">
                <li className="personal-info-list-item">
                    <label>
                        <span className="text-primary-400">{name.label}</span>

                        {formik.errors.name && formik.touched.name ? (
                            <span className="error-text text-accent-900">
                                {formik.errors.name}
                            </span>
                        ) : null}

                        <input
                            type="text"
                            name="name"
                            placeholder={name.placeholder}
                            title="Please enter your full name."
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className={
                                formik.errors.name && formik.touched.name
                                    ? 'error'
                                    : ''
                            }
                        />
                    </label>
                </li>

                <li className="personal-info-list-item">
                    <label>
                        <span className="text-primary-400">{email.label}</span>

                        {formik.errors.email && formik.touched.email ? (
                            <span className="error-text text-accent-900">
                                {formik.errors.email}
                            </span>
                        ) : null}

                        <input
                            type="email"
                            name="email"
                            placeholder={email.placeholder}
                            title="Please enter your email address."
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={
                                formik.errors.email && formik.touched.email
                                    ? 'error'
                                    : ''
                            }
                        />
                    </label>
                </li>

                <li className="personal-info-list-item">
                    <label>
                        <span className="text-primary-400">{phone.label}</span>

                        {formik.errors.phoneNumber &&
                        formik.touched.phoneNumber ? (
                            <span className="error-text text-accent-900">
                                {formik.errors.phoneNumber}
                            </span>
                        ) : null}

                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder={phone.placeholder}
                            title="Please enter your phone number ."
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber}
                            className={
                                formik.errors.phoneNumber &&
                                formik.touched.phoneNumber
                                    ? 'error'
                                    : ''
                            }
                        />
                    </label>
                </li>

                <li className="button-wrapper bg-neutral-900 fs-button flex">
                    <button
                        type="submit"
                        className="btn next-btn bg-primary-400 text-neutral-900"
                    >
                        Next Step
                    </button>
                </li>
            </ul>
        </form>
    );
};
