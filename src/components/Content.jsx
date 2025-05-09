import GetStarted from "./GetStarted";

function Content() {
  return (
    <>
      <div className=" px-2 md:px-[75px]">
        <div className="py-6 flex flex-col md:flex-row justify-around items-center gap-[190px]">
          <div className="flex flex-col gap-5">
            <h2 className="text-[34px]/10 tracking-tight font-semibold">
              Unlock Your Financial Potential
            </h2>
            <p className="text-[20px]/7 font-normal tracking-tight">
              At 33% Fund, we're committed to delivering consistent, high annual
              returns through our specialized dividend-oriented investment
              strategies.
            </p>
            <p className="text-[20px]/7 font-normal tracking-tight">
              Our unique multi-strategy approach not only ensures attractive
              returns but also maintains moderate volatility and low beta to the
              S&P 500. With our investment expertise, you can confidently pave
              your way towards financial prosperity.
            </p>
            <p className="text-[20px]/7 font-normal tracking-tight">
              Empowering Investments Worth Over $2 Billion: Over the past 5
              years, we've facilitated investments totaling more than $2
              billion, creating substantial value for our clients.
            </p>
            <button className="bg-primary text-slate-50 py-[5px] px-[24px] rounded-[5px] hover:bg-primary-hover w-[170px]">
              Learn More
            </button>
          </div>
          <img
            src="/home-img-01.png"
            height="470px"
            width="470px"
            className="md:pr-4"
          />
        </div>

        {/* ////////////////////////////////// */}
        <div className="py-6 flex flex-col md:flex-row justify-around items-center gap-[270px]">
          <img
            src="/home-img-02.png"
            height="470px"
            width="470px"
            className="md:pl-4"
          />
          <div className=" flex flex-col gap-5">
            <h2 className="text-[34px]/10 tracking-tight font-semibold max-w-[450px]">
              Discover Your Personalized Path to Financial Success
            </h2>
            <p className="text-[20px]/7 font-normal tracking-tight">
              Delve into our diverse array of investment strategies,
              thoughtfully crafted to align seamlessly with your unique
              financial goals. From dividend-oriented strategies that generate
              income to approaches focused on special situations, our range of
              strategies aims to maximize your returns while effectively
              managing risk.
            </p>
          </div>
        </div>
        {/* ////////////////////////////////// */}
        <div className="py-6 flex flex-col md:flex-row justify-around items-center gap-[270px]">
          <div className=" flex flex-col gap-5">
            <h2 className="text-[34px]/10 tracking-tight font-semibold max-w-[400px]">
              Stay Ahead of <br />
              Market Trends
            </h2>
            <p className="text-[20px]/7 font-normal tracking-tight">
              Stay updated with the latest news, market insights, and trends
              that directly impact our investment strategies. Our team of
              experts diligently analyzes the market landscape to empower you
              with the knowledge you need to make informed investment decisions.
            </p>
          </div>
          <img
            src="/home-img-03.png"
            height="470px"
            width="470px"
            className="md:pl-4"
          />
        </div>
        {/* ////////////////////////////////// */}
        <div className="py-6 flex flex-col md:flex-row justify-around items-center gap-[270px]">
          <img
            src="/home-img-04.png"
            height="470px"
            width="470px"
            className="md:pl-4"
          />
          <div className=" flex flex-col gap-5">
            <h2 className="text-[34px]/10 tracking-tight font-semibold max-w-[400px]">
              Our Investment Philosophy
            </h2>
            <p className="text-[20px]/7 font-normal tracking-tight">
              We believe that investment success lies in the balance between
              risk and reward. Our unique multi-strategy approach is backed by
              rigorous academic research and years of real-world experience,
              bringing you the best of both traditional and innovative
              investment techniques
            </p>
          </div>
        </div>
        {/* ///////////// More Content */}
        <div className="py-6 flex flex-col gap-5">
          <h2 className="text-[34px]/10 tracking-tight font-semibold">
            Upcoming Events and Webinars
          </h2>
          <p className="text-[20px]/7 font-normal tracking-tight">
            Stay engaged with 33% Fund's thought leadership through our series
            of workshops, webinars, and speaking engagements designed to deepen
            your understanding of investment strategies, market trends, and
            financial well-being.
          </p>
          <p className="text-[20px]/7 font-normal tracking-tight">
            Our experts are committed to providing you with invaluable insights
            and actionable advice. Reserve your spot today by signing up
            directly through our website.
          </p>
        </div>

        {/* ///////////////////////////////// */}
        <div className="flex gap-3 justify-center items-start">
          <div className="py-6 flex flex-col gap-3 mt-2">
            <h3 className="text-[26px]/10 tracking-tight font-semibold">
              “Wealthpath Conference 2024”
            </h3>
            <p className="text-[20px]/7 font-normal tracking-tight">
              The WealthPath Conference is dedicated to advancing knowledge and
              understanding of Shariah-compliant investments among financial
              professionals, investors, and enthusiasts.
            </p>
            <p className="text-[20px]/7 font-normal tracking-tight">
              Date: May 18, 2024
              <br /> Venue: Wyndham Houston near NRG Park
            </p>
          </div>
          <img
            src="/home-img-05.png"
            // height="100px"
            // width="445px"
            alt="wealth path conference image"
            className="h-[130px] mt-12"
          />
        </div>
        <div className="flex gap-10 mt-4">
          <button className="bg-secondary text-xl font-semibold text-slate-50 py-[8px] px-[60px] rounded-[5px] hover:bg-secondary-hover">
            Website
          </button>
          <button className="bg-secondary text-xl font-semibold text-slate-50 py-[8px] px-[60px] rounded-[5px] hover:bg-secondary-hover">
            Buy Tickets
          </button>
        </div>
        {/* /////////////////////////// */}

        <div className="flex items-center justify-between gap-[170px] mt-4">
          <p className="text-[20px]/6 font-normal tracking-tight flex flex-col gap-5">
            <span>
              The 33% Fund is a unique investment fund designed for those
              seeking to align their financial goals with Sharia-compliant
              principles. Our expertise lies in self-directed IRAs and ethical
              investments that prioritize transparency and balance.
            </span>
            <span>
              The fund’s name, 33% Fund, reflects its strategic diversification
              across three key sectors:
            </span>
            <span>
              1. High-Growth Innovation: 33% of the portfolio focuses on
              cutting-edge, high-tech investments, with a strong emphasis on
              AI-driven opportunities.
            </span>
            2. Dividend-Powered Stability: Another 33% is dedicated to
            established, dividend-oriented companies—household names you know
            and trust.
            <span>
              3. Real Estate Ventures: The final 33% targets promising real
              estate projects, offering tangible assets and long-term growth.
            </span>
            <span>
              At 33% Fund, we blend innovation, stability, and tangible assets
              to provide a well-rounded, Sharia-compliant investment strategy
              tailored to your needs.
            </span>
          </p>
          <img src="/home-img-06.png" className="w-[525px]" />
        </div>
      </div>
      {/* /////////////////////////// */}
      <GetStarted />
    </>
  );
}

export default Content;
