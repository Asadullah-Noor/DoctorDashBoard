import React, { useState } from 'react'
import { Home, Users, Calendar, MessageSquare, CreditCard, Settings, MoreVertical } from 'lucide-react'

// Replace this with your actual logo import:
// import logo from '../assets/TestLogo.svg'

const navItems = [
  { label: 'Overview',     icon: Home },
  { label: 'Patients',     icon: Users },
  { label: 'Schedule',     icon: Calendar },
  { label: 'Message',      icon: MessageSquare },
  { label: 'Transactions', icon: CreditCard },
]

const Header = () => {
  const [active, setActive] = useState('Patients')

  return (
    <header className="flex items-center justify-between px-6 h-16 bg-white shadow-sm rounded-2xl mx-4 my-3">

      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* <img src={logo} alt="Tech.Care" className="h-8" /> */}
        <span className="text-teal-500 font-bold text-xl">✦ Tech.Care</span>
      </div>

      {/* Nav Links */}
      <nav className="flex items-center gap-1">
        {navItems.map(({ label, icon: Icon }) => {
          const isActive = active === label
          return (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                ${isActive
                  ? 'bg-teal-400 text-white'          // ✅ Active pill style
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                }`}
            >
              <Icon size={15} />
              {label}
            </button>
          )
        })}
      </nav>

      {/* Doctor Profile */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="Dr. Jose Simmons"
          className="w-10 h-10 rounded-full object-cover"
        />
        {/* Name + Role */}
        <div className="leading-tight">
          <p className="text-sm font-semibold text-gray-800">Dr. Jose Simmons</p>
          <p className="text-xs text-gray-400">General Practitioner</p>
        </div>
        {/* Icons */}
        <Settings size={18} className="text-gray-400 cursor-pointer hover:text-gray-600" />
        <MoreVertical size={18} className="text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>

    </header>
  )
}

export default Header