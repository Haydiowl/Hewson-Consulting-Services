import svgPaths from "./svg-uada887ggt";
import imgWhatsAppImage20260810At14434411 from "./af30075b09f70cd0c682d220d8cd755ce9c5cc00.png";
import { imgGroup } from "./svg-5q8qz";

function Logo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Logo">
      <div className="h-[68px] relative rounded-[5px] shrink-0 w-[52px]" data-name="WhatsApp Image 2026-08-10 at 14.43.44 (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5px] size-full" src={imgWhatsAppImage20260810At14434411} />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-full justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[24px] w-[234px]">
        <p className="leading-[1.218] mb-0">Hewson</p>
        <p className="leading-[1.218]">Consulting Services</p>
      </div>
    </div>
  );
}

function Space() {
  return <div className="h-[24px] relative shrink-0 w-[176px]" data-name="Space" />;
}

function Space1() {
  return <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="Space" />;
}

function Button() {
  return (
    <div className="bg-[#ff383c] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[10px] py-[12px] relative rounded-[10px] shrink-0 w-[124px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[1.218]">Blog</p>
      </div>
    </div>
  );
}

function IconamoonSearch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconamoon:search">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="iconamoon:search">
          <path d={svgPaths.p10a22f00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CtaWrapper() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Cta wrapper">
      <Button />
      <IconamoonSearch />
    </div>
  );
}

function NavBar() {
  return (
    <div className="border-[#f0f2f5] border-b border-solid content-stretch flex gap-[40px] h-[105px] items-center px-[40px] relative shadow-[0px_1px_2.5px_0px_rgba(174,174,174,0.25)] shrink-0 w-full" data-name="Nav bar">
      <Logo />
      <Space />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#565966] text-[20px] whitespace-nowrap">
        <p>
          <span className="leading-[1.218]">{`My hotline `}</span>
          <span className="leading-[1.218] text-[#dfe2e8]">|</span>
          <span className="leading-[1.218]">{` Email box `}</span>
        </p>
      </div>
      <Space1 />
      <CtaWrapper />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[21px] items-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[40px] text-white top-[calc(50%-0.5px)] whitespace-nowrap">
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[1.218]">{`Operations. `}</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[1.218]">Strategy.</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[1.218]">Technology.</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[1.218]">Projects.</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[1.218]">Resources.</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#6f7380] h-[206px] overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame1 />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[203px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Hero">
      <Header />
    </div>
  );
}

