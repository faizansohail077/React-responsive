import React from 'react'
import { FaFire } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import './Pricing.css'




const Pricing = () => {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className="pricing__section">
                    <div className="pricing__wrapper">
                        <h1 className="pricing__header"></h1>
                        <div className="pricing__container">
                            <Link to='/' className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <FaFire />
                                    </div>
                                    <h3>Starter</h3>
                                    <h4>$8.99</h4>
                                    <p>Per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transaction</li>
                                        <li>2% cash back</li>
                                        <li>$10,000 limit</li>
                                    </ul>
                                    <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
                                </div>
                            </Link>
                            <Link to='/' className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <BsXDiamondFill />
                                    </div>
                                    <h3>Diamond</h3>
                                    <h4>$9.99</h4>
                                    <p>Yearly</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transaction</li>
                                        <li>5% cash back</li>
                                        <li>$10,000 limit</li>
                                    </ul>
                                    <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
                                </div>
                            </Link>
                            <Link to='/' className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <GiCrystalize />
                                    </div>
                                    <h3>Diamond</h3>
                                    <h4>$9.99</h4>
                                    <p>Yearly</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transaction</li>
                                        <li>5% cash back</li>
                                        <li>$10,000 limit</li>
                                    </ul>
                                    <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Pricing
