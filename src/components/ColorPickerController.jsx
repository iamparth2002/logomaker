import React, { useState } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';

const ColorPickerController = ({requiredValue=true,selectedColor}) => {
  const [color, setColor] = useState('rgba(255,255,255,1)');

  return (
    <div>
      <ColorPicker
        value={color}
        onChange={(e)=>{setColor(e);selectedColor(e)}}
        hideControls={requiredValue}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
      />
    </div>
  );
};

export default ColorPickerController;
