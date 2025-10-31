// Casual Wear Page - Complete Collection
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const casualProducts: Product[] = [
  {
    id: 301,
    name: 'Denim Jacket & Jeans',
    price: 2999,
    image: 'https://i.pinimg.com/1200x/f1/10/0f/f1100ff7c8548cece88bdd32dc50bc18.jpg',
    category: 'casual',
    description: 'Classic denim on denim look for everyday style',
  },
  {
    id: 302,
    name: 'Floral Summer Dress',
    price: 1899,
    image: 'https://i.pinimg.com/736x/dd/76/f1/dd76f15038b45a8c5dbc75a21feff55b.jpg',
    category: 'casual',
    description: 'Light and breezy floral dress for summer',
  },
  {
    id: 303,
    name: 'White T-Shirt & Joggers',
    price: 1499,
    image: 'https://i.pinimg.com/1200x/02/de/52/02de526e02a663663edd019546da0a6b.jpg',
    category: 'casual',
    description: 'Comfortable athleisure for casual outings',
  },
  {
    id: 304,
    name: 'Striped Crop Top',
    price: 999,
    image: 'https://i.pinimg.com/1200x/e7/38/84/e73884b9aa207e9fbfa4a7200897c983.jpg',
    category: 'casual',
    description: 'Trendy striped crop top perfect for weekends',
  },
  {
    id: 305,
    name: 'Oversized Sweater',
    price: 2299,
    image: 'https://i.pinimg.com/1200x/82/5e/c8/825ec8a5c53b4c83349fe8fe06e48519.jpg',
    category: 'casual',
    description: 'Cozy oversized sweater for chilly days',
  },
  {
    id: 306,
    name: 'Boho Maxi Dress',
    price: 2799,
    image: 'https://i.pinimg.com/736x/9c/a3/57/9ca357216dadb92540d70e54429f9e83.jpg',
    category: 'casual',
    description: 'Bohemian style maxi dress with print',
  },
  {
    id: 307,
    name: 'Casual Jumpsuit',
    price: 2599,
    image: 'https://i.pinimg.com/736x/64/94/a1/6494a1eadb1c5ce1b5c600a51893a1ad.jpg',
    category: 'casual',
    description: 'Easy-to-wear jumpsuit for effortless style',
  },
  {
    id: 308,
    name: 'Cotton Shirt Dress',
    price: 1999,
    image: 'https://i.pinimg.com/736x/69/9b/87/699b870f829349e5a9a6315a33bc1be8.jpg',
    category: 'casual',
    description: 'Versatile cotton shirt dress for any occasion',
  },
];

const Casual = () => {
  const [, setLoaded] = useState(false);
  const [filter, setFilter] = useState<'all' | 'dresses' | 'tops' | 'bottoms'>('all');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortByPrice, setSortByPrice] = useState(false);
  
  // Preload all product images immediately
  useEffect(() => {
    casualProducts.forEach(product => {
      const img = new Image();
      img.src = product.image;
    });
  }, []);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  // Filter products based on selection
  const getFilteredProducts = () => {
    let filtered = [...casualProducts];
    
    if (filter === 'dresses') {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes('dress') || 
        p.name.toLowerCase().includes('jumpsuit')
      );
    } else if (filter === 'tops') {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes('top') || 
        p.name.toLowerCase().includes('t-shirt') || 
        p.name.toLowerCase().includes('sweater') ||
        p.name.toLowerCase().includes('jacket')
      );
    } else if (filter === 'bottoms') {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes('jeans') || 
        p.name.toLowerCase().includes('joggers')
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="hero-title mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-2 drop-shadow-2xl">
              Casual Chic
            </h1>
            <h1 className="text-3xl md:text-5xl font-light text-primary drop-shadow-lg">
              Everyday Comfort
            </h1>
          </div>
          
          <p className="text-xl md:text-3xl max-w-3xl mx-auto mb-8 drop-shadow-lg">
            Effortlessly stylish pieces for your everyday wardrobe
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/40">
              👕 Comfortable Fabrics
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/40">
              ✨ Trendy Designs
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/40">
              🌟 Versatile Styles
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
              <span className="text-lg">casual pieces</span>
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
                onClick={() => setFilter('dresses')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'dresses' ? 'bg-primary text-white' : 'bg-lightBg text-secondary hover:bg-primary hover:text-white'
                }`}
              >
                Dresses
              </button>
              <button 
                onClick={() => setFilter('tops')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'tops' ? 'bg-primary text-white' : 'bg-lightBg text-secondary hover:bg-primary hover:text-white'
                }`}
              >
                Tops
              </button>
              <button 
                onClick={() => setFilter('bottoms')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'bottoms' ? 'bg-primary text-white' : 'bg-lightBg text-secondary hover:bg-primary hover:text-white'
                }`}
              >
                Bottoms
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
            Build Your Capsule Wardrobe
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Learn how to create a versatile wardrobe with our style guide
          </p>
          <button className="px-10 py-4 bg-white text-secondary rounded-full hover:bg-primary hover:text-white transition-all font-semibold text-lg shadow-xl transform hover:scale-105">
            Download Style Guide
          </button>
        </div>
      </section>
    </div>
  );
};

export default Casual;
