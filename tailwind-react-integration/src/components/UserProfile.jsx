  function UserProfile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-4 md:p-8">
        <div className="bg-white shadow-lg rounded-lg flex flex-col items-center text-center
        p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm w-full ">

        
      <img 
      src="https://via.placeholder.com/150" 
      alt="Profile" 
      className="rounded-full object-cover w-24 sm:w-24 h-24 sm:h-24 md:h-36 md:w-36 mb-4"/>

      <h1 className=" font-bold  text-lg sm:text-lg md:text-xl text-blue-700">
        John Doe</h1>

      <p className="text-gray-600 mt-2 text-sm sm:text-sm md:tetx-base">
        Developer at Example Co. Loves to write code and explore new technologies.</p>
        </div>
    </div>
    
  );
}

export default UserProfile;