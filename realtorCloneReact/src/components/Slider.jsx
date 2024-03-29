import { collection, doc, getDocs, limit, orderBy, query } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { db } from '../firebase';
import Spinner from './Spinner';

function Slider() {
    const [listings, setListings] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchListings(){
            const listingsRef = collection(db, "listings");
            const q = query(
                listingsRef,
                orderBy("timestamp", "desc"),
                limit(5)
            );
            const querySnap = await getDocs(q);
            let listings = [];
            querySnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data(),
                });
            });
            setListings(listings);
            setLoading(false);
        }
        fetchListings();
    }, [])

    if (loading) {
        return <Spinner />;
    }
    
  return (
    <div>Slider</div>
  )
}

export default Slider