function NavLinks() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[20px] items-center justify-center leading-[0] not-italic py-[20px] relative shrink-0 text-[20px] w-full whitespace-nowrap" data-name="Nav links">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end relative shrink-0 text-[#565966]">
        <p className="leading-[1.218]">Home</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end relative shrink-0 text-[#565966]">
        <p className="leading-[1.218]">About</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end relative shrink-0 text-[#565966]">
        <p className="leading-[1.218]">Services</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end relative shrink-0 text-[#565966]">
        <p className="leading-[1.218]">CRE Support</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#232323]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.218] underline">Review</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end relative shrink-0 text-[#565966]">
        <p className="leading-[1.218]">Team</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end relative shrink-0 text-[#565966]">
        <p className="leading-[1.218]">Contact</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex h-[152px] items-center justify-center overflow-clip px-[40px] py-[16px] relative shrink-0 w-full" data-name="Section">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[0] min-w-px not-italic relative text-[#363b4b] text-[0px] text-justify">
        <span className="leading-[1.7] text-[20px]">{`Our periodic market reports help highlight critical factors connected with commercial real estate & allied enterprise. Hewson Consulting expert reviewers provide analytics that capture prevailing trends in different segments of the market, and isolate indicators that industry operators require. They convey parameters considered paramount for investment course and boundless growth. `}</span>
        <span className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.7] text-[#ff383c] text-[20px] underline">See More</span>
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] col-1 content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[10.672px] items-center ml-[84.08px] mt-[142.54px] not-italic relative row-1 text-[#191b23] text-[22.577px] w-[257.008px]">
      <div className="flex flex-col justify-end relative shrink-0 text-center w-full">
        <p className="leading-[1.218]">10 DOMAIN OF</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-full">
        <p className="leading-[1.218]">{`HEWSON CONSULTING `}</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-center w-full">
        <p className="leading-[1.218]">FOCUS</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[397.765px] ml-0 mt-0 relative row-1 w-[424.776px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" height="397.765" preserveAspectRatio="none" viewBox="0 0 424.776 397.765" width="424.776">
          <g id="Subtract">
            <mask fill="white" id="path-1-inside-1_0_30">
              <path d={svgPaths.p7914b70} />
            </mask>
            <path d={svgPaths.p27802600} fill="#03055A" mask="url(#path-1-inside-1_0_30)" />
          </g>
        </svg>
      </div>
      <div className="col-1 ml-[39.26px] mt-[20.62px] relative row-1 size-[346.246px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="346.246" preserveAspectRatio="none" viewBox="0 0 346.246 346.246" width="346.246">
          <circle cx="173.123" cy="173.123" id="Ellipse 2" r="164.199" stroke="#FF383C" strokeWidth="17.8477" />
        </svg>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12.692px] h-[437.823px] items-center ml-[212.59px] mt-0 relative row-1 w-[424.776px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-end min-w-full not-italic relative shrink-0 text-[#191b23] text-[22.577px] text-center w-[min-content]">
        <p className="leading-[1.218]">BUSINESSS SEGMENTS</p>
      </div>
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[21.814px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.8139" preserveAspectRatio="none" viewBox="0 0 21.8139 21.8139" width="21.8139">
          <circle cx="10.907" cy="10.907" fill="#03055A" id="Ellipse 3" r="10.907" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-[7.93px] mt-[4.36px] not-italic relative row-1 text-[11.105px] text-white whitespace-nowrap">
        <p className="leading-[1.218]">6</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="h-0 mr-[-0.397px] relative shrink-0 w-[75.357px]">
        <div className="absolute inset-[-1.98px_0]">
          <svg className="block size-full" fill="none" height="3.96617" preserveAspectRatio="none" viewBox="0 0 75.3571 3.96617" width="75.3571">
            <path d="M0 1.98308H75.3571" id="Vector 7" stroke="#03055A" strokeWidth="3.96617" />
          </svg>
        </div>
      </div>
      <Group1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[13.088px] items-start relative shrink-0 w-full">
      <Frame8 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[12.533px] whitespace-nowrap">
        <p className="leading-[1.218] mb-0">Planning / Environmental</p>
        <p className="leading-[1.218]">Segment</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[21.814px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.8139" preserveAspectRatio="none" viewBox="0 0 21.8139 21.8139" width="21.8139">
          <circle cx="10.907" cy="10.907" fill="#03055A" id="Ellipse 3" r="10.907" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-[7.54px] mt-[4.36px] not-italic relative row-1 text-[11.105px] text-white whitespace-nowrap">
        <p className="leading-[1.218]">7</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative">
      <div className="h-0 mr-[-0.397px] relative shrink-0 w-[38.472px]">
        <div className="absolute inset-[-1.98px_0]">
          <svg className="block size-full" fill="none" height="3.96617" preserveAspectRatio="none" viewBox="0 0 38.4718 3.96617" width="38.4718">
            <path d="M0 1.98308H38.4718" id="Vector 7" stroke="#03055A" strokeWidth="3.96617" />
          </svg>
        </div>
      </div>
      <Group4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[13.088px] items-start relative shrink-0 w-full">
      <Frame9 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[12.533px] whitespace-nowrap">
        <p className="leading-[1.218] mb-0">Planning / Environmental</p>
        <p className="leading-[1.218]">Segment</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[21.814px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.8139" preserveAspectRatio="none" viewBox="0 0 21.8139 21.8139" width="21.8139">
          <circle cx="10.907" cy="10.907" fill="#03055A" id="Ellipse 3" r="10.907" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-[7.54px] mt-[4.36px] not-italic relative row-1 text-[11.105px] text-white whitespace-nowrap">
        <p className="leading-[1.218]">8</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative">
      <div className="h-0 mr-[-0.397px] relative shrink-0 w-[46.404px]">
        <div className="absolute inset-[-1.98px_0]">
          <svg className="block size-full" fill="none" height="3.96617" preserveAspectRatio="none" viewBox="0 0 46.4041 3.96617" width="46.4041">
            <path d="M0 1.98308H46.4041" id="Vector 7" stroke="#03055A" strokeWidth="3.96617" />
          </svg>
        </div>
      </div>
      <Group5 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[13.088px] items-start relative shrink-0 w-full">
      <Frame10 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[12.533px] whitespace-nowrap">
        <p className="leading-[1.218] mb-0">Housing / Settlement</p>
        <p className="leading-[1.218]">Segment</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[21.814px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.8139" preserveAspectRatio="none" viewBox="0 0 21.8139 21.8139" width="21.8139">
          <circle cx="10.907" cy="10.907" fill="#03055A" id="Ellipse 3" r="10.907" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-[7.54px] mt-[4.36px] not-italic relative row-1 text-[11.105px] text-white whitespace-nowrap">
        <p className="leading-[1.218]">9</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative">
      <div className="h-0 mr-[-0.397px] relative shrink-0 w-[56.716px]">
        <div className="absolute inset-[-1.98px_0]">
          <svg className="block size-full" fill="none" height="3.96617" preserveAspectRatio="none" viewBox="0 0 56.7162 3.96617" width="56.7162">
            <path d="M0 1.98308H56.7162" id="Vector 7" stroke="#03055A" strokeWidth="3.96617" />
          </svg>
        </div>
      </div>
      <Group6 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[13.088px] items-start relative shrink-0 w-full">
      <Frame11 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[12.533px] whitespace-nowrap">
        <p className="leading-[1.218] mb-0">Landuse / Informatics</p>
        <p className="leading-[1.218]">Segment</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[21.814px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.8139" preserveAspectRatio="none" viewBox="0 0 21.8139 21.8139" width="21.8139">
          <circle cx="10.907" cy="10.907" fill="#03055A" id="Ellipse 3" r="10.907" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-[4.36px] mt-[4.36px] not-italic relative row-1 text-[11.105px] text-white whitespace-nowrap">
        <p className="leading-[1.218]">10</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative">
      <div className="h-0 mr-[-0.397px] relative shrink-0 w-[81.703px]">
        <div className="absolute inset-[-1.98px_0]">
          <svg className="block size-full" fill="none" height="3.96617" preserveAspectRatio="none" viewBox="0 0 81.703 3.96617" width="81.703">
            <path d="M0 1.98308H81.703" id="Vector 7" stroke="#03055A" strokeWidth="3.96617" />
          </svg>
        </div>
      </div>
      <Group7 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[13.088px] items-start relative shrink-0 w-full">
      <Frame12 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[12.533px] whitespace-nowrap">
        <p className="leading-[1.218] mb-0">Consultancy / Advisory</p>
        <p className="leading-[1.218]">Segment</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[39.662px] h-[309.361px] items-end justify-center ml-[583.42px] mt-[61.08px] relative row-1 w-[260.577px]">
      <Frame14 />
      <Frame15 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mr-[-0.397px] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[21.814px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.8139" preserveAspectRatio="none" viewBox="0 0 21.8139 21.8139" width="21.8139">
          <circle cx="10.907" cy="10.907" fill="#03055A" id="Ellipse 3" r="10.907" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-[7.93px] mt-[4.36px] not-italic relative row-1 text-[11.105px] text-white whitespace-nowrap">
        <p className="leading-[1.218]">1</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Group8 />
      <div className="h-0 relative shrink-0 w-[75.357px]">
        <div className="absolute inset-[-1.98px_0]">
          <svg className="block size-full" fill="none" height="3.96617" preserveAspectRatio="none" viewBox="0 0 75.3571 3.96617" width="75.3571">
            <path d="M0 1.98308H75.3571" id="Vector 7" stroke="#03055A" strokeWidth="3.96617" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[13.088px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[12.533px] whitespace-nowrap">
        <p className="leading-[1.218] mb-0">Development/ Investment</p>
        <p className="leading-[1.218]">Segment</p>
      </div>
      <Frame22 />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mr-[-0.397px] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[21.814px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.8139" preserveAspectRatio="none" viewBox="0 0 21.8139 21.8139" width="21.8139">
          <circle cx="10.907" cy="10.907" fill="#03055A" id="Ellipse 3" r="10.907" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-[7.54px] mt-[4.36px] not-italic relative row-1 text-[11.105px] text-white whitespace-nowrap">
        <p className="leading-[1.218]">2</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Group9 />
      <div className="h-0 relative shrink-0 w-[76.15px]">
        <div className="absolute inset-[-1.98px_0]">
          <svg className="block size-full" fill="none" height="3.96617" preserveAspectRatio="none" viewBox="0 0 76.1504 3.96617" width="76.1504">
            <path d="M0 1.98308H76.1504" id="Vector 7" stroke="#03055A" strokeWidth="3.96617" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[13.088px] items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[12.533px] whitespace-nowrap">
        <p className="leading-[1.218] mb-0">Mortgage/ Finance</p>
        <p className="leading-[1.218]">Segment</p>
      </div>
      <Frame24 />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mr-[-0.397px] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[21.814px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.8139" preserveAspectRatio="none" viewBox="0 0 21.8139 21.8139" width="21.8139">
          <circle cx="10.907" cy="10.907" fill="#03055A" id="Ellipse 3" r="10.907" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-[7.14px] mt-[4.36px] not-italic relative row-1 text-[11.105px] text-white whitespace-nowrap">
        <p className="leading-[1.218]">3</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Group10 />
      <div className="h-0 relative shrink-0 w-[55.923px]">
        <div className="absolute inset-[-1.98px_0]">
          <svg className="block size-full" fill="none" height="3.96617" preserveAspectRatio="none" viewBox="0 0 55.9229 3.96617" width="55.9229">
            <path d="M0 1.98308H55.9229" id="Vector 7" stroke="#03055A" strokeWidth="3.96617" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[13.088px] items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[12.533px] whitespace-nowrap">
        <p className="leading-[1.218] mb-0">Project/ Construction</p>
        <p className="leading-[1.218]">Segment</p>
      </div>
      <Frame26 />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mr-[-0.397px] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[21.814px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.8139" preserveAspectRatio="none" viewBox="0 0 21.8139 21.8139" width="21.8139">
          <circle cx="10.907" cy="10.907" fill="#03055A" id="Ellipse 3" r="10.907" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-[7.14px] mt-[4.36px] not-italic relative row-1 text-[11.105px] text-white whitespace-nowrap">
        <p className="leading-[1.218]">4</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Group11 />
      <div className="h-0 relative shrink-0 w-[77.34px]">
        <div className="absolute inset-[-1.98px_0]">
          <svg className="block size-full" fill="none" height="3.96617" preserveAspectRatio="none" viewBox="0 0 77.3402 3.96617" width="77.3402">
            <path d="M0 1.98308H77.3402" id="Vector 7" stroke="#03055A" strokeWidth="3.96617" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[13.088px] items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[12.533px] whitespace-nowrap">
        <p className="leading-[1.218] mb-0">Brokerage/ Agency</p>
        <p className="leading-[1.218]">Segment</p>
      </div>
      <Frame28 />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mr-[-0.397px] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[21.814px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.8139" preserveAspectRatio="none" viewBox="0 0 21.8139 21.8139" width="21.8139">
          <circle cx="10.907" cy="10.907" fill="#03055A" id="Ellipse 3" r="10.907" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-[7.14px] mt-[4.36px] not-italic relative row-1 text-[11.105px] text-white whitespace-nowrap">
        <p className="leading-[1.218]">5</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Group12 />
      <div className="h-0 relative shrink-0 w-[94.395px]">
        <div className="absolute inset-[-1.98px_0]">
          <svg className="block size-full" fill="none" height="3.96617" preserveAspectRatio="none" viewBox="0 0 94.3947 3.96617" width="94.3947">
            <path d="M0 1.98308H94.3947" id="Vector 7" stroke="#03055A" strokeWidth="3.96617" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[13.088px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[12.533px] whitespace-nowrap">
        <p className="leading-[1.218] mb-0">Facility/ Infrastructure</p>
        <p className="leading-[1.218]">Segment</p>
      </div>
      <Frame30 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[39.662px] h-[309.361px] items-start ml-0 mt-[61.08px] relative row-1 w-[266.526px]">
      <Frame13 />
      <Frame23 />
      <Frame25 />
      <Frame27 />
      <Frame29 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame20 />
      <Frame16 />
      <Frame21 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center leading-[0] overflow-clip px-[40px] py-[28px] relative shrink-0 w-full" data-name="Section 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end min-w-full not-italic relative shrink-0 text-[#232323] text-[36px] text-center w-[min-content]">
        <p className="leading-[1.218]">INDUSTRY SCOPE</p>
      </div>
      <Group3 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[442px]" data-name="Wrapper">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <ol className="list-decimal" start="1">
          <li className="ms-[30px]">
            <span className="leading-[1.218]">Development/ Investment Segment</span>
          </li>
        </ol>
      </div>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium list-disc min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.7]">Estate development companies</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[1.7]">Estate investment companies</span>
        </li>
      </ul>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[442px]" data-name="Wrapper">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <ol className="list-decimal" start="6">
          <li className="ms-[30px]">
            <span className="leading-[1.218]">Planning/ Environmental Segment</span>
          </li>
        </ol>
      </div>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium list-disc min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.7]">Physical design/planning consortium</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[1.7]">Environmental resource commissions</span>
        </li>
      </ul>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Wrapper />
      <Wrapper1 />
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[442px]" data-name="Wrapper">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <ol className="list-decimal" start="2">
          <li className="ms-[30px]">
            <span className="leading-[1.218]">Mortgage/ Finance Segment</span>
          </li>
        </ol>
      </div>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium list-disc min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.7]">Mortgage banking institutions</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[1.7]">Development finance companies</span>
        </li>
      </ul>
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[442px]" data-name="Wrapper">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <ol className="list-decimal" start="7">
          <li className="ms-[30px]">
            <span className="leading-[1.218]">Housing/ Settlement Segment</span>
          </li>
        </ol>
      </div>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium list-disc min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.7]">Housing development authorities</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[1.7]">Settlement planning parastatals</span>
        </li>
      </ul>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Wrapper2 />
      <Wrapper3 />
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[442px]" data-name="Wrapper">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <ol className="list-decimal" start="3">
          <li className="ms-[30px]">
            <span className="leading-[1.218]">Project/ Construction Segment</span>
          </li>
        </ol>
      </div>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium list-disc min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.7]">Project management companies</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[1.7]">Building construction companies</span>
        </li>
      </ul>
    </div>
  );
}

function Wrapper5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[442px]" data-name="Wrapper">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <ol className="list-decimal" start="8">
          <li className="ms-[30px]">
            <span className="leading-[1.218]">Housing/ Settlement Segment</span>
          </li>
        </ol>
      </div>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium list-disc min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.7]">Field recreation companies</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[1.7]">Hospitality sector companies</span>
        </li>
      </ul>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Wrapper4 />
      <Wrapper5 />
    </div>
  );
}

function Wrapper6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[442px]" data-name="Wrapper">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <ol className="list-decimal" start="4">
          <li className="ms-[30px]">
            <span className="leading-[1.218]">Brokerage/ Agency Segment</span>
          </li>
        </ol>
      </div>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium list-disc min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.7]">Property brokerage companies</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[1.7]">Property management companies</span>
        </li>
      </ul>
    </div>
  );
}

function Wrapper7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[442px]" data-name="Wrapper">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <ol className="list-decimal" start="9">
          <li className="ms-[30px]">
            <span className="leading-[1.218]">Land use/ Informatics Segment</span>
          </li>
        </ol>
      </div>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium list-disc min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.7]">Land administration agencies</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[1.7]">CRE technology companies</span>
        </li>
      </ul>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Wrapper6 />
      <Wrapper7 />
    </div>
  );
}

function Wrapper8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[442px]" data-name="Wrapper">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <ol className="list-decimal" start="5">
          <li className="ms-[30px]">
            <span className="leading-[1.218]">Facility/ Infrastructure Segment</span>
          </li>
        </ol>
      </div>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium list-disc min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.7]">Facility management companies</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[1.7]">Infrastructure Asset corporations</span>
        </li>
      </ul>
    </div>
  );
}

