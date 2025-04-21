
// import { createFileRoute } from '@tanstack/react-router';
// import { useNavigate } from '@tanstack/react-router';
// import { getImageById } from '../../service/image.service';

// export const Route = createFileRoute('/image-gallery/$imgId')({
//   component: RouteComponent,
//   loader: async ({ params }) => {
//     console.log(params, 'this is params from route');
//     const id = Number(params.imgId);
//     console.log(`prefetching image with id: ${id}...`);
//     const image = await getImageById(id);
//     console.log(`image with id: ${id} prefetched!`);
//     console.log(image, 'this is image from route');
//     return { image };
//   },
// });

// function RouteComponent() {
//   const fullImage = Route.useLoaderData();
//   console.log(fullImage, 'this is full image from child route');

//   const navigate = useNavigate();
//   const handleNavigateToLogin = () => navigate({ to: '/' });
//   const handleHomeRoute = () => navigate({ to: '/home' });

//   return (
//     <>
//       <div className="min-h-screen flex flex-col items-center justify-center p-6">
//         <h1 className="text-transparent bg-clip-text text-5xl font-extrabold text-center py-8 bg-gradient-to-r from-gray-700 to-gray-900">
//           Hello from Nested Image Route!
//         </h1>

//         <div className="relative mb-6 w-full max-w-3xl overflow-hidden rounded-lg border-transparent bg-gradient-to-r from-gray-300 to-gray-500 p-[1px] shadow-lg">
//           <img
//             src={fullImage?.image.download_url}
//             alt={fullImage?.image.author}
//             className="w-full h-auto max-h-[600px] object-cover transition-transform transform hover:scale-105 hover:rotate-2 hover:opacity-80 ease-in-out duration-300 rounded-lg"
//           />
//         </div>

//         <h1 className="text-transparent bg-clip-text text-5xl font-extrabold text-center bg-gradient-to-r from-gray-700 to-gray-900">
//           {fullImage?.image.author}
//         </h1>

//         <div className="text-center mt-6 flex flex-wrap justify-center gap-6">
//           <div>
//             <button
//               onClick={handleHomeRoute}
//               className="w-full font-medium text-lg rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-[1px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l hover:from-blue-600 hover:via-blue-700 hover:to-blue-800"
//             >
//               <span className="block bg-[#0f1418] py-3 px-8 rounded-2xl text-white">
//                 Home Page
//               </span>
//             </button>
//           </div>
//           <div>
//             <button
//               onClick={handleNavigateToLogin}
//               className="w-full font-medium text-lg rounded-2xl bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 p-[1px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l hover:from-gray-700 hover:via-gray-800 hover:to-gray-900"
//             >
//               <span className="block bg-[#0f1418] py-3 px-8 rounded-2xl text-white">
//                 Login Page
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { createFileRoute } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { getImageById } from '../../service/image.service';

export const Route = createFileRoute('/image-gallery/$imgId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    console.log(params, 'this is params from route');
    const id = Number(params.imgId);
    console.log(`prefetching image with id: ${id}...`);
    const image = await getImageById(id);
    console.log(`image with id: ${id} prefetched!`);
    console.log(image, 'this is image from route');
    return { image };
  },
});

function RouteComponent() {
  const fullImage = Route.useLoaderData();
  console.log(fullImage, 'this is full image from child route');

  const navigate = useNavigate();
  const handleNavigateToLogin = () => navigate({ to: '/' });
  const handleHomeRoute = () => navigate({ to: '/home' });

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-between p-6 bg-gradient-to-r from-teal-400 to-gray-300">
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-transparent bg-clip-text text-5xl font-extrabold text-center py-8 bg-gradient-to-r from-teal-600 to-teal-400">
            Welcome to the Image Gallery
          </h1>

          <div className="relative mb-6 w-full max-w-3xl overflow-hidden rounded-lg shadow-lg bg-white">
            <img
              src={fullImage?.image.download_url}
              alt={fullImage?.image.author}
              className="w-full h-auto max-h-[600px] object-cover transition-transform transform hover:scale-105 hover:rotate-2 hover:opacity-80 ease-in-out duration-300 rounded-lg"
            />
          </div>

          <h1 className="text-gray-700 text-4xl font-semibold text-center">
            {fullImage?.image.author}
          </h1>
        </div>

        <div className="text-center mt-6 flex flex-wrap justify-center gap-6 mb-6">
          <div>
            <button
              onClick={handleHomeRoute}
              className="w-full font-medium text-lg rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 px-8 shadow-xl hover:shadow-2xl hover:from-blue-600 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Home Page
            </button>
          </div>
          <div>
            <button
              onClick={handleNavigateToLogin}
              className="w-full font-medium text-lg rounded-lg bg-gradient-to-r from-gray-600 to-gray-500 text-white py-3 px-8 shadow-xl hover:shadow-2xl hover:from-gray-700 hover:to-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Login Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
