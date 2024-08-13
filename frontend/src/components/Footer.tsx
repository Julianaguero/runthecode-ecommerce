
export default function Footer() {
  return (
    <footer className="max-w-[1560px] mx-auto w-full bg-violet pt-6">
      <div className="flex flex-col px-6 mb-8">
        <div className="flex flex-col md:flex-row gap-14 justify-between sm:px-10 pt-10">
          <div className="max-w-[35rem]">
            <p className="text-yellowbright font-ginto-nord-bold-italic text-[clamp(1.2rem,5.28vw+0.12rem,4.5rem)] leading-[clamp(2rem,0.8rem+4.8vw,5rem)]	">Subscribe <br/> to our <br/> newsletter</p>
            <div className="mt-8 relative w-[70%]">
                <input id="newsletter-mail" placeholder="Enter your email" name="newsletter-mail" className="input-style placeholder:text-gray-300 "></input>
                <button type="submit" className="text-white absolute bottom-2 right-1 hover:text-yellowbright text-lg w-8 h-8">OK</button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-12 text-white justify-evenly ">
            <div>
              <ul className="flex flex-col gap-4">
                <li ><a href="#" className="font-sans hover:text-yellowbright">ABOUT US</a></li>
                <li ><a href="#" className="font-sans hover:text-yellowbright">OFFICES</a></li>
                <li ><a href="#" className="font-sans hover:text-yellowbright">STORES</a></li>
                <li ><a href="#" className="font-sans hover:text-yellowbright">WORK WITH US</a></li>
              </ul>
            </div>
            <div>
             <ul className="flex flex-col gap-4">
                <li ><a href="#" className="font-sans hover:text-yellowbright">FAQS</a></li>
                <li ><a href="#" className="font-sans hover:text-yellowbright">PAYMENT</a></li>
                <li ><a href="#" className="font-sans hover:text-yellowbright">RETURNS</a></li>
                <li ><a href="#" className="font-sans hover:text-yellowbright">SHIPMENT</a></li>
              </ul>
            </div>
            <div>
             <ul className="flex flex-col gap-4">
                <li ><a href="#" className="font-sans hover:text-yellowbright">TWITTER</a></li>
                <li ><a href="#" className="font-sans hover:text-yellowbright">INSTAGRAM</a></li>
                <li ><a href="#" className="font-sans hover:text-yellowbright">FACEBOOK</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[clamp(1rem,17vw+1rem,28rem)] text-white text-center">SNEAKERS</h3>
        <p className="text-white font-sans text-center text-[0.8rem]">Design credits  to <a href="https://dribbble.com/herverbna" className="text-yellowbright">Hervé Rbna</a>💗</p>
      </div>
    </footer>
  );
}
