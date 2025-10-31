// Party Wear Page - Same content as your original party.html
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

// Product data for Party Wear - All unique female fashion images
const partyWearProducts: Product[] = [
  {
    id: 1,
    name: 'Ruby Red Evening Gown',
    price: 3499,
    image: 'https://i.pinimg.com/736x/27/f4/24/27f4244a3cdd1f7bcc31266a46866e2f.jpg',
    category: 'party',
    description: 'Stunning red evening gown with sequin details and elegant silhouette',
  },
  {
    id: 2,
    name: 'Midnight Black Sequined Dress',
    price: 2899,
    image: 'https://i.pinimg.com/736x/2a/06/b0/2a06b04f43fdee5c1a0cfc9295798136.jpg',
    category: 'party',
    description: 'Elegant black dress with full sequin coverage for glamorous nights',
  },
  {
    id: 3,
    name: 'Gold Metallic Goddess Gown',
    price: 3199,
    image: 'https://i.pinimg.com/1200x/76/a8/86/76a8860d2ad620c9b367547be194ecce.jpg',
    category: 'party',
    description: 'Glamorous gold metallic party dress with statement shoulders',
  },
  {
    id: 4,
    name: 'Silver Shimmer Cocktail Dress',
    price: 2499,
    image: 'https://i.pinimg.com/736x/9a/b8/8f/9ab88ff2ced1710b2bcd930d5d406989.jpg',
    category: 'party',
    description: 'Chic silver cocktail dress perfect for upscale parties',
  },
  {
    id: 5,
    name: 'Emerald Dream Gown',
    price: 3899,
    image: 'https://i.pinimg.com/1200x/0a/f8/54/0af8545879b5416238e45d0e4582357f.jpg',
    category: 'party',
    description: 'Luxurious emerald green evening gown with flowing train',
  },
  {
    id: 6,
    name: 'Royal Purple Velvet Dress',
    price: 2699,
    image: 'https://i.pinimg.com/1200x/6e/ff/7e/6eff7ebe6721d23b9b8ef5ad77670728.jpg',
    category: 'party',
    description: 'Rich purple velvet party dress with modern cut',
  },
  {
    id: 7,
    name: 'Rose Gold Mermaid Gown',
    price: 4199,
    image: 'https://i.pinimg.com/1200x/a4/3c/45/a43c454c0e21015934459ec211f4eef6.jpg',
    category: 'party',
    description: 'Breathtaking rose gold mermaid style evening dress',
  },
  {
    id: 8,
    name: 'Sapphire Blue Cocktail Dress',
    price: 2999,
    image: 'https://i.pinimg.com/736x/88/7c/8d/887c8d28daf179663ef304ee2ef10311.jpg',
    category: 'party',
    description: 'Elegant sapphire blue dress with intricate beadwork',
  },
];

