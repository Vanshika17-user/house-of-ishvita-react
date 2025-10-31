// Ethnic Wear Page - Complete Collection
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const ethnicProducts: Product[] = [
  {
    id: 101,
    name: 'Royal Blue Silk Saree',
    price: 4299,
    image: 'https://i.pinimg.com/1200x/bc/69/92/bc69923c1dfeb31e5f59d58574f30574.jpg',
    category: 'ethnic',
    description: 'Luxurious silk saree with golden border and intricate embroidery',
  },
  {
    id: 102,
    name: 'Pink Anarkali Suit',
    price: 3799,
    image: 'https://i.pinimg.com/1200x/81/b6/94/81b694c0e6d699a1b766a43f5aedc18c.jpg',
    category: 'ethnic',
    description: 'Beautiful pink anarkali with heavy embellishments',
  },
  {
    id: 103,
    name: 'Maroon Lehenga Choli',
    price: 5499,
    image: 'https://i.pinimg.com/736x/8a/6c/c1/8a6cc1317c0e27138e3295283719acbc.jpg',
    category: 'ethnic',
    description: 'Stunning maroon bridal lehenga with zari work',
  },
  {
    id: 104,
    name: 'Teal Green Kurta Set',
    price: 2499,
    image: 'https://i.pinimg.com/1200x/57/a7/43/57a743aa3b684095ed84e1edeb1ddd1b.jpg',
    category: 'ethnic',
    description: 'Elegant kurta pajama set for festive occasions',
  },
  {
    id: 105,
    name: 'Golden Banarasi Saree',
    price: 6999,
    image: 'https://i.pinimg.com/736x/b5/25/49/b52549588678a2a1d3e72dc9cc8bf43b.jpg',
    category: 'ethnic',
    description: 'Premium Banarasi silk saree with pure gold threads',
  },
  {
    id: 106,
    name: 'Emerald Sharara Set',
    price: 4599,
    image: 'https://i.pinimg.com/736x/c9/5b/0a/c95b0a52ff276189db8159c0485a677b.jpg',
    category: 'ethnic',
    description: 'Contemporary sharara with mirror work',
  },
  {
    id: 107,
    name: 'Red Bridal Lehenga',
    price: 8999,
    image: 'https://i.pinimg.com/736x/1c/19/2d/1c192dbd135469b2127da098594af55d.jpg',
    category: 'ethnic',
    description: 'Grand bridal lehenga with heavy embroidery',
  },
  {
    id: 108,
    name: 'Peach Palazzo Suit',
    price: 3299,
    image: 'https://i.pinimg.com/1200x/c6/07/83/c60783254dcc875ed50c7cef1d229420.jpg',
    category: 'ethnic',
    description: 'Trendy palazzo suit perfect for casual ethnic wear',
  },
];

const EthnicWear = () => {
  const [, setLoaded] = useState(false);
  const [filter, setFilter] = useState<'all' | 'sarees' | 'lehengas' | 'suits'>('all');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortByPrice, setSortByPrice] = useState(false);
  
  // Preload all product images immediately
  useEffect(() => {
    ethnicProducts.forEach(product => {
      const img = new Image();
      img.src = product.image;
    });
  }, []);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  // Filter products based on selection
  const getFilteredProducts = () => {
    let filtered = [...ethnicProducts];
    
    if (filter === 'sarees') {
      filtered = filtered.filter(p => p.name.toLowerCase().includes('saree'));
    } else if (filter === 'lehengas') {
      filtered = filtered.filter(p => p.name.toLowerCase().includes('lehenga'));
    } else if (filter === 'suits') {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes('suit') || 
        p.name.toLowerCase().includes('kurta') || 
        p.name.toLowerCase().includes('sharara') ||
        p.name.toLowerCase().includes('palazzo')
      );
    }
    
    if (sortByPrice) {
      filtered.sort((a, b) => a.price - b.price);
    }
    
    return filtered;
  };
  
  const filteredProducts = getFilteredProducts();
  
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="min-h-[70vh] bg-cover bg-center relative flex items-center justify-center pt-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="hero-title mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-2 drop-shadow-2xl">
              Ethnic Wear
            </h1>
            <h1 className="text-3xl md:text-5xl font-light text-primary drop-shadow-lg">
              Traditional Elegance
            </h1>
          </div>
          
          <p className="text-xl md:text-3xl max-w-3xl mx-auto mb-8 drop-shadow-lg">
            Celebrate your heritage with our exquisite ethnic collection
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/40">
              🪔 Traditional Craftsmanship
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/40">
              ✨ Premium Fabrics
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/40">
              💫 Handcrafted Details
            </span>
          </div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 text-textLight">
              <span className="font-semibold text-secondary text-2xl">{filteredProducts.length}</span> 
              <span className="text-lg">traditional pieces</span>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <button 
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full transition-colors shadow-md ${
                  filter === 'all' ? 'bg-primary text-white' : 'bg-lightBg text-secondary hover:bg-primary hover:text-white'
                }`}
              >
                All Styles
              </button>
              <button 
                onClick={() => setFilter('sarees')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'sarees' ? 'bg-primary text-white' : 'bg-lightBg text-secondary hover:bg-primary hover:text-white'
                }`}
              >
                Sarees
              </button>
              <button 
                onClick={() => setFilter('lehengas')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'lehengas' ? 'bg-primary text-white' : 'bg-lightBg text-secondary hover:bg-primary hover:text-white'
                }`}
              >
                Lehengas
              </button>
              <button 
                onClick={() => setFilter('suits')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'suits' ? 'bg-primary text-white' : 'bg-lightBg text-secondary hover:bg-primary hover:text-white'
                }`}
              >
                Suits
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="bg-gradient-to-b from-lightBg to-white py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Custom Tailoring Available
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your ethnic wear perfectly tailored to your measurements
          </p>
          <button className="px-10 py-4 bg-white text-secondary rounded-full hover:bg-primary hover:text-white transition-all font-semibold text-lg shadow-xl transform hover:scale-105">
            Book Tailoring Service
          </button>
        </div>
      </section>
    </div>
  );
};

export default EthnicWear;
