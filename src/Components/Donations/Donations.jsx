import DonationsCard from "../DonationsCard/DonationsCard";
import PropTypes from 'prop-types';


const Donations = ({ donations }) => {
    console.log(donations)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20 lg:mx-auto mx-4">
           {
               donations.map(donations => <DonationsCard key={donations.id} donations={donations}></DonationsCard>)
           }
        </div>
    );
};

Donations.propTypes = {
    donations: PropTypes.array.isRequired
}

export default Donations;