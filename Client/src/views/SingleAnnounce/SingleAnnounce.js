import React from 'react';

import {Header, Footer} from '../../common'
import {
    ImageSlide,
    OwnerAbout,
    FormBooking,
    GoogleMap,
    Review,
    Specifications,
    Condition,
    Features
} from './index'

class SingleAnnounce extends React.Component {
    render() {
        return (
            <div id="content">
                <Header bgblue="bgblue"/>
                <div className="carrentsingle">
                    <div className="wrap">

                        <p className="fcanavi">Home / Car rental / Coupe</p>

                        <div className="rentsgleft">
                            <ImageSlide/>
                            <OwnerAbout/>
                            <div className="rentsgqualify">
                                <div className="rentsgqheadwrap tab-buttonwrap">
                                    <h3 className="rentsgqhead tab-button">Specifications</h3>
                                    <h3 className="rentsgqhead tab-button">Features</h3>
                                    <h3 className="rentsgqhead tab-button">Condition</h3>
                                </div>
                                <div className="rentsgqtextwrap tab-contentwrap">
                                    <Specifications/>
                                    <Features/>
                                    <Condition/>
                                </div>
                            </div>
                            <GoogleMap/>
                            <Review/>
                        </div>
                        <div className="rentsgright">
                            <div className="rentsgdetail">
                                <p className="restsgdtag">new</p>
                                <div className="rentsgrate">
                                    <img alt="" src="../images/03-car-rent-single_15.png"/>
                                    <img alt="" src="../images/03-car-rent-single_15.png"/>
                                    <img alt="" src="../images/03-car-rent-single_18.png"/>
                                    <img alt="" src="../images/03-car-rent-single_18.png"/>
                                    <img alt="" src="../images/03-car-rent-single_18.png"/>
                                </div>
                                <div className="rentsginfo">
                                    <h3>เช่ารถ โตโยต้า Alphard</h3>
                                    <p>฿750<span>/วัน</span>
                                    </p>

                                </div>
                            </div>
                            <FormBooking/>
                            <div className="rentsgsocial">
                                <p>Share this car</p>
                                <img alt="" src="../images/03-car-rent-single_100.jpg"/>
                                <img alt="" src="../images/03-car-rent-single_102.jpg"/>
                                <img alt="" src="../images/03-car-rent-single_104.jpg"/>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="clear"></div>
                <Footer/>
            </div>
        );
    }
}

export default SingleAnnounce;