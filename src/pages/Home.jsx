import { Link } from 'react-router-dom';
import { ShoppingBag, Truck } from 'lucide-react';

export default function Home() {
    return (
        <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-8">
                <div>
                    <h1 className="text-4xl font-bold text-primary tracking-tight">Chopit</h1>
                    <p className="mt-2 text-stone-600">Fresh cut vegetables, delivered.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <Link
                        to="/vendor"
                        className="group relative flex items-center justify-between p-6 bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-primary hover:shadow-md transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                                <ShoppingBag className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-900">I'm a Vendor</h3>
                                <p className="text-sm text-gray-500">Order chopped veggies</p>
                            </div>
                        </div>
                    </Link>

                    <Link
                        to="/partner"
                        className="group relative flex items-center justify-between p-6 bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-secondary hover:shadow-md transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                                <Truck className="w-6 h-6 text-secondary" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-900">I'm a Partner</h3>
                                <p className="text-sm text-gray-500">Earn by cutting & delivering</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
