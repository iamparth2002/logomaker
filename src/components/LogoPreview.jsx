import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import html2canvas from 'html2canvas';
import { Smile, icons } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';

const LogoPreview = ({ downloadIcon }) => {
  const [storageValue, setStorageValue] = useState('');
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('value'));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    console.log('hi');
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);

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
  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById('downloadLogoDiv');
    html2canvas(downloadLogoDiv, {
      backgroundColor: 'white',
    }).then((canvas) => {
      const img = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = img;
      link.download = 'my-logo';
      link.click();
    });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="mr-48 mb-11 h-[600px] w-[600px] bg-gray-200 outline-dotted outline-gray-300
        "
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          {storageValue?.icon?.includes('.png') ? (
            <img
              src={`/png/${storageValue?.icon}`}
              alt="logo"
              style={{
                height: storageValue?.iconSize,
                width: storageValue?.iconSize,
              }}
            />
          ) : (
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
              rotate={storageValue?.iconRotate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
