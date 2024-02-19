import React from 'react';
import { Link } from 'react-router-dom';
import { cardList } from '@/constants/index'

const HomeCard = () => {

    return (
        <div className='contianer mx-auto py-20 flex items-center flex-wrap gap-4 justify-center '>
            {
                cardList && cardList.map((v, i) => (
                    <Link key={i} to={v.link}>
                        <div className={`relative card sm:w-[300px] w-[80dvw] h-[370px] flex flex-col items-center capitalize group`}>
                            <h6>we our</h6>
                            <h1 className='text-4xl mt-4'>{v.title}</h1>
                            <p className='text-white text-sm absolute px-4 z-50 opacity-0
                             group-hover:opacity-100 duration-700 transition-all font-normal'>{v.line}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default HomeCard;
