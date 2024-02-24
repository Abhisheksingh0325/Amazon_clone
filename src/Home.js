import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (  
    <div className='home'>
      <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

      {/* 1ST ROW FROM HERE */}

      <div className="home__row">
      <Product
      id="12332101"
      title="Kunex It Ends With Us:Who Loves You Is One Who Hurts You"
      price={1140}
      rating={5}
      image="https://m.media-amazon.com/images/I/81s0B6NYXML._AC_UY327_FMwebp_QL65_.jpg" />

<Product
      id="12332102"
      title="American Tourister 32 Ltrs Black Casual Backpack"
      price={1199}
      rating={4}
      image="https://m.media-amazon.com/images/I/71lXgPnZjvL._AC_UY327_FMwebp_QL65_.jpg" />
      
      <Product
      id="12332122"
      title="OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic"
      price={1699}
      rating={4}
      image="https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UL480_FMwebp_QL65_.jpg" />

    </div>

    {/* 2ND ROW START FROM HERE */}

    <div className="home__row">
    <Product
      id="12332103"
      title="Apple iPhone 14 Pro Max 256GB Deep Purple"
      price={149900}
      rating={5}
      image="https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY327_FMwebp_QL65_.jpg" />
      
      <Product
      id="12332104"
      title="Sony WH-1000XM5 Noise Cancelling Headphones"
      price={32500}
      rating={3}
      image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_7SalQWewuqDVOb_Z6FlDoppJgi5ylR1obxb7zeDSODLoQGD-R0WpbQZFKsn5MoJNbPaihMZxbZ7B&usqp=CAc" />
      
      <Product
      id="12332105"
      title="Echo Dot (2020 release)| Smart speaker with Alexa"
      price={3449}
      rating={4}
      image="https://m.media-amazon.com/images/I/41FgiLFNhFL._AC_UY327_FMwebp_QL65_.jpg" />
      
    </div>

    {/* 3RD ROW START FROM HERE */}
      

    <div className="home__row">
    <Product
      id="12332106"
      title="Fire-Boltt 360 SpO2 Full Touch Large Display Smartwatch"
      price={1799}
      rating={5}
      image="https://m.media-amazon.com/images/I/61F1SVuthwS._AC_UL480_FMwebp_QL65_.jpg" />

<Product
      id="12332107"
      title="Fire TV Stick with Alexa Voice Remote |HD streaming device"
      price={3999}
      rating={4}
      image="https://m.media-amazon.com/images/I/51lX5oZbtQL._AC_UL480_FMwebp_QL65_.jpg" />
      
      <Product
      id="12332108"
      title="Fire-Boltt Phoenix Watch with Bluetooth Calling"
      price={1799}
      rating={4}
      image="https://m.media-amazon.com/images/I/61y2VVWcGBL._AC_UL480_FMwebp_QL65_.jpg" />


    </div>

    {/* 4RD ROW START FROM HERE */}

    <div className="home__row">
    <Product
      id="12332109"
      title="Sennheiser HD 820 Wired Headphones Without Mic"
      price={169990}
      rating={4}
      image="https://m.media-amazon.com/images/I/61-lyk4-bnL._AC_UL480_FMwebp_QL65_.jpg" />
      
      <Product
      id="12332110"
      title="CAYA Warrior Cycle | Bike with Semi-Fat Tyre 26 inch"
      price={10449}
      rating={4}
      image="https://m.media-amazon.com/images/I/81wGn2TQJeL._AC_UY327_FMwebp_QL65_.jpg" />

      <Product
      id="12332111"
      title="Xergy 10 cm 3D Rechargeable Moon Lamp with Touch Control"
      price={699}
      rating={4}
      image="https://rukminim1.flixcart.com/image/416/416/jiulk7k0/table-lamp/m/e/h/3d-moon-lamp-india-moon-shaped-lamp-led-moon-lamp-lunar-original-imaf6jypg9xcehkz.jpeg?q=70" />


    </div>

    {/* 5RD ROW START FROM HERE */}

    <div className="home__row">
    <Product
      id="12332112"
      title="URBN 10000 mAh Lithium_Polymer 22.5W Fast Charging"
      price={1299}
      rating={4}
      image="https://m.media-amazon.com/images/I/61DhFP7NHoL._AC_UL480_FMwebp_QL65_.jpg" />
      
      <Product
      id="12332113"
      title="amiciVision LED Lighted Tracing Board A4 Size Drawing Board"
      price={1355}
      rating={4}
      image="https://m.media-amazon.com/images/I/61PDqc1l8uL._AC_UL480_FMwebp_QL65_.jpg" />

      <Product
      id="12332114"
      title="Okami Wolf Nomad Laptop Backpack with USB Charging"
      price={3499}
      rating={5}
      image="https://m.media-amazon.com/images/I/61Y-4khIH5L._AC_UY327_FMwebp_QL65_.jpg" />


    </div>

    {/* 6RD ROW START FROM HERE */}

    <div className="home__row">
    <Product
      id="12332115"
      title="Galaxy Hi-Tech Pioneer Bot Robot Colorful Lights"
      price={689}
      rating={4}
      image="https://m.media-amazon.com/images/I/71h-tYk3QjS._AC_UY327_FMwebp_QL65_.jpg" />
      
      <Product
      id="12332116"
      title="Sounce New Version Screen Expanders & Amplifier"
      price={1379}
      rating={3}
      image="https://m.media-amazon.com/images/I/414FI34PTTL._AC_SR320,320_.jpg" />

      <Product
      id="12332117"
      title="MOKOBARA Backpack Pro 15.6 Inch Laptop Backpack"
      price={5499}
      rating={4}
      image="https://m.media-amazon.com/images/I/71QpJCWJb1L._AC_UY327_QL65_.jpg" />


    </div>

    {/* 6RD ROW START FROM HERE */}

    <div className="home__row">
    <Product
      id="12332118"
      title="Canon EOS M50 Mark II Camera EF-M15-45mm"
      price={57990}
      rating={4}
      image="https://rukminim1.flixcart.com/image/416/416/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70" />
      
      <Product
      id="12332119"
      title="Zebronics Zeb-Transformer-M Optical Gaming Mouse"
      price={399}
      rating={3}
      image="https://m.media-amazon.com/images/I/81tioCUVf4L._AC_UY327_QL65_.jpg" />

      <Product
      id="12332120"
      title="MOFT Multifunctional Desk PU Leather"
      price={16199}
      rating={4}
      image="https://cdn.shopify.com/s/files/1/1586/2541/products/DeskMat_Large-Charcoal1_900x.jpg?v=1668248999" />


    </div>

    <div className="home__row">
    <Product
      id="12332121"
      title="MI Xiaomi 138.8 cm (55 inches) 4K Ultra HD Smart Android OLED Vision TV"
      price={99999}
      rating={4}
      image="https://m.media-amazon.com/images/I/81onGhenkUL._AC_CR0%2C0%2C0%2C0_SX960_SY720_.jpg" />

    </div>


    </div>
  )
}

export default Home
