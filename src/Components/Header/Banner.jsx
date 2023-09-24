import './Banner.css'

const Banner = () => {
    return (
        <div className="h-[80vh] w-full mybg bg-gray-50/95 backdrop-brightness-75">


           <div>
           <h1 className=" text-2xl font-extrabold md:text-5xl  md:font-bold flex items-center justify-center pt-24 pb-14 mx-auto md:text-center">I Grow By Helping People In Need</h1>

<div className=" flex justify-center items-center  mx-auto text-center ">

    <input className="py-2.5 px-3 rounded-l-lg md:w-[470px] border-gray-300 border" type="text" name="" id="" placeholder="Search Here..." />

    
  <button type="button" className="focus:outline-none  text-white bg-[#FF444A] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-5 py-3.5  dark:hover:bg-purple-700 rounded-r-lg border-none dark:focus:ring-purple-900">Search</button>


   



</div>
           </div>


        </div>
    );
};

export default Banner;