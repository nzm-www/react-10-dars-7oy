import React, { useEffect, useState } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import http from "../axios";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
function Home() {
  const [songs, setSongs] = useState([]);
  const [cart, setCart] = useState([]);
  const [made, setMade] = useState([]);
  const [jump, setJump] = useState([]);
  const [played, setPlayed] = useState([]);
  const [uniquely, setUniquely] = useState([]);
  const navigate = useNavigate();

  const [isCartExpanded, setIsCartExpanded] = useState(false);
  const [isMadeExpanded, setIsMadeExpanded] = useState(false);
  const [isPlayedExpanded, setIsPlayedExpanded] = useState(false);
  const [isJumpExpanded, setIsJumpExpanded] = useState(false);
  const [isUniquelyExpanded, setIsUniquelyExpanded] = useState(false);

  // birinchi yuklanish teppaniki
  useEffect(() => {
    http
      .get("/browse/featured-playlists")
      .then((data) => setSongs(data.data.playlists.items.slice(0, 6)))
      .catch((error) => console.log(error));
  }, []);
  // birinchi Your top mixes catigory
  useEffect(() => {
    http
      .get("/browse/categories/toplists/playlists")
      .then((data) => {
        setCart(
          isCartExpanded
            ? data.data.playlists.items
            : data.data.playlists.items.slice(0, 4)
        );
      })
      .catch((error) => console.log(error));
  }, [isCartExpanded]);
  // ikkinchi Made for you catigory
  useEffect(() => {
    http
      .get("/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists")
      .then((data) => {
        setMade(
          isMadeExpanded
            ? data.data.playlists.items
            : data.data.playlists.items.slice(0, 4)
        );
      })
      .catch((error) => console.log(error));
  }, [isMadeExpanded]);
  // uchinchi Recently played catigory
  useEffect(() => {
    http
      .get("/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists")
      .then((data) => {
        setPlayed(
          isPlayedExpanded
            ? data.data.playlists.items
            : data.data.playlists.items.slice(0, 4)
        );
      })
      .catch((error) => console.log(error));
  }, [isPlayedExpanded]);
  // to`rtinchi Jump back in catigory
  useEffect(() => {
    http
      .get("/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists")
      .then((data) => {
        setJump(
          isJumpExpanded
            ? data.data.playlists.items
            : data.data.playlists.items.slice(0, 4)
        );
      })
      .catch((error) => console.log(error));
  }, [isJumpExpanded]);
  // beshinchi Uniquely yours catigory
  useEffect(() => {
    http
      .get("/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists")
      .then((data) => {
        setUniquely(
          isUniquelyExpanded
            ? data.data.playlists.items
            : data.data.playlists.items.slice(0, 4)
        );
      })
      .catch((error) => console.log(error));
  }, [isUniquelyExpanded]);
  // navigate qilib detelsga otkazib yuborish joyi
  const handleDetels = (playlistId) => {
    navigate(`playlist/${playlistId}`);
    // console.log(playlistId);
  };

  return (
    <div>
      {/* Songs catigory */}
      <div className="h-[500px] pt-5 bg-gradient-to-b from-blue-800 to-stone-800 container pl-10 pr-10">
        <div>
          <div className="flex gap-3">
            <span className="bg-[#081356] text-white p-3 rounded-full">
              <FaChevronLeft />
            </span>
            <span className="bg-[#081356] text-white p-3 rounded-full">
              <FaChevronRight />
            </span>
          </div>
          <h2 className="text-4xl pb-7 font-bold text-white pt-12">
            Good afternoon
          </h2>
          <div className="flex  flex-wrap  gap-4">
            {songs.length > 0 &&
              songs.map((value) => (
                <div
                  key={value.id}
                  onClick={() => handleDetels(value.id)}
                  className="rounded-md items-center gap-5 flex w-[360px] bg-[#3d3d7f] cursor-pointer"
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
              ))}
          </div>
        </div>
      </div>

      {/* Shu joyini domla uziz chuntirib bermasez bomidi */}
      {[
        {
          title: "Your top mixes",
          items: cart,
          isExpanded: isCartExpanded,
          toggle: setIsCartExpanded,
        },
        {
          title: "Made for you",
          items: made,
          isExpanded: isMadeExpanded,
          toggle: setIsMadeExpanded,
        },
        {
          title: "Recently played",
          items: played,
          isExpanded: isPlayedExpanded,
          toggle: setIsPlayedExpanded,
        },
        {
          title: "Jump back in",
          items: jump,
          isExpanded: isJumpExpanded,
          toggle: setIsJumpExpanded,
        },
        {
          title: "Uniquely yours",
          items: uniquely,
          isExpanded: isUniquelyExpanded,
          toggle: setIsUniquelyExpanded,
        },
      ].map(({ title, items, isExpanded, toggle }, index) => (
        <div key={index} className="bg-stone-800 container pl-10 pr-10">
          <div className="flex justify-between items-center pt-12">
            <h2 className="text-4xl pb-7 font-bold text-white">{title}</h2>
            <button
              className="text-lg pb-7 font-bold text-stone-400"
              onClick={() => toggle(!isExpanded)}
            >
              {isExpanded ? "SHOW LESS" : "SEE ALL"}
            </button>
          </div>
          <div className="flex justify-between flex-wrap gap-3">
            {items.length > 0 &&
              items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleDetels(item.id)}
                  className="cursor-pointer wrapper p-4 rounded-md bg-[#121212] w-[175px] text-white"
                >
                  {item.images && item.images[0] && (
                    <img
                      src={item.images[0].url}
                      alt={item.name}
                      className="w-[150px] h-[150px] rounded-l-md"
                    />
                  )}
                  <h2 className="w-[130px] pt-4 text-sm">{item.name}</h2>
                  <h2 className="w-[100px] text-[8px] text-stone-400">
                    {item.description}
                  </h2>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
