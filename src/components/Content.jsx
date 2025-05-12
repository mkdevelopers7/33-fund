import styled from "styled-components";
import GetStarted from "./GetStarted";
const Para = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  letter-spacing: -0.025em;
`;
const HeadingSecondary = styled.h2`
  font-size: 34px;
  line-height: 40px;
  font-weight: 600;
  letter-spacing: -0.025em;
`;
const HeadingTertiary = styled.h3`
  font-size: 26px;
  line-height: 40px;
  font-weight: 600;
  letter-spacing: -0.025em;
`;

function Content() {
  return (
    <>
      <div className=" px-2 md:px-[75px]">
        <div className="py-6 flex flex-col md:flex-row justify-around items-center gap-[190px]">
          <div className="flex flex-col gap-5">
            <HeadingSecondary>Unlock Your Financial Potential</HeadingSecondary>

            <Para>
              At 33% Fund, we're committed to delivering consistent, high annual
              returns through our specialized dividend-oriented investment
              strategies.
            </Para>
            <Para>
              Our unique multi-strategy approach not only ensures attractive
              returns but also maintains moderate volatility and low beta to the
              S&P 500. With our investment expertise, you can confidently pave
              your way towards financial prosperity.
            </Para>
            <Para>
              Empowering Investments Worth Over $2 Billion: Over the past 5
              years, we've facilitated investments totaling more than $2
              billion, creating substantial value for our clients.
            </Para>
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
            <HeadingSecondary className=" max-w-[450px]">
              Discover Your Personalized Path to Financial Success
            </HeadingSecondary>
            <Para>
              Delve into our diverse array of investment strategies,
              thoughtfully crafted to align seamlessly with your unique
              financial goals. From dividend-oriented strategies that generate
              income to approaches focused on special situations, our range of
              strategies aims to maximize your returns while effectively
              managing risk.
            </Para>
          </div>
        </div>
        {/* ////////////////////////////////// */}
        <div className="py-6 flex flex-col md:flex-row justify-around items-center gap-[270px]">
          <div className=" flex flex-col gap-5">
            <HeadingSecondary className="max-w-[400px]">
              Stay Ahead of <br />
              Market Trends
            </HeadingSecondary>
            <Para>
              Stay updated with the latest news, market insights, and trends
              that directly impact our investment strategies. Our team of
              experts diligently analyzes the market landscape to empower you
              with the knowledge you need to make informed investment decisions.
            </Para>
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
            <HeadingSecondary>Our Investment Philosophy</HeadingSecondary>
            <Para>
              We believe that investment success lies in the balance between
              risk and reward. Our unique multi-strategy approach is backed by
              rigorous academic research and years of real-world experience,
              bringing you the best of both traditional and innovative
              investment techniques
            </Para>
          </div>
        </div>
        {/* ///////////// More Content */}
        <div className="py-6 flex flex-col gap-5">
          <HeadingSecondary>Upcoming Events and Webinars</HeadingSecondary>
          <Para>
            Stay engaged with 33% Fund's thought leadership through our series
            of workshops, webinars, and speaking engagements designed to deepen
            your understanding of investment strategies, market trends, and
            financial well-being.
          </Para>
          <Para>
            Our experts are committed to providing you with invaluable insights
            and actionable advice. Reserve your spot today by signing up
            directly through our website.
          </Para>
        </div>

        {/* ///////////////////////////////// */}
        <div className="flex gap-3 justify-center items-start">
          <div className="py-6 flex flex-col gap-3 mt-2">
            <HeadingTertiary>“Wealthpath Conference 2024”</HeadingTertiary>
            <Para>
              The WealthPath Conference is dedicated to advancing knowledge and
              understanding of Shariah-compliant investments among financial
              professionals, investors, and enthusiasts.
            </Para>
            <Para>
              Date: May 18, 2024
              <br /> Venue: Wyndham Houston near NRG Park
            </Para>
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
