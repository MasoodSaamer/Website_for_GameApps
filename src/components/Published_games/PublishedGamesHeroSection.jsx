


const PublishedGamesHeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Who we are and 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                what we do
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Game Studio that focuses on making realistic & high performance mobile car simulation games, optimized in space & size so every device can play
        </p>
        <div className="flex justify-center my-10">
            <a href="https://play.google.com/store/apps/dev?id=6892059516122641709" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                Official Studio Page
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="py-3 px-4 mx-3 rounded-md border hover:bg-gray-800 hover:to-gray-950 hover:text-white">
                Privacy Policy
            </a>
        </div>

        
    </div>
  );
}

export default PublishedGamesHeroSection