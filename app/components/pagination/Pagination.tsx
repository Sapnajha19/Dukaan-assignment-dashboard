import React from 'react'

const Pagination = () => {
    const buttons = [];

    // Create buttons for numbers 10 to 18
    for (let i = 10; i <= 18; i++) {
        buttons.push(<button style={{
            margin: '0 4px',
            fontFamily: 'Inter',
            fontSize: '14px',
            width: i == 10 ? '28px' : '',
            borderRadius: '4px',
            backgroundColor: i === 10 ? '#146EB4' : '#FFF', // Change color for the button with the number 10
            color: i === 10 ? '#FFF' : '#4D4D4D', // Change text color accordingly
            fontWeight: i == 10 ? '500' : '400'
        }} key={i}>{i}</button>);
    }
    return (
        <div className='w-[610px] h-[32px] bg-[#FFF] rounded-[4px] flex flex-row gap-[24px] items-center justify-center'>
            <button className='w-[100px] h-[32px] border border-[1px] border-[#D9D9D9] flex flex-row gap-[7px] justify-center items-center rounded-[4px] bg-[#FFF] border border-[1px] border-[#D9D9D9]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z" fill="#4D4D4D" />
                </svg>
                <p className='text-[16px] text-[#4D4D4D] font-normal'>Previous</p>
            </button>
            <div>
                <button>1</button>
                <button>...</button>
                {buttons}
            </div>
            <button className='w-[74px] h-[32px] border border-[1px] border-[#D9D9D9] flex flex-row gap-[7px] justify-center items-center rounded-[4px] bg-[#FFF] border border-[1px] border-[#D9D9D9]'>
                <p className='text-[16px] text-[#4D4D4D] font-normal'>Next</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z" fill="#4D4D4D" />
                </svg>
            </button>
        </div>
    )
}

export default Pagination
