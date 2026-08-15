import svgPaths from "./svg-dpy8psrgvm";
import imgProfessionalBodyImc1 from "./88c9ea8dfd19d8b3ecfc54ad6f876ae448c4c5e8.png";
import imgCmcLogo1 from "./304afeaee5bcc3ce4d476fd46525961499cad92b.png";
import imgLogoOfNiesv1 from "./848c67d0fcd6155f56813f2222b10f7a7caa87c9.png";
import imgNcsLogo41 from "./1dfd5ff2d057f79365f06b3f80457800e1fbced8.png";
import { imgGroup } from "./svg-fd62o";

function Frame() {
  return (
    <div className="bg-[#ff383c] content-stretch flex flex-col items-center justify-center overflow-clip p-[9.079px] relative rounded-[9.079px] shrink-0 size-[69px]">
      <p className="[word-break:break-word] font-['jsMath-cmbx10:cmbx10',sans-serif] h-[39px] leading-[normal] not-italic relative shrink-0 text-[44.571px] text-white w-[40.857px]">H</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Logo">
      <Frame />
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
    <div className="border-[#f0f2f5] border-b border-solid content-stretch flex gap-[40px] h-[105px] items-center px-[40px] relative shadow-[0px_1px_2.5px_0px_rgba(174,174,174,0.25)] shrink-0 w-full" data-name="Nav bar 1">
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

function Header() {
  return (
    <div className="bg-[#6f7380] h-[369px] overflow-clip relative rounded-[20px] shrink-0 w-[1360px]" data-name="Header">
      <div className="-translate-y-full [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] left-[calc(50%-214px)] not-italic text-[80px] text-white top-[calc(50%+48.5px)] whitespace-nowrap">
        <p className="leading-[1.218]">Operations</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Hero">
      <Header />
    </div>
  );
}

function NavLinks() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[20px] items-center justify-center leading-[0] not-italic py-[16px] relative shrink-0 text-[20px] w-full whitespace-nowrap" data-name="Nav links">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#232323]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.218] underline">Home</p>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end relative shrink-0 text-[#565966]">
        <p className="leading-[1.218]">Review</p>
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
    <div className="bg-[#f8f9fa] content-stretch flex h-[274px] items-center justify-center overflow-clip px-[64px] py-[16px] relative shrink-0 w-full" data-name="Section">
      <div className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium h-[165px] leading-[0] not-italic relative shrink-0 text-[#363b4b] text-[20px] text-center w-[1120px]">
        <p className="leading-[1.7] mb-0">{`We are an independent niche consultancy firm, operating as strategic growth architects and technical project facilitators, who possess core management, IT, appraisal and related skill capacity. Hewson Consulting has functional domain expertise, which enable us serve as business force multiplier for operators across industries, mostly commercial real estate (CRE) & allied enterprise. Our specialists assist executives to overcome critical challenges, and transform their business. Our engagement offers effective change, innovation & impact.`}</p>
        <p className="leading-[1.7]">​</p>
      </div>
    </div>
  );
}

function Lhs() {
  return <div className="bg-[#6f7380] flex-[1_0_0] h-full min-w-px relative rounded-[10px]" data-name="LHS" />;
}

function Rhs() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px overflow-clip px-[20px] py-[24px] relative rounded-[10px]" data-name="RHS">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[475px] leading-[0] min-w-px not-italic relative text-[#363b4b] text-[20px] whitespace-pre-wrap">
        <p className="leading-[1.65] mb-0">{`We leverage our knowhow to develop the solutions clients require to accomplish set objective. As consultants, we undertake: `}</p>
        <p className="leading-[1.65] mb-0">{`•⁠  ⁠issue resolution `}</p>
        <p className="leading-[1.65] mb-0">{`•⁠  ⁠strategy formulation `}</p>
        <p className="leading-[1.65] mb-0">{`•⁠  ⁠IT integration & optimization `}</p>
        <p className="leading-[1.65] mb-0">{`•⁠  ⁠project appraisal & de-risking `}</p>
        <p className="leading-[1.65] mb-0">{`•⁠  ⁠capital procurement`}</p>
        <p className="leading-[1.65] mb-0">{`•⁠  ⁠capacity development`}</p>
        <p className="leading-[1.65] mb-0">{`•⁠  ⁠sales enhancement `}</p>
        <p className="leading-[1.65] mb-0">{`•⁠  ⁠growth structuring`}</p>
        <p className="leading-[1.65] mb-0">​</p>
        <p className="leading-[1.65] mb-0">{`We systematize their business for improved work productivity, profit & proficiency.`}</p>
        <p className="leading-[1.65]">​</p>
      </div>
    </div>
  );
}

