import Image from 'next/image';
import AuthForm from "@/app/auth/AuthForm";

export default function Home() {

  return (
    <>
    <Image src="/lawconnect.jpeg" ml="500px" alt="" width="200" height="200"/>
    <AuthForm/>
    </>
  )
}

