import React, { useEffect, useState } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import http from "../axios";

function Home() {
  const [songs, setSongs] = useState([]);
  const [cart, setCart] = useState([]);
  const [made, setMade] = useState([]);
  const [see, setSee] = useState(false);

  useEffect(() => {
    http
      .get("featured-playlists")
      .then((data) => {
        setSongs(data.data.playlists.items.slice(0, 6));
        // console.log(data.data.playlists.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    http
      .get("categories/toplists/playlists")
      .then((data) => {
        setCart(data.data.playlists.items.slice(0, 4));
        console.log(data.data.playlists.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    http
      .get("categories/0JQ5DAqbMKFHOzuVTgTizF/playlists")
      .then((data) => {
        setMade(data.data.playlists.items);
        console.log(data.data.playlists.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSee() {
    setSee(!see)
  }

  return (
    <div>
      <div className="h-[500px] pt-5 bg-gradient-to-b from-blue-800 to-stone-800 container pl-10 pr-10">
        <div>
          <div>
            <span className="flex items-center gap-3 font-semibold text-3xl text-white">
              <FaCircleChevronLeft />
              <FaCircleChevronRight />
            </span>
          </div>
          <h2 className="text-4xl pb-7 font-bold text-white pt-12">
            Good afternoon
          </h2>
          <div className="flex flex-wrap gap-7">
            {songs.length > 0 &&
              songs.map((value) => {
                return (
                  <div>
                    <div
                      key={value.id}
                      className=" rounded-md items-center  gap-5 flex w-[400px] bg-[#3d3d7f]"
                    >
                      {value.images && value.images[0] && (
                        <img
                          src={value.images[0].url}
                          alt={value.name}
                          className="w-16 h-16 rounded-l-md"
                        />
                      )}
                      <h1 className="text-white font-semibold">{value.name}</h1>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="bg-stone-800 container pl-10  pr-10">
        <div className="flex justify-between items-center pt-12">
          <h2 className="text-4xl pb-7 font-bold text-white ">
            Your top mixes
          </h2>
          <button
            onClick={handleSee}
            className="text-lg pb-7 font-bold text-stone-400 "
          >
            SEE ALL
          </button>
        </div>

        <div className="flex justify-between">
          {cart.length > 0 &&
            cart.map((value) => {
              return (
                <div className="cursor-pointer wrapper p-4 rounded-md bg-[#121212] w-[200px ]  text-white">
                  {value.images && value.images[0] && (
                    <img
                      src={value.images[0].url}
                      alt={value.name}
                      className="w-[150px] h-[150px] rounded-l-md"
                    />
                  )}
                  <h2 className="w-[130px] pt-4 text-sm ">{value.name}</h2>
                  <h2 className="w-[100px] text-[8px] text-stone-400">
                    {value.description}
                  </h2>
                </div>
              );
            })}
        </div>
      </div>
      <div className="bg-stone-800 container pl-10 pb-60 pr-10">
        <div className="flex justify-between items-center pt-12">
          <h2 className="text-4xl pb-7 font-bold text-white ">Made for you </h2>
          <h2 className="text-lg pb-7 font-bold text-stone-400 ">SEE ALL</h2>
        </div>

        <div className="flex justify-between">
          {cart.length > 0 &&
            cart.map((value) => {
              return (
                <div className="cursor-pointer wrapper p-4 rounded-md bg-[#121212] w-[200px ]  text-white">
                  {value.images && value.images[0] && (
                    <img
                      src={value.images[0].url}
                      alt={value.name}
                      className="w-[150px] h-[150px] rounded-l-md"
                    />
                  )}
                  <h2 className="w-[130px] pt-4 text-sm ">{value.name}</h2>
                  <h2 className="w-[100px] text-[8px] text-stone-400">
                    {value.description}
                  </h2>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
