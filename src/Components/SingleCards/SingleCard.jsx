import { Link } from "react-router-dom";

const SingleCard = ({ donation }) => {
  return (
    <div>
      <div
        style={{ backgroundColor: donation.card_bg }}
        className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-[250px]"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={donation.picture}
            alt="image"
            className="lg:min-h-[200px] h-full w-full object-cover"
          />
        </div>

        <div className="p-6">
          <h6
            style={{
              color: donation.title_text_color,
              backgroundColor: donation.category_bg,
            }}
            className="text-sm text-center font-semibold w-[90px] py-1 rounded mb-4"
          >
            {donation.category}
          </h6>
          <h4 className="mb-2 block  text-xl font-semibold leading-snug tracking-normal text-black antialiased">
            {donation.title}
          </h4>
          <p
            style={{ color: donation.title_text_color }}
            className="mb-8 block  text-base font-semibold leading-relaxed antialiased"
          >
            ${donation.price}
          </p>

          <Link to={`/donations/${donation.id}`} className="inline-block " href="#">
            <button
              style={{ backgroundColor: donation.title_text_color }}
              type="button"
              className="focus:outline-none text-white  hover:bg-purple-700 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
            >
              View Details
            </button>
          </Link>
        </div>
      </div>    
    </div>
    
  );
};

export default SingleCard;
