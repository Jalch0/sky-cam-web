import Image from 'next/image'
import React from 'react'

interface order{
    order: number
}

function CardInfo(order: order) {
  return (
    <div className='flex py-5'>
        <div className={`px-12 text-neutral-600 order-${order}`}> 
            <h2 className='text-4xl pb-4'>BUILDING EXTRAORDINARY HOMES</h2>
            <p className='text-2xl pb-3 leading-relaxed'>With over 18 years of experience, Keystone Construction offers beautiful <br/> high quality custom home building and renovation services in the<br/> Bloomington, Indiana area.</p>
            <div className='w-24 h-[1.5px] bg-red-500'/>
            <p className='pt-3 pb-5 leading-relaxed text-xl'>Our dedicated team will help you through the process of a new build or remodel to make <br/> it straightforward and enjoyable, ensuring that your home reflects your individual taste.<br/> With every unique project, our mission is to serve you by building or renovating the home<br/> of your dreams.</p>
            <button className='px-16 py-6 bg-white text-slate-700 rounded-[2.5rem] border border-slate-700 hover:text-white hover:bg-slate-700 transition tracking-widest'>VIEW MORE</button>
        </div>
        <div>
            <Image src={'https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt='ImgSec' width={500} height={500}/>
        </div>
    </div>
  )
}

export default CardInfo