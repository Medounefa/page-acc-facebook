import React from 'react'

function Formulaire() {
    return (
        <div>
            <div className="form">
              <form action="" method="">
                  <div className="form-group">
                   <input type="text" placeholder="Email address or number phone" className="form-control" />
                  </div><br />
                  <div className="form-group">
                   <input type="password" placeholder="Password" className="form-control" />
                  </div><br />
                  <button className="btn btn-primary btn-block">Log in</button>
              </form><br />
              <p className="mpdO">Forget your password</p>
              <hr />
              <button className="btn btn-success">Create an account</button>
              <p className='celebre'><b>Create a page </b>For a celebrity group or business</p>
            </div>
        </div>
    )
}

export default Formulaire
