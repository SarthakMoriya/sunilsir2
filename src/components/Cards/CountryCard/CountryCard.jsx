import React from 'react'
import { Link } from 'react-router-dom'
import './Country-Card.css'

const CountryCard = ({ cc, name, gif }) => {
    return (
        <div className="max-w-2xl mx-auto m-2 cc">

            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 h-full">
                <Link href="#">
                    <img class="rounded-t-lg h-40 w-full object-cover" src={cc} alt="" />
                </Link>
                <div className="flex items-center justify-center">
                    <img src={gif} alt="" className="w-[112px] h-[84px] object-contain mb-3 " />
                </div>
                <div class="pl-5 pr-5 pt-3 pb-2">
                    <Link href="#">
                        <h5 class=" text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{name}</h5>
                    </Link>
                    <p class="font-normal text-gray-700 mb-3 dark:text-gray-400 flex  justify-around">
                        <div className='rounded-lg  p-1  cc-text'>#studentvisa</div>
                        <div className='rounded-lg  p-1 cc-text'>#touristvisa</div>
                        <div className='rounded-lg  p-1 cc-text'>#businessvisa</div>
                    </p>

                </div>
            </div>

        </div>

    )
}

export default CountryCard