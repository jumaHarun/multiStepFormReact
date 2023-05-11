type Props = {
    title: string;
    desc: string;
};

export const StepHeader = ({ title, desc }: Props) => {
    return (
        <>
            <h1 className="text-primary-400 fs-primary-heading fw-bold">
                {title}
            </h1>
            <p className="text-primary-900">{desc}</p>
        </>
    );
};
