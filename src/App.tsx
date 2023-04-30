import './App.css';
import { MultiStepForm } from './components/form/MultiStepForm';

function App() {
    return (
        <>
            <div className="container">
                <nav className="form-tracker bg-accent-900"></nav>

                <main className="main bg-accent-300">
                    <MultiStepForm />
                </main>
            </div>
        </>
    );
}

export default App;
