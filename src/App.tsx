import './App.css';
import { MultiStepForm } from './components/form/MultiStepForm';
import { FormProvider } from './context/FormContext';

function App() {
    return (
        <FormProvider>
            <div className="container">
                <nav className="form-tracker bg-accent-900"></nav>

                <main className="main bg-accent-300">
                    <MultiStepForm />
                </main>
            </div>
        </FormProvider>
    );
}

export default App;
