import { NavBar, Hero, NavLinks, Footer } from "./HewsonPage";

// ---------------------------------------------------------------------------
// About intro — three paragraphs, full-width text
// ---------------------------------------------------------------------------

function AboutIntro() {
  return (
    <div className="bg-[#f8f9fa] w-full px-3 md:px-[40px] py-6 md:py-10 flex flex-col gap-4 md:gap-6">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[16px] lg:text-[19px] leading-[1.7] text-justify">
        We are a problem-solving enterprise with industry niche, consisting of thorough bred management,
        IT, real-estate and allied experts. We delight in supporting teams, optimizing business
        performance, driving decision making, enhancing project development and bridging skill
        deficiency. Our practice is located in Nigeria and registered in 2018.
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[16px] lg:text-[19px] leading-[1.7] text-justify">
        Hewson Consulting Services specializes in bridging the gap between core management, IT system,
        and real-estate business operations in order to improve estate projects, asset performance and
        financial ROI metrics for CRE/allied sector companies. In the complex landscape of high-stake
        real estate, success isn't just about acquiring CRE assets but optimizing their returns.
        It's more about the structural stability of the business that operate them, and their capacity
        to optimize net earnings and leverage on existing assets as resources for acquisition of further
        assets. Outcomes that require expert strategic guide.
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[16px] lg:text-[19px] leading-[1.7] text-justify">
        Our business service division offer support to companies that aspire to improve their
        performance and profitability in the most effective way. Accordingly, we institute for companies
        the organizational processes, technology and practices that optimize their operations. Our
        expertise avails organizations with proven and flexible methods of analyzing, qualifying and
        delivering on products and services.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Image + text section
// ---------------------------------------------------------------------------

function ImageTextSection() {
  return (
    <div className="bg-[#f8f9fa] w-full px-3 md:px-[40px] py-6 md:py-10">
      <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-8">
        {/* image */}
        <div className="rounded-[10px] overflow-hidden shrink-0 h-[220px] md:h-auto md:w-[42%] self-stretch">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
            alt="Commercial real estate and enterprise development"
            className="w-full h-full object-cover"
          />
        </div>
        {/* text */}
        <div className="flex flex-1 items-center">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[16px] lg:text-[19px] leading-[1.84] text-justify">
            Our technical support division handle enterprise-level development project, stretching from
            conception through assemblage, financing and execution to management. Our effectiveness
            enables developers and investors achieve optimization across commercial real estate's entire
            project and asset life cycle. Projects that stretch across different asset categories,
            namely residential, commercial and others.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Our Services Path — three columns
// ---------------------------------------------------------------------------

const SERVICE_CARDS = [
  {
    title: "Value Preposition",
    body: "Helping real-estate & allied organizations solve challenges, scale revenue and boost ROI metrics.",
  },
  {
    title: "Corporate Vision",
    body: "To be globally reputed for excellence as industry niche consultant whose clientele obtain satisfaction.",
  },
  {
    title: "Mission Statement",
    body: "Using multidiscipline team approach and industry field insight that benefit stake holders and clients.",
  },
];

function StarIcon() {
  return (
    <div className="bg-[#ff383c] flex items-center justify-center rounded-[5px] size-[32px] shrink-0">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path
          d="M7.6275 4.50667C8.68333 2.61333 9.21083 1.66667 10 1.66667C10.7892 1.66667 11.3167 2.61333 12.3725 4.50667L12.6458 4.99667C12.9458 5.535 13.0958 5.80417 13.3292 5.98167C13.5625 6.15917 13.8542 6.225 14.4375 6.35667L14.9675 6.47667C17.0175 6.94083 18.0417 7.1725 18.2858 7.95667C18.5292 8.74 17.8308 9.5575 16.4333 11.1917L16.0717 11.6142C15.675 12.0783 15.4758 12.3108 15.3867 12.5975C15.2975 12.885 15.3275 13.195 15.3875 13.8142L15.4425 14.3783C15.6533 16.5592 15.7592 17.6492 15.1208 18.1333C14.4825 18.6175 13.5225 18.1758 11.6042 17.2925L11.1067 17.0642C10.5617 16.8125 10.2892 16.6875 10 16.6875C9.71083 16.6875 9.43833 16.8125 8.89333 17.0642L8.39667 17.2925C6.4775 18.1758 5.5175 18.6175 4.88 18.1342C4.24083 17.6492 4.34667 16.5592 4.5575 14.3783L4.6125 13.815C4.6725 13.195 4.7025 12.885 4.6125 12.5983C4.52417 12.3108 4.325 12.0783 3.92833 11.615L3.56667 11.1917C2.16917 9.55833 1.47083 8.74083 1.71417 7.95667C1.9575 7.1725 2.98333 6.94 5.03333 6.47667L5.56333 6.35667C6.14583 6.225 6.43667 6.15917 6.67083 5.98167C6.905 5.80417 7.05417 5.535 7.35417 4.99667L7.6275 4.50667Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function ServicesPath() {
  return (
    <div className="bg-white w-full px-3 md:px-[40px] py-8 md:py-14 flex flex-col gap-6 md:gap-10 items-center">
      <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[20px] md:text-[28px] lg:text-[34px] text-center leading-tight">
        Our Services Path
      </h2>
      <div className="flex flex-col sm:flex-row gap-5 md:gap-6 w-full">
        {SERVICE_CARDS.map(({ title, body }) => (
          <div key={title}
            className="flex flex-col gap-3 flex-1 bg-white rounded-[12px] border border-[#f0f2f5] shadow-[0_2px_12px_rgba(0,0,0,0.07)] px-5 md:px-6 py-5 md:py-7">
            <StarIcon />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[14px] md:text-[17px] lg:text-[20px] leading-tight">
              {title}
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[12px] md:text-[14px] lg:text-[17px] leading-[1.65] text-justify">
              {body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page root
// ---------------------------------------------------------------------------

export default function AboutPage() {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <NavBar />
      <section className="w-full">
        <Hero />
      </section>
      <NavLinks activePage="about" />
      <AboutIntro />
      <ImageTextSection />
      <ServicesPath />
      <Footer />
    </div>
  );
}
