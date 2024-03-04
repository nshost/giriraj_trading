import React from 'react'
import Hero from './Hero'
import Categories from './Categories'

const Home = () => {
  return (
    <>
    <section className="vh-100 vw-100 main-hero">
    <Hero/>
    </section>
    <Categories/>

    </>
  )
}

export default Home