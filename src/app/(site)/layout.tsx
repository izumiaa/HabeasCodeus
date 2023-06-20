import Chat from "../components/Chat"
import Navbar from "../components/navbar/Navbar"

//for chatbot persist state
//https://javascript.plainenglish.io/next-js-keep-state-7eb68984c54e


export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Navbar/>
        <Chat/>
        <nav></nav>
        {children}
      </section>
    )
  }