function Wrapper9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[442px]" data-name="Wrapper">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <ol className="list-decimal" start="10">
          <li className="ms-[30px]">
            <span className="leading-[1.218]">Consultancy/ Advisory Segment</span>
          </li>
        </ol>
      </div>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium list-disc min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.7]">Consultancy service agencies</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[1.7]">Professional practice concerns</span>
        </li>
      </ul>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Wrapper8 />
      <Wrapper9 />
    </div>
  );
}

function Section2() {
  return (
    <div className="[word-break:break-word] bg-[#f2f8ff] content-stretch flex flex-col gap-[24px] items-center justify-center leading-[0] not-italic overflow-clip px-[40px] py-[32px] relative shrink-0 w-full" data-name="Section 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end min-w-full relative shrink-0 text-[#232323] text-[36px] text-center w-[min-content]">
        <p className="leading-[1.218]">Scope Definition</p>
      </div>
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function RhsText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="RHS Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <p className="leading-[1.218]">{`“Most Innovative Process Management & Staffing Consultancy 2023 – Nigeria”`}</p>
      </div>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#40434d] text-[16px] w-[min-content]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[1.7]">{` Awarded by AI Global Media Group with Corporate Vision Magazine, an international UK-based award body.`}</span>
        </li>
      </ul>
    </div>
  );
}

