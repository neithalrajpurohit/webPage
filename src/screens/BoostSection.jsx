import React from "react";
import SiteOverView from "../assets/siteoverview.png";
import Overlay from "../assets/overlay.png";
import Imagename from "../assets/imagename.png";
import Acme from "../assets/acme.png";
import Apex from "../assets/apex.png";
import Celestial from "../assets/celestial.png";
import Echo from "../assets/echo.png";
import Outside from "../assets/outside.png";
import Quantum from "../assets/quantum.png";
import Pulse from "../assets/pulse.png";
import Twice from "../assets/twice.png";
import Seo from "../assets/seo.png";
import Dashboard from "../assets/dashboard.png";
import Traffic from "../assets/traffic.png";
import Cone from "../assets/cone.png";
import Testimonial from "../assets/testimonial.png";
import Logo from "../assets/Logo.png";

const BoostSection = () => {
  const features = [
    {
      title: "User-friendly dashboard",
      description:
        "Perform complex SEO audits and optimizations with a single click.",
      icon: "📊",
    },
    {
      title: "Visual reports",
      description: "Visual insights into your site’s performance.",
      icon: "📈",
    },
    {
      title: "Smart Keyword Generator",
      description: "Automatic suggestions and the best keywords to target.",
      icon: "🔑",
    },
    {
      title: "Content evaluation",
      description: "Simple corrections for immediate improvements.",
      icon: "📝",
    },
    {
      title: "SEO goal setting",
      description:
        "Helps you set and achieve SEO goals with guided assistance.",
      icon: "🎯",
    },
    {
      title: "Automated alerts",
      description:
        "Automatic notifications about your SEO health, including quick fixes.",
      icon: "⚠️",
    },
    {
      title: "Link Optimization Wizard",
      description:
        "Guides you through the process of creating and managing links.",
      icon: "🔗",
    },
    {
      title: "Competitor reports",
      description:
        "Provides insights into competitors’ keyword strategies and ranking.",
      icon: "📑",
    },
  ];
  return (
    <div className="h-[100vh] bg-black pt-20 ">
      <div className="flex justify-center flex-col items-center">
        <div className="flex flex-row gap-10 text-center   text-[#9855FF] border border-1 border-[rgba(255,255,255,.2)] rounded-[20px] py-[8px] px-[10px] ">
          <p>New Latest integration just arrived</p>
        </div>
        <div className="my-[20px] bg-black text-center">
          <h1 className="text-6xl font-bold text-white">Boost your</h1>
          <h1 className="text-6xl font-bold bg-gradient-to-b from-white via-pink-[#F1E4F6] to-[#B372CF] bg-clip-text text-transparent">
            rankings with AI.
          </h1>
          <p className="text-white my-[15px]">
            Elevate your site’s visibility effortlessly with AI, where
            <p>smart technology meets user-friendly SEO tools.</p>
          </p>
        </div>
      </div>
      <div className="text-center mx-auto py-2 relative z-20 max-w-[170px] border border-1 border-[rgba(255,255,255,.2)] rounded-[20px]">
        <button className="relative px-6 py-3 inline-block bg-white text-black text-md max-w-[250px] font-semibold rounded-[10px] border border-black transform transition-transform hover:scale-105 focus:outline-none mx-auto">
          <span className="absolute inset-0  rounded-[10px] blur-lg opacity-80"></span>
          <span className="relative">Start for free</span>
        </button>
      </div>
      <div className="bg-black relative z-10 mt-[-50px] ">
        <img src={Imagename} alt="img" />
      </div>
      <div className="bg-black text-white py-20 text-center">
        <p>Trusted by the world’s most innovative teams</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-8">
          <div className="bg-white/10 border border-white/20 rounded-lg flex items-center justify-center py-6">
            <img src={Acme} alt="acme" className="h-[40px]" />
          </div>
          <div className="bg-white/10 border border-white/20 rounded-lg flex items-center justify-center py-6">
            <img src={Echo} alt="echo" className="h-[40px]" />
          </div>
          <div className="bg-white/10 border border-white/20 rounded-lg flex items-center justify-center py-6">
            <img src={Quantum} alt="quantum" className="h-[40px]" />
          </div>
          <div className="bg-white/10 border border-white/20 rounded-lg flex items-center justify-center py-6">
            <img src={Pulse} alt="pulse" className="h-[40px]" />
          </div>
          <div className="bg-white/10 border border-white/20 rounded-lg flex items-center justify-center py-6">
            <img src={Outside} alt="oustide" className="h-[40px]" />
          </div>
          <div className="bg-white/10 border border-white/20 rounded-lg flex items-center justify-center py-6">
            <img src={Apex} alt="apex" className="h-[40px]" />
          </div>
          <div className="bg-white/10 border border-white/20 rounded-lg flex items-center justify-center py-6">
            <img src={Celestial} alt="celestial" className="h-[40px]" />
          </div>
          <div className="bg-white/10 border border-white/20 rounded-lg flex items-center justify-center py-6">
            <img src={Twice} alt="twice" className="h-[40px]" />
          </div>
        </div>
      </div>
      <div className="bg-black text-center text-2xl text-white py-[10px]">
        <h2>Harness the power of AI, making</h2>
        <h2>search engine optimization intuitive</h2>
        <h2>and effective for all skill levels.</h2>
      </div>
      <div className="flex flex-row bg-black justify-center gap-[10px] py-[10px]">
        <div className="relative border border-1  border-[rgba(255,255,255,.2)] rounded-lg px-[40px] ">
          <img alt="seo" src={Seo} className="h-[200px] w-[240px] " />
          <div className=" pl-10 bottom-12 z-20 text-white pt-10  ">
            <p className="text-md text-[12px]">SEO goal setting</p>
            <p className="text-xs opacity-[.6] py-1">
              Helps you set and achieve SEO
            </p>
            <p className="text-xs opacity-[.6]">
              goals with guided assistance.
            </p>
          </div>
        </div>
        <div className="relative ">
          <img
            src={Dashboard}
            alt="dashboard"
            className="h-[340px] w-[800px] pr-10"
          />
          <div className="absolute pl-10 bottom-12 z-20 text-white  ">
            <p className="text-md text-[12px]">User-friendly dashboard</p>
            <p className="text-xs opacity-[.6] py-1">
              Perform complex SEO audits and
            </p>
            <p className="text-xs opacity-[.6]">
              optimizations with a single click.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-black justify-center gap-[10px] py-[10px]">
        <div className="relative">
          <img
            src={Traffic}
            alt="traffic"
            className="h-[340px] w-[800px] pr-10"
          />
        </div>
        <div className="relative border border-1  border-[rgba(255,255,255,.2)] rounded-lg px-[40px]">
          <img alt="cone" src={Cone} className="h-[200px] w-[240px] " />
          <div className="absolute pl-10 bottom-12 z-20 text-white  ">
            <p className="text-md text-[12px]">Smart Keyword Generator</p>
            <p className="text-xs opacity-[.6] py-1">
              Automatic suggestions and{" "}
            </p>
            <p className="text-xs opacity-[.6]">the best keywords to target.</p>
          </div>
        </div>
      </div>
      <div className="py-[100px] bg-black text-white text-5xl  pl-[160px]">
        <h1>Elevate your</h1>
        <h1>SEO efforts.</h1>
        <div className="py-[30px] px-[10px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2">
                User-friendly dashboard
              </h3>
              <p className="text-sm opacity-[.6]">Perform complex SEO audits</p>
              <p className="text-sm opacity-[.6]">
                and optimizations with a single click.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Visual reports</h3>
              <p className="text-sm opacity-[.6]">
                Visual insights into your site's
              </p>
              <p className="text-sm opacity-[.6]">performance.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">
                Smart Keyword Generator
              </h3>
              <p className="text-sm opacity-[.6]">
                Automatic suggestions and the best
              </p>
              <p className="text-sm opacity-[.6]">keywords to target.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Content evaluation</h3>
              <p className="text-sm opacity-[.6]">
                Simple corrections for immediate
              </p>
              <p className="text-sm opacity-[.6]">improvements.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">SEO goal setting</h3>
              <p className="text-sm opacity-[.6]">
                Helps you set and achieve SEO goals with
              </p>
              <p className="text-sm opacity-[.6]">guided assistance.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Automated alerts</h3>
              <p className="text-sm opacity-[.6]">
                Automatic notifications about your SEO
              </p>
              <p className="text-sm opacity-[.6]">
                health, including quick fixes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">
                Link Optimization Wizard
              </h3>
              <p className="text-sm opacity-[.6]">
                Guides you through the process
              </p>
              <p className="text-sm opacity-[.6]">
                of creating and managing links.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">One-click optimization</h3>
              <p className="text-sm opacity-[.6]">
                Perform complex SEO audits and
              </p>
              <p className="text-sm opacity-[.6]">
                optimizations with a single click.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Competitor reports</h3>
              <p className="text-sm opacity-[.6]">
                Provides insights into competitors'
              </p>
              <p className="text-sm opacity-[.6]">
                keyword strategies and ranking.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center py-[10px]">
        <h1 className="text-4xl py-8">Our clients</h1>
        <p>Hear firsthand how our solutions have</p>
        <p>boosted online success for users like you.</p>
        <div className="flex flex-row justify-center items-center relative">
          <img src={Testimonial} alt="testimonial" className="h-[320px]" />
          <div className="ml-[-407px] text-left">
            <h3 className="">
              ”This product has completely
              <br /> transformed how I manage my
              <br />
              projects and deadlines”
            </h3>
            <p className="opacity-[.7] text-sm pt-4">Talia Taylor</p>
            <p className="opacity-[.5] text-sm pt-1">
              Digital Marketing Director @ Quantum
            </p>
          </div>
        </div>
        <div className="py-[20px]">
          <h1 className="text-4xl py-[20px]">Pricing</h1>
          <p className="">Choose the right plan to meet your SEO</p>
          <p>needs and start optimizing today.</p>
        </div>
        <div className="py-[20px] flex flex-row justify-center  gap-[20px]">
          <div className="text-left border border-1  border-[rgba(255,255,255,.2)] px-8 py-20">
            <h1>Pricing</h1>
            <p className="opacity-[.5]">$29/mo</p>
            <div className="text-left">
              <p>Keyword optimization</p>
              <p>Automated meta tags</p>
              <p>SEO monitoring</p>
              <p>Monthly reports</p>
            </div>
            <button className="bg-purple-700 mt-[201px] hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
              Join waitlist
            </button>
          </div>
          <div className="text-left border border-1  border-[rgba(255,255,255,.2)] px-8 py-20">
            <h1>Pro</h1>
            <p className="opacity-[.5]">$79/mo</p>
            <div className="text-left">
              <p>Keyword optimization</p>
              <p>Automated meta tags</p>
              <p>SEO monitoring</p>
              <p>Monthly reports</p>
              <p>Content suggestions</p>
              <p>Link optimization</p>
            </div>
            <button className="bg-purple-700 mt-[251px] hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
              Join waitlist
            </button>
          </div>
          <div className="text-left border border-1  border-[rgba(255,255,255,.2)] px-8 py-20">
            <h1>Business</h1>
            <p className="opacity-[.5]">$149/mo</p>
            <div className="text-left">
              <p>Keyword optimization</p>
              <p>Automated meta tags</p>
              <p>SEO monitoring</p>
              <p>Monthly reports</p>
              <p>Content suggestions</p>
              <p>Link optimization</p>
              <p>Multi-user access</p>
              <p>Api integration</p>
            </div>
            <button className="bg-purple-700 mt-[201px] hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
              Join waitlist
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center py-[20px] border border-1 rounded-lg  border-[rgba(255,255,255,.2)] px-5 ">
        <h1 className="text-4xl">AI-driven SEO</h1>
        <h1 className="text-4xl">for everyone.</h1>
        <input
          placeholder="Your email"
          onChange={() => {}}
          className="border border-1 bg-transparent rounded-md  border-[rgba(255,255,255,.2)] px-10 py-2"
        />
        <button className="relative px-6 py-3 mt-9 inline-block bg-white text-black text-md max-w-[250px] font-semibold rounded-[10px] border border-black transform transition-transform hover:scale-105 focus:outline-none mx-auto">
          <span className="absolute inset-0  rounded-[10px] blur-lg opacity-80"></span>
          <span className="relative">Join waitlist</span>
        </button>
        <p className="opacity-[.4] py-10">
          No credit card required · 7-days free trial
        </p>
      </div>
      <div className="bg-black flex flex-row justify-between py-[75px] pb-[35px] gap-10 px-[80px]">
        <div className="flex flex-row gap-10">
          <img src={Logo} alt="logo" className="h-[30px] w-[30px]" />
          <h1 className="text-xl text-white">AI Startup Kit</h1>
        </div>
        <div className="flex flex-row justify-between  text-sm text-white gap-[15px]">
          <div className="flex flex-row justify-center space-x-8 gap-[20px] pr-[20px]">
            <div className="space-y-6">
              <p className="mb-4">Product</p>{" "}
              {/* Space between "Product" and the following list */}
              <div className="opacity-[.4] space-y-6">
                <p>Features</p>
                <p>Integration</p>
                <p>Updates</p>
                <p>FAQ</p>
                <p>Pricing</p>
              </div>
            </div>
            <div className="space-y-6">
              <p>Company</p>
              <div className="opacity-[.4] space-y-6">
                <p>About</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Manifesto</p>
                <p>Press</p>
                <p>Contract</p>
              </div>
            </div>
            <div className="space-y-6">
              <p>Resources</p>
              <div className="opacity-[.4] space-y-6">
                <p>Examples</p>
                <p>Docs</p>
                <p>Community</p>
                <p>Guides</p>
              </div>
            </div>
            <div className="space-y-6">
              <p>Privacy</p>
              <div className="opacity-[.4] space-y-6">
                <p>Legal</p>
                <p>Terms</p>
                <p>Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostSection;
