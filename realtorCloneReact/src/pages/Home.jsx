import React, { useEffect } from 'react'
import { useState } from 'react'
import Slider from '../components/Slider';
import ListingItem from "../components/ListingItem";
import { 
  collection,
   doc,
   getDocs,
   limit,
   orderBy,
   query,
   where,
} from 'firebase/firestore';
import { db } from '../firebase';

export default function Home() {
  // Offers
  const [offerListings, setOfferListings] = useState(null);

  useEffect(() => {
    async function fetchListings(){
      try {
        // get reference
        const listingsRef = collection(db, "listings");
        // create the query
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setOfferListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, [])

  return (
    <div>
      <Slider />
    </div>
  )
}
