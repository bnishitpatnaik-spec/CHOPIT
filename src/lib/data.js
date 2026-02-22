export const VEGETABLES = [
    {
        id: 'v1',
        name: 'Carrots',
        basePrice: 40,
        image: 'https://images.unsplash.com/photo-1447175008436-8123742fff02?auto=format&fit=crop&q=80&w=800',
        cuts: [
            { name: 'Whole Peeled', multiplier: 1.0 },
            { name: 'Diced', multiplier: 1.25 },
            { name: 'Round Slices', multiplier: 1.2 },
            { name: 'Julienne', multiplier: 1.5 },
            { name: 'Batons (Sticks)', multiplier: 1.4 }
        ]
    },
    {
        id: 'v2',
        name: 'Red Onions',
        basePrice: 30,
        image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=800',
        cuts: [
            { name: 'Whole Peeled', multiplier: 1.0 },
            { name: 'Diced (Fine)', multiplier: 1.3 },
            { name: 'Diced (Medium)', multiplier: 1.2 },
            { name: 'Sliced (Rings)', multiplier: 1.25 },
            { name: 'Biryani Slice', multiplier: 1.4 }
        ]
    },
    {
        id: 'v3',
        name: 'Potatoes',
        basePrice: 25,
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82a6b69d?auto=format&fit=crop&q=80&w=800',
        cuts: [
            { name: 'Whole Peeled', multiplier: 1.1 },
            { name: 'Cubed (Curry)', multiplier: 1.2 },
            { name: 'French Fries', multiplier: 1.4 },
            { name: 'Slices (Bajji)', multiplier: 1.25 }
        ]
    },
    {
        id: 'v4',
        name: 'Spinach (Palak)',
        basePrice: 60,
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800',
        cuts: [
            { name: 'Cleaned Whole', multiplier: 1.1 },
            { name: 'Finely Chopped', multiplier: 1.3 },
            { name: 'Roughly Chopped', multiplier: 1.15 }
        ]
    },
    {
        id: 'v5',
        name: 'Bell Peppers (Capsicum)',
        basePrice: 80,
        image: 'https://images.unsplash.com/photo-1563565375-f3fdf5efa23f?auto=format&fit=crop&q=80&w=800',
        cuts: [
            { name: 'Whole Cleaned', multiplier: 1.0 },
            { name: 'Diced', multiplier: 1.2 },
            { name: 'Julienne (Strips)', multiplier: 1.3 },
            { name: 'Rings', multiplier: 1.35 }
        ]
    },
    {
        id: 'v6',
        name: 'Cabbage',
        basePrice: 20,
        image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&q=80&w=800',
        cuts: [
            { name: 'Quartered', multiplier: 1.0 },
            { name: 'Shredded', multiplier: 1.25 },
            { name: 'Chopped', multiplier: 1.2 }
        ]
    },
    {
        id: 'v7',
        name: 'Tomatoes',
        basePrice: 40,
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800',
        cuts: [
            { name: 'Whole', multiplier: 1.0 },
            { name: 'Diced', multiplier: 1.2 },
            { name: 'Sliced', multiplier: 1.2 }
        ]
    },
    {
        id: 'v8',
        name: 'Cauliflower',
        basePrice: 45,
        image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3d54?auto=format&fit=crop&q=80&w=800',
        cuts: [
            { name: 'Florets Only', multiplier: 1.3 },
            { name: 'Grated (Rice)', multiplier: 1.5 }
        ]
    }
];

export const MOCK_JOBS = [
    {
        id: 'j1',
        vendor: 'Momos Corner',
        location: 'Sector 4, Market',
        coordinates: { lat: 28.5355, lng: 77.3910 },
        items: [
            { name: 'Cabbage', cut: 'Shredded', weight: '2kg' },
            { name: 'Onion', cut: 'Minced', weight: '1kg' }
        ],
        payout: 150,
        status: 'open',
        distance: '0.8 km'
    },
    {
        id: 'j2',
        vendor: 'Burger Point',
        location: 'DLF Phase 3',
        coordinates: { lat: 28.4908, lng: 77.0933 },
        items: [
            { name: 'Lettuce', cut: 'Whole Cleaned', weight: '500g' },
            { name: 'Tomatoes', cut: 'Sliced', weight: '1kg' },
            { name: 'Onion', cut: 'Rings', weight: '1kg' }
        ],
        payout: 120,
        status: 'open',
        distance: '1.2 km'
    }
];
