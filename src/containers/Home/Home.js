import React from 'react';
import './Home.css';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import pic_1 from '../../assets/img/pic_1.png';
import icon_1 from '../../assets/img/icon_1.png';
import app_store from '../../assets/img/app_store.png';
import google_play from '../../assets/img/google_play.png';
import multi from '../../assets/img/multi.png';
import cards from '../../assets/img/cards.png';
import top_up from '../../assets/img/top-up.png';
import google_pay from '../../assets/img/google pay.png';
import apple_pay from '../../assets/img/apple pay.png';
import pic_2 from '../../assets/img/pic_2.png';
import pic_3 from '../../assets/img/pic_3.png';
import twinkle from '../../assets/img/twinkle.png';
import pic_4 from '../../assets/img/pic_4.png';

function Home() {

  return (
    <div className="container mx-auto bg-my_background dark:bg-black ">
      <Menu />
      <div className="w-full flex flex-col pb-16 px-3 md:px-5 dark:color-invert">
        <div className="md:flex md:flex-row-reverse md:justify-between md:items-center md:mt-16">
          <img className="mt-16 md:w-1/2 md:mt-0" src={pic_1} />
          <div className="md:flex md:flex-col">
            <div className="flex flex-col space-y-10">
              <span className="flex items-center font-normal text-gray-500"><img className="mr-3 w-7" src={icon_1} />In every beginning, there is chaos.</span>
              <h1 className="text-4xl font-bold leading-snug">Peaceful<br />shopping.<br />mindful money</h1>
              <p className="text-gray-500">See how we can help with making your shopping experience and money management more TWIN.</p>
            </div>
            <div className="flex justify-between mt-10 mb-20 sm:w-3/5 md:w-4/5">
              <img className="w-2/5 cursor-pointer" src={app_store} />
              <img className="w-2/5	cursor-pointer" src={google_play} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mx-auto w-1/2 sm:justify-around sm:w-full md:space-x-3 lg:my-16">
          <div className="flex flex-col justify-around w-44 h-52 px-5 my-5 bg-gradient-to-r from-blue-200 to-blue-400 rounded-3xl" style={{ boxShadow: "0px 8px 20px 3px #92c1fc" }}>
            <img className="w-14 icon-shadow" src={multi} />
            <h3 className="text-white font-semibold">Multicurrency account</h3>
            <p className="text-white font-normal text-sm">Many currencies for all your needs</p>
          </div>
          <div className="flex flex-col justify-around w-44 h-52 px-5 my-5 bg-gradient-to-r from-gray-500 to-gray-900 rounded-3xl" style={{ boxShadow: "0px 8px 20px 3px #676e7c" }}>
            <img className="w-14 icon-shadow" src={cards} />
            <h3 className="text-white font-semibold">Cards</h3>
            <p className="text-white font-normal text-sm">TWIN Mastercard®
              <br />
              for shopping enlightenment
              </p>
          </div>
          <div className="flex flex-col justify-around w-44 h-52 px-5 my-5 bg-gradient-to-r from-red-300 to-red-500 rounded-3xl" style={{ boxShadow: "0px 8px 20px 3px #f67878" }}>
            <img className="w-14 icon-shadow" src={top_up} />
            <h3 className="text-white font-semibold">Top-up & Sendouts</h3>
            <p className="text-white font-normal text-sm">Transfer your funds the way you want</p>
          </div>
          <div className="flex flex-col justify-around w-44 h-52 px-5 my-5 bg-gradient-to-r from-blue-500 to-blue-800 rounded-3xl" style={{ boxShadow: "0px 8px 20px 3px #3068da" }}>
            <span className="flex items-center text-white font-medium text-3xl"><img className="w-5 icon-shadow mr-2" src={google_pay} />Pay</span>
            <h3 className="text-white font-semibold">Google Pay</h3>
            <p className="text-white font-normal text-sm">Pay anywhere, the way you like with TWIN and Google Pay</p>
          </div>
          <div className="flex flex-col justify-around w-44 h-52 px-5 my-5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl" style={{ boxShadow: "0px 8px 20px 3px #e88c08" }}>
            <span className="flex items-center text-white font-medium text-3xl"><img className="w-5 icon-shadow mr-1" src={apple_pay} />Pay</span>
            <h3 className="text-white font-semibold">Apple Pay</h3>
            <p className="text-white font-normal text-sm">Pay anywhere, the way you like with TWIN and Apple Pay</p>
          </div>
        </div>
        <div className="md:flex md:flex-row md:justify-between md:items-center md:mt-10">
          <img className="mt-10 md:w-1/2 md:mt-0" src={pic_2} />
          <div className="flex flex-col space-y-10">
            <h2 className="text-3xl font-bold">3-year warranty boost</h2>
            <p className="text-gray-500">Twin cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.</p>
            <p className="text-gray-500">When you buy any electronics with your TWIN shoppingMastercard®, their warranty gets extended by one year. How dose it work? It simply does. Automatically.</p>
          </div>
        </div>
        <div className="md:flex md:flex-row-reverse md:justify-between md:items-center md:mt-10">
          <img className="mt-10 md:w-1/2 md:mt-0" src={pic_3} />
          <div className="flex flex-col space-y-10">
            <h2 className="text-3xl font-bold">Twin shopping Mastercard®</h2>
            <p className="text-gray-500">You shouldn't be bound to use one card at a time, especially when it has so many benefits! With Twin, you can manage your shopping and finaces with both physical and virtual cards. It's convenient,streamlined, and works like a charm. You can have a shopping card,a subscription card.</p>
            <div className="flex justify-around mt-5 sm:justify-start sm:space-x-3">
              <div className="h-16 w-28 cursor-pointer flex items-center justify-center text-white text-2xl font-semibold bg-gradient-to-bl from-blue-500 to-blue-800 rounded-3xl btn-google-shadow">
                <img className="w-7 mt-1 mr-1" src={google_pay} />Pay
              </div>
              <div className="h-16 w-28 cursor-pointer flex items-center justify-center text-white text-2xl font-semibold bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-3xl btn-apple-shadow">
                <img className="w-6" src={apple_pay} />Pay
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mt-20">Twinkle cashback!</h2>
        <p className="text-gray-500 text-center md:mt-5">It saves a little bit of money while you're shopping, but in many cases it takes ages to get anything out of it. We gave it a thought and made cashback way more friendly.</p>
        <img src={twinkle} />
        <div className="md:flex md:flex-row md:justify-between md:items-center md:mt-10">
          <img className="mt-20 md:w-1/2 md:mt-0" src={pic_4} />
          <div className="flex flex-col space-y-10">
            <h2 className="text-3xl font-bold">Quick and easy account creation</h2>
            <p className="text-gray-500">Now, you might be thinking that it's just like any other account creation... Long, tiresome and full of endless blanks to fill in. Well,it's not.</p>
            <p className="text-gray-500">We have designed the whole process to make it the simplest and the shortest one ever conceived for a personal account. Download the app and see for yourself!</p>
            <div className="flex justify-between mt-5 mb-10 sm:w-3/5">
              <img className="w-2/5 cursor-pointer" src={app_store} />
              <img className="w-2/5 cursor-pointer" src={google_play} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;
