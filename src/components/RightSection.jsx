import React from 'react'

const RightSection = ({ price, total, itemlist }) => {
    return (
        <div>
            <div className='flex justify-evenly'>
                <div className='mt-5'>
                    <h3 className='mb-4 font-sans font-semibold underline text-lg dark:text-slate-200'>Items</h3>
                    {itemlist.map((item) => (
                        <div key={Math.random()}>
                            <p className='font-sans capitalize dark:text-slate-200'>{item}</p>
                        </div>
                    ))}
                </div>
                <div className='h-96 '>
                    <h3 className='mb-4 mt-5 ml-7 text-lg font-sans font-semibold underline dark:text-slate-200'>price</h3>
                    {price.map((p) => (
                        <div key={Math.random()}>
                            <p className='ml-12 dark:text-slate-200'>{p}</p>
                        </div>
                    ))}
                    <hr />
                    <p className='mt-2 font-sans dark:text-slate-200'><span className='font-semibold '>Total :</span> {total} Tk</p>
                </div>
            </div>
            <button className='btn float-right p-2 hover:bg-black '>order</button>
        </div>
    )
}

export default RightSection