import React from 'react'
import {NavLink} from 'react-router-dom'

function CardItems(props) {
  return (
    <>
        <li className='cards__item'>
            <NavLink className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt='' className='cards__item__img'/>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </NavLink>
        </li>
    </>
  )
}

export default CardItems