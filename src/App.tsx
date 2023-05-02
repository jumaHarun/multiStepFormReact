import './App.css';

import { FormProvider } from './context/FormContext';

import { FormTracker } from './components/form/FormTracker';
import { MultiStepForm } from './components/form/MultiStepForm';

function App() {
    return (
        <FormProvider>
            <div className="container grid form-wrapper">
                <nav className="form-tracker">
                    <FormTracker />
                </nav>

                <main className="main">
                    <MultiStepForm />
                </main>
            </div>
        </FormProvider>
    );
}

export default App;
