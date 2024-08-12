import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurTeam.scss'
function OurTeam() {
  return (
    <div className='ourTeam'>
      <div className="container">
        <div className="row">
          <p className="text-center mb-4 color:green">
            Contacts</p>
          <h3 className=" sectionTeam text-center mb-5"> Our Team</h3>
        </div>
        <div className="d-flex justify-content-center">
          <div className='col-md-4'>
            <img className='image-fluid' src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
            <p className='text-center green-p h4'>Velva Kopf</p>
            <p className='text-center green-p'>Biologist</p>
          </div>
          <div className='col-md-4'>
            <img className='image-fluid' src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
            <p className='text-center green-p h4'>Sarah Palmer</p>
            <p className='text-center green-p'>Florist</p>
          </div>      
          
           <div className='col-md-4'>
            <img className='image-fluid' src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
            <p className='text-center green-p h4'>Jessica Swift</p>
            <p className='text-center green-p '>Photographer</p>
          </div>
        </div>
        <div className=' section3 row '>
          <div className='col-md-6'>
            <h3 className='fine text-center green-p'>The fine makers of flora
            </h3>
          </div>
          <div className='col-md-6'>
            <p className='text-center green-p'>Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no, nec ea quodsi invenire. Pri facilisi eleifend ad, ad eos scripta oblique. Vix cu oratio.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam