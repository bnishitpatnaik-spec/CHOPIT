import { useState } from 'react';
import { Plus } from 'lucide-react';
import { VEGETABLES } from '../../lib/data';
import Button from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

import { useCart } from '../../lib/CartContext';

export default function VendorDashboard() {
    const { addToCart } = useCart();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-stone-900">Marketplace</h1>
                    <p className="text-stone-500">Fresh vegetables at unbeatable prices.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {VEGETABLES.map((veg) => (
                    <VegetableCard key={veg.id} veg={veg} onAdd={addToCart} />
                ))}
            </div>
        </div>
    );
}

function VegetableCard({ veg, onAdd }) {
    const [selectedCut, setSelectedCut] = useState(veg.cuts[0]);

    // Calculate dynamic price
    const currentPrice = Math.round(veg.basePrice * selectedCut.multiplier);

    return (
        <Card className="flex flex-col h-full group hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={veg.image}
                    alt={veg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-sm font-bold text-primary shadow-sm">
                    ₹{currentPrice}/kg
                </div>
            </div>

            <div className="p-4 flex flex-col flex-grow gap-4">
                <div>
                    <h3 className="text-lg font-bold text-stone-900">{veg.name}</h3>
                    <div className="flex justify-between items-center text-sm text-stone-500">
                        <span>Base: ₹{veg.basePrice}/kg</span>
                    </div>
                </div>

                <div className="mt-auto space-y-3">
                    <div>
                        <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Cut Style</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {veg.cuts.map((cut) => (
                                <button
                                    key={cut.name}
                                    onClick={() => setSelectedCut(cut)}
                                    className={`text-xs px-2 py-1 rounded-full border transition-all ${selectedCut.name === cut.name
                                        ? 'bg-green-50 border-primary text-primary font-medium'
                                        : 'border-stone-200 text-stone-600 hover:border-stone-300'
                                        }`}
                                >
                                    {cut.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-stone-100">
                        <Button
                            className="w-full flex justify-between items-center"
                            size="sm"
                            onClick={() => onAdd({ ...veg, pricePerKg: currentPrice }, selectedCut.name)}
                        >
                            <span className="flex items-center"><Plus className="w-4 h-4 mr-1" /> Add</span>
                            <span className="opacity-90 text-xs">₹{currentPrice}/kg</span>
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
}
