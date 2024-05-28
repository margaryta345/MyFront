function Video({ src, alt, img, imgAlt, text }) {
  return (
    <div className="relative w-[25%]">
      <video className="w-full h-auto" autoPlay loop muted>
        <source src={src} alt={alt} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 flex md:left-[10%] lg:left-[15%] md:text-[16px] sm:text-[16px] text-[8px]  text-white font-bold lg:text-[25px]">
        <img
          className="lg:w-12 lg:h-12 md:w-8 md:h-8 sm:w-10 sm:h-10 w-8 h-8 p-2 "
          src={img}
          alt={imgAlt}
        />
        <p className="md:pt-1 pt-3">{text}</p>
      </div>
    </div>
  );
}

export default Video;
