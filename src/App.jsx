import './App.css';
import { Button } from '@/components/ui/button';
import Header from './components/Header';
import SideNav from './components/SideNav';
import IconController from './components/IconController';
import BackgroundController from './components/BackgroundController';
import { useState } from 'react';
import LogoPreview from './components/LogoPreview';
import { UpdateStorageContext } from './context/UpdateStorageContext';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage,setUpdateStorage] = useState({});
  const [downloadIcon,setDownloadIcon] = useState();
  return (
    <UpdateStorageContext.Provider value={{updateStorage,setUpdateStorage}}>
      <div>
        <Header DownloadIcon={setDownloadIcon}/>
        <div className="w-64 fixed">
          <SideNav
            selectedIndex={(value) => {
              setSelectedIndex(value);
            }}
          />
        </div>
        <div className="ml-64 flex fixed w-full ">
          <div className="flex-1/2 border h-screen shadow-sm p-5 overflow-auto  ">
            {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className="flex-1">
            <LogoPreview downloadIcon={downloadIcon}/>
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
