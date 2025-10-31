// Order Success Page - Confirmation after successful checkout
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OrderSuccess = () => {
  const { clearCart } = useCart();
  const [orderNumber] = useState(() => Math.floor(100000 + Math.random() * 900000));

  useEffect(() => {
    // Clear cart on successful order
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-slideUp">
            {/* Success Checkmark */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                {/* Animated Circle */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center animate-scaleIn shadow-2xl">
                  {/* Checkmark SVG */}
                  <svg
                    className="w-20 h-20 text-white animate-checkmark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                
                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Order Placed Successfully! 🎉
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Thank you for shopping with House of Ishvita
            </p>

            {/* Order Details */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-lg font-bold text-gray-900">Order Number</h3>
              </div>
              <p className="text-3xl font-black text-green-600 tracking-wider">
                #{orderNumber}
              </p>
            </div>

            {/* What's Next Section */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Order Confirmation Email</h4>
                    <p className="text-sm text-gray-600">We'll send you a confirmation email with order details</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Processing</h4>
                    <p className="text-sm text-gray-600">Your order will be processed within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Free Delivery</h4>
                    <p className="text-sm text-gray-600">Expected delivery in 5-7 business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/" className="flex-1">
                <button className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                  Continue Shopping
                </button>
              </Link>
              <Link to="/style-assistant" className="flex-1">
                <button className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                  ✨ Get Style Tips
                </button>
              </Link>
            </div>

            {/* Thank You Message */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Have questions? Contact us at{' '}
                <a href="mailto:support@houseofishvita.com" className="text-primary font-semibold hover:underline">
                  support@houseofishvita.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Share */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Share your excitement! 🎊</p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all shadow-md hover:shadow-lg">
                📘 Facebook
              </button>
              <button className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all shadow-md hover:shadow-lg">
                📸 Instagram
              </button>
              <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all shadow-md hover:shadow-lg">
                💬 WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes checkmark {
          0% {
            stroke-dasharray: 0, 100;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 100, 100;
            stroke-dashoffset: 0;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-checkmark {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: checkmark 0.8s ease-out 0.3s forwards;
        }
      `}</style>
    </div>
  );
};

export default OrderSuccess;
