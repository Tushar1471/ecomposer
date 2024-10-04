import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

const LoaderBar: React.FC = () => {
    return (
        <div className="card w-full h-screen flex justify-center items-center">
            <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        </div>
    );
}

export default LoaderBar;
