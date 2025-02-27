"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PokemonList = ({ pokemonres }) => {
  const router = useRouter();
  const [searchPokemon, setSearchPokemon] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 18;

  const filterPokemon = pokemonres.results.filter((poke) =>
    poke.name.toLowerCase().includes(searchPokemon.toLowerCase())
  );

  const totalPages = Math.ceil(filterPokemon.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchPokemon]);

  const currentData = filterPokemon.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon.."
        onChange={(e) => setSearchPokemon(e.target.value)}
        className=" border w-[300px] px-4 py-2.5 rounded-2xl mb-3"
      />
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-4  text-black ">
        {currentData.length
          ? currentData?.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 text-center border hover:scale-105 transition cursor-pointer"
                onClick={() => router.push(`/pokemon/${item.name}`)}
              >
                <p className=" text-lg font-semibold mt-2">{item.name}</p>
                <Image
                  src={`${"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"}${item.url.slice(
                    -2,
                    -1
                  )}.png`}
                  width={70}
                  height={70}
                  alt="Picture of the mpomon"
                />
              </div>
            ))
          : "Not Found Pokemon"}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className={`px-4 py-2 bg-gray-300 rounded ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400"
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className={`px-4 py-2 bg-gray-300 rounded ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400"
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
