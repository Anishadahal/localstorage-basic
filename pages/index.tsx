import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [username, setUsername] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userData, setUserData] = useState<{
    email: string;
    age: number;
  } | null>(null);
  const [keys, setKeys] = useState<string[]>([]);
  const [length, setLength] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let username = localStorage.getItem("username");
      let userId = localStorage.getItem("userId");
      let userData = JSON.parse(localStorage.getItem("userData")!);
      let keys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i)!);
      }
      setUsername(username);
      setUserId(userId);
      setUserData(userData);
      setKeys(keys);
      setLength(localStorage.length);
    }
  }, []);

  function handleSave() {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("username", "Anisha");
      localStorage.setItem("userId", "12345");
      localStorage.setItem(
        "userData",
        JSON.stringify({ email: "anisha@example.com", age: 25 })
      );

      let username = localStorage.getItem("username");
      let userId = localStorage.getItem("userId");
      let userData = JSON.parse(localStorage.getItem("userData")!);
      let keys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i)!);
      }

      setUsername(username);
      setUserId(userId);
      setUserData(userData);
      setKeys(keys);
      setLength(localStorage.length);
    }
  }

  function handleRemove() {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("username");
      setUsername(null);
      setKeys((keys) => keys.filter((k) => k !== "username"));
      setLength(localStorage.length);
    }
  }

  function handleClear() {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.clear();
      setUsername(null);
      setUserId(null);
      setUserData(null);
      setKeys([]);
      setLength(localStorage.length);
    }
  }

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="g5us4uqvFKB_Mmv0ZiWrChaYJSrup9wQqkqGaH7zmcQ"
        />
      </Head>
      <div className="h-screen bg-gray-200">
        <h1 className="pt-4 text-5xl text-center">
          Local Storage Methods Demo
        </h1>
        <div className="flex flex-col items-start py-4 mx-8">
          <div>
            <button
              onClick={handleSave}
              className="px-4 py-2 my-2 bg-blue-400 border-2 border-blue-500 rounded-lg hover:shadow-md hover:bg-blue-500"
            >
              Save
            </button>
            <span className="ml-1 mr-2 text-sm text-gray-800 ">
              Store username, userId and userData key-value pairs
            </span>
          </div>
          <div>
            <button
              onClick={handleRemove}
              className="px-4 py-2 my-2 bg-red-400 border-2 border-red-500 rounded-lg hover:shadow-md hover:bg-red-500"
            >
              Remove username
            </button>
            <span className="ml-3 mr-2 text-sm text-gray-800">
              Remove username key-value pair
            </span>
          </div>
          <div>
            <button
              onClick={handleClear}
              className="px-4 py-2 my-2 bg-gray-400 border-2 border-gray-500 rounded-lg hover:shadow-md hover:bg-gray-500"
            >
              Clear
            </button>
            <span className="ml-3 mr-2 text-sm text-gray-800">
              Clear everything in localStorage
            </span>
          </div>
        </div>
        <div className="items-start justify-between flex-1 h-screen mx-auto mt-6">
          <hr className="border-gray-600 border-1" />
          <div className="py-4 ml-8">
            <h2 className="text-2xl">Output</h2>
            <div>
              <p className="p-2 text-sm">
                Username: <span className="text-gray-800">{username}</span>
              </p>
              <p className="p-2 text-sm">
                UserId: <span className="text-gray-800">{userId}</span>
              </p>
              <p className="p-2 text-sm">
                UserData:{" "}
                <span className="text-gray-800">
                  {JSON.stringify(userData)}
                </span>
              </p>
              <p className="p-2 text-sm">
                List of Keys:{" "}
                <span className="text-gray-800">{keys.join(", ")}</span>
              </p>
              <p className="p-2 text-sm">
                Total Items in Local Storage:{" "}
                <span className="text-gray-800">{length}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
