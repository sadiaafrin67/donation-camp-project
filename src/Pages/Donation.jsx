import { useEffect, useState } from "react";
import Card from "./../Components/Card/Card";
import SingleCard from "../Components/SingleCards/SingleCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationCategory = JSON.parse(localStorage.getItem("donation"));

    if (donationCategory) {
      setDonation(donationCategory);
    } else {
      setNoDataFound("No Donation Found");
    }
  }, []);

  

  // console.log(donation);
  return (
    <div>
      {noDataFound ? (
        <p className=" h-[80vh] text-3xl flex justify-center items-center font-extrabold">
          {noDataFound}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 my-20 lg:mx-auto mx-4">

            {
                isShow ? donation.map((donation) => (
                    <SingleCard donation={donation} key={donation.id} />
                  )) : donation.slice(0, 4).map((donation) => (
                    <SingleCard donation={donation} key={donation.id} />
                  ))
            }

            
          </div>
          
            <div className="text-center mx-auto mb-8">
            <button onClick={() => setIsShow(!isShow)}
              type="button"
              className="focus:outline-none text-white  hover:bg-green-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-[#009444]"
            >
              {isShow ? "Show Less" : "Show More"}
            </button>
            </div>
         
        </div>
      )}
    </div>
  );
};

export default Donation;
