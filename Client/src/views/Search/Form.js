import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <div>
                <div className="findcart_a">
                    <div className="wrap">
                        <p className="fcanavi">Home / Car rental / Coupe</p>
                        <h2 className="fcahead">Search “<span>Coupe</span>”</h2>
                        <form>
                            <div className="fcabox">
                                <p>สถานที่รับรถ</p>
                                <div className="mslrentpart">
                                    <input name="" type="text" className="mslrsform" placeholder="Search Location"/>
                                    <input name="" type="button" className="mslrsgo"/>
                                </div>
                            </div>
                            <div className="fcabox x">
                                <p>ช่วงเวลาที่คุณต้องการใช้รถ</p>
                                <input
                                    name=""
                                    type="text"
                                    className="fcadate"
                                    placeholder="Pick-up - Return"
                                    id="datepick"/>
                            </div>
                            <div className="fcabox y">
                                <p>เลือกประเภทของรถ</p>
                                <select name="" className="fcatype">
                                    <option>Select type of car</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>

                        </form>
                    </div>

                    <div className="findcart_b">
                        <div className="wrap">
                            <div className="fcboption">

                                <div className="fcabox z">
                                    <p>ระยะห่างของจุดรับรถ กับ สถานที่เลือกรับรถ</p>
                                    <select name="" className="fcatype">
                                        <option>Select distance</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>

                                <div className="fcabox z">
                                    <p>ช่วงราคาเช่ารถ</p>
                                    <div className="pricerangenumber" id="pricerangenumber">10,000</div>
                                    <input
                                        type="range"
                                        id="pricerange"
                                        value="10000"
                                        min="0"
                                        max="10000"
                                        step="500"/>
                                </div>

                                <div className="fcabox w">
                                    <p>ระยะทางที่รถขับไป</p>
                                    <select name="" className="fcatype">
                                        <option>Select Mileage</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>

        )
    }
}

export default Form