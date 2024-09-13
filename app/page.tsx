import React from 'react';
import Link from 'next/link';
import Header from './components/header';
import Footer from './components/footer';


import { getPromotions } from './lib/promotions';

const Card: React.FC<{ id: number, name: string; tag: string; image: string, discount: string }> = ({ id, name, tag, image, discount }) => {
  return (
    <div className="p-4 text-left">
      <Link href={`/${id}`}>
        <img src={image} alt={name} className="w-40 h-64 object-cover mb-4" />
      </Link>
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
            <Card key={card.id} id={card.id} name={card.name} tag={card.tag} discount={card.discount} image={card.image}/>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExplorePage;

