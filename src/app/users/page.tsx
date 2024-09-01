"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// define the User type
type User = {
  id: number;
  firstname: string;
  lastname: string;
};

// define the Page component
export default function Page() {
  const router = useRouter();
  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token == null) {
        router.push("/");
      }
    }
  }, [router]);
  // use state to manage the list of users
  const [items, setItems] = useState<Array<User>>([]);

  // useEffect to fetch users on component mount and periodically
  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch("https://jurassic-web-backend.vercel.app/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    // fetch users initially
    getUsers();

    // fetch users every second
    const interval = setInterval(getUsers, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Users List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Firstname
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lastname
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Edit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item) => {
                  const handleSubmit = async (e: React.FormEvent) => {
                    e.preventDefault();

                    try {
                      const res = await fetch(
                        `http://localhost:3001/api/delete/${item.id}`,
                        {
                          method: "DELETE", // Use PUT to update the resource
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                          },
                          body: JSON.stringify(item.id),
                        }
                      );

                      // Check if the response has content before parsing
                      if (!res.ok) {
                        throw new Error(
                          `Failed to update user: ${res.status} ${res.statusText}`
                        );
                      }

                      // If the server returns a 204 No Content status, we shouldn't try to parse JSON
                      let result;
                      if (res.status !== 204) {
                        result = await res.json();
                      }

                      console.log(
                        result || "Update successful with no content"
                      );
                    } catch (error) {
                      console.error("Error updating user:", error);
                    }
                  };
                  return (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.firstname}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.lastname}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <Link
                          href={`/edit/${item.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={handleSubmit}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
