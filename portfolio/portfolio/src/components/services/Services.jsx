import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

import './services.css'

import {
  SmoothScroll,
  VerticalSection,
  HorizontalSection,
} from "../SmoothScroll";
function Services() {
  return (
    <div>
    <section id='services'>
         <h5>What I Offer</h5>
         <h2>Services</h2>

         <div className="container container_services">
              <article className="card">
                <MdDesignServices  className='icon '/>
                <h3>Web Design</h3>
              </article>

              <article className="card">
                <IoIosRocket   className='icon '/>
                <h3>Fast Performance </h3>
              </article>


              <article className="card">
                <FaCode  className='icon '/>
                <h3>Clean Code</h3>
              </article>
                        
            </div>
    </section>
      <div className="App">
                            {/* Add SmoothScroll component once at the top level */}
                            <SmoothScroll />
                    
                            {/* Your existing components */}
                        
                    
                            <main>
                              {/* Your existing content */}
              
                    
                              {/* Add the smooth scroll sections */}
                              <VerticalSection />
                            
                            </main>
                          </div>
    </div>
  )
}

export default Services