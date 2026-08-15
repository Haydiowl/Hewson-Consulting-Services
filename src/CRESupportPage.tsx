import { NavBar, Hero, NavLinks, Footer } from "./HewsonPage";

// ---------------------------------------------------------------------------
// Section 1 — Intro paragraph
// ---------------------------------------------------------------------------

function IntroSection() {
  return (
    <div className="bg-[#f8f9fa] w-full px-3 md:px-[40px] py-5 md:py-8">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[16px] lg:text-[19px] leading-[1.7] text-justify">
        Our integrated CRE services and allied support offers organizations with exceptional core management &amp; IT
        application services, alongside project development &amp; planning. Ours empower senior executive teams,
        developers and companies to perform with seamless effort.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section 2 — Flagship services (image + text rows)
// ---------------------------------------------------------------------------

const FLAGSHIP_SERVICES = [
  {
    title: "Strategy Formulation Support",
    body: "We formulate bold strategy that serves as working plan for achieving company's end objective. Our strategies assist operators in situating their visions right, prioritizing goals, competing with insight, and optimizing income. Besides, our strategies give expression to business models, because models provide the platform for strategy design, competitive edge and market success.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Strategy formulation",
  },
  {
    title: "Market Penetration Support",
    body: "We provide sound marketing & sales enablement support, which transform and stimulate personnel, process & operations for improved base revenue. The marketing unit of every business is paramount since profitability rest on their effectiveness. Our enhancement training activities support systematic enactive marketing, which improve sales outcome. We facilitate market penetration for profit maximization in a challenging market.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Market penetration",
  },
  {
    title: "Computer Application Support",
    body: "ICT is no longer considered an isolated industry, but an integral part of every enterprise. It has become the driving force of real-estate and allied activities. As qualified IT players, we facilitate IT integration in the real-estate business landscape through firsthand field insight. Our industry expert approach enables us resolve IT challenges better, and develop IT strategy for organizations.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Computer application support",
  },
  {
    title: "Project Development Support",
    body: "Our technical team carries out enterprise-level project development & planning. We offer geospatial location appraisal for optimum site selection and highest & best use of land. We also conduct pre-investment studies involving project viability, de-risking and parameters for success. Ours encapsulate project development and finance advisory for executive teams, developers and financial lenders.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Project development",
  },
  {
    title: "Resource Acquisition Support",
    body: "We provide support in manpower and project finance, which organizations need to achieve their pursuit. We recruit best-fit staff and enhance human capital through training. Our relationship with financial institutions helps operators ease the burden of securing loans. Real-estate project developers find solutions to resource needs through our practical support.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Resource acquisition",
  },
];

function FlagshipServicesSection() {
  return (
    <div className="bg-white w-full px-3 md:px-[40px] py-6 md:py-10">
      <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[20px] md:text-[28px] lg:text-[36px] text-center leading-tight">
        Our Flagship Business/ Technical Support Services:
      </h2>
      <div className="flex flex-col gap-5 md:gap-6 mt-8 md:mt-12">
        {FLAGSHIP_SERVICES.map(({ title, body, img, alt }) => (
          <div key={title} className="flex flex-row gap-4 md:gap-6 items-start">
            <div className="shrink-0 rounded-[6px] overflow-hidden w-[100px] h-[80px] md:w-[130px] md:h-[100px]">
              <img
                src={img}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[14px] md:text-[17px] lg:text-[20px] leading-snug mb-2">
                {title}
              </p>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[12px] md:text-[14px] lg:text-[16px] leading-[1.7] text-justify">
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page root
// ---------------------------------------------------------------------------

export default function CRESupportPage() {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <NavBar />
      <section className="w-full"><Hero /></section>
      <NavLinks activePage="cre-support" />
      <IntroSection />
      <FlagshipServicesSection />
      <Footer />
    </div>
  );
}
