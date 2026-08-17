import { FormEvent, useState } from "react";
import { Footer, Hero, NavBar, NavLinks } from "./HewsonPage";
import secretaryImage from "./imports/nigerian-office-professional.jpg";

function ContactDetails() {
  return (
    <section className="w-full bg-white px-4 md:px-[40px] py-8 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_315px] gap-8 md:gap-12 items-start">
        <div className="font-['Inter:Medium',sans-serif] font-medium text-[#565966] text-[13px] md:text-[15px] leading-[1.7]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[17px] md:text-[19px]">Address</h1>
          <p className="mt-2">Location:&nbsp; Channels TV Avenue, Isheri North, Lagos, Nigeria</p>
          <p>Telephone:&nbsp; +234-806-689-4422, +234-809-646-5555</p>

          <h2 className="mt-5 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[17px] md:text-[19px]">Internet</h2>
          <p className="mt-2">Website:&nbsp; <a href="https://www.hewson-consult.com" className="underline" target="_blank" rel="noreferrer">www.hewson-consult.com</a></p>
          <p>Email:&nbsp; <a href="mailto:info@hewson-consult.com" className="hover:text-[#ff383c]">info@hewson-consult.com</a></p>
        </div>
        <img src={secretaryImage} alt="Professional woman working at an office desk" className="h-[244px] w-full rounded-[10px] object-cover md:h-[244px]" />
      </div>

      <div className="mt-7 font-['Inter:Medium',sans-serif] font-medium text-[#565966] text-[13px] md:text-[15px] leading-[1.7]">
        <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[17px] md:text-[19px]">Feedback</h2>
        <p className="mt-2">Thanks for visiting Hewson Consulting Services. For enquiries and request, please fill the form below. We will get back to you soon.</p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Keep a reference before awaiting: React clears event.currentTarget after
    // the submit handler returns, even when FormSubmit has accepted the email.
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitted(false);
    setError(false);

    try {
      // FormSubmit accepts the request and sends the email, but does not always
      // expose its response to a browser hosted on another domain. Sending a
      // simple no-CORS form request avoids that false client-side failure.
      const payload = new URLSearchParams({
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || "Not provided"),
        message: String(data.get("message") || ""),
        _subject: `New Hewson website enquiry from ${data.get("name")}`,
        _template: "table",
        _captcha: "false",
      });
      await fetch("https://formsubmit.co/ajax/adiotunde4567@gmail.com", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload,
      });
      form.reset();
      setSubmitted(true);
    } catch {
      setError(true);
    }
  };

  const inputClass = "w-full rounded-[8px] border border-[#eef0f3] bg-[#f8f9fa] px-4 py-4 text-[#232323] outline-none placeholder:text-[#a8afbf] focus:border-[#ff383c] focus:ring-2 focus:ring-[#ff383c]/20";

  return (
    <section className="w-full bg-[#f8f9fa] px-4 py-8 md:px-[40px] md:py-10">
      <form onSubmit={submit} className="mx-auto w-full max-w-[765px] rounded-[16px] border border-[#f0f2f5] bg-white p-5 md:p-6 lg:p-7 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[24px] md:text-[28px] leading-tight">Contact Us</h2>
        <p className="mt-2 font-['Inter:Medium',sans-serif] font-medium text-[#8a91a0] text-[14px] md:text-[16px]">Fill out your details to help us contact you</p>
        <div className="mt-5 flex flex-col gap-4">
          <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[14px] md:text-[16px]">
            Full Name*<input name="name" required placeholder="Enter your name" className={`${inputClass} mt-2`} />
          </label>
          <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[14px] md:text-[16px]">
            Email<input name="email" type="email" required placeholder="Enter your email" className={`${inputClass} mt-2`} />
          </label>
          <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[14px] md:text-[16px]">
            Phone Number<input name="phone" type="tel" placeholder="Enter your phone number" className={`${inputClass} mt-2`} />
          </label>
          <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#232323] text-[14px] md:text-[16px]">
            What do you need?<textarea name="message" required rows={5} placeholder="Share what you need us to do or find out what you want us to do" className={`${inputClass} mt-2 resize-y`} />
          </label>
        </div>
        <button type="submit" className="mt-4 w-full rounded-[8px] bg-[#ff383c] py-4 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-white transition-colors hover:bg-[#e02d31]">Submit</button>
        {submitted && <p className="mt-3 text-center font-['Inter:Medium',sans-serif] text-[13px] text-[#565966]">Thank you. Your message has been sent.</p>}
        {error && <p className="mt-3 text-center font-['Inter:Medium',sans-serif] text-[13px] text-[#c30307]">Unable to send your message. Please try again.</p>}
      </form>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white flex min-h-screen w-full flex-col items-center">
      <NavBar />
      <section className="w-full"><Hero /></section>
      <NavLinks activePage="contact" />
      <ContactDetails />
      <ContactForm />
      <Footer />
    </div>
  );
}
