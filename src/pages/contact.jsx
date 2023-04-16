import React from 'react'

function Contact() {
  return (
    <div className='cont'>
      <div className='con_con'>

        <form action='mailto:anil@gmail.com' className='contacts'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Phone No</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>


    </div>
  )
}

export default Contact
