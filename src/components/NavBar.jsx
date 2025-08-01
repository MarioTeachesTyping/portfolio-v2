// -------------- //
// Navigation Bar //
// -------------- //

export default function NavBar ({})
{
    return (
        <div>
            <div className="w-full border border-white fixed top-0 left-0 bg-black text-white flex justify-between items-center px-6 py-4 z-50">
                {/* Left: Name */}
                <div className="text-xl font-bold">
                    Anthony Terry
                </div>

                {/* Right: Nav Buttons */}
                <div className="flex space-x-6 text-lg">
                    <button className="hover:text-gray-400">About</button>
                    <button className="hover:text-gray-400">Experience</button>
                    <button className="hover:text-gray-400">Projects</button>
                    <button className="hover:text-gray-400">Blogs</button>
                </div>
            </div>

        </div>


    );
}