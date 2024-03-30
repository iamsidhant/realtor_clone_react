import {
   collection,
   doc,
   getDocs,
   limit,
   orderBy,
   query,
   where,
} from 'firebase/firestore';
import { toast } from "react-toastify";
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../components/Spinner';
import { db } from '../firebase';
import ListingItem from '../components/ListingItem';

export default function Offers() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings(){
      try {
        const listingsRef = collection(db, "listings");
        const q = query(
          listingsRef,
          where("type", "==", true),
          orderBy("timestamp", "desc"),
          limit(8)
          );
          const querySnap = await getDocs(q);
          const listings = [];
          querySnap.forEach((doc) => {
            return listings.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          setListings(listings);
          setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listing");
      }
    }
    fetchListings();
  }, [])

  return (
    <div className='max-w-6xl mx-auto px-3'>
      <h1 className='text-3xl text-center mt-6 font-bold mb-6'>Offers</h1>
      {loading ? (
        <Spinner /> 
        ) : listings && listings.length > 0 ? (
          <>
            <main>
              <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                {listings.map((listing) => (
                  <ListingItem
                    key={listing.id} 
                    id={listing.id}
                    listing={listing.data}
                  />
                ))}
              </ul>
            </main>
          </>
        ) : (
          <p>There are no current offers</p>
        )
      }
    </div>
  )
}
