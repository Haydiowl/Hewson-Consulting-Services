import { Footer, Hero, NavBar, NavLinks } from "./HewsonPage";

type TeamMember = {
  name: string;
  credentials: string;
};

const FELLOWS: TeamMember[] = [
  { name: "ESV. E. E. Olaye", credentials: "HND (Est), ANIVS, PGD (Bus Adm), MSc, RSV" },
  { name: "Mr. Banjo Akinnakawe", credentials: "BA (Mass Comm), PfDip (Advert), ARPA" },
  { name: "Mr. Seyi Afolabi", credentials: "BSc (Comptr Sc), MSc (Info Mgt)" },
];

const EXTERNAL_CONSULTANTS: TeamMember[] = [
  { name: "Mr. Wasiu Amao", credentials: "BSc (QS), MBA, PGD (Econs), ANIVS, RSV" },
  { name: "Engr. Ferd Onyekpeze", credentials: "B.Eng (Comptr Eng), MBA, M.Eng (Info/Netwk Security)" },
];

function Rule() {
  return <div className="h-px w-[min(100%,370px)] bg-[#f0f2f5]" />;
}

function MemberCard({ name, credentials }: TeamMember) {
  return (
    <article className="bg-[#f8f9fa] border border-[#e8eaed] rounded-[12px] px-6 py-6 md:px-7 md:py-7 text-center">
      <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[16px] md:text-[19px] leading-tight">
        <span aria-hidden="true" className="mr-2">•</span>{name}
      </h3>
      <p className="mt-3 font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[15px] leading-snug">
        {credentials}
      </p>
    </article>
  );
}

function Intro() {
  return (
    <section className="bg-[#f8f9fa] w-full px-4 md:px-[40px] py-5 md:py-7">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[14px] md:text-[16px] lg:text-[19px] leading-[1.7]">
        Hewson Consulting team consists of specialists with entrenched field experience and exposure. Our consultants offer integrated business services and technical support across industry wide spectrum.
      </p>
    </section>
  );
}

function TeamContent() {
  return (
    <main className="w-full bg-white px-4 md:px-[40px] py-7 md:py-9 flex flex-col items-center">
      <section className="w-full text-center">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[23px] md:text-[28px] leading-tight">
          Consulting CEO/ Principal
        </h1>
        <h2 className="mt-3 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[17px] md:text-[21px] leading-tight">
          <span aria-hidden="true" className="mr-2">•</span>Mr. Matthew A. Aziegbe
        </h2>
        <p className="mt-3 font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[15px]">BSc, FIMC, MNIVS, MNCS, RSV</p>
        <p className="mt-5 md:mt-6 font-['Inter:Medium',sans-serif] font-medium text-[#565966] text-[13px] md:text-[16px] leading-[1.7] text-justify">
          A multi-disciplinary fellow, practicing as a professionally certified management analyst, accredited techie, chartered estate surveyor and registered valuer. In his functional role as a strategic growth architect &amp; technical CRE advisor, Mr. M. A. Aziegbe has anchored major activities for organizations. His innate bent features cross-functional skill, analytical thinking, creativity and problem solving. He provides overall leadership, direction and brand awareness. <a href="#/blog" className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] underline">View Blog to See Full Profile</a>
        </p>
      </section>

      <div className="mt-6 md:mt-7 flex flex-col items-center w-full">
        <Rule />
        <section className="mt-6 w-full">
          <h2 className="text-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[23px] md:text-[28px] leading-tight">Consulting Fellows</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 w-full">
            {FELLOWS.map((member) => <MemberCard key={member.name} {...member} />)}
          </div>
        </section>
      </div>

      <div className="mt-6 md:mt-7 flex flex-col items-center w-full">
        <Rule />
        <section className="mt-6 w-full max-w-[970px]">
          <h2 className="text-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[23px] md:text-[28px] leading-tight">External Consultants</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {EXTERNAL_CONSULTANTS.map((member) => <MemberCard key={member.name} {...member} />)}
          </div>
        </section>
      </div>

      <div className="mt-6 md:mt-7 flex flex-col items-center w-full text-center">
        <Rule />
        <section className="mt-6">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[23px] md:text-[28px] leading-tight">Technical Adviser</h2>
          <h3 className="mt-3 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[17px] md:text-[21px] leading-tight"><span aria-hidden="true" className="mr-2">•</span>Mr. Olusina Gbenga</h3>
          <p className="mt-3 font-['Inter:Medium',sans-serif] font-medium text-[#363b4b] text-[13px] md:text-[15px] leading-snug">PfDip (Advert), PGD (Digital Media &amp; Comm), MSc (Media Comm), FRPA</p>
        </section>
      </div>
    </main>
  );
}

export default function TeamPage() {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <NavBar />
      <section className="w-full"><Hero /></section>
      <NavLinks activePage="team" />
      <Intro />
      <TeamContent />
      <Footer />
    </div>
  );
}
