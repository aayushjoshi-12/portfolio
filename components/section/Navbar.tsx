import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex text-lightgray justify-between items-end gap-8">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Aayush <span className="font-sacramento">Joshi</span>
      </h1>
      <div className="flex gap-4">
        <Link href="/" className="flex hover:text-halfgray">home</Link>
        <Link href="https://drive.google.com/file/d/1L0wpxKFeGDmLwB5XURnVb5W5-Lutsmvw/view?usp=sharing" target="_blank" className="flex hover:text-halfgray">resume</Link>
        <Link href="https://medium.com/@aayushjoshi-12" target="_blank" className="flex hover:text-halfgray">blogs</Link>
      </div>
    </div>
  )
}

export default Navbar