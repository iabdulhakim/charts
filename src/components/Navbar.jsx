import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
    <div>
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="./" className="btn btn-ghost text-xl">Charts</a>
        </div>
        
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={'/piechart'}>Classwork</Link>
            </li>
            <li>
              <Link href={'/barchart'}>Population</Link>
            </li>
            <li>
              <Link href={'/barchart2'}>Area</Link>
            </li>
          </ul>
        </div>
        <Link className="ml-[80px] btn btn-primary" href={'/'}>Back</Link>
      </div>
    </div>
  )
}

export default Navbar;