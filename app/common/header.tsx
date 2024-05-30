import React from 'react'

type Props = {}

export default function section1({}: Props) {
  return (
        <div className="sticky top-0 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                </div>
                <a className="btn btn-ghost text-xl">O-Pulse</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
  )
}