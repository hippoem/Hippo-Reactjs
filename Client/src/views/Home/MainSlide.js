import React from 'react'

class MainSlide extends React.Component {
    render(){
        return(
			<div>
				<div className="mainslide">
					<div className="galleria1">
						<img alt="" src="/images/01-main-th_01.jpg" />
					</div>
					<div className="mainslon">
						<div className="mainslrent">
							<h2 className="mslrenthead"><span>จองรถ</span>ที่คุณต้องการ</h2>
							<p className="mslrenttext">Book Online for the Best Rates with Hippo car rent</p>
							<h3 className="mslrentcate">สถานที่รับรถ</h3>

							<form>
								<div className="mslrentpart">
									<input name="" type="text" className="mslrsform" placeholder="Search Location"/>
									<input name="" type="button"  className="mslrsgo"/>
								</div>

								<h3 className="mslrentcate">เลือกประเภทของรถ</h3>
								<div className="mslrentpart">
									<div className="mslrenttype">
										<input type="radio" value="Car" name="cartype"/>
										<img alt="" src="images/01-main-th_50.png" className="mslrstypegrey"/>
										<p>Car</p>
									</div>
									<div className="mslrenttype">
										<input type="radio" value="Van" name="cartype"/>
										<img alt="" src="images/01-main-th_53.png" className="mslrstypegrey"/>
										<p>Van</p>
									</div>
									<div className="mslrenttype">
										<input type="radio" value="4wd" name="cartype"/>
										<img alt="" src="images/01-main-th_55.png" className="mslrstypegrey"/>
										<p>4wd</p>
									</div>
									<div className="mslrenttype">
										<input type="radio" value="suv" name="cartype"/>
										<img alt="" src="images/01-main-th_57.png" className="mslrstypegrey"/>
										<p>suv</p>
									</div>
									<div className="mslrenttype">
										<input type="radio" value="Bike" name="cartype"/>
										<img alt="" src="images/01-main-th_69.png" className="mslrstypegrey"/>
										<p>Bike</p>
									</div>
								</div>
								<h3 className="mslrentcate">ช่วงเวลาที่คุณต้องการใช้รถ</h3>
								<div className="mslrentpart">
									<div className="mslrenttype">
										<input type="text" className="datepick" id="datepick"/>
										<img alt="" src="images/01-main-th_91.png" className="mslrstypegrey"/>
										<p>Pick-up</p>
									</div>
									<div className="mslrenttype">
										<img alt="" src="images/01-main-th_91.png" className="mslrstypegrey"/>
										<p>Return</p>
									</div>
									<input name="" type="submit" value="" className="mslrentfind"/>
								</div>

								
							</form>
						</div>

						<div className="mainsltext">
							<h2>เช่ารถจาก<span>คนที่คุณไว้ใจ</span> ได้โดยตรง</h2>
							<p>แบ่งปัน สะดวก ปลอดภัย
							รวดเร็วทันใจ ง่ายๆแค่คลิกเดียว</p>
						</div>

					</div>
					
				</div>

				<div className="main_a">
					<div className="wrap">
						<h2 className="mnahead">เพิ่ม<span>รายได้พิเศษ</span>ให้ตัวคุณเอง</h2>
						<p className="mnatext">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
						<a href="#" className="mnarent">ปล่อยรถเช่า</a>
					</div>
				</div>

				<div className="main_b">
				<div className="mnbbox">
					<a href="#"><img alt="" src="images/shutterstock_493048780.jpg" />
						<div className="mnbbon">
							<h3>โปรแกรมพิเศษ</h3>
							<p>สําหรับวัยรุ่นที่รักการเดินทาง</p>
						</div>
					</a>
				</div>
				<div className="mnbbox">
					<a href="#"><img alt="" src="images/shutterstock_285442550.jpg" />
						<div className="mnbbon">
							<h3>โปรแกรมพิเศษ</h3>
							<p>สําหรับวัยรุ่นที่รักการเดินทาง</p>
						</div>
					</a>
				</div>
				<div className="mnbbox">
					<a href="#"><img alt="" src="images/shutterstock_519482095.jpg" />
						<div className="mnbbon">
							<h3>โปรแกรมพิเศษ</h3>
							<p>สําหรับวัยรุ่นที่รักการเดินทาง</p>
						</div>
					</a>
				</div>
			</div>

				<div className="main_c">
					<div className="wrap">
						<h2 className="mnchead">วิธีการใช้งานง่ายๆ ของ Hippo Car Rent</h2>
						<div className="mncbox">
							<img alt="" src="images/01-main-th_16.png" />
							<h3>จองผ่านหน้าเว็บไซต์</h3>
							<p>ลงทะเบียนและค้นหารถที่คุณชอบ<br />และทำการจองได้เลย!</p>
						</div>
						<div className="mncbox">
							<img alt="" src="images/01-main-th_18.png" />
							<h3>นัดพบเจ้าของรถเพื่อรับกุญแจ</h3>
							<p>นัดพบกับเจ้าของรถ<br />ตามจุดนัดพบเพื่อรับกุญแจ</p>
						</div>
						<div className="mncbox">
							<img alt="" src="images/01-main-th_20.png" />
							<h3>เริ่มต้นการเดินทางอันสุดแสนประทับใจ</h3>
							<p>เริ่มต้นการเดินทางอันสุดแสนประทับใจ</p>
						</div>
					</div>
				</div>

				<div className="main_d">
				<div className="wrap">
					<div className="mndleft">
						<img alt="" className="mndicon" src="images/01-main-th_33.png" />
						<h3 className="mndlhead">ประเภทของรถ</h3>
						<p className="mndltext">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
						<div className="mndlcon">
							<a href="#">
								<div className="mslrenttype x">
									<img alt="" src="images/01-main-th_50.png" className="mslrstypegrey" />
									<p>Car</p>
								</div>
							</a>
							<a href="#">
								<div className="mslrenttype x">
									<img alt="" src="images/01-main-th_53.png" className="mslrstypegrey" />
									<p>Van</p>
								</div>
							</a>
							<a href="#">
								<div className="mslrenttype x">
									<img alt="" src="images/01-main-th_55.png" className="mslrstypegrey" />
									<p>4wd</p>
								</div>
							</a>
							<a href="#">
								<div className="mslrenttype x">
									<img alt="" src="images/01-main-th_57.png" className="mslrstypegrey" />
									<p>suv</p>
								</div>
							</a>
							<a href="#">
								<div className="mslrenttype x">
									<img alt="" src="images/01-main-th_69.png" className="mslrstypegrey" />
									<p>Bike</p>
								</div>
							</a>
							<a href="#">
								<div className="mslrenttype x">
									<img alt="" src="images/01-main-th_53.png" className="mslrstypegrey" />
									<p>Van</p>
								</div>
							</a>
							<a href="#">
								<div className="mslrenttype x">
									<img alt="" src="images/01-main-th_55.png" className="mslrstypegrey" />
									<p>4wd</p>
								</div>
							</a>
							<a href="#">
								<div className="mslrenttype x">
									<img alt="" src="images/01-main-th_57.png" className="mslrstypegrey" />
									<p>suv</p>
								</div>
							</a>
						</div>
					</div>
					<div className="mndright">
						<a href="#">
							<h3 className="mndlhead">How does it work?</h3>
							<p className="mndltext">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
							<img alt="" src="images/01-main-th_42.jpg" /></a>
					</div>
				</div>
			</div>

			<div className="main_e">
				<div className="wrap">
					<div className="mnecon">
						<h2 className="mnehead">คุณมีคำถามเพิ่มเติม หรือ <span>ต้องการความช่วยเหลือ</span></h2>
						<div className="mnecall">
							<img alt="" src="images/01-main-th_202.png" />
							<p>061-995-5656</p>
						</div>
						<p className="mnetext">จันทร์ถึงศุกร์ เวลา <span>08.30-19.30</span> และเสาร์อาทิตย์ เวลา <span>09.00-18.00</span><br />คุณสามารถไว้วางใจเกี่ยวกับการปฏิบัติงานของเรา<br
							/>สำหรับธุรกิจรถเช่า โปรดติดต่อเราสำหรับข้อมูลเพิ่มเติม</p>
					</div>
				</div>
			</div>

			<div className="clear"></div>

			</div>
            
        )
    }
}

export default MainSlide