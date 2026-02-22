import { Link, useLocation } from 'react-router-dom';
import { ShoppingBasket, Truck, Menu, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import Button from './ui/Button';
import { useCart } from '../lib/CartContext';

export default function Navbar({ mode }) { // mode: 'vendor' | 'partner'
    const location = useLocation();
    const isVendor = mode === 'vendor';

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div className={cn(
                            "p-2 rounded-lg",
                            isVendor ? "bg-green-100 text-primary" : "bg-orange-100 text-secondary"
                        )}>
                            {isVendor ? <ShoppingBasket className="w-6 h-6" /> : <Truck className="w-6 h-6" />}
                        </div>
                        <span className="font-bold text-xl tracking-tight text-stone-900">
                            Chopit <span className={cn("text-sm font-medium", isVendor ? "text-primary" : "text-secondary")}>
                                {isVendor ? 'Vendor' : 'Partner'}
                            </span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Link to={`/${mode}`} className="text-sm font-medium text-stone-600 hover:text-stone-900">
                            Dashboard
                        </Link>
                        <Link to={`/${mode}/orders`} className="text-sm font-medium text-stone-600 hover:text-stone-900">
                            {isVendor ? 'My Orders' : 'Active Jobs'}
                        </Link>
                        {isVendor && (
                            <CartButton />
                        )}
                        {!isVendor && (
                            <div className="flex items-center gap-2 text-sm font-medium text-stone-600">
                                <span className="text-secondary font-bold">₹0.00</span> Earned
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

function CartButton() {
    const { count } = useCart();
    return (
        <Link to="/vendor/cart">
            <Button size="sm" variant="primary">
                Cart ({count})
            </Button>
        </Link>
    );
}
