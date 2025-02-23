"use client";
import React, { useEffect, useState } from "react";
import Footer from "./_components/footer/footer";

interface Movie {
  id: number;
  title: string;
  rating: number;
  duration: string;
  genre: string[];
  description: string;
  imageUrl: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  watchlist: Movie[];
  history: Movie[];
}

const App: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const featuredMovies: Movie[] = [
    {
      id: 1,
      title: "The Quantum Horizon",
      rating: 4.8,
      duration: "2h 35m",
      genre: ["Sci-Fi", "Adventure"],
      description:
        "A groundbreaking journey through space and time as humanity faces its greatest challenge yet.",
      imageUrl:
        "https://public.readdy.ai/ai/img_res/52d630595be5cb84a35ddf9000ab6b01.jpg",
    },
    {
      id: 2,
      title: "Echoes of Eternity",
      rating: 4.7,
      duration: "2h 15m",
      genre: ["Drama", "Mystery"],
      description:
        "A mind-bending tale of love and loss across parallel universes.",
      imageUrl:
        "https://public.readdy.ai/ai/img_res/77c81db2b353bf910c04b66f96a6ff41.jpg",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Action",
      count: 245,
      image:
        "https://public.readdy.ai/ai/img_res/9a1cd4715e60d3611e604dc4253a9e7e.jpg",
    },
    {
      id: 2,
      name: "Drama",
      count: 189,
      image:
        "https://public.readdy.ai/ai/img_res/2ad1772e00809bda5275dd02b0ceb814.jpg",
    },
    {
      id: 3,
      name: "Sci-Fi",
      count: 167,
      image:
        "https://public.readdy.ai/ai/img_res/4ab75955740e70b2b59b0ee5def262ac.jpg",
    },
  ];

  const mockUser: User = {
    id: 1,
    name: "Alexander Mitchell",
    email: "alex.mitchell@email.com",
    avatar:
      "https://public.readdy.ai/ai/img_res/ab092b944238829b32a3885509e518fc.jpg",
    watchlist: featuredMovies,
    history: featuredMovies,
  };

  const renderHomePage = () => (
    <div className="min-h-screen bg-white">
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={featuredMovies[0].imageUrl}
            alt="Featured Movie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">
              {featuredMovies[0].title}
            </h1>
            <p className="text-xl mb-6">{featuredMovies[0].description}</p>
            <button className="!rounded-button bg-red-600 text-white px-8 py-3 text-lg font-semibold hover:bg-red-700 transition-colors">
              Watch Now
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-red-600 mb-8">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold">
                    {category.name}
                  </h3>
                  <p className="text-gray-300">{category.count} movies</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-8">
            Featured Movies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...featuredMovies, ...featuredMovies].map((movie, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
              >
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                  <div className="flex items-center mb-2">
                    <i className="fas fa-star text-yellow-400"></i>
                    <span className="ml-2">{movie.rating}</span>
                    <span className="mx-2">•</span>
                    <span>{movie.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {movie.genre.map((g, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-sm"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderHeader = () => (
    <header className="bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1
              className="text-2xl font-bold cursor-pointer"
              onClick={() => setCurrentPage("home")}
            >
              MovieHub
            </h1>
            <nav className="hidden md:flex space-x-6">
              <button
                className="hover:text-gray-300 transition duraction-300"
                onClick={() => setCurrentPage("home")}
              >
                Home
              </button>
              <button
                className="hover:text-gray-300 transition duraction-300"
                onClick={() => setCurrentPage("categories")}
              >
                Categories
              </button>
              <button
                className="hover:text-gray-300 transition duraction-300"
                onClick={() => setCurrentPage("search")}
              >
                Browse
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                className="px-4 py-2 rounded-full text-gray-800 w-48 focus:outline-none focus:ring-2 focus:ring-red-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            {isLoggedIn ? (
              <button
                className="flex items-center space-x-2 hover:text-gray-200"
                onClick={() => setCurrentPage("profile")}
              >
                <img
                  src={mockUser.avatar}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span>{mockUser.name}</span>
              </button>
            ) : (
              <button
                className="!rounded-button bg-white text-red-600 px-4 py-2 font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => setShowLoginModal(true)}
              >
                Sign In
              </button>
            )}
            <button
              className="md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  const renderLoginModal = () => (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
        showLoginModal ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
          <button onClick={() => setShowLoginModal(false)}>
            <i className="fas fa-times text-gray-500 hover:text-gray-700"></i>
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="!rounded-button w-full bg-red-600 text-white py-2 font-semibold hover:bg-red-700 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
              setShowLoginModal(false);
            }}
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Dont have an account?{" "}
            <span className="text-red-600 cursor-pointer">Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return renderHomePage();
      case "profile":
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-8">
                <img
                  src={mockUser.avatar}
                  alt="Profile"
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-bold">{mockUser.name}</h2>
                  <p className="text-gray-600">{mockUser.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-">
                    Watchlist
                  </h3>
                  <div className="space-y-4">
                    {mockUser.watchlist.map((movie) => (
                      <div
                        key={movie.id}
                        className="flex items-center space-x-4"
                      >
                        <img
                          src={movie.imageUrl}
                          alt={movie.title}
                          className="w-24 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-semibold">{movie.title}</h4>
                          <p className="text-gray-600">{movie.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-4">
                    Recently Watched
                  </h3>
                  <div className="space-y-4">
                    {mockUser.history.map((movie) => (
                      <div
                        key={movie.id}
                        className="flex items-center space-x-4"
                      >
                        <img
                          src={movie.imageUrl}
                          alt={movie.title}
                          className="w-24 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-semibold">{movie.title}</h4>
                          <p className="text-gray-600">{movie.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderHeader()}
      {renderContent()}
      {renderLoginModal()}
      {isClient && <Footer />}
    </div>
  );
};

export default App;
