import '@/App.css';
import { FormProvider } from '@context/FormContext';
import { FormTracker } from '@formcomponents/FormTracker';
import { MultiStepForm } from '@formcomponents/MultiStepForm';

function App() {
    
    return (
        <FormProvider>
            <div className="container grid">
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
