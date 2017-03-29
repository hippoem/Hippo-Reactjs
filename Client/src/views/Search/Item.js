import React from 'react'

class Item extends React.Component {
    render() {
        return (
            <div className="fcbbox">
                <img alt="" src="images/02-find-car-rent_43.jpg" className="fcbcar"/>
                <p className="fcbtag">NEW</p>
                <img alt="" src="images/02-find-car-rent_51.png" className="fcbown"/>
                <div className="fcbdetail">
                    <div className="fcbleft">
                        <h3>เช่ารถ Toyota Alphard</h3>
                        <div className="fcbrate">
                            <img alt="" src="images/03-car-rent-single_15.png"/>
                            <img alt="" src="images/03-car-rent-single_15.png"/>
                            <img alt="" src="images/03-car-rent-single_15.png"/>
                            <img alt="" src="images/03-car-rent-single_18.png"/>
                            <img alt="" src="images/03-car-rent-single_18.png"/>
                        </div>
                    </div>
                    <p className="fcbprice">฿750<span>/วัน</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Item