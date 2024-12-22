'use client'

import React, { useEffect, useState } from 'react'
import CarouselCard from './atom/CarouselCard'

interface ITemplateCarousel {
    title?: string
    subTitle?: string
}

interface ICarouselCard {
    imageUrls?: string[]
    name?: string
    price?: number
    category?: string
}

export default function Carousel(props: ITemplateCarousel) {

  const [items, setItems] = useState<ICarouselCard[]>([])
  
  const getItems = async () => {
    try {
        
        const res = await fetch('http://localhost:3004/products', {next: {revalidate: 1000}})
        const data = await res.json()

        // console.log(data)
        setItems(data)

    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=> {
    getItems()
  }, [])

  return (
    <div className='flex flex-col gap-5'>
        <div className='flex items-center w-full justify-between'>
            <h1 className='text-xl'>{props.title}</h1>
            <div className='flex gap-3 items-center'>
                <p className='font-medium'>{props.subTitle}</p>
                <button className='bg-gray-100 px-5 py-3 rounded-full text-xl text-gray-400'>{'<'}</button>
                <button className='bg-gray-200 px-5 py-3 rounded-full text-xl hover:bg-gray-300'>{'>'}</button>
            </div>
        </div>

        <div className='flex overflow-x-auto gap-5'>
            {
                items.length > 0 && items.map((item, index)=> {
                    return (
                        <CarouselCard {...item} key={index}/>
                    )
                })
            }
        </div>
    </div>

  )
}
