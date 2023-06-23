import Image from 'next/image';
import AuthForm from "@/app/auth/AuthForm";

export default function Home() {

  return (
    <>
 <div className="flex min-h-full flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      {/* <Image
      alt="logo"
      height="200"
      width="100"
      src="/lawconnect.jpeg"
      className="mx-auto w-auto"
      />     */}
      </div>
    <AuthForm/>
    
    </>
  )
}

