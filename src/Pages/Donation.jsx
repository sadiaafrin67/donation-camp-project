import { useEffect, useState } from "react";
import SingleCard from "../Components/SingleCards/SingleCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [isShow, setIsShow] = useState(4);
  const [isButtonShow, setIsButtonShow] = useState(false);

  const handleButtonShow = () => {
    setIsButtonShow((prev) => {
    
      return !prev;
    });
  };

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
            {donation.slice(0, isShow).map((donation) => (
              <SingleCard donation={donation} key={donation.id} />
            ))}
          </div>
          
          {/* {console.log(donation.length)} */}

          <div
            className={`${
              donation.length !== 0 && donation.length > 4 ? "" : "hidden"
            }  text-center mx-auto  justify-center items-center mb-8`}
          >
            
            <button
              onClick={() => {
                setIsShow(donation.length); handleButtonShow();
              } }
              type="button"
              className= {
                `focus:outline-none text-white  hover:bg-red-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-[#FF444A] text-center ${isButtonShow ? "hidden" : ""}`
              }
            >
              Show More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
