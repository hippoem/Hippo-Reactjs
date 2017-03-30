import React, {Component} from 'react';

class ReviewUser extends Component {
    render() {
        return (
            <div className="pfrtreview">
                <div className="pfrtrvpf">
                    <img alt="" src="../images/08-profile-rental_54.png"/>
                    <p>David</p>
                </div>
                <p className="pfrtrvtext">consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat.</p>
                <p className="pfrtrvtime">3 วันที่แล้ว</p>
            </div>
        );
    }
}

export default ReviewUser;