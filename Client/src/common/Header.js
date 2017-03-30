import React from 'react'
import {Link} from 'react-router'

import '../styles/style.css'
import Logo from '../styles/images/Logo.png'
import Facebook from '../styles/images/Facebook.png'
import Instagram from '../styles/images/Instagram.png'
import Twitter from '../styles/images/Twitter.png'
import Thai from '../styles/images/Thai.png'

class Header extends React.Component {
    render(){
        return(
        <div id="header" className={this.props.bgblue}>
			<Link to={`/`}><img alt="" className="logo" src={Logo} /></Link>
			<div className="headoption">
				<a href="#" className="hmore">Learn More</a>
				<a href="#" className="hrent">ปล่อยรถเช่า</a>
				<div className="hsocial">
					<a href="#"><img alt="" src={Facebook} /></a>
					<a href="#"><img alt="" src={Instagram} /></a>
					<a href="#"><img alt="" src={Twitter} /></a>
				</div>
				<a href="#"><img alt="" className="hlang" src={Thai} /></a>
				<div className="hsignin">
					<div className="hsignbox">
						<img alt="" src="../images/01-main-th_24.png" />
						<div className="hsigndetail">
							<h3 className="hsignhead"><a href="#">เข้าสู่ระบบ</a></h3>
							<p className="hsignregist"><a href="#">สมัครสมาชิก</a></p>
						</div>
					</div>
				</div>
			</div>
			<div className="clear"></div>
		</div>
        )
    }
}

export default Header