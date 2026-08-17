import { NavBar, Hero, NavLinks, Footer } from "./HewsonPage";

// ---------------------------------------------------------------------------
// Shared bullet list component
// ---------------------------------------------------------------------------

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[6px] pl-4">
      {items.map((item) => (
        <li key={item}
          className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[12px] md:text-[14px] lg:text-[16px] leading-[1.6] list-disc">
          {item}
        </li>
      ))}
    </ul>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[13px] md:text-[15px] lg:text-[17px] leading-snug mb-2">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[16px] md:text-[20px] lg:text-[24px] leading-tight mb-4 md:mb-6">
      {children}
    </h2>
  );
}

// ---------------------------------------------------------------------------
// Intro paragraph
// ---------------------------------------------------------------------------

function Intro() {
  return (
    <div className="bg-white w-full px-3 md:px-[40px] py-5 md:py-8">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[16px] lg:text-[19px] leading-[1.7] text-justify">
        We offer management wide support to organizations and strategic due diligence to private equity firms operating under our defined sector. Our services help operators solve business and technical issues stretching across general operations, core function and capital provision.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section 1 — Our Business Support Services (white bg, 3-column cards)
// ---------------------------------------------------------------------------

const BUSINESS_CARDS = [
  {
    title: "Market Research & Planning",
    items: [
      "Market research & industry trend analysis",
      "Project development & feasibility appraisal",
      "Business plan formulation & refinement",
    ],
  },
  {
    title: "Corporate Vision",
    items: [
      "Property marketing & sales effectiveness",
      "Strategy formulation & market entry approach",
      "Corporate image promotion & branding",
    ],
  },
  {
    title: "Process Management & Staffing",
    items: [
      "Process management & workflow design",
      "Capacity development & manpower training",
      "Executive search & technical recruitment",
    ],
  },
];

function BusinessSupportSection() {
  return (
    <div className="bg-white w-full px-3 md:px-[40px] py-5 md:py-8 ">
      <SectionHeading>1. Our Business Support Services</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {BUSINESS_CARDS.map(({ title, items }) => (
          <div key={title}
            className="bg-[#f8f9fa] border border-[#e8eaed] rounded-[10px] px-4 md:px-5 py-4 md:py-5 flex flex-col gap-2">
            <CardTitle>{title}</CardTitle>
            <BulletList items={items} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section 2 — Our Technical Support Services (white bg, 2-column cards)
// ---------------------------------------------------------------------------

const TECHNICAL_CARDS = [
  {
    title: "CRE Systems & IT Integration",
    items: [
      "Real-estate process & digitalization support",
      "Software development & website construction",
      "System transformation & enterprise scaling",
    ],
  },
  {
    title: "Asset Valuations & Advisory",
    items: [
      "Real-estate portfolio & investment auditing",
      "Business Concern & tangible asset valuations",
      "Spatial location, highest & best use analysis",
    ],
  },
];

function TechnicalSupportSection() {
  return (
    <div className="bg-white w-full px-3 md:px-[40px] py-5 md:py-8 ">
      <SectionHeading>2. Our Technical Support Services</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {TECHNICAL_CARDS.map(({ title, items }) => (
          <div key={title}
            className="bg-[#f8f9fa] border border-[#e8eaed] rounded-[10px] px-4 md:px-5 py-4 md:py-5 flex flex-col gap-2">
            <CardTitle>{title}</CardTitle>
            <BulletList items={items} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section 3 — Our Service Outline (white bg, bold-title bullets)
// ---------------------------------------------------------------------------

const OUTLINE_ITEMS = [
  {
    title: "Issue Resolution",
    body: "Identifying management issues that stall growth and implementing fitted solutions, staffing & training that aligns with goals.",
  },
  {
    title: "Strategy Formulation",
    body: "Working with C-suite executives to build strategy for seamless market penetration and impactful sales outcome that boost profile.",
  },
  {
    title: "IT Optimization",
    body: "Streamlining workflow and deploying smart solutions to ensure that technology enables asset management and effective reporting.",
  },
  {
    title: "Project De-Risking",
    body: "Utilizing complex analytics and appraisal methods to detect risk contingencies early in the project lifecycle and protect capital.",
  },
  {
    title: "Finance Brokerage",
    body: "Assisting clients to package bankable documents including project viability reports required by institutions for granting loan.",
  },
  {
    title: "Skill Development",
    body: "Conducting training sessions that eliminate skill deficiency geared towards higher productivity across technical and strategic areas.",
  },
  {
    title: "Sales Enhancement",
    body: "Preparing pre-sales pitch, marketing mix and brand framework for companies beside carrying out effective sales training.",
  },
  {
    title: "Growth Structuring",
    body: "Creating the structures for businesses to expand, and leverage on existing properties as resources for acquisition of further assets.",
  },
];

function ServiceOutlineSection() {
  return (
    <div className="bg-white w-full px-3 md:px-[40px] py-5 md:py-8 ">
      <SectionHeading>3. Service Breakdown</SectionHeading>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[15px] lg:text-[17px] leading-[1.6] mb-4">
        Our services help organizations to overcome critical pain points:
      </p>
      <ul className="flex flex-col gap-3 md:gap-4 pl-4">
        {OUTLINE_ITEMS.map(({ title, body }) => (
          <li key={title} className="list-disc font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[15px] lg:text-[17px] leading-[1.65]">
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323]">{title}:</span>{" "}
            {body}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section 4 — Our Enterprise CRE Support Services (#fee bg)
// ---------------------------------------------------------------------------

function CRESupportSection() {
  return (
    <div className="bg-white w-full px-3 md:px-[40px] py-5 md:py-8">
      <SectionHeading>4. Our Enterprise CRE Support</SectionHeading>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[16px] lg:text-[19px] leading-[1.7] text-justify">
        We practice at the intersection of real-estate pursuit, technology and management practice and, therefore, well positioned as experts in enterprise level, real-estate business consulting. We offer special packages to clients as business advisors, IT integrators & project appraisers, who delight in empowering teams, optimizing business performance, driving decision making, enhancing project development and bridging skill deficiency. Explore More, Click: CRE Support
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page root
// ---------------------------------------------------------------------------

export default function ServicesPage() {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <NavBar />
      <section className="w-full"><Hero /></section>
      <NavLinks activePage="services" />
      <Intro />
      <BusinessSupportSection />
      <TechnicalSupportSection />
      <ServiceOutlineSection />
      <CRESupportSection />
      <Footer />
    </div>
  );
}
