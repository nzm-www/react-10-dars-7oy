import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../axios";
import { FaRegClock } from "react-icons/fa";
import img1 from "../images/dow.png";
import img2 from "../images/lik.png";
import img3 from "../images/dod.png";
import img4 from "../images/pla.png";
import { IoIosSearch } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";

function Detailes() {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    http
      .get(`playlists/${id}`)
      .then((response) => {
        setPlaylist(response.data);
        setTracks(response.data.tracks.items);
      })
      .catch((error) => console.error(error));
  }, [id]);
  // loder uchun uzim comment yozib ketyabman GPT yozgani yoq
  if (!playlist) {
    return (
      <div className="pt-[300px]">
        <div class="text-center">
          <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
          <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
          <p class="text-zinc-600 dark:text-zinc-400">
            Your adventure is about to begin
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="pb-14">
      {/* Playlist Information */}
      <div className=" pl-10 pr-10 bg-gradient-to-b from-yellow-300 to-[#121212]  playlist-info">
        <div className="flex gap-3 pt-5">
          <span className="bg-[#6f7b14] text-white p-3 rounded-full">
            <Link to="/">
              <FaChevronLeft />
            </Link>
          </span>
          <span className="bg-[#6f7b14] text-white p-3 rounded-full">
            <FaChevronRight />
          </span>
        </div>
        <div className="flex pt-16 pb-12 items-center gap-7">
          {playlist.images && playlist.images[0] && (
            <img
              src={playlist.images[0].url}
              alt={playlist.name}
              className="w-[280px] h-[280px] rounded-md"
            />
          )}
          <div className="flex flex-col gap-5">
            <p className="text-base text-stone-200">Publik playlist</p>
            <h1 className="text-6xl font-bold text-white">{playlist.name}</h1>
            <p className="text-lg text-stone-400">{playlist.description}</p>
          </div>
        </div>
      </div>

      {/* Track uchun */}
      <div className="bg-[#121212] container pl-10 pr-10">
        <div className="track-list bg-[#121212] flex gap-6">
          <div className="  w-full flex flex-col gap-6">
            <div className="pt-9 flex justify-between items-center ">
              <div className="flex items-center gap-8">
                <img className="cursor-pointer" src={img4} alt="" />
                <img className="cursor-pointer" src={img2} alt="" />
                <img
                  className="border p-2 rounded-full cursor-pointer"
                  src={img1}
                  alt=""
                />
                <img className="cursor-pointer" src={img3} alt="" />
              </div>
              <span className=" flex gap-3 ">
                <p className="text-white text-2xl">
                  <IoIosSearch />
                </p>
                <select
                  className="text-stone-500 border-none bg-inherit outline-none"
                  name=""
                  id=""
                >
                  <option value="">Custom order</option>
                  <option value="">Custom order</option>
                  <option value="">Custom order</option>
                </select>
              </span>
            </div>
            <div className="flex items-center text-stone-300 justify-between">
              <h2># TITLE</h2>
              <div className="flex items-center gap-[142px]">
                <h2>ALBOM</h2>
                <h2>DATE ADDED</h2>
                <div>
                  <FaRegClock />
                </div>
              </div>
            </div>
            <hr className=" bg-stone-500" />
            {tracks.map((song, index) => (
              <div
                key={song?.track?.id}
                className=" cursor-pointer  shadow-md shadow-stone-800 justify-between text-white flex  track-item items-center p-3"
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-xl">{index + 1}</h3>

                  {song.track.album.images && song.track.album.images[0] && (
                    <img
                      src={song.track.album.images[0].url}
                      alt={song.track.name}
                      className="w-[50px] h-[50px] rounded-md"
                    />
                  )}
                  <h3 className="w-[200px]  text-xs font-semibold">
                    {song.track.name}
                  </h3>
                </div>

                <div className=" flex items-center gap-[220px]">
                  <p className="text-xs  text-stone-400 w-40 ">
                    {song.track.artists.map((artist) => artist.name).join(", ")}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-green-600 ">
                      <AiOutlineLike />
                    </span>

                    <div className="col-span-1 text-gray-400 text-sm text-right">
                      {Math.floor(song.track.duration_ms / 60000)}:
                      {(
                        "0" +
                        Math.floor((song.track.duration_ms % 60000) / 1000)
                      ).slice(-2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailes;
