function Hero() {
  return (
    <div className="relative h-[75vh] md:h-[85vh] bg-cover bg-center bg-[url('/bg-image1.jpg')]">
      <div className="absolute inset-0 bg-black/65 z-0"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="flex flex-col tracking-normal gap-0 items-center justify-center">
          <h1 className="text-[42px]/14 mb-7 text-center md:text-[55px] font-semibold">
            Welcome to 33% Fund
          </h1>
          <p className="text-[28px]/10 text-center -mt-[10px]">
            Your Path to Financial Success
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