function Sectiom() {
  return (
    <div className="content-stretch flex gap-[20px] h-[555px] items-start overflow-clip px-[40px] py-[32px] relative shrink-0 w-full" data-name="Sectiom">
      <Lhs />
      <Rhs />
    </div>
  );
}

function Rhs1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px overflow-clip px-[20px] py-[24px] relative rounded-[10px]" data-name="RHS">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-[475px] justify-center leading-[0] min-w-px not-italic relative text-[#363b4b] text-[20px]">
        <p className="leading-[1.84] mb-0">{`At Hewson, we recognize that effectiveness in management process, technology and strategy formulation drive profitability. When properly fitted together, they provide the synergism that accentuate value increase that ultimately drive corporate growth. Real-estate & allied organizations also require niche consultants - such as ours - for problem solving, improvement and fresh perspective. Our experience offers strategic level initiatives, sound decision-aiding analytics and innovative smart solutions.`}</p>
        <p className="leading-[1.84]">​</p>
      </div>
    </div>
  );
}

function Lhs1() {
  return <div className="bg-[#6f7380] flex-[1_0_0] h-full min-w-px relative rounded-[10px]" data-name="LHS" />;
}

function Sectiom1() {
  return (
    <div className="content-stretch flex gap-[20px] h-[555px] items-start overflow-clip px-[40px] py-[32px] relative shrink-0 w-full" data-name="Sectiom">
      <Rhs1 />
      <Lhs1 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="bg-[#fee] content-stretch flex flex-col gap-[32px] h-[1218px] items-start justify-center relative shrink-0 w-full" data-name="Wrapper">
      <Sectiom />
      <Sectiom1 />
    </div>
  );
}

function SolarStarBold() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="solar:star-bold">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="solar:star-bold">
          <path d={svgPaths.p31b7a500} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#ff383c] content-stretch flex flex-col h-[32px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[5px] shrink-0 w-[36px]">
      <SolarStarBold />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[20px] h-[55px] items-start relative shrink-0" data-name="1">
      <Frame2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] not-italic relative shrink-0 text-[#363b4b] text-[20px] w-[518px]">
        <p className="leading-[1.65]">We solve organization’s business challenges and complex real-estate issues through insight.</p>
      </div>
    </div>
  );
}

function SolarStarBold1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="solar:star-bold">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="solar:star-bold">
          <path d={svgPaths.p31b7a500} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#ff383c] content-stretch flex flex-col h-[32px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[5px] shrink-0 w-[36px]">
      <SolarStarBold1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[20px] h-[60px] items-center justify-end relative shrink-0" data-name="2">
      <Frame3 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] not-italic relative shrink-0 text-[#363b4b] text-[20px] w-[518px]">
        <p className="leading-[1.65]">{`We deliver analytics that empower senior executives to make informed, critical decisions. `}</p>
      </div>
    </div>
  );
}

function SolarStarBold2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="solar:star-bold">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="solar:star-bold">
          <path d={svgPaths.p31b7a500} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#ff383c] content-stretch flex flex-col h-[32px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[5px] shrink-0 w-[36px]">
      <SolarStarBold2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[20px] h-[60px] items-start relative shrink-0" data-name="3">
      <Frame6 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] not-italic relative shrink-0 text-[#363b4b] text-[20px] w-[518px]">
        <p className="leading-[1.65]">We provide actionable field strategies and support that enable players surpass set targets.</p>
      </div>
    </div>
  );
}

function Lhs2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-end justify-center min-w-px relative" data-name="LHS">
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}

function SolarStarBold3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="solar:star-bold">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="solar:star-bold">
          <path d={svgPaths.p31b7a500} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#ff383c] content-stretch flex flex-col h-[32px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[5px] shrink-0 w-[36px]">
      <SolarStarBold3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame9 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[20px] h-[55px] items-start relative shrink-0" data-name="4">
      <Frame8 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] not-italic relative shrink-0 text-[#363b4b] text-[20px] w-[518px]">
        <p className="leading-[1.65]">{`We help synchronize process, operations and structure with strategy & IT system for growth.`}</p>
      </div>
    </div>
  );
}

