import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { toast } from "react-toastify";

function Contact({ userRef, listing}) {
    const [landlord, setLandlord] = useState(null);

    useEffect(() => {
        async function getLandlord(){
            const docRef = doc(db, "users", userRef);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setLandlord(doc.data());
            } else{
                toast.error("Could not get Landlord data");
            }
        }
        getLandlord();
    }, [userRef])
  return (
    <div className='flex'>
        Contact
    </div>
  )
}

export default Contact