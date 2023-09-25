import { useLoaderData } from "react-router-dom";
import Donations from "../Components/Donations/Donations";
import Banner from "../Components/Header/Banner";
import { useEffect, useState } from "react";


const Home = () => {

    const [filteredData, setFilteredData] = useState([]);

    const donations = useLoaderData()

   useEffect( () => {
       setFilteredData(donations)
   }, [donations])

    return (
        <div>
            <Banner filteredData={filteredData} setFilteredData={setFilteredData} donations={donations}></Banner>
            <Donations donations={filteredData}></Donations>
        </div>
    );
};

export default Home;