function SolarStarBold4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="solar:star-bold">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="solar:star-bold">
          <path d={svgPaths.p31b7a500} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#ff383c] content-stretch flex flex-col h-[32px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[5px] shrink-0 w-[36px]">
      <SolarStarBold4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame11 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex gap-[20px] h-[60px] items-start relative shrink-0" data-name="5">
      <Frame10 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] not-italic relative shrink-0 text-[#363b4b] text-[20px] w-[518px]">
        <p className="leading-[1.65]">We strengthen business fundamentals and optimize your financial ROI beyond 2x metrics.</p>
      </div>
    </div>
  );
}

function SolarStarBold5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="solar:star-bold">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="solar:star-bold">
          <path d={svgPaths.p31b7a500} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#ff383c] content-stretch flex flex-col h-[32px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[5px] shrink-0 w-[36px]">
      <SolarStarBold5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex gap-[20px] h-[60px] items-start relative shrink-0" data-name="6">
      <Frame12 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] not-italic relative shrink-0 text-[#363b4b] text-[20px] w-[518px]">
        <p className="leading-[1.65]">We ensure that your operations, people and projects run smarter, faster and higher.</p>
      </div>
    </div>
  );
}

function Rhs2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="RHS">
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="wrapper">
      <Lhs2 />
      <Rhs2 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[36px] items-start justify-center overflow-clip px-[40px] py-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Section">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#232323] text-[36px] text-center w-full">
        <p className="leading-[1.218]">WHY CONSULT US?</p>
      </div>
      <Wrapper1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Section />
      <Wrapper />
      <Section1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0">
      <div className="h-[103px] relative shrink-0 w-[108px]" data-name="Professional-Body-IMC 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.19%] left-[-5.08%] max-w-none top-[-2.65%] w-[306.59%]" src={imgProfessionalBodyImc1} />
        </div>
      </div>
      <div className="h-[81px] relative shrink-0 w-[134px]" data-name="CMC-Logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCmcLogo1} />
      </div>
      <div className="h-[99px] relative shrink-0 w-[108px]" data-name="Logo_of_niesv 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoOfNiesv1} />
      </div>
      <div className="h-[65px] relative shrink-0 w-[156px]" data-name="NCS-Logo-4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNcsLogo41} />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] h-[245px] items-center justify-center overflow-clip px-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Section">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[#232323] text-[32px] text-center w-[min-content]">
        <p className="leading-[1.218]">INDUSTRY AFFILIATIONS</p>
      </div>
      <Frame15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Section2 />
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

function Wrapper2() {
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

function Button1() {
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

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.625px] border-solid border-white inset-0 pointer-events-none rounded-[5px]" />
      <IcOutlineFacebook />
    </div>
  );
}

function Group1() {
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
      <Group1 />
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

function Button3() {
  return (
    <div className="bg-white content-stretch flex items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.625px] border-solid border-white inset-0 pointer-events-none rounded-[5px]" />
      <PrimeTwitter />
    </div>
  );
}

function SelfhstGmail() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="selfhst:gmail">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="selfhst:gmail">
          <path d={svgPaths.p1a73cb80} fill="#4285F4" id="Vector" />
          <path d={svgPaths.p208fd600} fill="#34A853" id="Vector_2" />
          <path d={svgPaths.p63c96e0} fill="#FBBC04" id="Vector_3" />
          <path d={svgPaths.pdab8be0} fill="#EA4335" id="Vector_4" />
          <path d={svgPaths.p32f29740} fill="#C5221F" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.625px] border-solid border-white inset-0 pointer-events-none rounded-[5px]" />
      <SelfhstGmail />
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex gap-[8.75px] items-start relative shrink-0" data-name="Buttons Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function BlogSocials() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[786px]" data-name="Blog & socials">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.84] mr-[-25px] not-italic relative shrink-0 text-[20px] text-white w-[707px]">{`BLOG (Articles, News & Events`}</p>
      <ButtonsContainer />
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Wrapper">
      <BlogSocials />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#c30307] content-stretch flex flex-col gap-[32px] h-[572px] items-center justify-center overflow-clip px-[40px] py-[20px] relative shrink-0 w-full" data-name="Footer">
      <NavLinks1 />
      <Wrapper2 />
      <div className="h-0 relative shrink-0 w-[1052px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1052 1" width="1052">
            <path d="M0 0.5H1052" id="Vector 2" stroke="#DB262A" />
          </svg>
        </div>
      </div>
      <Wrapper3 />
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

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[36px] items-center relative size-full" data-name="Desktop - 1">
      <NavBar />
      <Hero />
      <NavLinks />
      <Frame5 />
      <Frame14 />
      <Footer />
    </div>
  );
}