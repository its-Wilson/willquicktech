import React from 'react';
import clsx from 'clsx';


export const Card = ({ children, className = '', ...props }) => {
    return (
        <div className={clsx('bg-white rounded-2xl shadow-md p-6', className)} {...props}>
            {children}
        </div>
    );
};


export const CardContent = ({ children, className = '', ...props }) => {
    return (
        <div className={clsx('p-4', className)} {...props}>
            {children}
        </div>
    );
};