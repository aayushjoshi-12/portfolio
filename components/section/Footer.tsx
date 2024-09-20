import Link from 'next/link'
import React from 'react'
import {IconArrowUpRight} from '@tabler/icons-react'

const Footer = () => {
  return (
    <div className='py-10 text-lightgray'>
      <div className="flex gap-4">
        <Link href="mailto:joshiaayush1244@gmail.com" className='flex hover:text-halfgray'>
          <IconArrowUpRight/> email
        </Link>
        <Link href="https://github.com/aayushjoshi-12/" className='flex hover:text-halfgray'>
        <IconArrowUpRight/> github
        </Link>
        <Link href="https://linkedin.com/in/aayushjoshi1244" className='flex hover:text-halfgray'>
        <IconArrowUpRight/> linkedin
        </Link>
      </div>
      <div className="text-mutedgray text-xs pt-2">© 2024 Aayush Joshi</div>
    </div>
  )
}

export default Footer