function RhsText1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center justify-center leading-[0] not-italic relative shrink-0 w-full" data-name="RHS Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <p className="leading-[1.218]">{`“Most Innovative Process Management & Real-Estate Staffing Consultancy 2024 – Nigeria”`}</p>
      </div>
      <ul className="block font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#40434d] text-[16px] text-center w-[min-content]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[1.7]">Awarded by AI Global Media Group with Corporate Vision Magazine, an international UK-based award body.</span>
        </li>
      </ul>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ff383c] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[10px] py-[12px] relative rounded-[10px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[1.218]">Visit Blog for More</p>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip px-[40px] py-[32px] relative shrink-0 w-full" data-name="Section 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[#232323] text-[36px] text-center w-[min-content]">
        <p className="leading-[1.218]">{`Brand Recognitions & Awards`}</p>
      </div>
      <RhsText />
      <div className="h-0 relative shrink-0 w-[379px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 379 1" width="379">
            <path d="M0 0.5H379" id="Vector 3" stroke="#F0F2F5" />
          </svg>
        </div>
      </div>
      <RhsText1 />
      <Button1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function NavLinks1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[20px] items-center justify-center leading-[0] not-italic py-[16px] relative shrink-0 text-[20px] text-white w-full whitespace-nowrap" data-name="Nav links">
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[1.218]">Home</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[1.218]">About</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[1.218]">Services</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[1.218]">CRE Support</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[1.218]">Review</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[1.218]">Team</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[1.218]">Contact</p>
      </div>
    </div>
  );
}

