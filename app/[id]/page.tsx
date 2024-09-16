"use client";
import { getPromotion } from "../lib/promotions";
import React from "react";
import { useEffect, useState } from "react";
import supabase from "../supabaseClient";


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

export default function Page({ params }: { params: { id: string } }) {

  const [promotions, setPromotions] = useState<Promotion[]>([]);

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
  const post = promotions.find((promotion) => promotion.id === Number(params.id))
  // console.log('post',post);

  if (!post) return <div>Post not found</div>;

  return (
    <>
      <div>My Post: {params.id}</div>
      <div>Stuff: {post.name}</div>
      <div>Stuff: {post.tag}</div>
      <div>Stuff: {post.discount}</div>
    </>
  );
}