import Marquee from "react-fast-marquee";
const LogoMarquee = () => {
  return (
    <div className="pt-24 overflow-hidden ">
      <Marquee className="flex    ">
        <div className="flex justify-between space-x-16 items-center">
        <img
          src="https://www.react-fast-marquee.com/static/media/dell.09332c44.png"
          alt=""
         
          
        />
        <img
          src="https://www.react-fast-marquee.com/static/media/microsoft.4a9a93f0.png"
          alt=""
         
        />
        <img
          src="https://www.react-fast-marquee.com/static/media/boeing.3037b0a6.png"
          alt=""
          
        />
        <img
          src="https://www.react-fast-marquee.com/static/media/ibm.bcec6b9a.png"
          alt=""
          
        />
        <img
          src="https://www.react-fast-marquee.com/static/media/nasa.3bf5af29.png"
          alt=""
       
        />
        <img
          src="https://www.react-fast-marquee.com/static/media/lucasfilm.ef28c5a6.png"
          alt=""
         
        />
        </div>
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
