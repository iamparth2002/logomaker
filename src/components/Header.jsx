import React from 'react'
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'


const Header = ({DownloadIcon}) => {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>
        <div className='flex items-center gap-4'>

        <img src="/logo-design.png" alt="logo" className='h-20 w-20'/>
        <h1 className='text-3xl font-semibold'>LogoMaker.</h1>
        </div>
        <Button className="flex gap-2 items-center" onClick = {()=>DownloadIcon(Date.now())}><Download/>Download</Button>
    </div>
  )
}

export default Header