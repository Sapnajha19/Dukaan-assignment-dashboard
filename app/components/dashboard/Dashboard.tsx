import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navigation/Navbar'
import TransactionTable from '../transaction/TransactionTable';
type statistics = {
    type: string;
    amount: string
}
const Dashboard = () => {
    const StatisticsData: statistics[] = [
        {
            type: "Online orders",
            amount: "231"
        },
        {
            type: "Amount received",
            amount: "₹23,92,312.19"
        }
    ]
    return (
        <div className='flex flex-row'>
            <Sidebar />
            <div className='w-full bg-[#FAFAFA] flex flex-col'>
                <Navbar />
                <div className='flex flex-col ml-[32px] mr-[32px] mt-[36px] font-Inter'>
                    <div className='flex flex-row justify-between items-center'>
                        <p className='text-[20px] text-[#1A181E] font-medium'>Overview</p>
                        <button className='w-[137px] h-[36px] flex flex-row gap-[7px] justify-center items-center rounded-[4px] bg-[#FFF] border border-[1px] border-[#D9D9D9]'>
                            <p className='text-[16px] text-[#4D4D4D] font-normal'>Last Month</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z" fill="#4D4D4D" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex flex-row justify-between mt-[24px]'>
                        {StatisticsData.map((item, index) => (
                            <div key={index} className='w-[566px] h-[118px] bg-[#FFF] shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] rounded-[8px] flex flex-col gap-[16px] pl-[20px] pt-[20px]'>
                                <p className='text-[16px] text-[#4D4D4D] font-normal'>{item.type}</p>
                                <p className='text-[32px] text-[#1A181E] font-medium'>{item.amount}</p>
                            </div>
                        ))}
                    </div>
                    <p className='text-[20px] text-[#1A181E] font-medium mt-[32px]'>Transactions | This Month</p>
                    <TransactionTable />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
