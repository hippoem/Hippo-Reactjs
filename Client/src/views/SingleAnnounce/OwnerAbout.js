import React, {Component} from 'react'
import {Link} from 'react-router'

class OwnerAbout extends Component {
    render() {
        return (
            <div className="rentsgby">
                <Link to={`/users/userId`}>
                    <img alt="" src="../images/03-car-rent-single_45.png"/>
                </Link>
                <div className="rentsgbdet">
                    <Link to={`/users/userId`}>
                        <h3>Narongsak Lim</h3>
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        )
    }
}

export default OwnerAbout;