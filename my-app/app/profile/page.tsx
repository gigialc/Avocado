//profile page
// 			</input>


export default function Profile () {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-purple-700 mb-6">Profile</h1>
        <div className="flex flex-col space-y-4">
            <input 
            type="text" 
            className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
            />
            <input 
            type="password" 
            className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            />
            <button 
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
            Update
            </button>
        </div>
        </div>
    );
    }
    