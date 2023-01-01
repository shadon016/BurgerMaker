import React from 'react';
import upper from '../asstes/upper.png';
import chicken from '../asstes/salad.png';
import cheese from '../asstes/chese.png';
import lower from '../asstes/Lower.png';
import sauces from '../asstes/lutas.png';
import beef from '../asstes/meat.png';
import { useState } from 'react';
import { useEffect } from 'react';
import RightSection from './RightSection';

const Main = () => {
    const [item, setItem] = useState([]);
    const [itemlist, setItemlist] = useState([]);
    const [price, setPrice] = useState([]);
    const [total, setTotal] = useState(0);

    function addItem(itemName, listname, itemprice) {
        //item.push(itemName);
        if (itemlist.length < 10) {
            item.push(itemName);
            itemlist.push(listname);

        }
        if (price.length < 10) {
            price.push(itemprice);
        }
        setItem([...item]);
        setItemlist([...itemlist]);
        setPrice([...price]);
    }

    let newar = [...new Set(item)].reverse();


    function Reset() {
        setItem([]);
        setItemlist([]);
        setPrice([]);
        setTotal(0);
    }

    //const m = price.reduce((i, c) => i + c, 0);
    //console.log("setTotal reduce " + m);

    useEffect(() => {
        setTotal(price.reduce((i, c) => i + c, 0));
        //setTotal(m);
    }, [price])


    // console.log("itemList: " + itemlist)
    // console.log("price: " + price)
    // console.log("total : " + total)

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-8  items-center'>
            <div className='bg-white dark:bg-slate-700 col-span-1 lg:col-span-2 md:col-span-2 mx-14'>
                <div className='flex justify-center items-center border dark:border-black h-96'>
                    <div className='w-auto px-5 md:w-auto md:px-5 lg:px-5 lg:w-auto'>
                        <img src={upper} alt='chese' className='h-6 w-24 md:h-8 md:w-32
                        lg:h-14 lg:w-48' />
                        {newar.map((v) => (
                            <div key={Math.random()}>
                                <img src={v} alt='alt' className='h-4 w-18 md:h-6 md:w-32 lg:h-6 lg:w-48 bg-orange-800' />
                            </div>
                        ))}
                        <img src={lower} alt='chese' className='h-4 w-24 md:h-8 md:w-20 lg:h-8 lg:w-48' />
                    </div>
                    <div>
                        <div className='w-48 flex rounded-md py-3 ml-12'>
                            <div className=''>
                                <p className='ml-5 text-lg underline font-semibold font-sans dark:text-slate-200'>Items</p>
                                <button className='btn md:block hover:bg-black' onClick={() => addItem(chicken, "chicken", Number(20))}>chicken</button>
                                <button className='btn hover:bg-black md:block' onClick={() => addItem(beef, "beef", Number(50))}>beef</button>
                                <button className='btn hover:bg-black md:block' onClick={() => addItem(cheese, "cheese", Number(25))}>cheese</button>
                                <button className='btn hover:bg-black md:block' onClick={() => addItem(sauces, "sauce", Number(10))}>sauce</button>
                            </div>
                            <div className='mx-5'>
                                <p className='font-semibold font-sans text-lg underline dark:text-slate-200'>pricing</p>
                                <p className='p dark:text-slate-200'>70</p>
                                <p className='p dark:text-slate-200'>90</p>
                                <p className='p dark:text-slate-200'>25</p>
                                <p className='p dark:text-slate-200'>10</p>
                            </div>
                        </div>
                        <button className='btn hover:bg-black ml-16 w-32' onClick={Reset}>reset</button>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className='border h-96 lg:mx-10 md:mx-8 bg-white dark:bg-slate-700'>
                <RightSection price={price} total={total} itemlist={itemlist} />
            </div>
        </div>
    )
}

export default Main;