import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    Icon: IconType;
    role: string;
    company?: string;
    date?: string;
    description?: string;
}

const ResumeCard = ({ Icon, role, company, date, description }: Props) => {
    return (
        <div className='mb-6'>
            <div className='flex items-start space-x-6 bg-blue-950/20 hover:bg-blue-950/30 transition-all duration-300 p-4 sm:p-8 rounded-md'>
                <div className='sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center flex-col'>
                    <Icon className='sm:w-8 sm:h-8 w-6 h-6 text-white' />
                </div>
                <div className='flex-1'>
                    {date && (
                        <h1 className='mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold'>
                            {date}
                        </h1>
                    )}
                    <h1 className='text-gray-200 text-xl sm:text-2xl font-semibold mb-1'>{role}</h1>
                    {company && (
                        <h2 className='text-cyan-300 text-lg sm:text-xl font-medium mb-2'>{company}</h2>
                    )}
                    <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                        {description || "Professional experience contributing to organizational growth and technical development."}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResumeCard;