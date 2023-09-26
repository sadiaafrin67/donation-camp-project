
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PiechartData from '../Components/Piechart/PiechartData';

const Statistics = () => {

  const [totalDonationData, setTotalDonationData] = useState(0);
  const [donation, setDonation] = useState(0);

  const donationData = useLoaderData();

  useEffect(() => {
    const donationCategory = JSON.parse(localStorage.getItem('donation'));
    setDonation(donationCategory?.length);
    // console.log(donationCategory)

    const totalDonation = donationData?.length - donationCategory?.length;
    setTotalDonationData(totalDonation);


  }, [donationData?.length])


  return (
    <div>
      <PiechartData totalDonationData={totalDonationData} donation={donation}></PiechartData>
    </div>
  );
};

export default Statistics;