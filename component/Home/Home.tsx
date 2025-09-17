'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Service'
import Resume from './Resume/Resume'
import Project from './Projects/Project'
import Skill from './Skills/Skills'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom"
    });
  }, []);

  return (
    <div className='overflow-hidden h-fit lg:h-fit'>
      <section id="home"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="resume"><Resume /></section>
      <section id="work"><Project /></section>
      <section id="skills"><Skill /></section>
      <section id="contact"><Contact /></section>
    </div>
  )
}

export default Home
