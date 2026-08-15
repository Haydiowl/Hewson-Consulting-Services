import svgPaths from "./svg-lprgncnygh";
import imgWhatsAppImage20260810At14434411 from "./af30075b09f70cd0c682d220d8cd755ce9c5cc00.png";
import { imgGroup } from "./svg-7fwrq";

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

function Frame5() {
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
      <Frame5 />
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
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end relative shrink-0 text-[#232323]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.218] underline">About</p>
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
    <div className="bg-[#f2f8ff] content-stretch flex h-[152px] items-center justify-center overflow-clip px-[40px] py-[16px] relative shrink-0 w-full" data-name="Section">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.7] min-w-px not-italic relative text-[#363b4b] text-[20px] text-justify whitespace-pre-wrap">{`We are a problem-solving enterprise with industry niche, consisting of thorough bred management, IT, real-estate and allied experts. We delight in supporting teams, optimizing business performance, driving decision making, enhancing project development and bridging skill deficiency.  Our practice is located in Nigeria and registered in 2018.`}</p>
    </div>
  );
}

function Section1() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[10px] items-center justify-center not-italic overflow-clip px-[40px] py-[24px] relative shrink-0 text-[#363b4b] text-[20px] text-justify w-full" data-name="Section 2">
      <div className="h-[166px] leading-[0] relative shrink-0 w-full whitespace-pre-wrap">
        <p className="leading-[1.7] mb-0">{`Hewson Consulting Services specializes in bridging the gap between core management, IT system, and real-estate business operations in order to improve estate projects, asset performance and financial ROI metrics for CRE/allied sector companies. In the complex landscape of high-stake real estate, success isn’t just about acquiring CRE assets but optimizing their returns. It’s more about the structural stability of the business that operate them, and their capacity to optimize net earnings and leverage on existing assets as resources for acquisition of further assets. Outcomes that require expert strategic guide. `}</p>
        <p className="leading-[1.7]">​</p>
      </div>
      <p className="leading-[1.7] relative shrink-0 w-full">Our business service division offer support to companies that aspire to improve their performance and profitability in the most effective way. Accordingly, we institute for companies the organizational processes, technology and practices that optimize their operations. Our expertise avails organizations with proven and flexible methods of analyzing, qualifying and delivering on products and services.</p>
    </div>
  );
}

function Lhs() {
  return <div className="bg-[#6f7380] flex-[1_0_0] h-[317px] min-w-px relative rounded-[10px]" data-name="LHS" />;
}

function Rhs() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip py-[24px] relative rounded-[10px]" data-name="RHS">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-[205px] leading-[1.65] min-w-px not-italic relative text-[#363b4b] text-[20px]">Our technical support division handle enterprise-level development project, stretching from conception through assemblage, financing and execution to management. Our effectiveness enables developers and investors achieve optimization across commercial real estate’s entire project and asset life cycle. Projects that stretch across different asset categories, namely residential, commercial and others.</p>
    </div>
  );
}

function Sectiom() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip px-[40px] py-[32px] relative shrink-0 w-full" data-name="Sectiom">
      <Lhs />
      <Rhs />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#f0f2f5] content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Section 3">
      <Sectiom />
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

function Frame() {
  return (
    <div className="bg-[#ff383c] content-stretch flex flex-col h-[32px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[5px] shrink-0 w-[36px]">
      <SolarStarBold />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function Type() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip px-[16px] py-[28px] relative rounded-[15px]" data-name="Type 1">
      <Frame1 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[24px] whitespace-nowrap">
        <p className="leading-[1.218]">Value Preposition</p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.7] min-w-full not-italic relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">{`Helping real-estate & allied organizations solve challenges, scale revenue and boost ROI metrics. `}</p>
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

function Frame3() {
  return (
    <div className="bg-[#ff383c] content-stretch flex flex-col h-[32px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[5px] shrink-0 w-[36px]">
      <SolarStarBold1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Type1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip px-[16px] py-[28px] relative rounded-[15px]" data-name="Type 2">
      <Frame2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[24px] whitespace-nowrap">
        <p className="leading-[1.218]">Corporate Vision</p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.7] min-w-full not-italic relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">To be globally reputed for excellence as industry niche consultant whose clientele obtain satisfaction.</p>
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

function Frame8() {
  return (
    <div className="bg-[#ff383c] content-stretch flex flex-col h-[32px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[5px] shrink-0 w-[36px]">
      <SolarStarBold2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Type2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip px-[16px] py-[28px] relative rounded-[15px]" data-name="Type 3">
      <Frame7 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#191b23] text-[24px] whitespace-nowrap">
        <p className="leading-[1.218]">Mission Statement</p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.7] min-w-full not-italic relative shrink-0 text-[#40434d] text-[16px] text-justify w-[min-content]">Using multidiscipline team approach and industry field insight that benefit stake holders and clients.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Type />
      <Type1 />
      <Type2 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[36px] items-start justify-center overflow-clip px-[40px] py-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Section 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#232323] text-[36px] text-center w-full">
        <p className="leading-[1.218]">Our Services Path</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame4() {
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

function Wrapper() {
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

function Wrapper1() {
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
      <Wrapper />
      <div className="h-0 relative shrink-0 w-[1052px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1052 1" width="1052">
            <path d="M0 0.5H1052" id="Vector 2" stroke="#DB262A" />
          </svg>
        </div>
      </div>
      <Wrapper1 />
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

export default function About() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="ABOUT">
      <NavBar />
      <Hero />
      <NavLinks />
      <Frame4 />
      <Footer />
    </div>
  );
}