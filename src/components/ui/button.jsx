import React from 'react';
import clsx from 'clsx';


export const Button = ({ children, size = 'md', className = '', ...props }) => {
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };


    return (
        <button
            className={clsx(
                'bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-colors',
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};