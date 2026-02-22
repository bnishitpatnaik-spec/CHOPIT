import { Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import Button from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Link } from 'react-router-dom';

export default function CartPage() {
    const { items, removeFromCart, total } = useCart();

    if (items.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-xl font-bold text-stone-900 mb-4">Your cart is empty</h2>
                <Link to="/vendor">
                    <Button>Browse Vegetables</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
                <h1 className="text-2xl font-bold text-stone-900 mb-6">Shopping Cart</h1>

                {items.map((item) => (
                    <Card key={`${item.id}-${item.cut}`} className="flex items-center p-4 gap-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />

                        <div className="flex-grow">
                            <h3 className="font-bold text-stone-900">{item.name}</h3>
                            <p className="text-sm text-stone-500">Cut: <span className="font-medium text-stone-700">{item.cut}</span></p>
                            <div className="text-sm text-stone-500 mt-1">₹{item.pricePerKg}/kg</div>
                        </div>

                        <div className="text-right">
                            <div className="font-bold text-lg mb-2">₹{item.pricePerKg * item.quantity}</div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-stone-500">Qty: {item.quantity}kg</span>
                                <button
                                    onClick={() => removeFromCart(item.id, item.cut)}
                                    className="text-red-500 hover:text-red-600 p-1"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                    <h3 className="text-lg font-bold text-stone-900 mb-4">Order Summary</h3>

                    <div className="space-y-2 mb-6 text-stone-600">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹{total}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Processing Fee</span>
                            <span>₹20</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery</span>
                            <span className="text-green-600">Free</span>
                        </div>
                        <div className="border-t border-stone-200 pt-2 mt-2 flex justify-between font-bold text-stone-900 text-lg">
                            <span>Total</span>
                            <span>₹{total + 20}</span>
                        </div>
                    </div>

                    <Button className="w-full" size="lg">
                        Checkout <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <p className="text-xs text-center text-stone-400 mt-4">
                        Secure payments enabled
                    </p>
                </Card>
            </div>
        </div>
    );
}
