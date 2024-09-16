"use client";
import React from 'react';
import Link from 'next/link';
import Header from './components/header';
import Footer from './components/footer';
import { useState, useEffect } from 'react';


import { getPromotions } from './lib/promotions';
import supabase from './supabaseClient';

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


interface Promotion {
  id: any;
  created_at: any;
  thumbnail: any;
  exp_date: any;
  brand: any;
  discount: any;
  influencerID: any;
  link: any;
  description: any;
  category: any;
  name: any;
  tag: any;
}


// Main Component
const ExplorePage: React.FC = () => {

  const [promotions, setPromotions] = useState<Promotion[]>([]);
  // const [promotions, setPromotions] = useState([]);

  const fetchData = async () => {
    let {data: data,error} = await supabase
      .from('promocodes')
      .select('id, created_at, thumbnail, exp_date, brand, discount, influencerID, link, description, category, name, tag');
    if (data) {
      setPromotions(data);
      console.log('data', data);
    } else {
      console.log('error', error);
    }
  }
 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8 bg-gray">
        <h1 className="text-3xl text-white font-bold text-left mb-8 pl-16">Streaming accessory promo codes</h1>
        <div className="flex flex-wrap justify-around px-12">
          {promotions.map((card) => (
            <Card key={card.id} id={card.id} name={card.name} tag={card.tag} discount={card.discount} image={card.thumbnail}/>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExplorePage;

