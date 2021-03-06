import Image from "next/image";
import { useMoralis } from "react-moralis";


function Login() {
  const {authenticate} = useMoralis();
  return (
    <div className=" bg-black relative text-white ">
     

      <div className="flex flex-col absolute z-50 w-full h-4/6  items-center justify-center space-y-4">
          <Image 
          className="object-cover rounded-full"
           src="https://i.imgur.com/xQlgicI.jpg"
          width={200} height={200}
           />
           <button
           onClick={authenticate}
            className="text-black bg-red-700 rounded-lg p-5 font-bold animate-pulse">
              Login to The MetaVerse 
              </button>

      </div>
      <div className="w-full h-screen">
          <Image 
          src="https://i.imgur.com/9yfVdph.jpg" 
          layout='fill' 
          objectFit="cover"
           />
      </div>
    </div>
  );
}

export default Login;
