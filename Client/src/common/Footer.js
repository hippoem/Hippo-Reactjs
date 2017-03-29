import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="wrap">
                    <div className="ftpart">
                        <ul className="ftmenu">
                            <li>
                                <a href="#">เกี่ยวกับเรา</a>
                            </li>
                            <li>
                                <a href="#">นโยบายการให้บริการ</a>
                            </li>
                            <li>
                                <a href="#">สัญญาเช่ารถ</a>
                            </li>
                        </ul>
                        <ul className="ftmenu">
                            <li>
                                <a href="#">ความช่วยเหลือ</a>
                            </li>
                            <li>
                                <a href="#">ศูนย์ช่วยเหลือผู้ขับขี่</a>
                            </li>
                            <li>
                                <a href="#">ศูนย์ช่วยเหลือเจ้าของรถ</a>
                            </li>
                            <li>
                                <a href="#">ติดต่อเรา</a>
                            </li>
                        </ul>
                        <div className="ftoption">
                            <div className="ftsubc">
                                <h3 className="fthead">ติดตามเรา</h3>
                                <a href="#"><img alt="" src="images/01-main-th_94.png"/></a>
                                <a href="#"><img alt="" src="images/01-main-th_95.png"/></a>
                                <a href="#"><img alt="" src="images/01-main-th_96.png"/></a>
                            </div>
                            <div className="ftlang">
                                <h3 className="fthead">ภาษา</h3>
                                <img alt="" src="images/01-main-th_21.png"/>
                            </div>
                        </div>
                    </div>
                    <p className="ftcopyr">All material herein © 2016 Hippo car Ltd., All Rights Reserved.</p>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default Footer