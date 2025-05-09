function Hero() {
  return (
    <div className="relative h-[85vh] bg-cover bg-center bg-[url('/bg-image.jpg')]">
      <div className="absolute inset-0 bg-black/65 z-0"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="flex flex-col tracking-normal gap-0 items-center justify-center">
          <h1 className="text-[55px] font-semibold">Welcome to 33% Fund</h1>
          <p className="text-[32px] -mt-[10px]">
            Your Path to Financial Success
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