function Tel() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Tel">
      <p className="relative shrink-0">Tel: +234-8066894422</p>
      <p className="relative shrink-0">+234-8096465555</p>
    </div>
  );
}

function Mail() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Mail">
      <p className="relative shrink-0">info@hewson-consult.com</p>
      <p className="relative shrink-0">www.hewson-consult.com</p>
    </div>
  );
}

function Wrapper10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-center leading-[1.84] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap" data-name="Wrapper">
      <Tel />
      <Mail />
    </div>
  );
}

function UilLinkedin() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="uil:linkedin">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="uil:linkedin">
          <path d={svgPaths.p32c13b80} fill="#232323" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.625px] border-solid border-white inset-0 pointer-events-none rounded-[5px]" />
      <UilLinkedin />
    </div>
  );
}

function IcOutlineFacebook() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ic:outline-facebook">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="ic:outline-facebook">
          <path d={svgPaths.p2e2cfc00} fill="#232323" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.625px] border-solid border-white inset-0 pointer-events-none rounded-[5px]" />
      <IcOutlineFacebook />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[4.69%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.937px] mask-size-[20px_20px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.1257" preserveAspectRatio="none" viewBox="0 0 20 18.1257" width="20">
        <g id="Group">
          <path d={svgPaths.p824c100} fill="#232323" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group13 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function PrimeTwitter() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="prime:twitter">
      <Group />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.625px] border-solid border-white inset-0 pointer-events-none rounded-[5px]" />
      <PrimeTwitter />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[6.25%_7.74%_6.29%_7.81%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.4926" preserveAspectRatio="none" viewBox="0 0 16.8902 17.4926" width="16.8902">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3f20ec00} fill="#F44336" fillRule="evenodd" id="Vector" opacity="0.987" />
          <path clipRule="evenodd" d={svgPaths.p15800} fill="#FFC107" fillRule="evenodd" id="Vector_2" opacity="0.997" />
          <path clipRule="evenodd" d={svgPaths.p21d1cc20} fill="#448AFF" fillRule="evenodd" id="Vector_3" opacity="0.999" />
          <path clipRule="evenodd" d={svgPaths.pba6a970} fill="#43A047" fillRule="evenodd" id="Vector_4" opacity="0.993" />
        </g>
      </svg>
    </div>
  );
}

