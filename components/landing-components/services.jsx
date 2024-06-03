import { LuCodepen } from "react-icons/lu"

const Services = () => {
  return (
    <section id="services" className="bg-color-primary-light">
      <div className="container py-20">
        <div className="text-center m-auto mb-20">
          <h4 className="font-bold text-color-secondary mb-4">Services</h4>
          <p className="">
            At LawKey, we understand that every legal professional has unique
            needs and objectives. That&apos;s why we offer a variety of tailored
            services designed to empower you in your legal practice or studies.
            Here&apos;s how LawKey can help unlock your full potential Legal
            Research Assistance Say goodbye to hours of tedious legal research.
            Let LawKey streamline your research process, providing you with
            comprehensive and accurate information at your fingertips. Our
            advanced search capabilities and intuitive interface make it easy to
            find relevant cases, statutes, and regulations, allowing you to
            focus your time and energy on building a strong case for your
            clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
          {/* <!-- card no 1 --> */}
          <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
            <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
              {/* <i className="fa-solid fa-calendar-days text-4xl"></i> */}
              <LuCodepen className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold py-4">
              Legal Research Assistance
            </h3>
            <p className="leading-relaxed">
              Say goodbye to hours of tedious legal research. Let LawKey
              streamline your research process, providing you with comprehensive
              and accurate information at your fingertips. Our advanced search
              capabilities and intuitive interface make it easy to find relevant
              cases, statutes, and regulations, allowing you to focus your time
              and energy on building a strong case for your clients.
            </p>
          </div>

          {/* <!-- card no 2 --> */}
          <div className="bg-color-primary-dark border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer">
            <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
              {/* <i className="fa-solid fa-chart-column text-4xl"></i> */}
              <LuCodepen className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold py-4">
              Judicial Insights Reports
            </h3>
            <p className="leading-relaxed">
              Stay informed about key judgments and their implications for your
              practice or studies with LawKey&apos;s Judicial Insights Reports.
              Our team of legal experts analyses recent judgments and provides
              detailed reports highlighting the legal principles at stake,
              potential precedents set, and practical implications for legal
              professionals. With LawKey&apos;s insights, you&apos;ll be better
              equipped to navigate complex legal issues and make informed
              decisions in your practice or studies.
            </p>
          </div>

          {/* <!-- card no 3 --> */}
          <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
            <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
              {/* <i className="fa-solid fa-phone text-4xl"></i> */}
              <LuCodepen className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold py-4">
              Customized Training Programs
            </h3>
            <p className="leading-relaxed">
              Keep your skills sharp and stay up-to-date with the latest legal
              developments with LawKey&apos;s customized training programs.
              Whether you&apos;re a practicing attorney looking to expand your
              expertise or a law student preparing for a career in the legal
              profession, our training programs are designed to meet your
              specific needs and goals. From live webinars to self-paced online
              courses, LawKey offers flexible learning options to accommodate
              your schedule and learning style
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
