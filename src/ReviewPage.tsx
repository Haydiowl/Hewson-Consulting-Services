import { NavBar, Hero, NavLinks, Footer } from "./HewsonPage";
import businessSegmentImg from "./imports/Business_segment.png";

// ---------------------------------------------------------------------------
// Section 1 — Intro
// ---------------------------------------------------------------------------

function IntroSection() {
  return (
    <div className="bg-white w-full px-3 md:px-[40px] py-5 md:py-8">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[15px] lg:text-[18px] leading-[1.7] text-justify">
        Our periodic market reports help highlight critical factors connected with commercial real estate &amp; allied
        enterprise. Hewson Consulting expert reviewers provide analytics that capture prevailing trends in different
        segments of the market, and isolate indicators that industry operators require. They convey parameters considered
        paramount for investment course and boundless growth.{" "}
        <a href="#/blog" className="text-[#ff383c] underline font-['Inter:Semi_Bold',sans-serif] font-semibold">
          See More
        </a>
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section 2 — Industry Scope circle diagram
// ---------------------------------------------------------------------------

function IndustryScopeSection() {
  return (
    <div className="bg-white w-full px-3 md:px-[40px] py-6 md:py-10">
      <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[#232323] text-[20px] md:text-[28px] lg:text-[34px] text-center leading-tight mb-6 md:mb-8">
        INDUSTRY SCOPE
      </h2>
      <img
        src={businessSegmentImg}
        alt="Business Segments — 10 Domain of Hewson Consulting Focus"
        className="w-[55%] sm:w-[45%] md:w-[38%] max-w-[380px] mx-auto h-auto object-contain"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section 3 — Scope Definition
// ---------------------------------------------------------------------------

const SCOPE_SEGMENTS = [
  {
    number: 1,
    title: "Development/ Investment Segment",
    items: ["Estate development companies", "Estate investment companies"],
  },
  {
    number: 2,
    title: "Mortgage/ Finance Segment",
    items: ["Mortgage banking institutions", "Development finance companies"],
  },
  {
    number: 3,
    title: "Project/ Construction Segment",
    items: ["Project management companies", "Building construction companies"],
  },
  {
    number: 4,
    title: "Brokerage/ Agency Segment",
    items: ["Property brokerage companies", "Property management companies"],
  },
  {
    number: 5,
    title: "Facility/ Infrastructure Segment",
    items: ["Facility management companies", "Infrastructure Asset corporations"],
  },
  {
    number: 6,
    title: "Planning/ Environmental Segment",
    items: ["Physical design/planning commission", "Environmental resource commissions"],
  },
  {
    number: 7,
    title: "Housing/ Settlement Segment",
    items: ["Housing development authorities", "Settlement planning parastatals"],
  },
  {
    number: 8,
    title: "Housing/ Settlement Segment",
    items: ["Field recreation companies", "Hospitality sector companies"],
  },
  {
    number: 9,
    title: "Land use/ Informatics Segment",
    items: ["Land administration agencies", "CRE technology companies"],
  },
  {
    number: 10,
    title: "Consultancy/ Advisory Segment",
    items: ["Consultancy service agencies", "Professional practice concerns"],
  },
];

function ScopeItem({ number, title, items }: { number: number; title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-[2px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[12px] md:text-[14px] lg:text-[15px] leading-snug">
        {number}. {title}
      </p>
      <ul className="pl-3 flex flex-col gap-0">
        {items.map((item) => (
          <li key={item} className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[11px] md:text-[12px] lg:text-[14px] leading-[1.6] list-disc list-inside">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScopeDefinitionSection() {
  const left = SCOPE_SEGMENTS.slice(0, 5);
  const right = SCOPE_SEGMENTS.slice(5);
  return (
    <div className="bg-[#f8f9fa] w-full px-3 md:px-[40px] py-6 md:py-10">
      <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[18px] md:text-[24px] lg:text-[30px] text-center leading-tight mb-10 md:mb-14">
        Scope Definition
      </h2>
      <div className="flex justify-center">
        <div className="flex flex-row gap-6 md:gap-10 items-start">
          <div className="flex flex-col gap-3 md:gap-4">
            {SCOPE_SEGMENTS.slice(0, 5).map((seg) => (
              <ScopeItem key={seg.number} {...seg} />
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            {SCOPE_SEGMENTS.slice(5).map((seg) => (
              <ScopeItem key={seg.number} {...seg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section 4 — Brand Recognitions & Awards
// ---------------------------------------------------------------------------

const AWARDS = [
  {
    title: '"Most Innovative Process Management & Staffing Consultancy 2023 – Nigeria"',
    description:
      "Awarded by AI Global Media Group with Corporate Vision Magazine, an International UK-based award body.",
  },
  {
    title: '"Most Innovative Process Management & Real-Estate Staffing Consultancy 2024 – Nigeria"',
    description:
      "Awarded by AI Global Media Group with Corporate Vision Magazine, an International UK-based award body.",
  },
];

function BrandRecognitionsSection() {
  return (
    <div className="bg-white w-full px-3 md:px-[40px] py-6 md:py-10 flex flex-col items-center gap-6 md:gap-8">
      <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[18px] md:text-[24px] lg:text-[30px] text-center leading-tight">
        Brand Recognitions &amp; Awards
      </h2>
      <div className="w-full flex flex-col gap-5 md:gap-6">
        {AWARDS.map(({ title, description }) => (
          <div key={title} className="flex flex-col gap-1">
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[#232323] text-[12px] md:text-[14px] lg:text-[16px] leading-snug italic text-center">
              {title}
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[11px] md:text-[13px] lg:text-[15px] leading-[1.65] text-center">
              &bull; {description}
            </p>
          </div>
        ))}
      </div>
      <a
        href="#/blog"
        className="bg-[#ff383c] text-white font-['Inter:Medium',sans-serif] font-medium text-[14px] md:text-[16px] px-[64px] py-4 rounded-[8px] no-underline hover:opacity-90 transition-opacity inline-block"
      >
        Visit Blog for More
      </a>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page root
// ---------------------------------------------------------------------------

export default function ReviewPage() {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <NavBar />
      <section className="w-full"><Hero /></section>
      <NavLinks activePage="review" />
      <IntroSection />
      <IndustryScopeSection />
      <ScopeDefinitionSection />
      <BrandRecognitionsSection />
      <Footer />
    </div>
  );
}
