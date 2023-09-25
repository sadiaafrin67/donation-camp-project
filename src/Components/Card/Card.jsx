import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Card = () => {

    const [donation, setDonation] = useState({})

    const {id} = useParams()
    

    const donations = useLoaderData()
  

    useEffect(() => {

        const findDonation = donations.find(donation => donation.id == id)
        

        setDonation(findDonation)

    },[donations, id])

    console.log(donation)
    
    return (
        <div>
            <h2>im card</h2>
        </div>
    );
};

export default Card;