import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
  return (
    <div>
      <h2>Users: {loadedUsers.length}</h2>
      
    <div className="overflow-x-auto ">
    <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
        <thead>
            <tr className="bg-[#333333] text-white">              
                <th className="py-3 px-6 text-left border-b">Email</th>
                <th className="py-3 px-6 text-left border-b">Created At</th>
                <th className="py-3 px-6  border-b text-end">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                loadedUsers.map(user => <tr key={user._id} className="hover:bg-gray-50 transition duration-300">              
                <td className="py-4 px-6 border-b">{user.email}</td>
                <td className="py-4 px-6 border-b">{user.createdAt}</td>
                <td className="py-4 px-6 border-b text-end">Mirpur 15, Dhaka</td>
            </tr>)
            }
            
        </tbody>
    </table>
    </div>
    
    </div>
  );
};

export default Users;
