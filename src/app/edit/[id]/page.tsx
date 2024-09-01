"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// define the User type
type User = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
};

export default function EditID({ params }: { params: {id: string} }) {
  const router = useRouter();
  if (localStorage.getItem("token") == null) {
    router.push("/login");
  }
  const [items, setItems] = useState<User[]>([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://backend-1whr.vercel.app/api/users/${params.id}`);
      const user = await res.json();
      user.map((item: User) => {
        setFirstName(item.firstname);
        setLastName(item.lastname);
        setUserName(item.username);
        setPassWord(item.password);
      });
    };

    fetchUser();
  }, [params.id]);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`http://localhost:3001/api/edit/${params.id}`, {
        method: "PUT", // Use PUT to update the resource
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ firstname, lastname, username, password }),
      });
  
      // Check if the response has content before parsing
      if (!res.ok) {
        throw new Error(`Failed to update user: ${res.status} ${res.statusText}`);
      }
  
      // If the server returns a 204 No Content status, we shouldn't try to parse JSON
      let result;
      if (res.status !== 204) {
        result = await res.json();
      }
  
      console.log(result || "Update successful with no content");
  
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-green-600">
          Edit Form {params.id}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="mt-1">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                value={password}
                onChange={(e) => setPassWord(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center px-4 py-2 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
