import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({img,link,title,description}) => <Link to={link} >
<div className="office-card px-4 md:w-96 md:h-80">
    <figure className='relative'>
        <img src={img} className='w-full h-full object-cover' />
        <figcaption
            className='absolute inset-0 text-white font-semibold text-2xl bg-black/50 flex items-center justify-center'>
            {title}
        </figcaption>
    </figure>
    <div className="office-card__content">
        <p className="office-card__title">{title}</p>
        <p className="office-card__description">{description}</p>
    </div>
</div>
</Link>

export default Card
