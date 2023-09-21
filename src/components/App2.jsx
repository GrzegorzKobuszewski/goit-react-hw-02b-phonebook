/*import styles from './App.module.css';
import { useState } from 'react';

import InputComponent from './Example/InputComponent';
import LoginForm from './Example/LoginForm';
import Toggle from './Example/Toggle';
import Counter1 from './Example/Counter1';
import Counter2 from './Example/Counter2';*/
import ErrorBoundary from './Example/ErrorBoundary';
import SignUpForm from './Example/SignUpForm';

export function App2() {

    return (
        <div>
            <ErrorBoundary>
                <SignUpForm onSubmit={values => console.log(values)}/>
            </ErrorBoundary>
        </div>
    );
}