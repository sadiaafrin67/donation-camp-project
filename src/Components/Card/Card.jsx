import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import './Card.css';
import swal from 'sweetalert';



const Card = () => {
  const [donation, setDonation] = useState({});

  const { id } = useParams();

  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations.find((donation) => donation.id == id);

    setDonation(findDonation);
  }, [donations, id]);


  const handleAddToDonate = () => {

    const addedDonation = []

    const donationCategory = JSON.parse(localStorage.getItem('donation'));
    // console.log('kii pblm', donationCategory);

    if (!donationCategory) {
        addedDonation.push(donation);
        localStorage.setItem('donation', JSON.stringify(addedDonation))
        swal("Donated successfully", "Thank you for your donation", "success");
    }
    else {

        const isExist = donationCategory.find((donation) => donation.id == id);

        // console.log('isExist diye aslm', isExist);


        if(!isExist) {
            addedDonation.push(...donationCategory, donation);
            localStorage.setItem('donation', JSON.stringify(addedDonation))
            swal("Donated successfully", "Thank you for your donation", "success");
        }
        else{
            swal("Donated Already, Sir", "Thank you for your donation", "warning");
        }
       
        
    }

    //   console.log('func diye aslm',donation)
  }

//   console.log(donation);

  return (
    <div>
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            className="w-full h-[194px] lg:h-[500px] md:w-[1300px] md:h-[300px]"
            src={donation.picture}
          />

          <div className="content">
          <button onClick={handleAddToDonate} style={{ backgroundColor: donation.title_text_color }}
            type="button"
            className="focus:outline-none text-white  hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Donate ${donation.price}
          </button>
          </div> 
        </div>

        <div className="p-6">
          <p className="mt-2 block  text-lg font-bold leading-relaxed text-black antialiased">
            {donation.title}
          </p>

          <p className="font-medium text-sm mt-4 text-gray-500">
            {donation.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
