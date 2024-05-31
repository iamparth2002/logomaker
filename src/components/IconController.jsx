import { Smile } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import IconList from './IconList';

const IconController = () => {
  const storageValue = JSON.parse(localStorage.getItem('value'));
  const [size, setSize] = useState(storageValue?storageValue?.iconSize : 280);
  const [rotate, setRotate] = useState(storageValue?storageValue?.iconRotate : 0);
  const [color, setColor] = useState(storageValue?storageValue?.iconColor :'#fff');
  const [icon, setIcon] = useState(storageValue?storageValue?.icon :'Smile');
  
  const{updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)

  useEffect(() => {
    const updatedValue = {
        ...storageValue,
        iconSize: size,
        iconRotate: rotate,
        iconColor: color,
        icon:icon


    };
    setUpdateStorage(updatedValue);
    localStorage.setItem('value', JSON.stringify(updatedValue));
  }, [size,rotate,color,icon]);

  return (
    <div>
      <div className="mt-[-15px]">
        <IconList selectedIcon={(icon)=>setIcon(icon)}/>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center" htmlFor="">
            Size
            <span>{size} px</span>
          </label>
          <Slider
            defaultValue={[size]}
            max={512}
            step={1}
            onValueChange={(e) => setSize(e[0])}
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center" htmlFor="">
            Rotate
            <span>{rotate} px</span>
          </label>
          <Slider
            defaultValue={[rotate]}
            max={360}
            step={1}
            onValueChange={(e) => setRotate(e[0])}
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center" htmlFor="">
            Icon Color
          </label>
          <ColorPickerController requiredValue={true} selectedColor={(color) => setColor(color)} />
        </div>
      </div>
    </div>
  );
};

export default IconController;
