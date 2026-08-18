import { useState, useEffect, useRef, useCallback } from "react";
import svgPaths from "../imports/svg-dpy8psrgvm";
import { imgGroup } from "../imports/svg-fd62o";
import logosImg from "./imports/Logos.png";
import ictLogoImg from "./imports/Ict_consultant_logo.png";
import brandLogoImg from "./imports/WhatsApp_Image_2026-08-10_at_14.43.44__1__1.png";
import fullLogoImg from "./imports/Logo_2_.png";
import homePlanningSilhouette from "./imports/home-planning-silhouette.jpg";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const SLIDES = [
  {
    text: "Operations",
    sub: "Streamlining business processes and optimizing performance across your entire organisation for measurable, lasting results.",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=85",
  },
  {
    text: "Strategy",
    sub: "Designing forward-looking roadmaps that align leadership vision with market opportunities and competitive advantage.",
    img: "https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  },
  {
    text: "Technology",
    sub: "Integrating smart IT systems and digital solutions that drive efficiency, innovation and scalable enterprise growth.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  },
  {
    text: "Projects",
    sub: "End-to-end project advisory — from appraisal and de-risking through to capital procurement and successful delivery.",
    img: "https://images.unsplash.com/photo-1602497485099-e41a116a272c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  },
  {
    text: "CREprocess",
    sub: "Supporting CRE operators through integrated processes and advisory.",
    img: "https://images.unsplash.com/photo-1739298061757-7a3339cee982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  },
  { text: "Advisory", sub: "Practical advisory for sustainable performance and growth.", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=85" },
];

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "#/about" },
  { label: "Services",    href: "#/services" },
  { label: "CRE Support", href: "#/cre-support" },
  { label: "Review",      href: "#/review" },
  { label: "Team",        href: "#/team" },
  { label: "Contact",     href: "#/contact" },
];

const SEARCH_INDEX = [
  { id: "home",        label: "Home / Hero",           keywords: "home operations strategy technology projects resources manpower services hewson consulting" },
  { id: "about",       label: "About Us",              keywords: "independent niche consultancy strategic growth architects technical project facilitators management IT appraisal commercial real estate CRE allied enterprise change innovation impact" },
  { id: "services",    label: "Our Services",          keywords: "issue resolution strategy formulation IT integration optimization project appraisal de-risking capital procurement capacity development sales enhancement growth structuring productivity profit proficiency management technology decision analytics" },
  { id: "review",      label: "Why Consult Us?",       keywords: "business challenges insights analytics decisions field strategies targets process operations structure ROI smarter faster higher" },
  { id: "cre-support", label: "Industry Affiliations", keywords: "IMC CMC NIESV NCS affiliations professional body nigeria computer society estate surveyors valuers management consultants" },
  { id: "contact",     label: "Contact / Footer",      keywords: "contact tel phone +234 email info hewson-consult.com blog articles news events linkedin facebook twitter" },
];

// ---------------------------------------------------------------------------
// Search hook
// ---------------------------------------------------------------------------

interface SearchResult { id: string; label: string }

function useSearch() {
  const [query, setQuery]     = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen]       = useState(false);

  const search = useCallback((q: string) => {
    setQuery(q);
    if (!q.trim()) { setResults([]); return; }
    const lower = q.toLowerCase();
    setResults(SEARCH_INDEX.filter(
      (e) => e.keywords.toLowerCase().includes(lower) || e.label.toLowerCase().includes(lower)
    ));
  }, []);

  const go = (id: string) => {
    setOpen(false); setQuery(""); setResults([]);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { query, results, open, setOpen, search, go };
}

// ---------------------------------------------------------------------------
// Logo / NavBar
// ---------------------------------------------------------------------------

function Logo() {
  return (
    <a href="#home" className="shrink-0 no-underline flex items-center">
      <img src={fullLogoImg} alt="Hewson Consulting Services"
        className="h-[44px] md:h-[54px] w-auto object-contain" />
    </a>
  );
}

export function NavBar({ topButtonLabel = "Blog", topButtonHref = "#/blog" }: { topButtonLabel?: string; topButtonHref?: string } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { query, results, open: searchOpen, setOpen: setSearchOpen, search, go } = useSearch();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setSearchOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setSearchOpen]);

  return (
    <header className="border-[#f0f2f5] border-b border-solid w-full shadow-[0px_1px_2.5px_0px_rgba(174,174,174,0.25)] bg-white sticky top-0 z-50">
      <div className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-end h-[72px] md:h-[90px] px-4 md:px-8 gap-3 pb-3 md:pb-4">

        {/* LEFT — logo */}
        <div className="flex items-end">
          <Logo />
        </div>

        {/* CENTRE — "Our hotline | Email box" baseline-aligned with logo text */}
        <div className="hidden md:flex items-end justify-center font-['Inter:Medium',sans-serif] font-medium text-[#565966] whitespace-nowrap gap-0 text-[15px] lg:text-[17px] xl:text-[20px]">
          <a href="tel:+2348096465555" className="hover:text-[#ff383c] transition-colors">Our Hotline</a>
          <span className="mx-3 text-[#dfe2e8]">|</span>
          <a href="#/contact" className="hover:text-[#ff383c] transition-colors">Email Box</a>
        </div>

        {/* RIGHT — blog + search (desktop) + hamburger (mobile, right) */}
        <div className="flex items-center justify-end gap-3 md:gap-4">
          <button className="md:hidden flex flex-col gap-[5px] p-1 shrink-0"
            onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
            <span className={`block h-[2px] w-6 bg-[#232323] transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-[2px] w-6 bg-[#232323] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 bg-[#232323] transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
          <a href={topButtonHref}
            className="hidden sm:flex bg-[#ff383c] hover:bg-[#e02d31] active:bg-[#c0272a] transition-colors items-center justify-center h-[38px] md:h-[44px] px-4 rounded-[10px] shrink-0 no-underline">
            <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] md:text-[16px] text-white">{topButtonLabel}</span>
          </a>

          {/* Search — desktop only */}
          <div className="relative hidden md:block" ref={searchRef}>
            <button aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}
              className="relative shrink-0 size-[24px] flex items-center justify-center hover:opacity-60 transition-opacity">
              <svg className="size-full" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p10a22f00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-[36px] w-[300px] sm:w-[360px] bg-white rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-[#f0f2f5] overflow-hidden z-50">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[#f0f2f5]">
                  <svg className="size-[18px] shrink-0 text-[#9ca3af]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p10a22f00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <input autoFocus type="text" value={query} onChange={(e) => search(e.target.value)}
                    placeholder="Search this site…"
                    className="flex-1 outline-none text-[15px] font-['Inter:Medium',sans-serif] text-[#232323] placeholder:text-[#9ca3af] bg-transparent" />
                  {query && <button onClick={() => search("")} className="text-[#9ca3af] hover:text-[#ff383c] text-[18px] leading-none">×</button>}
                </div>
                {results.length > 0 && (
                  <ul className="py-1 max-h-[280px] overflow-y-auto">
                    {results.map((r) => (
                      <li key={r.id}>
                        <button onClick={() => go(r.id)} className="w-full text-left px-4 py-3 hover:bg-[#fff0f0] transition-colors font-['Inter:Medium',sans-serif]">
                          <span className="text-[15px] text-[#232323] font-semibold block">{r.label}</span>
                          <span className="text-[12px] text-[#565966]">Jump to section →</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {query.trim() && results.length === 0 && (
                  <div className="px-4 py-4 text-[14px] text-[#565966] font-['Inter:Medium',sans-serif]">
                    No results for "<strong>{query}</strong>"
                  </div>
                )}
                {!query && (
                  <div className="px-4 py-3">
                    <p className="text-[12px] text-[#9ca3af] font-['Inter:Medium',sans-serif] mb-2">Jump to section</p>
                    <ul className="flex flex-wrap gap-2">
                      {SEARCH_INDEX.map((entry) => (
                        <li key={entry.id}>
                          <button onClick={() => go(entry.id)}
                            className="text-[12px] font-['Inter:Medium',sans-serif] text-[#565966] bg-[#f8f9fa] hover:bg-[#fee] hover:text-[#ff383c] transition-colors px-2 py-1 rounded-[6px]">
                            {entry.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white border-t border-[#f0f2f5] px-4 pb-5 gap-3">
          <div className="flex items-center gap-2 border border-[#f0f2f5] rounded-[8px] px-3 py-2 mt-1">
            <svg className="size-[18px] shrink-0 text-[#9ca3af]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p10a22f00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <input type="text" value={query} onChange={(e) => search(e.target.value)} placeholder="Search this site…"
              className="flex-1 outline-none text-[15px] font-['Inter:Medium',sans-serif] text-[#232323] placeholder:text-[#9ca3af] bg-transparent" />
            {query && <button onClick={() => search("")} className="text-[#9ca3af] hover:text-[#ff383c] text-[18px] leading-none">×</button>}
          </div>
          {query.trim() && results.length > 0 && (
            <ul className="flex flex-col gap-1">
              {results.map((r) => (
                <li key={r.id}>
                  <button onClick={() => { go(r.id); setMenuOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-[6px] bg-[#f8f9fa] hover:bg-[#fee] hover:text-[#ff383c] transition-colors font-['Inter:Medium',sans-serif] text-[14px] text-[#232323]">
                    {r.label} →
                  </button>
                </li>
              ))}
            </ul>
          )}
          {query.trim() && results.length === 0 && (
            <p className="text-[13px] text-[#565966] font-['Inter:Medium',sans-serif] px-1">No results for "<strong>{query}</strong>"</p>
          )}
          <div className="h-px bg-[#f0f2f5]" />
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              className="font-['Inter:Medium',sans-serif] font-medium text-[#565966] text-[16px] no-underline py-1 hover:text-[#ff383c] transition-colors border-b border-[#f0f2f5] last:border-0">
              {label}
            </a>
          ))}
          <a href={topButtonHref} onClick={() => setMenuOpen(false)}
            className="bg-[#ff383c] hover:bg-[#e02d31] transition-colors text-white text-[15px] font-['Inter:Medium',sans-serif] no-underline text-center py-2 rounded-[10px] mt-1">
            {topButtonLabel}
          </a>
        </div>
      )}
    </header>
  );
}

// ---------------------------------------------------------------------------
// Hero slider
// ---------------------------------------------------------------------------

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden py-12 md:py-20">
      {/* background image */}
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=85')", filter: "grayscale(1) brightness(.48)" }} />
      {/* red overlay */}
      <div className="absolute inset-0 bg-[#c30307]/80" />
      {/* ticker — constrained to 70% width so text never reaches screen edges */}
      <div className="relative z-10 overflow-hidden mx-auto w-[70%]">
        <div className="ticker-track whitespace-nowrap">
          {[...SLIDES, ...SLIDES].map((s, i) => (
            <span key={i} className="inline-flex items-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] sm:text-[22px] md:text-[30px] lg:text-[38px] text-white leading-none">
              <span className="px-3 md:px-5">{s.text}</span>
              <span aria-hidden="true" className="mx-3 md:mx-5 inline-flex size-[0.35em] shrink-0 rounded-full bg-current" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Secondary nav links
// ---------------------------------------------------------------------------

export function NavLinks({ activePage = "home" }: { activePage?: "home" | "about" | "services" | "cre-support" | "review" | "team" | "contact" }) {
  const pageTitles = { home: "Home", about: "About", services: "Services", "cre-support": "CRE Support", review: "Review", team: "Team", contact: "Contact" };
  return (
    <>
    <nav className="hidden md:flex flex-wrap gap-x-5 gap-y-2 items-center justify-center py-4 w-full px-4">
      {NAV_LINKS.map(({ label, href }) => {
        const isActive =
          (label === "Home" && activePage === "home") ||
          (label === "About" && activePage === "about") ||
          (label === "Services" && activePage === "services") ||
          (label === "CRE Support" && activePage === "cre-support") ||
          (label === "Review" && activePage === "review") ||
          (label === "Team" && activePage === "team") ||
          (label === "Contact" && activePage === "contact");
        return (
          <a key={label} href={href}
            className={`leading-snug no-underline hover:opacity-70 transition-opacity text-[14px] lg:text-[17px] xl:text-[20px] ${
              isActive
                ? "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] underline"
                : "font-['Inter:Medium',sans-serif] font-medium text-[#565966]"
            }`}>
            {label}
          </a>
        );
      })}
    </nav>
    <h1 className="px-4 pb-6 pt-2 text-center font-['Inter:Semi_Bold',sans-serif] text-[18px] font-semibold text-[#232323] md:text-[21px]">{pageTitles[activePage]}</h1>
    </>
  );
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function AboutSection() {
  return (
    <div id="about" className="bg-[#f8f9fa] flex items-center justify-start px-3 md:px-[40px] py-6 md:py-10 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[14px] md:text-[16px] lg:text-[19px] text-justify leading-[1.7] w-full">
       We are an accredited niche consulting firm, operating as strategic growth architects and technical project facilitators. Our consultancy team comprises core management, IT, appraisal and related field experts with subject matter insight. The practice has specialized domain expertise that enables us function as business force multiplier for companies across commercial real estate (CRE) &amp; allied industry. Our experience help industry players overcome critical challenges and transform their business.   
      </p>
    </div>
  );
}

const SERVICE_ITEMS = [
  "issue resolution",
  "strategy formulation",
  "IT integration & optimization",
  "project appraisal & de-risking",
  "capital procurement",
  "capacity development",
  "sales enhancement",
  "growth structuring",
];

function ContentSections() {
  return (
    <div id="services" className="bg-[#fee] flex flex-col gap-4 md:gap-8 w-full px-3 md:px-[40px] py-4 md:py-[32px]">
      {/* Section 1 — image left, text right */}
      <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-5">
        <div className="rounded-[10px] overflow-hidden md:flex-1 shrink-0 h-[220px] md:h-auto self-stretch min-h-0">
          <img src={homePlanningSilhouette}
            alt="Silhouettes of business professionals in an office"
            className="w-full h-full object-cover" />
        </div>
        <div className="flex md:flex-1 items-center px-1 md:px-5 py-3 md:py-6">
          <div className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[16px] lg:text-[19px] leading-[1.7] space-y-1 w-full">
            <p className="text-justify">We leverage our knowhow in developing smart solutions that accomplish set goals. As consultants, we undertake the following:</p>
            {SERVICE_ITEMS.map((item) => (
              <p key={item}>••  {item}</p>
            ))}
            <p className="text-justify pt-2">We improve overall productivity, profit &amp; proficiency. Our expertise ensures innovative change, expansion and growth.
</p>
          </div>
        </div>
      </div>

      {/* Section 2 — full-width text */}
      <div className="px-1 md:px-5 py-3 md:py-6">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[16px] lg:text-[19px] leading-[1.84] text-justify w-full">
          At Hewson, we recognize that effectiveness in management process, technology and strategy execution drive increase. When properly fitted together, their combined synergy accentuates value increase, which ultimately drive corporate growth. Invariably, real estate &amp; allied organizations also require niche consultants - such as ours - for problem solving, improvement and fresh perspective. Our guidance offers strategic level initiatives, sound decision-aiding analytics and innovative smart solutions.;
        </p>
      </div>
    </div>
  );
}

function WhyConsultUs() {
  const leftItems = [
    "We solve organization's business challenges and complex real-estate issues through team aproach.",
    "We deliver analytics that empower senior executives to make informed, critical decisions.",
    "We provide actionable field strategies and support that enable players surpass set targets.",
  ];
  const rightItems = [
    "We help synchronize process, operations and structure with strategy & IT system for growth.",
    "We strengthen business fundamentals and optimize your financial ROI beyond 2x metrics.",
    "We ensure that your operations, people and projects run smarter, faster and higher.",
  ];

  return (
    <div id="review" className="bg-[#f8f9fa] flex flex-col gap-5 md:gap-[36px] items-start justify-center px-4 sm:px-8 md:px-20 lg:px-28 xl:px-36 py-6 md:py-[64px] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[17px] md:text-[22px] lg:text-[26px] text-center w-full leading-tight">
        WHY CONSULT US?
      </p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
        <div className="flex flex-col gap-4 md:gap-6 md:flex-1">
          {leftItems.map((text) => (
            <div key={text} className="flex gap-3 items-start">
              <span className="font-['Inter:Medium',sans-serif] text-[#ff383c] text-[18px] leading-none mt-[2px] shrink-0">•</span>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[16px] lg:text-[19px] leading-[1.65] text-justify">{text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 md:gap-6 md:flex-1">
          {rightItems.map((text) => (
            <div key={text} className="flex gap-3 items-start">
              <span className="font-['Inter:Medium',sans-serif] text-[#ff383c] text-[18px] leading-none mt-[2px] shrink-0">•</span>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[16px] lg:text-[19px] leading-[1.65] text-justify">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Affiliations() {
  return (
    <div id="cre-support" className="flex flex-col gap-4 md:gap-8 items-center justify-center px-4 md:px-[40px] py-6 md:py-10 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[15px] md:text-[18px] lg:text-[22px] text-center leading-tight tracking-wide">
        INDUSTRY AFFILIATIONS
      </p>
      <img src={ictLogoImg} alt="Industry affiliations: CMC, IMC, NCS, NIESV logos"
        className="max-w-full h-auto w-[320px] sm:w-[480px] md:w-[640px] lg:w-[700px] object-contain" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

function SocialButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="bg-white flex items-center justify-center p-[10px] rounded-[5px] shrink-0 hover:opacity-80 transition-opacity">
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[#c30307] flex flex-col gap-3 md:gap-5 items-center justify-center px-4 md:px-[40px] py-5 md:py-8 w-full">
      <nav className="flex flex-wrap gap-x-3 gap-y-2 md:gap-x-[20px] items-center justify-center font-['Inter:Medium',sans-serif] font-medium text-[12px] md:text-[16px] lg:text-[20px] text-white">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="no-underline text-white hover:opacity-70 transition-opacity">{label}</a>
        ))}
      </nav>

      <div className="flex flex-col items-center gap-1 font-['Inter:Medium',sans-serif] font-medium text-[12px] md:text-[16px] lg:text-[20px] text-white text-center">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
          <a href="tel:+2348096465555" className="no-underline text-white hover:opacity-70 transition-opacity">Tel: +234-8096465555</a>
          <a href="tel:+2348096465555" className="no-underline text-white hover:opacity-70 transition-opacity">+234-8096465555</a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
          <a href="mailto:info@hewson-consult.com" className="no-underline text-white hover:opacity-70 transition-opacity">info@hewson-consult.com</a>
          <a href="https://www.hewson-consult.com" target="_blank" rel="noopener noreferrer" className="no-underline text-white hover:opacity-70 transition-opacity">www.hewson-consult.com</a>
        </div>
      </div>

      <div className="h-px w-full max-w-[1052px] bg-[#DB262A]" />

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-[800px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] md:text-[17px] lg:text-[20px] text-white flex-1 text-center sm:text-left">
          BLOG (Articles, News &amp; Events)
        </p>
        <div className="flex gap-[8px] items-center shrink-0">
          <SocialButton href="https://www.linkedin.com/company/hewson-consulting-services/">
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path d={svgPaths.p32c13b80} fill="#232323" /></svg>
          </SocialButton>
          <SocialButton href="https://www.facebook.com/share/1BgAJPMP5x/">
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path d={svgPaths.p2e2cfc00} fill="#232323" /></svg>
          </SocialButton>
          <SocialButton href="https://x.com/HewsonServices">
            <div className="overflow-clip relative size-[20px]">
              <div className="absolute inset-[4.69%_0]" style={{
                maskImage: `url("${imgGroup}")`, maskSize: "20px 20px", maskRepeat: "no-repeat", maskPosition: "0px -0.937px",
                WebkitMaskImage: `url("${imgGroup}")`, WebkitMaskSize: "20px 20px", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "0px -0.937px",
              }}>
                <svg fill="none" height="18.1257" viewBox="0 0 20 18.1257" width="20" className="absolute inset-0 size-full">
                  <path d={svgPaths.p824c100} fill="#232323" />
                </svg>
              </div>
            </div>
          </SocialButton>
          <SocialButton href="https://www.google.com/search?q=Hewson+Consulting+Services&stick=H4sIAAAAAAAA_-NgU1I1qDA0ME6yNE5NSjRLs0hLNUizMqiwNDc3TLFIMki0NEoxSkxOXMQq5ZFaXpyfp-Ccn1dcmlOSmZeuEJxaVJaZnFoMAEf0D8BGAAAA&hl=en-GB&mat=CWrpVHVW-YQsElcBa0lj_xAoj7Dx7K3G8wDuhNfBwMyl6ItrF0JBTTwC3YhX0eOydvOYZF9-eDZzJ_gXdrZNq7wa4OgGkyXfjhre4JzVE51oj4PzrfUFOwYUBAhGLipTpmI&authuser=0#ebo=0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <text x="10" y="15" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="15" fontWeight="700" fill="#4285F4">G</text>
            </svg>
          </SocialButton>
        </div>
      </div>

      <div className="font-['Inter:Medium',sans-serif] font-medium text-[11px] md:text-[15px] lg:text-[18px] text-center text-white max-w-[800px]">
        <p className="leading-[1.69] mb-0">Certified Management &amp; IT Consultants I CRE-Biz Development &amp; Project Advisors.</p>
        <p className="leading-[1.69]">Driving Technical Input, Revenue Boost &amp; Business Growth.</p>
      </div>

      <div className="h-px w-full max-w-[1052px] bg-[#DB262A]" />

      <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] md:text-[14px] lg:text-[18px] text-center text-white">
        Copyright ©️2026 Hewson Consulting Services. All Rights Reserved
      </p>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Page root
// ---------------------------------------------------------------------------

export default function HewsonPage() {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <NavBar />
      <section id="home" className="w-full"><Hero /></section>
      <NavLinks activePage="home" />
      <AboutSection />
      <ContentSections />
      <WhyConsultUs />
      <Affiliations />
      <Footer />
    </div>
  );
}
