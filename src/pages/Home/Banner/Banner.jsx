import React from 'react';

const Banner = () => {
  return (
    <section className="px-4 md:px-5 py-6 md:py-10 bg-gray-100 text-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">


        {/* Left Column */}
        <div className="flex flex-col space-y-8 md:space-y-16 col-span-12 md:col-span-3 md:pr-4 border-b md:border-b-0 md:border-r border-gray-300">


          {/* First Card */}
          <div className="flex flex-col space-y-2 border-b-2 pb-4">
            {/* Category Label */}
            <h3 className="flex items-center space-x-2 text-gray-600">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-600"></span>
              <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
            </h3>

            {/* Title and Image (Image will be to the right of title) */}
            <div className="flex items-center space-x-3">
              {/* Title */}
              <a href="#" className="font-serif hover:underline text-lg text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
              {/* Image */}
              <img src="https://i.ibb.co.com/gTkYQqw/image5.jpg" alt="News" className="w-20 h-20 object-cover rounded-sm" />

            </div>
            {/* Author/Date */}
            <p className="text-xs text-gray-600">
              47 minutes ago by
              <a href="#" className="hover:underline text-violet-600"> Leroy Jenkins</a>
            </p>
          </div>


          {/* Second Card */}
          <div className="flex flex-col space-y-2 border-b-2 pb-4">
            {/* Category Label */}
            <h3 className="flex items-center space-x-2 text-gray-600">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-600"></span>
              <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
            </h3>

            {/* Title and Image (Image will be to the right of title) */}
            <div className="flex items-center space-x-3">
              {/* Title */}
              <a href="#" className="font-serif hover:underline text-lg text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
              {/* Image */}
              <img src="https://i.ibb.co.com/gTkYQqw/image5.jpg" alt="News" className="w-20 h-20 object-cover rounded-sm" />

            </div>
            {/* Author/Date */}
            <p className="text-xs text-gray-600">
              47 minutes ago by
              <a href="#" className="hover:underline text-violet-600"> Leroy Jenkins</a>
            </p>
          </div>


          {/* Third Card */}
          <div className="flex flex-col space-y-2 border-b-2 pb-4">
            {/* Category Label */}
            <h3 className="flex items-center space-x-2 text-gray-600">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-600"></span>
              <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
            </h3>

            {/* Title and Image (Image will be to the right of title) */}
            <div className="flex items-center space-x-3">
              {/* Title */}
              <a href="#" className="font-serif hover:underline text-lg text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
              {/* Image */}
              <img src="https://i.ibb.co.com/gTkYQqw/image5.jpg" alt="News" className="w-20 h-20 object-cover rounded-sm" />

            </div>
            {/* Author/Date */}
            <p className="text-xs text-gray-600">
              47 minutes ago by
              <a href="#" className="hover:underline text-violet-600"> Leroy Jenkins</a>
            </p>
          </div>

          {/* fourth card */}
          <div className="flex flex-col space-y-2 border-b-2 pb-4">
            {/* Category Label */}
            <h3 className="flex items-center space-x-2 text-gray-600">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-600"></span>
              <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
            </h3>

            {/* Title and Image (Image will be to the right of title) */}
            <div className="flex items-center space-x-3">
              {/* Title */}
              <a href="#" className="font-serif hover:underline text-lg text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
              {/* Image */}
              <img src="https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png" alt="News" className="w-20 h-20 object-cover rounded-sm" />

            </div>
            {/* Author/Date */}
            <p className="text-xs text-gray-600">
              47 minutes ago by
              <a href="#" className="hover:underline text-violet-600"> Leroy Jenkins</a>
            </p>
          </div>


        </div>




        {/* Center Column */}
        <div className="col-span-12 md:col-span-9 lg:col-span-5 xl:col-span-6 space-y-4    px-0 md:px-4 border-b md:border-b-0 md:border-r border-gray-300">

          <div className='border-b-2 border-gray-300 pb-4'>
            <a className="flex flex-col items-center justify-end p-6 sm:p-8 group bg-gradient-to-b from-gray-50 to-gray-50" href="#">
              <h1 className="font-serif text-2xl font-semibold group-hover:underline text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas nemo pariatur, numquam nobis enim.
              </h1>
            </a>
          </div>

          <div className='border-b-2 border-gray-300 pb-4'>
            <a className="flex flex-col items-center justify-end p-6 sm:p-8 group bg-gradient-to-b from-gray-50 to-gray-50" href="#">
              <h1 className="font-serif text-2xl font-semibold group-hover:underline text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas nemo pariatur, numquam nobis enim.
              </h1>
            </a>
          </div>

          <div className='border-b-2 border-gray-300 pb-4'>
            <a className="flex flex-col items-center justify-end p-6 sm:p-8 group bg-gradient-to-b from-gray-50 to-gray-50" href="#">
              <h1 className="font-serif text-2xl font-semibold group-hover:underline text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas nemo pariatur, numquam nobis enim.
              </h1>
            </a>
          </div>





          {/* Grid layout: 3 columns x 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-0">
            {/* card 1 */}
            <div className="bg-white rounded-sm shadow overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="News 1" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 hover:underline">Grid Card Title 1</h2>
                <p className="text-sm text-gray-600 mt-1">Short description of the first grid card goes here.</p>
              </div>
            </div>

            {/* card 2 */}
            <div className="bg-white rounded-sm shadow overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="News 2" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 hover:underline">Grid Card Title 2</h2>
                <p className="text-sm text-gray-600 mt-1">Short description of the second grid card goes here.</p>
              </div>
            </div>

            {/* card 3 */}
            <div className="bg-white rounded-sm shadow overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="News 3" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 hover:underline">Grid Card Title 3</h2>
                <p className="text-sm text-gray-600 mt-1">Short description of the third grid card goes here.</p>
              </div>
            </div>


            {/* card 4 */}
            <div className="bg-white rounded-sm shadow overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="News 4" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 hover:underline">Grid Card Title 4</h2>
                <p className="text-sm text-gray-600 mt-1">Short description of the fourth grid card goes here.</p>
              </div>
            </div>


            {/* card 5 */}
            <div className="bg-white rounded-sm shadow overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="News 5" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 hover:underline">Grid Card Title 5</h2>
                <p className="text-sm text-gray-600 mt-1">Short description of the fifth grid card goes here.</p>
              </div>
            </div>


            {/* card 6 */}
            <div className="bg-white rounded-sm shadow overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="News 6" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 hover:underline">Grid Card Title 6</h2>
                <p className="text-sm text-gray-600 mt-1">Short description of the sixth grid card goes here.</p>
              </div>
            </div>
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
