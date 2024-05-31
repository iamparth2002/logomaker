import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Smile, icons } from 'lucide-react';
import { iconList } from '@/constants/IconList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import axios from 'axios';

const IconList = ({ selectedIcon }) => {
  const BASE_URL = 'https://logoexpress.tubeguruji.com/getIcons.php';
  const storageValue = JSON.parse(localStorage.getItem('value'));
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : 'Smile');
  const [colorIcons, setColorIcons] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);
  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return;
    return (
      <LucidIcon
        size={size}
        color={color}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };
  useEffect(() => {
    getIcons();
  }, []);

  const getIcons = () => {
    axios.get(BASE_URL).then((res) => {
      console.log(res.data);
      setColorIcons(res.data);
    });
  };
  return (
    <div>
      <div className="flex items-center gap-3">
        <label htmlFor="">Icon : </label>
        <div
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          <div>
            {icon.includes('.png')?<img src={`https://logoexpress.tubeguruji.com/png/${icon}`} alt=""/>:<Icon name={icon} color={'#000'} size={30} />}
            
          </div>
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="p-1 pb-3">
              Pick your favorite icon
            </DialogTitle>
            <Tabs defaultValue="icons" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="icons">Icons</TabsTrigger>
                <TabsTrigger value="color-icons">Coloured Icons</TabsTrigger>
              </TabsList>

              <TabsContent value="icons">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 h-[400px] overflow-auto p-2 ml-2 mr-[-30px]">
                  {iconList.map((icon, index) => (
                    
                    <div
                      key={index}
                      className="bg-gray-200 rounded-md p-2 cursor-pointer"
                      onClick={() => {
                        selectedIcon(icon);
                        setOpenDialog(false);
                        setIcon(icon);
                      }}
                    >
                      <Icon name={icon} color={'#000'} size={50} />
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="color-icons">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 h-[400px] overflow-auto p-2 ml-2 mr-[-30px]">
                  {colorIcons.map((icon, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 rounded-md p-2 cursor-pointer"
                      onClick={() => {
                        selectedIcon(icon);
                        setOpenDialog(false);
                        setIcon(icon);
                      }}
                    >
                      <img src={`https://logoexpress.tubeguruji.com/png/${icon}`} alt="" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconList;
