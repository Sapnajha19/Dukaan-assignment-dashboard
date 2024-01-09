import React from 'react'
import { SideBarList } from './constants'
import Image from 'next/image'
import BrandLogo from "../../../public/assets/BrandLogo.png"
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className='w-[224px] h-screen bg-[#1E2640] flex flex-col justify-between sticky inset-0' style={{ zIndex: "9999" }}>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center pl-[16px] pt-[16px]'>
                    <div className='flex flex-row gap-[12px]'>
                        <Image src={BrandLogo} alt="brand-logo" height={39} width={39} />
                        <div className='flex flex-col gap-[4px] text-[#FFF] font-Inter'>
                            <p className='text-[15px] font-medium'>Nishyan</p>
                            <a href="/" className='text-[13px] font-normal opacity-[0.8] underline'>Visit store</a>
                        </div>
                    </div>
                    <div className='ml-auto mr-[16px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className='w-[208px] flex flex-col gap-[4px] mt-[24px] mx-auto'>
                    {SideBarList.map((item, index) => (
                        <Link href="/" key={index} className={`px-[16px] py-[8px] ml-[10px] pr-[16px] w-[185px] h-[36px] flex flex-row items-center gap-[12px] text-[#FFF] text-[14px] font-Inter font-medium ${item.displayName === 'Payments' ? 'bg-[#FFFFFF1A]' : 'hover:bg-[#FFFFFF1A]'} rounded-[4px]`}>
                            <item.icon />
                            <p>{item.displayName}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='h-[54px] bg-[#353C53] rounded-[4px] flex flex-row gap-[12px] items-center px-[12px] py-[6px] mx-auto mb-[16px]'>
                <div style={{ background: 'rgba(255, 255, 255, 0.10)' }} className='w-[36px] h-[36px] rounded-[4px] flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z" fill="white" />
                    </svg>
                </div>
                <div className='flex flex-col gap-[2px] items-center font-Inter text-[#FFF] opacity-[0.8]'>
                    <p className='text-[13px] font-normal'>Available credits</p>
                    <p className='text-[16px] font-medium'>222.10</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
