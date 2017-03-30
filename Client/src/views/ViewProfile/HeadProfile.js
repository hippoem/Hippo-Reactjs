import React, {Component} from 'react';

class HeadProfile extends Component {
    render() {
        return (
            <div className="pfrtboxh">
                <div className="pfrtprofile">
                    <img alt="" src="../images/08-profile-rental_20.png" className="pfrtpfpic"/>
                    <div className="pfrtdetail">
                        <p className="pfrtjoin">Join in September 2016</p>
                        <h1 className="pfrtname">Narongsak Lim</h1>
                        <div className="pfrtsocial">
                            <img alt="" src="../images/08-profile-rental_29.png"/>
                            <p>Bangkok, Thailand</p>
                            <img alt="" src="../images/08-profile-rental_33.png"/>
                            <img alt="" src="../images/08-profile-rental_37.png"/>
                        </div>
                    </div>
                </div>
                <div className="pfrtoption">
                    <p className="pfrtratehead">Ratings</p>
                    <div className="pfrtrateall">
                        <img alt="" src="../images/08-profile-rental_14.png"/>
                        <img alt="" src="../images/08-profile-rental_14.png"/>
                        <img alt="" src="../images/08-profile-rental_17.png"/>
                        <img alt="" src="../images/08-profile-rental_17.png"/>
                        <img alt="" src="../images/08-profile-rental_17.png"/>
                    </div>
                    <div className="pfrtinfo">
                        <div className="pfrtifbox">
                            <h3>ส่งอีเมล</h3>
                            <img alt="" src="../images/08-profile-rental_12.png"/>
                        </div>
                        <div className="pfrtifbox">
                            <h3>Rentals</h3>
                            <p>150</p>
                        </div>
                        <div className="pfrtifbox">
                            <h3>Reviews</h3>
                            <p>75</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadProfile;