import React from 'react';

const Banner = () => {
  return (
    <section className="py-6 md:py-10  text-gray-800">
      <div className="p-2 md:p-4 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 ">


        {/* Left Column */}
        <div className="flex flex-col space-y-8 md:space-y-16 col-span-12 md:col-span-3 md:pr-4 border-b md:border-b-0 md:border-r-2 border-gray-400 ">

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
        <div className="col-span-12 md:col-span-9 lg:col-span-5 xl:col-span-6 space-y-4    px-0 md:px-0 border-b md:border-b-0    ">

          {/* card 1 */}
          <div className="border-b-2 border-gray-300 pb-4">
            <a href="#" className="flex flex-col items-start p-6 sm:p-8 group bg-gradient-to-b from-gray-50 to-gray-50">
              {/* Title */}
              <h1 className="font-serif text-2xl font-semibold text-gray-800 group-hover:underline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas nemo pariatur, numquam nobis enim.
              </h1>

              {/* Image */}
             <img
                src="https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png"
                alt="News"
                className="w-full h-48 object-cover  mt-4 rounded-lg"
              />
          

              {/* Description */}
              <p className="text-sm text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis quam vitae felis suscipit, at tincidunt nunc pharetra.
              </p>

              {/* Read More link */}
              <span className="mt-2 text-sm text-violet-600 hover:underline">
                Read more...
              </span>
            </a>
          </div>


             {/* card 2 */}
             <div className="border-b-2 border-gray-300 pb-4">
            <a href="#" className="flex flex-col items-start p-6 sm:p-8 group bg-gradient-to-b from-gray-50 to-gray-50">
              {/* Title */}
              <h1 className="font-serif text-2xl font-semibold text-gray-800 group-hover:underline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas nemo pariatur, numquam nobis enim.
              </h1>

              {/* Image */}
             <img
                src="https://i.ibb.co/CVg1Nrt/unsplash-Eh-Tc-C9s-YXsw-5.png"
                alt="News"
                className="w-full h-48 object-cover  mt-4 rounded-lg"
              />
          

              {/* Description */}
              <p className="text-sm text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis quam vitae felis suscipit, at tincidunt nunc pharetra.
              </p>

              {/* Read More link */}
              <span className="mt-2 text-sm text-violet-600 hover:underline">
                Read more...
              </span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-0">
            {/* card 1 */}
            <div className="bg-white rounded-sm shadow overflow-hidden">
              <img src="https://i.ibb.co/vz5K0FB/unsplash-Eh-Tc-C9s-YXsw-10.png" alt="News 1" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p className="text-sm text-gray-600 mt-1">Short description of the first grid card goes here.</p>
              </div>
            </div>

            {/* card 2 */}
            <div className="bg-white rounded-sm shadow overflow-hidden">
              <img src="https://i.ibb.co/PxC67LV/unsplash-Eh-Tc-C9s-YXsw-1.png" alt="News 2" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 hover:underline">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                <p className="text-sm text-gray-600 mt-1">Short description of the second grid card goes here.</p>
              </div>
            </div>

            {/* card 3 */}
            <div className="bg-white rounded-sm shadow overflow-hidden">
              <img src="https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png" alt="News 3" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 hover:underline">Lorem ipsum dolor, sit amet consectetur adipisicing elit</h2>
                <p className="text-sm text-gray-600 mt-1">Short description of the third grid card goes here.</p>
              </div>
            </div>


            {/* card 4 */}
            <div className="bg-white rounded-sm shadow overflow-hidden">
              <img src="https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png" alt="News 4" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 hover:underline">Lorem ipsum dolor, sit amet consectetur adipisicing elit</h2>
                <p className="text-sm text-gray-600 mt-1">Short description of the fourth grid card goes here.</p>
              </div>
            </div>


            {/* card 5 */}
            <div className="bg-white rounded-sm shadow overflow-hidden">
              <img src="https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png" alt="News 5" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 hover:underline">Lorem ipsum dolor, sit amet consectetur adipisicing elit</h2>
                <p className="text-sm text-gray-600 mt-1">Short description of the fifth grid card goes here.</p>
              </div>
            </div>


            {/* card 6 */}
            <div className="bg-white rounded-sm shadow overflow-hidden">
              <img src="https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png" alt="News 6" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 hover:underline">Lorem ipsum dolor, sit amet consectetur adipisicing elit</h2>
                <p className="text-sm text-gray-600 mt-1">Short description of the sixth grid card goes here.</p>
              </div>
            </div>
          </div>



        </div>








        {/* Right Column */}
        <div className="block col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3 py-2 md:border-l-2 border-gray-400 md:pl-4 pl-0">

          {/* First Right Card */}
          <div className="flex px-1 py-4 border-b-2">
            <img src="https://i.ibb.co/CVg1Nrt/unsplash-Eh-Tc-C9s-YXsw-5.png" alt="" className="object-cover w-20 h-20 mr-4 bg-gray-500" />
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
            <img src="https://i.ibb.co/CVg1Nrt/unsplash-Eh-Tc-C9s-YXsw-5.png" alt="" className="object-cover w-20 h-20 mr-4 bg-gray-500" />
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
            <img src="https://i.ibb.co/CVg1Nrt/unsplash-Eh-Tc-C9s-YXsw-5.png" alt="" className="object-cover w-20 h-20 mr-4 bg-gray-500" />
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
            <img src="https://i.ibb.co/CVg1Nrt/unsplash-Eh-Tc-C9s-YXsw-5.png" alt="" className="object-cover w-20 h-20 mr-4 bg-gray-500" />
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
