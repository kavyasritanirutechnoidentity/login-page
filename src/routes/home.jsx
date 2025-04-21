import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';


export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const handleHomeRoute = () => navigate({ to: '/' });
  const handleImageRoute = () => navigate({ to: '/image-gallery' });
  const router = useRouter();

  const handlePreFetch = () => {
    router.load({ to: '/Image-gallary' })
      .then(() => {
        console.log("Prefetched successfully!");
      })
      .catch((error) => console.log(error, "Sorry, prefetch unsuccessful"));
  };

  return (
    <>
    
    {/* <Header /> */}
    <div className="min-h-screen flex items-center justify-center p-6">
      
      <div className="text-center max-w-md sm:max-w-lg p-6 sm:p-8 bg-gradient-to-br from-[#0e0b14] to-[#1f2630] rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6 sm:mb-8 tracking-tight leading-tight">
          Welcome to the Image Gallery Page
        </h1>

        <div className="text-center mt-6 flex flex-wrap justify-center gap-6">
          <div>
          <button
            onClick={handleHomeRoute}
            className="w-full font-medium text-lg rounded-4xl bg-[#00010d] border-1 
                  border-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-[1px] 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l hover:from-blue-600 hover:via-indigo-700 hover:to-purple-800"
              >
            <span className="block bg-[#00010d] py-3 px-8 rounded-4xl">Login Page</span>
          </button>
          </div>
          <div>
          <button
            onClick={handleImageRoute}
            onMouseEnter={handlePreFetch}
            className="w-full font-medium text-lg rounded-4xl bg-[#00010d] border-1 
                  border-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-[1px] 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l hover:from-blue-600 hover:via-indigo-700 hover:to-purple-800"
              >
            <span className="block bg-[#00010d] py-3 px-8 rounded-4xl">Image Gallery</span>
          </button>
          </div>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
    </>
  );
}
