import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter, faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
library.add(faFacebook,faTwitter,faInstagram,faWhatsapp);
function Footer() {
  return (
    <div className='flex justify-around pt-32 pb-32 bg-[#F1F9F4] max-sm:flex-col max-sm:pt-24 max-sm:gap-16'>
        <div className='text-[#509995]  pl-10 w-2/5 max-sm:w-full'>
          <h1 className='text-4xl font-bold'>TitleHere</h1> <br/>
          <p className=' text-xl max-sm:pr-6 '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim. </p>
        </div>
        <div className='flex justify-around w-6/12 max-sm:w-full'>
        <div className='flex flex-col justify-evenly gap-4 text-[#509995] '>
          <h1 className='font-bold text-3xl '>About</h1>
          <ul className='text-xl'>
            <li ><a href="#"> History</a></li>
            <li ><a href="#"> Our Team</a></li>
            <li ><a href="#"> Brand Guidelines</a></li>
            <li ><a href="#"> Terms & Condition</a></li>
            <li ><a href="#"> Privacy Policy</a></li>
          </ul></div>
          <div className='flex flex-col justify-evenly gap-4 text-[#509995]'>
          <h1 className='font-bold text-3xl'>Services</h1>
          <ul className='text-xl'>
            <li ><a href="#"> How to order</a></li>
            <li ><a href="#"> Our Products</a></li>
            <li ><a href="#"> Order Status</a></li>
            <li ><a href="#"> Promo</a></li>
            <li ><a href="#"> Payment Method</a></li>
          </ul>
         </div>
         <div className='flex flex-col justify-evenly gap-4 text-[#509995]'>
          <h1 className='font-bold text-3xl'>Follow</h1>
          <ul className='text-xl '>
          <li>
  <a href="https://www.facebook.com" target="_blank">
    <FontAwesomeIcon icon={['fab', 'facebook']} className="h-6 w-6" /> Facebook
  </a>
</li>
<li className='pt-2'>
  <a href="https://www.twitter.com" target="_blank">
    <FontAwesomeIcon icon={['fab', 'twitter']} className="h-6 w-6" /> Twitter
  </a>
</li>
<li className='pt-2'>
  <a href="https://www.instagram.com" target="_blank">
    <FontAwesomeIcon icon={['fab', 'instagram']} className="h-6 w-6" /> Instagram
  </a>
</li>
<li className='pt-2'>
  <a href="https://www.whatsapp.com" target="_blank">
    <FontAwesomeIcon icon={['fab', 'whatsapp']} className="h-6 w-6" /> Whatsapp
  </a>
</li>

                    </ul> 
         </div></div>
    </div>
  )
}

export default Footer