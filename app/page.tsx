import { About, Experiences, Footer, Navbar, Projects } from "@/components/section";

export default function Home() {
  return(
    <div className="flex flex-col px-4 md:px-96 py-8 gap-8 ">
      <About/>
      <Experiences/>
      <Projects/>
      <Footer/>
    </div>
  )
}
