import React from 'react'

export default function FeatureCard({img,text,color}) {
  return (
    <div className="feature-card" data-aos="zoom-in" data-aos-duration="1000">
        <img src={img} alt="" />
        <p className='text-center mt-3 ' style={{backgroundColor:color,color:"#088178",borderRadius:"0.3rem"}} >{text}</p>
    </div>
  )
}
