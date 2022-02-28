import React from 'react'
import ImgProfile from '../../images/Avatar.jpg'

function Profile() {
    return (
              <div>
                 <div className="card card-1">
                   <div className="card-body">
                     <img src={ImgProfile} alt="Profile" style={{width:'100%',height:'200px'}} />
                   </div>
                   <div className="card-footer">
                      <p className="name">Medoune Fall</p>
                   </div>
                 </div>
                 <div className="card card-2">
                   <div className="card-body compte2">
                      <p className="signe">+</p>
                   </div>
                   <div className="card-footer">
                      <p className="add_count">Add account</p>
                   </div>
                 </div>
              </div>
    )
}

export default Profile
