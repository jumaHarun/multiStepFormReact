export const Success = () => {
    return (
        <section className="success step-wrapper bg-neutral-900">
            <img src="/images/icon-thank-you.svg" alt="Thank you icon" />

            <h1 className="fs-primary-heading fw-bold">Thank you!</h1>
            <p className="text-primary-900">
                <span>Thanks for confirming your subscription!</span>

                <span>
                    We hope you have fun using our platform. If you ever need
                    support, please feel free to email us at
                    support@loremgaming.com.
                </span>
            </p>
        </section>
    );
};
