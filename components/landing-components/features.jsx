import Image from "next/image"
import features from "@/public/img/features.webp"

const Features = () => {
  return (
    <section id="features">
      <div className="container py-20 relative">
        <div className="blob1"></div>

        <div className="blob2"></div>

        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-12 md:w-1/2">
            <Image src={features} alt="" />
          </div>

          <div className="text-center md:text-left md:w-1/2 md:ml-20">
            <h4 className="font-bold text-color-secondary mb-4">Features</h4>
            <p className="mb-4">
              At LawKey, we understand that every legal professional has unique
              needs and objectives. That&apos;s why we offer a variety of
              tailored services designed to empower you in your legal practice
              or studies. Here&apos;s how LawKey can help unlock your full
              potential:
            </p>
            <p className="leading-relaxed mb-10">
              Legal Research Assistance: Say goodbye to hours of tedious legal
              research. Let LawKey streamline your research process, providing
              you with comprehensive and accurate information at your
              fingertips. Our advanced search capabilities and intuitive
              interface make it easy to find relevant cases, statutes, and
              regulations, allowing you to focus your time and energy on
              building a strong case for your clients. Explore our range of
              services and discover how LawKey can support your legal endeavours
              today! With our innovative solutions and expert guidance,
              you&apos;ll have the tools and resources you need to excel in your
              legal career. Judicial Insights Reports: Stay informed about key
              judgments and their implications for your practice or studies with
              LawKey&apos;s Judicial Insights Reports. Our team of legal experts
              analyses recent judgments and provides detailed reports
              highlighting the legal principles at stake, potential precedents
              set, and practical implications for legal professionals. With
              LawKey&apos;s insights, you&apos;ll be better equipped to navigate
              complex legal issues and make informed decisions in your practice
              or studies. Customized Training Programs: Keep your skills sharp
              and stay up-to-date with the latest legal developments with
              LawKey&apos;s customized training programs. Whether you&apos;re a
              practicing attorney looking to expand your expertise or a law
              student preparing for a career in the legal profession, our
              training programs are designed to meet your specific needs and
              goals. From live webinars to self-paced online courses, LawKey
              offers flexible learning options to accommodate your schedule and
              learning style.
            </p>
            {/* <button className="btn">Read More</button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
