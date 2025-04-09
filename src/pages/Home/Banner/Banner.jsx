import React from 'react';

const Banner = () => {
  return (
    <section className="px-4 md:px-5 py-6 md:py-10 bg-gray-100 text-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">


        {/* Left Column */}
        <div className="flex flex-col space-y-8 md:space-y-16 col-span-12 md:col-span-3 md:pr-4 border-b md:border-b-0 md:border-r border-gray-300">
          {/* First Card */}
          <div className="flex flex-col space-y-2 border-b-2 pb-4">
            <h3 className="flex items-center space-x-2 text-gray-600">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-600"></span>
              <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
            </h3>
            <a href="#" className="font-serif hover:underline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </a>
            <p className="text-xs text-gray-600">
              47 minutes ago by
              <a href="#" className="hover:underline text-violet-600"> Leroy Jenkins</a>
            </p>
          </div>

          {/* Second Card */}
          <div className="flex flex-col space-y-2 border-b-2 pb-4">
            <h3 className="flex items-center space-x-2 text-gray-600">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-600"></span>
              <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
            </h3>
            <a href="#" className="font-serif hover:underline">
              Donec sed elit quis odio mollis dignissim eget et nulla.
            </a>
            <p className="text-xs text-gray-600">
              2 hours ago by
              <a href="#" className="hover:underline text-violet-600"> Leroy Jenkins</a>
            </p>
          </div>

          {/* Third Card */}
          <div className="flex flex-col space-y-2 border-b-2 pb-4">
            <h3 className="flex items-center space-x-2 text-gray-600">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-600"></span>
              <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
            </h3>
            <a href="#" className="font-serif hover:underline">
              Nunc nec ipsum lobortis, pulvinar neque sed.
            </a>
            <p className="text-xs text-gray-600">
              4 hours ago by
              <a href="#" className="hover:underline text-violet-600"> Leroy Jenkins</a>
            </p>
          </div>

          <div className="flex flex-col w-full space-y-2">
            <div className="h-1 bg-opacity-10 bg-violet-600">
              <div className="w-1/2 h-full bg-violet-600"></div>
            </div>
            <a href="#" className="flex items-center justify-between w-full">
              <span className="text-xs font-bold tracking-wider uppercase">See more exclusives</span>
              <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent text-violet-600">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>




        {/* Center Column */}
        <div className="col-span-12 md:col-span-9 lg:col-span-5 xl:col-span-6 space-y-4    px-0 md:px-4 border-b md:border-b-0 md:border-r border-gray-300">
          <div>
            <a className="flex flex-col items-center justify-end p-6 sm:p-8 group bg-gradient-to-b from-gray-50 to-gray-50" href="#">
              <h1 className="font-serif text-2xl font-semibold group-hover:underline text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas nemo pariatur, numquam nobis enim.
              </h1>
            </a>
          </div>
          <div>
            <a className="flex flex-col items-center justify-end p-6 sm:p-8 group bg-gradient-to-b from-gray-50 to-gray-50" href="#">
              <h1 className="font-serif text-2xl font-semibold group-hover:underline text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas nemo pariatur, numquam nobis enim.
              </h1>
            </a>
          </div>
          <div>
            <a className="flex flex-col items-center justify-end p-6 sm:p-8 group bg-gradient-to-b from-gray-50 to-gray-50" href="#">
              <h1 className="font-serif text-2xl font-semibold group-hover:underline text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas nemo pariatur, numquam nobis enim.
              </h1>
            </a>
          </div>
          <div>
            <a className="flex flex-col items-center justify-end p-6 sm:p-8 group bg-gradient-to-b from-gray-50 to-gray-50" href="#">
              <h1 className="font-serif text-2xl font-semibold group-hover:underline text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas nemo pariatur, numquam nobis enim.
              </h1>
            </a>
          </div>
          <div>
            <a className="flex flex-col items-center justify-end p-6 sm:p-8 group bg-gradient-to-b from-gray-50 to-gray-50" href="#">
              <h1 className="font-serif text-2xl font-semibold group-hover:underline text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas nemo pariatur, numquam nobis enim.
              </h1>
            </a>
          </div>
        </div>



        {/* Right Column */}
        <div className="block col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3 py-2">
          {/* First Right Card */}
          <div className="flex px-1 py-4 border-b-2">
            <img src="https://source.unsplash.com/random/244x324" alt="" className="object-cover w-20 h-20 mr-4 bg-gray-500" />
            <div className="flex flex-col flex-grow">
              <a href="#" className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</a>
              <p className="mt-auto text-xs text-gray-600">
                5 minutes ago
                <a href="#" className="block text-blue-600 lg:ml-2 lg:inline hover:underline">Politics</a>
              </p>
            </div>
          </div>

          {/* Second Right Card */}
          <div className="flex px-1 py-4 border-b-2">
            <img src="https://source.unsplash.com/random/245x325" alt="" className="object-cover w-20 h-20 mr-4 bg-gray-500" />
            <div className="flex flex-col flex-grow">
              <a href="#" className="font-serif hover:underline">Nulla consectetur efficitur.</a>
              <p className="mt-auto text-xs text-gray-600">
                14 minutes ago
                <a href="#" className="block text-blue-600 lg:ml-2 lg:inline hover:underline">Sports</a>
              </p>
            </div>
          </div>

          {/* Third Right Card */}
          <div className="flex px-1 py-4 border-b-2">
            <img src="https://source.unsplash.com/random/246x326" alt="" className="object-cover w-20 h-20 mr-4 bg-gray-500" />
            <div className="flex flex-col flex-grow">
              <a href="#" className="font-serif hover:underline">Vitae semper augue purus tincidunt libero.</a>
              <p className="mt-auto text-xs text-gray-600">
                22 minutes ago
                <a href="#" className="block text-blue-600 lg:ml-2 lg:inline hover:underline">World</a>
              </p>
            </div>
          </div>

          {/* Fourth Right Card */}
          <div className="flex px-1 py-4 border-b-2">
            <img src="https://source.unsplash.com/random/247x327" alt="" className="object-cover w-20 h-20 mr-4 bg-gray-500" />
            <div className="flex flex-col flex-grow">
              <a href="#" className="font-serif hover:underline">Suspendisse potenti.</a>
              <p className="mt-auto text-xs text-gray-600">
                37 minutes ago
                <a href="#" className="block text-blue-600 lg:ml-2 lg:inline hover:underline">Business</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
