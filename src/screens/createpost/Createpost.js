import React from 'react'

function Createpost() {
  return (
    <div className='outercontainer'>
      <form>
        <div className='form-group'>
            <label><h6>Title</h6></label>
             <input type='text' className='form-control'></input>
        </div>
        <div className='form-group'>
            <label><h6>Content:</h6></label>
            <textarea className='form-control'></textarea>
        </div>
        <div className='float-end'>
        <button type="button" className="btn btn-info">Save</button>
        </div>
      </form>
    </div>
  )
}

export default Createpost