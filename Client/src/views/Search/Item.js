import React from 'react'
import {Link} from 'react-router'
import { formatPrice } from '../../helper/helper.js'

class Item extends React.Component {
    render() {
        return (
            <div className="fcbbox">
                <Link to={`/cars/carId`} target="_blank">
                    <img alt="" src={this.props.ann_photo} className="fcbcar"/>
                    <p className="fcbtag">NEW</p>
                </Link>
                
                
                <Link to={`/users/userId`} target="_blank">
                    <img alt="" src={this.props.user_photo} className="fcbown user"/>
                </Link>
                <Link to={`/cars/carId`} target="_blank">
                    <div className="fcbdetail">
                        <div className="fcbleft">
                            <h3>เช่ารถ {this.props.brand} {this.props.gene}</h3>
                            <div className="fcbrate">
                                <img alt="" src="../images/03-car-rent-single_15.png"/>
                                <img alt="" src="../images/03-car-rent-single_15.png"/>
                                <img alt="" src="../images/03-car-rent-single_15.png"/>
                                <img alt="" src="../images/03-car-rent-single_18.png"/>
                                <img alt="" src="../images/03-car-rent-single_18.png"/>
                            </div>
                        </div>
                        <p className="fcbprice">{formatPrice(this.props.price)}<span>/วัน</span>
                        </p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Item