
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../css/home.css"
const Home = () => {
    return(
        <>
        

<header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">

     
      

      <nav id="navbar" class="navbar">
        <ul>
        <li><a class="nav-link scrollto" href="#team">PayRoll  App</a></li>
          <li><a class="nav-link scrollto" href="#team">Sign in</a></li>
          
          <li><a class="nav-link scrollto" href="#contact">Sign up</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>PayRoll App</h1>
          <h2>One solutions for your employee management.</h2>
          <div><a href="/signin" class="btn-get-started scrollto">Sign in</a></div>
          
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img">
          <img src="https://bootstrapmade.com/demo/templates/Butterfly/assets/img/hero-img.png" class="img-fluid" alt="" />
        </div>
      </div>
    </div>

  </section>
            
        </>
    )
}
export default Home