import React from 'react'

const AboutusBanner = ({ imageName, title, description, reverse }: any) => {
    console.log('AboutusBanner:::', imageName)

    return (
        <div className={`flex flex-col-reverse md:flex-row ${reverse ? "md:flex-row-reverse" : ""
            } items-center gap-6 md:gap-12 py-10`}>
            <div className='flex flex-col flex-1'>
                <h1 className={`text-2xl ${reverse ? "md:text-[2.5rem]" : " md:text-7xl"
                    }  ${!reverse ? 'line-height-86' : ''}font-semibold font-figtree`}>{title}</h1>
                <p className='text-lg mt-2 md:mt-6 font-figtree text-base text-primary-text-color-70'>{description}</p>
            </div>
            <img
                src={`/${imageName}.png`}
                alt={title}
                className='flex-1'
            />
        </div>
    )
}

export default AboutusBanner