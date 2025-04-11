import React from 'react';
import { Car, ArrowRight, Shield, Clock, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">AutoLink</span>
          </div>
          <div className="space-x-6">
            <Link to="/marketplace" className="text-gray-300 hover:text-white">Marketplace</Link>
            <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-white mb-6">
              Find Your Perfect Used Vehicle with AI-Powered Matching
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              AutoLink revolutionizes the way you shop for used vehicles. Our smart platform connects you with the perfect match based on your preferences and needs.
            </p>
            <Link 
              to="/marketplace"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Explore Vehicles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Luxury car showcase"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose AutoLink?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Verified Sellers</h3>
              <p className="text-gray-300">All our sellers are thoroughly vetted to ensure a safe buying experience.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <Clock className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quick Process</h3>
              <p className="text-gray-300">Find and purchase your perfect vehicle in record time with our streamlined process.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <ThumbsUp className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quality Guaranteed</h3>
              <p className="text-gray-300">Every vehicle undergoes a thorough inspection before being listed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;