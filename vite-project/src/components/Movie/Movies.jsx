import { m } from 'framer-motion';
import React, { useState } from 'react'




export default function Movies() {

  const movieList = [
    {
      cityName: "Karnal",
      data: [
        {
          mall: "Super Mall",
          movies: [
            { name: "Inception", price: 200 },
            { name: "Oppenheimer", price: 300 },
            { name: "Tenet", price: 250 }
          ]
        },
        {
          mall: "Kessel Mall",
          movies: [
            { name: "Interstellar", price: 400 },
            { name: "Dune", price: 350 },
            { name: "Avatar", price: 500 }
          ]
        },
        {
          mall: "Alpha Mall",
          movies: [
            { name: "Joker", price: 200 },
            { name: "The Batman", price: 300 },
            { name: "Dunki", price: 250 }
          ]
        },
        {
          mall: "City Square",
          movies: [
            { name: "Pathaan", price: 400 },
            { name: "Jawan", price: 350 },
            { name: "Tiger 3", price: 300 }
          ]
        },
        {
          mall: "CineHub Mall",
          movies: [
            { name: "Avengers", price: 500 },
            { name: "Iron Man", price: 250 },
            { name: "Doctor Strange", price: 300 }
          ]
        }
      ]
    },
    {
      cityName: "Panipat",
      data: [
        {
          mall: "Mittal Mall",
          movies: [
            { name: "Dunki", price: 250 },
            { name: "Pathaan", price: 300 },
            { name: "Jawan", price: 400 }
          ]
        },
        {
          mall: "Galaxy Mall",
          movies: [
            { name: "KGF 2", price: 200 },
            { name: "Leo", price: 250 },
            { name: "Vikram", price: 300 }
          ]
        },
        {
          mall: "Grand Mall",
          movies: [
            { name: "Inception", price: 200 },
            { name: "Oppenheimer", price: 400 },
            { name: "Dune", price: 350 }
          ]
        },
        {
          mall: "Cinepolis Mall",
          movies: [
            { name: "Avengers", price: 500 },
            { name: "Iron Man", price: 300 },
            { name: "Doctor Strange", price: 350 }
          ]
        },
        {
          mall: "Royal Plaza",
          movies: [
            { name: "Tenet", price: 250 },
            { name: "Interstellar", price: 300 },
            { name: "The Batman", price: 400 }
          ]
        }
      ]
    },
    {
      cityName: "Ambala",
      data: [
        {
          mall: "City Centre",
          movies: [
            { name: "Pathaan", price: 300 },
            { name: "Tiger 3", price: 400 },
            { name: "Dunki", price: 250 }
          ]
        },
        {
          mall: "Crown Mall",
          movies: [
            { name: "Joker", price: 200 },
            { name: "The Batman", price: 300 },
            { name: "Inception", price: 350 }
          ]
        },
        {
          mall: "Metro Mall",
          movies: [
            { name: "Avatar", price: 400 },
            { name: "Oppenheimer", price: 300 },
            { name: "Interstellar", price: 500 }
          ]
        },
        {
          mall: "Fun City",
          movies: [
            { name: "Leo", price: 250 },
            { name: "Vikram", price: 300 },
            { name: "KGF 2", price: 350 }
          ]
        },
        {
          mall: "Lifestyle Mall",
          movies: [
            { name: "Doctor Strange", price: 300 },
            { name: "Iron Man", price: 250 },
            { name: "Avengers", price: 500 }
          ]
        }
      ]
    },
    {
      cityName: "Hisar",
      data: [
        {
          mall: "Urban Mall",
          movies: [
            { name: "Pathaan", price: 350 },
            { name: "Dunki", price: 250 },
            { name: "Jawan", price: 400 }
          ]
        },
        {
          mall: "Gold City Mall",
          movies: [
            { name: "KGF 2", price: 200 },
            { name: "Leo", price: 300 },
            { name: "Vikram", price: 250 }
          ]
        },
        {
          mall: "Platinum Plaza",
          movies: [
            { name: "Oppenheimer", price: 400 },
            { name: "Inception", price: 300 },
            { name: "Dune", price: 350 }
          ]
        },
        {
          mall: "Dream Mall",
          movies: [
            { name: "Avengers", price: 500 },
            { name: "Iron Man", price: 300 },
            { name: "Doctor Strange", price: 250 }
          ]
        },
        {
          mall: "City Point",
          movies: [
            { name: "The Batman", price: 250 },
            { name: "Joker", price: 200 },
            { name: "Tenet", price: 300 }
          ]
        }
      ]
    },
    {
      cityName: "Kurukshetra",
      data: [
        {
          mall: "Divine Mall",
          movies: [
            { name: "Oppenheimer", price: 400 },
            { name: "Dunki", price: 250 },
            { name: "Tenet", price: 300 }
          ]
        },
        {
          mall: "Krishna Mall",
          movies: [
            { name: "Avatar", price: 400 },
            { name: "Dune", price: 350 },
            { name: "Inception", price: 200 }
          ]
        },
        {
          mall: "Galaxy Plaza",
          movies: [
            { name: "Interstellar", price: 500 },
            { name: "The Batman", price: 300 },
            { name: "Joker", price: 250 }
          ]
        },
        {
          mall: "CineWorld",
          movies: [
            { name: "Pathaan", price: 350 },
            { name: "Jawan", price: 400 },
            { name: "Tiger 3", price: 250 }
          ]
        },
        {
          mall: "Mega Mall",
          movies: [
            { name: "Avengers", price: 500 },
            { name: "Iron Man", price: 300 },
            { name: "Doctor Strange", price: 350 }
          ]
        }
      ]
    }
  ];

  const [cityOpen, setCityOpen] = useState(false);

  const [mallOpen, setMallOpen] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState("");

  return (

    <div className="text-black">
      <h2>Select City</h2>
      <select
        name="city"
        id="citySelect"
        onChange={(e) => setCityOpen(e.target.value)} 
      >
        <option value="">Choose a City </option>
        {movieList.map((item, index) => (
          <option key={index} value={item.cityName}>
            {item.cityName}
          </option>
        ))}
      </select>

      {cityOpen &&
        movieList
          .filter(city => city.cityName === cityOpen)
          .map(city => (
            <div key={city.cityName}>
              <select
                name="mall"
                id="mallselect"
                onChange={(e) => setMallOpen(e.target.value)}
              >
                <option value="">-- Choose a Mall --</option>
                {city.data.map((mall, index) => (
                  <option key={index} value={mall.mall}>
                    {mall.mall}
                  </option>
                ))}
              </select>
            </div>
          ))
      }

      {mallOpen && (
        <div>
          <h3>Select Movie</h3>
          <select
            name="movie"
            id="movieselect"
            onChange={(e) => setSelectedMovie(e.target.value)}
          >
            <option value="">-- Choose a Movie --</option>
            {movieList
              .find(city => city.cityName === cityOpen)
              .data.find(mall => mall.mall === mallOpen)
              .movies.map((movie, index) => (
                <option key={index} value={movie.name}>
                  {movie.name}
                </option>
              ))}
          </select>

          {selectedMovie && (
            <p>
              Price: ₹
              {
                movieList
                  .find(city => city.cityName === cityOpen)
                  .data.find(mall => mall.mall === mallOpen)
                  .movies.find(movie => movie.name === selectedMovie).price
              }
            </p>
          )}
        </div>
      )}






    </div>


  )
}
