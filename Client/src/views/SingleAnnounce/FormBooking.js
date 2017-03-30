import React, {Component} from 'react';

class FormBooking extends Component {
    render() {
        return (
            <div className="rentsgwhite">
                <div className="rentsgcardet">
                    <h3>รายละเอียดเกี่ยวกับรถ</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat.<br/><br/>Duis
                        autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                        consequat, vel illum dolore eu feugiat nulla facilisis</p>
                </div>
                <div className="rentsgpart">
                    <h3>฿750 x 5 วัน</h3>
                    <p>฿ 3,750</p>
                </div>
                <div className="rentsgpart">
                    <h3>ประกันรถยนต์</h3>
                    <p>฿ 500</p>
                </div>
                <div className="rentsgpart">
                    <h3>ค่าธรรมเนียม</h3>
                    <p>฿ 250</p>
                </div>
                <h3 className="mslrentcate">ช่วงเวลาที่คุณต้องการใช้รถ</h3>

                <div className="mslrentpart">

                    <div className="mslrenttype">
                        <input type="text" className="datepick" id="datepick"/>
                        <img alt="" src="../images/01-main-th_91.png" className="mslrstypegrey"/>
                        <p>Pick-up</p>
                    </div>
                    <div className="mslrenttype">
                        <img alt="" src="../images/01-main-th_91.png" className="mslrstypegrey"/>
                        <p>Return</p>
                    </div>
                </div>
                <a href="#" className="rentsggo">ยื่นคำขอเช่ารถ</a>
            </div>
        );
    }
}

export default FormBooking;