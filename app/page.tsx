import React from 'react';
import { getPromotions } from './lib/promotions';

// Navigation Header component
const Header: React.FC = () => {
  return (
    <header className="bg-gray p-4">
      <div className="flex items-start gap-8 pl-20">
        <img src={'/image-5.png'} className="top-0 left-0 h-20 w-20 flex items-center justify-center" />
        <nav>
          <ul className="flex justify-left gap-8 text-white pt-3">
            <li><a href="/" className="hover:underline">discover</a></li>
            <li><a href="/about" className="hover:underline">about</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Footer component
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center py-4">
      <div className="flex flex-col items-start m-6">
        <p className="text-3xl">Connect with us</p>
        <p>Stay up to date on all of our updates with our monthly newsletter.</p>
      </div>
    </footer>
  );
};

const Card: React.FC<{ name: string; tag: string; image: string, discount?: string }> = ({ name, tag, image, discount }) => {
  return (
    <div className="p-4 text-left">
      <img src={image} alt={name} className="w-40 h-64 object-cover mb-4" />
      <h3 className="text-white text-xl font-semibold">{name}</h3>
      <p className="text-white mb-1">{tag}</p>
      <p className="text-ice-blue">{discount}</p>
    </div>
  );
};

// Main Component
const ExplorePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8 bg-gray">
        <h1 className="text-3xl text-white font-bold text-left mb-8 pl-16">Streaming accessory promo codes</h1>
        <div className="flex flex-wrap justify-around px-12">
          {getPromotions().map((card) => (
            <Card key={card.id} name={card.name} tag={card.tag} discount={card.discount} image={card.image}/>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExplorePage;

