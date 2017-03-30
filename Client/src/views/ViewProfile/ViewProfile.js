import React, {Component} from 'react';
import {Header, Footer} from '../../common/'

import {HeadProfile, DetailUser, ReviewUser, MyCar} from './index'

class ViewProfile extends Component {
    render() {
        return (
            <div id="content">
                <Header bgblue="bgblue"/>
                <div className="profilerental">
                    <div className="wrap">
                        <div className="pfrtcon">
                            <HeadProfile/>
                            <DetailUser/>
                            <div className="pfrtright">
                                <div className="pfrtrboxh">
                                    <h2>Reviews (75)</h2>
                                    <p>
                                        <a href="#">See more</a>
                                    </p>
                                </div>
                                <ReviewUser/>
                                <ReviewUser/>
                                <ReviewUser/>

                                <div className="pfrtrboxh">
                                    <h2>Cars (3)</h2>
                                </div>
                                <div className="pfrtcars">
                                    <MyCar/>
                                    <MyCar/>
                                    <MyCar/>
                                </div>
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

export default ViewProfile;