const PartyWear = () => {
  const [, setLoaded] = useState(false);
  const [filter, setFilter] = useState<'all' | 'gowns' | 'cocktail'>('all');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortByPrice, setSortByPrice] = useState(false);
  
  // Preload all product images immediately
  useEffect(() => {
    partyWearProducts.forEach(product => {
      const img = new Image();
      img.src = product.image;
    });
  }, []);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  // Filter products based on selection
  const getFilteredProducts = () => {
    let filtered = [...partyWearProducts];
    
    if (filter === 'gowns') {
      filtered = filtered.filter(p => p.name.toLowerCase().includes('gown'));
    } else if (filter === 'cocktail') {
      filtered = filtered.filter(p => p.name.toLowerCase().includes('cocktail') || p.name.toLowerCase().includes('dress'));
    }
    
    if (sortByPrice) {
      filtered.sort((a, b) => a.price - b.price);
    }
    
    return filtered;
  };
  
  const filteredProducts = getFilteredProducts();
  
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="min-h-[70vh] bg-cover bg-center bg-fixed relative flex items-center justify-center pt-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=60&auto=format)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="hero-title mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 drop-shadow-2xl">
              Party Wear Collection
            </h1>
            <p className="text-2xl md:text-4xl font-light text-primary drop-shadow-lg">
              Glamorous Styles for Every Occasion
            </p>
          </div>
          
          <p className="hero-subtitle text-xl md:text-3xl max-w-3xl mx-auto mb-8 drop-shadow-lg">
            Glamorous attire for unforgettable nights
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/40">
              ✨ Premium Quality
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/40">
              🎉 Trending Styles
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/40">
              💎 Exclusive Designs
            </span>
          </div>
        </div>
      </section>
      
      {/* Filter & Sort Section */}
      <section className="py-8 px-4 bg-white border-b-4 border-gray-300">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="font-bold text-black text-4xl">{filteredProducts.length}</span> 
              <span className="text-xl font-bold text-gray-900">stunning pieces in collection</span>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <button 
                onClick={() => setFilter('all')}
                className={`px-8 py-3 rounded-full transition-all shadow-xl font-bold text-base ${
                  filter === 'all' ? 'bg-red-600 text-white' : 'bg-gray-900 text-white hover:bg-red-600'
                }`}
              >
                All Styles
              </button>
              <button 
                onClick={() => setFilter('gowns')}
                className={`px-8 py-3 rounded-full transition-all shadow-lg font-bold text-base ${
                  filter === 'gowns' ? 'bg-red-600 text-white' : 'bg-gray-900 text-white hover:bg-red-600'
                }`}
              >
                Evening Gowns
              </button>
              <button 
                onClick={() => setFilter('cocktail')}
                className={`px-8 py-3 rounded-full transition-all shadow-lg font-bold text-base ${
                  filter === 'cocktail' ? 'bg-red-600 text-white' : 'bg-gray-900 text-white hover:bg-red-600'
                }`}
              >
                Cocktail Dresses
              </button>
              <button 
                onClick={() => setSortByPrice(!sortByPrice)}
                className={`px-8 py-3 rounded-full transition-all shadow-lg font-bold text-base ${
                  sortByPrice ? 'bg-red-600 text-white' : 'bg-gray-900 text-white hover:bg-red-600'
                }`}
              >
                Sort by Price {sortByPrice && '↑'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gradient-to-b from-lightBg to-white py-20 px-4" style={{ backgroundColor: '#ffffff', opacity: 1 }}>
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 uppercase tracking-tight" style={{ color: '#111827', fontWeight: 900, opacity: 1 }}>
            Featured Party Wear
          </h2>
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ opacity: 1 }}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card" style={{ opacity: 1, visibility: 'visible' }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Other Categories Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-black text-center mb-4 text-gray-900">Explore More Styles</h2>
          <p className="text-center text-gray-600 text-xl mb-12 font-semibold">Browse our complete collections</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/party-wear" className="group">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:-translate-y-4">
                <img
                  src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=60&auto=format&fit=crop&fm=webp"
                  alt="Party Wear"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-3xl font-bold mb-2">Party Wear</h3>
                  <p className="text-white/90 text-sm">Glamorous evening styles</p>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Trending
                </div>
              </div>
            </Link>
            
            <Link to="/ethnic-wear" className="group">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:-translate-y-4">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=60&auto=format&fit=crop&fm=webp"
                  alt="Ethnic Wear"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-3xl font-bold mb-2">Ethnic Wear</h3>
                  <p className="text-white/90 text-sm">Traditional elegance</p>
                </div>
              </div>
            </Link>
            
            <Link to="/professional" className="group">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:-translate-y-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=60&auto=format&fit=crop&fm=webp"
                  alt="Professional"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-3xl font-bold mb-2">Professional</h3>
                  <p className="text-white/90 text-sm">Corporate chic</p>
                </div>
              </div>
            </Link>
            
            <Link to="/casual" className="group">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:-translate-y-4">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=60&auto=format&fit=crop&fm=webp"
                  alt="Casual"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-3xl font-bold mb-2">Casual Chic</h3>
                  <p className="text-white/90 text-sm">Everyday comfort</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase">
            Need Styling Help?
          </h2>
          <p className="text-2xl text-gray-200 mb-8 font-semibold">
            Our style experts are here to help you find the perfect outfit for your special occasion
          </p>
          <button className="px-12 py-5 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all font-black text-xl shadow-2xl transform hover:scale-110 uppercase tracking-wide">
            Schedule Personal Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartyWear;
