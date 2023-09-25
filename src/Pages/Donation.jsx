import { useEffect, useState } from "react";


const Donation = () => {

    const [donation, setDonation] = useState([]);

    useEffect(() => {

        const donationCategory = JSON.parse(localStorage.getItem('donation'));
        setDonation(donationCategory);

    }, [])

console.log(donation);
    return (
        <div>
            <h2>im donation</h2>
        </div>
    );
};

export default Donation;