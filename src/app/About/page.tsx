import React from 'react'
import Footer1 from '../Components/Footer1'
import Link from 'next/link'

const page = () => {
  return (
    <div className='mt-24 mb-28'>
      <h1 className="text-4xl font-semibold text-gray-900 underline mb-4">About Us</h1>

<p><strong>Welcome to STYLISH FURNITURE</strong> – your ultimate destination for high-quality, stylish, and 
sustainable furniture. We believe that the right furniture doesn’t just fill a space—it transforms it. With
 a passion for craftsmanship and design, we offer furniture pieces that bring comfort, beauty, and functionality
  into your home.</p><br/>



<h2 className="text-4xl font-semibold text-gray-900 underline mb-4">Our Values</h2>
<ul>
  <li><strong>Sustainability:</strong> We prioritize eco-friendly materials and sustainable production processes.</li>
  <li><strong>Quality:</strong> Our furniture is crafted from the finest materials, ensuring long-lasting durability.</li>
  <li><strong>Customer Satisfaction:</strong> We aim to exceed your expectations with every piece we create, offering personalized services and exceptional support.</li>
</ul><br/>


<h2 className="text-4xl font-semibold text-gray-900 underline mb-4">What We Offer</h2>
<p>Whether you're looking for modern minimalism, rustic charm, or timeless elegance, we have something for every home. Our range includes:</p>
<ul>
  <li>Living Room Furniture: Sofas, coffee tables, sideboards, and more.</li>
  <li>Bedroom Furniture: Beds, wardrobes, dressers, and nightstands.</li>
  <li>Dining & Office Furniture: Tables, chairs, desks, and storage solutions.</li>
</ul><br/>

<h2 className="text-4xl font-semibold text-gray-900 underline mb-4">Craftsmanship</h2>
<p>Every piece of furniture from STYLISH FURNITURE is carefully crafted with attention to detail.
   We source the finest materials, from sustainably harvested wood to premium fabrics, ensuring that
    our pieces not only look beautiful but also stand the test of time. Our artisans use traditional
     methods of craftsmanship combined with modern techniques to create furniture that is both functional
      and a work of art.</p><br/>

<h2 className="text-4xl font-semibold text-gray-900 underline mb-4">What Our Customers Say</h2>
<blockquote>"The quality of the sofa I purchased is exceptional. It looks great in my living room and is incredibly comfortable." – Sarah L.</blockquote>
<blockquote>"I love the custom dining table we designed together. It's exactly what I wanted!" – Mark T.</blockquote><br/>

<h2 className="text-4xl font-semibold text-gray-900 underline mb-4">Explore Our Collection</h2>
<p>Browse our extensive range of furniture and discover pieces that will elevate your space.
   If you need assistance or have questions, don't hesitate to <Link href="/Contact">Contact Our Team</Link>—we're here to help!</p>

        <Footer1 />
    </div>
  )
}

export default page