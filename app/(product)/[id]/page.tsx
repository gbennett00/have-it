'use client';

import { getPromotion } from "../../lib/promotions";
import { useState } from "react";
import SuggestionCard from "../../components/suggestion-card";

export default function Page({ params }: { params: { id: string } }) {
  // Set the date we're counting down to
  var countDownDate = new Date("Nov 16, 2024").getTime();
  const [display, setDisplay] = useState("");

  // Update the count down every 1 second
  const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDisplay((distance < 0) ? "EXPIRED" : `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds`);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  const post = getPromotion(parseInt(params.id, 10));
  if (!post) return <div>Post not found</div>;
  return (
    <div className="flex flex-col ml-16">
      <div className="flex py-14 justify-center">
        <img src={post.image} alt={post.name} className="w-60"/>
        <div className="flex flex-col justify-between pl-3">
          <h1 className="font-bold text-xl">JVS TRUCKER HATS</h1>
          <p>Jamie Van Slooten</p>
          <p>15% OFF ENTIRE WEBSITE WITH PROMO CODE: <br/>JVSTRUCKERJAMIE15</p>
          <p>Expires in: {display}</p>
          <button className="bg-dark-purple hover:bg-light-purple text-white font-bold py-2 px-4 rounded w-64">GO TO PRODUCT</button>
          <p>PROVIDE GREAT SUN PROTECTION - ALL HATS ARE ADJUSTABLE</p>
        </div>
      </div>
      <p className="mt-6 font-bold text-center">MORE BRANDS FROM JAMIE</p>
      <div className="flex gap-4 justify-center py-10">
        <SuggestionCard imageURL="/Rectangle-58.png" name="Baby Sweat Suit"/>
        <SuggestionCard imageURL="/Rectangle-61.png" name="HGRC Trucker Hat"/>
        <SuggestionCard imageURL="/Rectangle-62.png" name="HGRC Trucker Hat"/>
        <SuggestionCard imageURL="/Rectangle-63.png" name="HGRC Trucker Hat"/>
      </div>
    </div>
  );
}