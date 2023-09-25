import "./Banner.css";

const Banner = ({ donations, filteredData, setFilteredData }) => {
//   console.log(donations);


      
 
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const searchbar = e.target.searchbar.value
    console.log(searchbar)
      const FILTERDATA = donations?.filter((item) => {
      return item.category.toLowerCase() === searchbar.toLowerCase();
      });
      
      if(FILTERDATA.length === 0) {
        return setFilteredData([]);
      }
      else{
        return setFilteredData(FILTERDATA);
      }
  }


  return (
    <div className="md:h-screen lg:min-h-[780px] bg-contain w-full mybg bg-gray-50/95 backdrop-brightness-75">
      <div>
        <h1 className=" text-2xl font-extrabold md:text-5xl  md:font-bold flex items-center justify-center pt-24 pb-14 mx-auto lg:pt-56 md:text-center">
          I Grow By Helping People In Need
        </h1>

        <form onSubmit={handleSubmit} className=" flex justify-center items-center  mx-auto text-center ">
          <input
            
            className="py-2.5 px-3 rounded-l-lg md:w-[470px] border-gray-300 border"
            type="text"
            name="searchbar"
            
            placeholder="Search Here..."
          />

          <button
            type="submit"
            className="focus:outline-none  text-white bg-[#FF444A] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-5 py-3.5  dark:hover:bg-purple-700 rounded-r-lg border-none dark:focus:ring-purple-900"
          >
            Search
          </button>
        </form>

      </div>
    </div>
  );
};

export default Banner;
