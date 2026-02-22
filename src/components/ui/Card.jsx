import { cn } from '../../lib/utils';

export function Card({ className, ...props }) {
    return (
        <div
            className={cn(
                'bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden',
                className
            )}
            {...props}
        />
    );
}

export function CardContent({ className, ...props }) {
    return <div className={cn('p-4', className)} {...props} />;
}
