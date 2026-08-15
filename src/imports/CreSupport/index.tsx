import svgPaths from "./svg-6816tbmflf";
import imgWhatsAppImage20260810At14434411 from "./af30075b09f70cd0c682d220d8cd755ce9c5cc00.png";
import { imgGroup } from "./svg-ohgs8";

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
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#232323]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.218] underline">CRE Support</p>
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
    <div className="bg-[#f2f8ff] content-stretch flex h-[152px] items-center justify-center overflow-clip px-[40px] py-[16px] relative shrink-0 w-full" data-name="Section">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.7] min-w-px not-italic relative text-[#363b4b] text-[20px] text-justify">{`Our integrated CRE services and allied support offers organizations with exceptional core management & IT application services, alongside project development & planning. Ours empower senior executive teams, developers and companies to perform with seamless effort. `}</p>
    </div>
  );
}

function LhsImage() {
  return <div className="bg-[#6f7380] h-[144px] relative rounded-[10px] shrink-0 w-[260px]" data-name="LHS Image" />;
}

function RhsText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px not-italic relative" data-name="RHS Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <p className="leading-[1.218]">Strategy Formulation Support</p>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.7] min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">We formulate bold strategy that serves as working plan for achieving company’s end objective. Our strategies assist operators in situating their visions right, prioritizing goals, competing with insight, and optimizing income. Besides, our strategies give expression to business models, because models provide the platform for strategy design, competitive edge and market success</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <LhsImage />
      <RhsText />
    </div>
  );
}

function LhsImage1() {
  return <div className="bg-[#6f7380] h-[144px] relative rounded-[10px] shrink-0 w-[260px]" data-name="LHS Image" />;
}

function RhsText1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px not-italic relative" data-name="RHS Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <p className="leading-[1.218]">Market Penetration Support</p>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.7] min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">{`We provide sound marketing & sales enablement support, which transform and stimulate personnel, process & operations for improved base revenue. The marketing unit of every business is paramount since profitability rest on their effectiveness. Our enhancement training activities support systematic enactive marketing, which improve sales outcome. We facilitate market penetration for profit maximization in a challenging market.`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <LhsImage1 />
      <RhsText1 />
    </div>
  );
}

function LhsImage2() {
  return <div className="bg-[#6f7380] h-[144px] relative rounded-[10px] shrink-0 w-[260px]" data-name="LHS Image" />;
}

function RhsText2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px not-italic relative" data-name="RHS Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <p className="leading-[1.218]">Computer Application Support</p>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.7] min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">ICT is no longer considered an isolated industry, but an integral part of every enterprise. It has become the driving force of real-estate and allied activities. As qualified IT players, we facilitate IT integration in the real-estate business landscape through firsthand field insight. Our industry expert approach enables us resolve IT challenges better, and develop IT strategy for organizations.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <LhsImage2 />
      <RhsText2 />
    </div>
  );
}

function LhsImage3() {
  return <div className="bg-[#6f7380] h-[144px] relative rounded-[10px] shrink-0 w-[260px]" data-name="LHS Image" />;
}

function RhsText3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px not-italic relative" data-name="RHS Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <p className="leading-[1.218]">{`Project Development Support `}</p>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.7] min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">{`Our technical team carries out enterprise-level project development & planning. We offer geospatial location appraisal for optimum site selection and highest & best use of land. We also conduct pre-investment studies involving project viability, de-risking and parameters for success. Ours encapsulate project development and finance advisory for executive teams, developers and financial lenders. `}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <LhsImage3 />
      <RhsText3 />
    </div>
  );
}

function LhsImage4() {
  return <div className="bg-[#6f7380] h-[144px] relative rounded-[10px] shrink-0 w-[260px]" data-name="LHS Image" />;
}

function RhsText4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px not-italic relative" data-name="RHS Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#191b23] text-[20px] whitespace-nowrap">
        <p className="leading-[1.218]">Resource Acquisition Support</p>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.7] min-w-full relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">We provide support in manpower and project finance, which organizations need to achieve their pursuit. We recruit best-fit staff and enhance human capital through training. Our relationship with financial institutions helps operators ease the burden of securing loans. Real-estate project developers find solutions to resource needs through our practical support.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <LhsImage4 />
      <RhsText4 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="Wrapper">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip px-[40px] py-[28px] relative shrink-0 w-full" data-name="Section 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#232323] text-[36px] text-center w-full">
        <p className="leading-[1.218]">Our Flagship Business/ Technical Support Services:</p>
      </div>
      <Wrapper />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Section />
      <Section1 />
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

function Wrapper1() {
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

function Group2() {
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
      <Group2 />
    </div>
  );
}

function Button4() {
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.84] mr-[-25px] not-italic relative shrink-0 text-[20px] text-white w-[707px]">{`BLOG (Articles, News & Events)`}</p>
      <ButtonsContainer />
    </div>
  );
}

function Wrapper2() {
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
      <Wrapper1 />
      <div className="h-0 relative shrink-0 w-[1052px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1052 1" width="1052">
            <path d="M0 0.5H1052" id="Vector 2" stroke="#DB262A" />
          </svg>
        </div>
      </div>
      <Wrapper2 />
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

export default function CreSupport() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="CRE SUPPORT">
      <NavBar />
      <Hero />
      <NavLinks />
      <Frame />
      <Footer />
    </div>
  );
}