function MaterialIconThemeGoogle() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="material-icon-theme:google">
      <Group14 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white content-stretch flex items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.625px] border-solid border-white inset-0 pointer-events-none rounded-[5px]" />
      <MaterialIconThemeGoogle />
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex gap-[8.75px] items-start relative shrink-0" data-name="Buttons Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function BlogSocials() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[786px]" data-name="Blog & socials">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.84] mr-[-25px] not-italic relative shrink-0 text-[20px] text-white w-[707px]">{`BLOG (Articles, News & Events)`}</p>
      <ButtonsContainer />
    </div>
  );
}

function Wrapper11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Wrapper">
      <BlogSocials />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#c30307] content-stretch flex flex-col gap-[32px] items-center justify-center overflow-clip px-[40px] py-[16px] relative shrink-0 w-full" data-name="Footer">
      <NavLinks1 />
      <Wrapper10 />
      <div className="h-0 relative shrink-0 w-[1052px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1052 1" width="1052">
            <path d="M0 0.5H1052" id="Vector 2" stroke="#DB262A" />
          </svg>
        </div>
      </div>
      <Wrapper11 />
      <div className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium h-[73px] leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white w-[790px]">
        <p className="leading-[1.69] mb-0">{`Certified Management & IT Consultants I CRE-Biz Development & Project Advisors.`}</p>
        <p className="leading-[1.69] mb-0">{`Driving Technical Input, Revenue Boost & Business Growth.`}</p>
        <p className="leading-[1.69]">​</p>
      </div>
      <div className="h-0 relative shrink-0 w-[1052px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1052 1" width="1052">
            <path d="M0 0.5H1052" id="Vector 2" stroke="#DB262A" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium h-[33px] leading-[1.69] not-italic relative shrink-0 text-[20px] text-center text-white w-[790px]">{`Copyright ©️2026 Hewson Consulting Services. All Rights Reserved `}</p>
    </div>
  );
}

export default function Review() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="REVIEW">
      <NavBar />
      <Hero />
      <NavLinks />
      <Frame />
      <Footer />
    </div>
  );
}