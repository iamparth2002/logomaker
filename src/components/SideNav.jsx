import { Image, PencilRuler, Shield } from 'lucide-react';
import React, { useState } from 'react';

const SideNav = ({selectedIndex}) => {
  const menuList = [
    {
      id: 1,
      name: 'Icon',
      icon: PencilRuler,
    },
    {
      id: 2,
      name: 'Background',
      icon: Image,
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div className="h-screen border shadow-sm">
      <div>
        {menuList.map((menu, index) => (
          <h2
          onClick={()=>{setSelected(index);selectedIndex(index)}}
            key={index}
            className={`p-5 text-lg px-7 text-gray-500 cursor-pointer flex hover:bg-blue-900 hover:text-white gap-3 items-center ${selected==index && 'bg-blue-900 text-white' }`}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
