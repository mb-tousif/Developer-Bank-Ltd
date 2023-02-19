import React from 'react'
import LoadingSpinner from '../../Components/LoadingSpinner'
import HeroVideo from './HeroVideo'

export default function About() {
  return (
    <div>
        <h1 className='text-rose-600 text-2xl text-center'>About Page</h1>
        <HeroVideo/>
        <LoadingSpinner/>
    </div>
  )
}
