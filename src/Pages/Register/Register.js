import React from 'react'

export default function Register() {
  return (
    <div className='flex justify-center items-center overflow-auto'>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between'
        onSubmit={(e) => e.preventDefault()}>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='firstName'>
            First Name
          </label>
          <input
            type='text'
            name='firstName'
            id='firstName'/>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='lastName'>
            Last Name
          </label>
          <input type='text' name='lastName'/>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='email'>
            Email
          </label>
          <input type='email' name='email'/>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Gender</h1>
          <div className='flex gap-3'>
            <div>
              <input type='radio' name='gender' value='male'/>
              <label className='ml-2 text-lg' htmlFor='male'>
                Male
              </label>
            </div>
            <div>
              <input type='radio' name='gender' value='female'/>
              <label className='ml-2 text-lg' htmlFor='female'>
                Female
              </label>
            </div>
            <div>
              <input type='radio' name='gender' value='other'/>
              <label className='ml-2 text-lg' htmlFor='other'>
                Other
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='education'>
            Education
          </label>
          <select name='education'>
            <option value='SSC'>SSC</option>
            <option value='HSC'>HSC</option>
            <option value='Under Graduate'>Under Graduate</option>
            <option value='Graduate'>Graduate</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='feedback'>
            Feedback
          </label>
          <textarea name='feedback' cols='30' rows='4'></textarea>
        </div>
        <div className='flex justify-between items-center w-full'>
          <div className='flex w-full max-w-xs'>
            <input className='mr-3' type='checkbox' name='term'/>
            <label htmlFor='terms'>I agree to terms and conditions</label>
          </div>
          <button
            className='px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
            disabled={true}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
