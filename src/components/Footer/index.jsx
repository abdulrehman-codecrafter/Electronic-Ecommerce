import React from 'react'
import Logo from "../../assets/logo.png"
import dayjs from 'dayjs'
import app from "../../assets/app.jpg"
import play from "../../assets/play.jpg"

export default function FooterComponent() {
  const rightNow= dayjs().format("h:mm:ss A")
  return (
      <div className="footer pb-4 " style={{backgroundColor:"#cfe1e084"}}>
        <div className="container mt-5 pt-5 " >
          <div className="row">
            <div className="col-lg-3 col-12 col-md-6 mt-3">
              <img src={Logo} alt="" />
              <h4 className='mt-3'>Contact</h4>
              <p className='mb-1'><b>Address : </b>Satyana Road, Street 13 Ilahiabad, Faisalabad</p>
              <p className='mb-1'><b>Phone : </b>+92 323 7449306</p>
              <p className='mb-1'><b>Time : </b>{rightNow}</p>
            </div>
            <div className="col-lg-3 col-12 col-md-6 mt-3">
              <h4>About</h4>
              <p className='mb-1'>About Us</p>
              <p className='mb-1'>Delivery Information</p>
              <p className='mb-1'>Privacy Policy</p>
              <p className='mb-1'>Terms & Conditions</p>
              <p className='mb-1'>Contact Us</p>
            </div>
            <div className="col-lg-3 col-12 col-md-6 mt-3">
              <h4>My Account</h4>
              <p className='mb-1'>View Cart</p>
              <p className='mb-1'>Track My Order</p>
              <p className='mb-1'>WishL ist</p>
              <p className='mb-1'>Help</p>
            </div>
            <div className="col-lg-3 col-12 col-md-6 mt-3">
              <h4>Install App</h4>
              <p>From App Store or Google Play Store</p>
              <div className="install-btns d-flex gap-1" >
                <img src={app} alt="" style={{width:"150px",backgroundColor:"transparent"}}/>
                <img src={play} alt="" style={{width:"150px",backgroundColor:"transparent"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
