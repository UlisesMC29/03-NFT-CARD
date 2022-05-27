import React from 'react'
import '../Card/card.css'
import nftImg from '../../images/image-equilibrium.jpg';
import iconEthe from '../../images/icon-ethereum.svg';
import iconClock from '../../images/icon-clock.svg';
import iconUser from '../../images/image-avatar.png';
import imgView from '../../images/icon-view.svg';

export const Card = () => {
    return (
        <div className='container-principal'>
            <div className='card-nft'>
                <div className='img-card'>
                    <img className='img-nft' src={nftImg} alt="imagen nft" />
                    <div className='capa'>
                        <img className='img-view' src={imgView} alt="imagen de lupa" />
                    </div>
                </div>
                <div className='body-card'>
                    <p className='title'>Equilibrium #3429</p>
                    <p className='text-body'>Our Equilibrium collection promotes balance and calm.</p>
                    <div className='body-contain'>
                        <div className='ethe-contain'>
                            <img className='icon-ethe' src={iconEthe} alt="icono del etherium" />
                            <p className='price-text'>0.041 ETH</p>
                        </div>
                        <div className='clock-contain'>
                            <img className='icon-clock' src={iconClock} alt="icono reloj" />
                            <p className='txt-clock'>3 days left</p>
                        </div>
                    </div>
                    <hr />
                    <div className='footer'>
                        <img className='icon-user' src={iconUser} alt="icono avatar" />
                        <div className='name-container'>
                            <p className='txt-footer'>Creation of </p>
                            <p className='name-user'>Jules Wyvern</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
