import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex text-lightgray justify-between items-end px-4 md:px-96 py-4 gap-8 ">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Aayush <span className="font-sacramento">Joshi</span>
      </h1>
      <div className="flex gap-4">
        <Link href="/" className="flex hover:text-halfgray">home</Link>
        <Link href="https://docs.google.com/document/d/1PZ_CVc_FqQEN27OQNE1eftXs4jPL9dwIUe0IB9jD__8/edit?usp=sharing" target="_blank" className="flex hover:text-halfgray">resume</Link>
        <Link href="https://medium.com/@aayushjoshi-12" target="_blank" className="flex hover:text-halfgray">blogs</Link>
      </div>
    </div>
  )
}

export default Navbar