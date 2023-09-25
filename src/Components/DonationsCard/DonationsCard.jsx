import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationsCard = ({ donations }) => {
  // console.log(donations);
  const {
    id,
    picture,
    category,
    category_bg,
    title_text_color,
    title,
    description,
    text_button_bg,
    price,
    category_text_color,
    card_bg,
  } = donations;
  return (
    <div>
      <Link to={`/donations/${id}`}>
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img className="w-full h-[194px]" src={picture} />
          </div>

          <div style={{ backgroundColor: card_bg }} className="p-6">
            <h4
              style={{ color: title_text_color, backgroundColor: category_bg }}
              className="text-sm text-center font-semibold w-[90px] py-1 rounded"
            >
              {category}
            </h4>

            <p
              style={{ color: category_text_color }}
              className="mt-3 block  text-lg font-bold leading-relaxed text-gray-700 antialiased"
            >
              {title}
            </p>
          </div>


        </div>
      </Link>
    </div>
  );
};

DonationsCard.propTypes = {
  donations: PropTypes.object
}
export default DonationsCard;
