import { cn } from '../../lib/utils';

export default function Button({ className, variant = 'primary', size = 'md', ...props }) {
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-hover shadow-sm',
        secondary: 'bg-secondary text-white hover:bg-orange-600 shadow-sm',
        outline: 'border-2 border-primary text-primary hover:bg-green-50',
        ghost: 'hover:bg-stone-100 text-stone-700',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
}
