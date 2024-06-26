import Image from "next/image"
// import PrelineScript from "@/components/PrelineScript"
import image1 from "../public/icons/costa-rica-arenal-volcano.jpg"
import image2 from "../public/icons/image2.webp"
import image3 from "../public/icons/image3.webp"
import Law1 from "../public/icons/law1.jpeg"
import Law2 from "../public/icons/law2.jpeg"

const Initial = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-[#2E70DD] text-3xl pt-10 font-bold">
          Chat With Your Data
        </div>
      </div>
      {/* <div className="h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-[#cccfd6] [&::-webkit-scrollbar-thumb]:bg-[#67696b]">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 pt-10 px-4">
          <div className="md:w-1/2 min-h-full bg-[#021634] rounded-md p-6">
            <div className="flex items-center ">
              <span className="pe-3">
                <svg
                  width="19"
                  height="21"
                  viewBox="0 0 19 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.6327 4.6315C13.1697 4.95576 13.6536 5.36466 14.0668 5.84319C14.4713 6.3114 14.7957 6.84647 15.0262 7.42575C15.1572 7.75793 15.2603 8.10098 15.3344 8.45116C15.5063 9.23759 15.5199 10.0518 15.3743 10.8438C15.2954 11.2719 15.1755 11.6909 15.0162 12.0948L14.9962 12.1375C14.6531 12.992 14.0651 13.8226 13.4972 14.6429C13.2057 15.0565 12.9175 15.4667 12.6743 15.8649C12.598 15.989 12.4899 16.0892 12.3618 16.1546C12.2338 16.22 12.0907 16.2481 11.9481 16.2357L7.35766 16.9364C7.16966 16.9629 6.97871 16.9184 6.82031 16.8112C6.66191 16.704 6.54685 16.5414 6.49652 16.3537C6.38129 16.0112 6.23982 15.6786 6.07345 15.359C5.93455 15.0854 5.767 14.8281 5.57376 14.5917C5.33558 14.3131 5.09406 14.0294 4.85921 13.703C4.58958 13.3325 4.35689 12.9351 4.16464 12.5169C3.96308 12.079 3.80623 11.6208 3.6966 11.1497C3.58819 10.6765 3.53507 10.1917 3.53836 9.70558C3.53842 9.19886 3.60054 8.69417 3.72325 8.20335C3.85642 7.67859 4.04754 7.17114 4.2929 6.69087L4.32621 6.63105C4.64368 6.07816 5.04451 5.58036 5.5138 5.15617C5.98172 4.73693 6.51417 4.40024 7.08949 4.15981L7.13613 4.14272C7.56482 3.96775 8.01205 3.845 8.46863 3.77699C8.95261 3.70744 9.44283 3.69596 9.92939 3.74281C10.4048 3.78737 10.874 3.88537 11.3285 4.03505C11.7813 4.18382 12.2165 4.38387 12.626 4.6315H12.6327ZM11.9665 19.5444C11.7145 19.9897 11.3541 20.3602 10.9204 20.6194C10.5544 20.8381 10.1439 20.9668 9.72118 20.9954C9.29862 21.0216 8.87656 20.9363 8.49528 20.7475C8.2204 20.6085 7.97259 20.4191 7.76407 20.1887L11.9764 19.5444H11.9665ZM12.3679 17.1261V17.4081V17.5072C12.3812 17.6921 12.3812 17.8778 12.3679 18.0627L12.2863 18.4711L7.18276 19.2504L7.09282 19.0402L6.89461 18.2028V17.9601L12.3562 17.1261H12.3679ZM9.38473 0.644357C9.3878 0.470898 9.45768 0.305741 9.5791 0.185003C9.70052 0.0642652 9.86359 -0.00223039 10.0327 5.71238e-05H10.0776C10.2387 0.0147248 10.3884 0.0914549 10.4966 0.214804C10.6047 0.338152 10.6633 0.498962 10.6606 0.664865C10.6615 0.676241 10.6615 0.68767 10.6606 0.699046L10.6256 2.10215C10.6265 2.11695 10.6265 2.13179 10.6256 2.14658C10.613 2.31249 10.5393 2.46727 10.4197 2.57959C10.3 2.69191 10.1432 2.75339 9.98102 2.75158H9.93605C9.77437 2.73816 9.62369 2.6622 9.51452 2.53909C9.40536 2.41598 9.34587 2.2549 9.34808 2.08848C9.34716 2.07768 9.34716 2.06681 9.34808 2.05601L9.3814 0.646066L9.38473 0.644357ZM2.33245 3.10193C2.23926 3.01371 2.17372 2.89906 2.14417 2.77255C2.11461 2.64603 2.12238 2.51336 2.16647 2.39138C2.21056 2.26941 2.28898 2.16362 2.39179 2.08748C2.4946 2.01133 2.61714 1.96825 2.74386 1.96372C2.82767 1.95979 2.91142 1.97286 2.99031 2.00219C3.06919 2.03151 3.14166 2.07652 3.20357 2.13462L4.2296 3.11389C4.35292 3.23356 4.42583 3.3979 4.43281 3.57191C4.43673 3.65792 4.42404 3.74387 4.39545 3.82482C4.36686 3.90578 4.32295 3.98013 4.26625 4.0436C4.15055 4.17048 3.99074 4.2454 3.82152 4.2521C3.73768 4.25631 3.65386 4.24337 3.57493 4.21403C3.49601 4.18469 3.42356 4.13954 3.36181 4.08119L2.33245 3.10193ZM0.653493 10.3362C0.484941 10.339 0.322065 10.2737 0.199943 10.1545C0.0778201 10.0353 0.00622129 9.87161 0.000565806 9.69874C-0.00299867 9.61185 0.0103058 9.52509 0.0397059 9.44352C0.069106 9.36195 0.114015 9.28718 0.171823 9.22358C0.229631 9.15997 0.299185 9.10879 0.376441 9.073C0.453697 9.03722 0.537115 9.01755 0.621846 9.01513L2.02264 8.96728C2.10719 8.96362 2.19161 8.97722 2.27101 9.00728C2.3504 9.03734 2.42319 9.08326 2.48516 9.1424C2.54713 9.20153 2.59705 9.2727 2.63202 9.35177C2.66699 9.43084 2.68632 9.51624 2.68889 9.60303V9.61329V9.63721C2.68596 9.80598 2.61977 9.9671 2.50407 10.0871C2.38836 10.2071 2.23205 10.2767 2.06761 10.2815H2.04263L0.660155 10.3277L0.653493 10.3362ZM18.3092 8.29905H18.3225C18.4829 8.28919 18.6411 8.34166 18.7656 8.44603C18.8311 8.50025 18.8855 8.56731 18.9255 8.6433C18.9655 8.7193 18.9904 8.8027 18.9987 8.88866C18.9997 8.89604 18.9997 8.90351 18.9987 8.91088C19.0091 9.08008 18.9552 9.24681 18.8484 9.37616C18.7416 9.5055 18.5901 9.58742 18.4258 9.60474L17.0316 9.75685C16.9481 9.76541 16.8638 9.75698 16.7835 9.73205C16.7032 9.70713 16.6285 9.66619 16.5636 9.61158C16.4655 9.53001 16.3932 9.4205 16.3557 9.29684C16.3182 9.17317 16.3172 9.04088 16.3528 8.91663C16.3884 8.79238 16.4591 8.68171 16.5558 8.59858C16.6526 8.51544 16.7712 8.46356 16.8967 8.44945C17.3614 8.39647 17.8295 8.34178 18.2959 8.29564L18.3092 8.29905ZM15.5459 2.57897C15.592 2.50686 15.6516 2.44481 15.7211 2.3964C15.7907 2.34798 15.8689 2.31414 15.9512 2.29683C16.0336 2.27952 16.1184 2.27908 16.2009 2.29553C16.2834 2.31198 16.362 2.34499 16.432 2.39268C16.5024 2.43975 16.5627 2.50097 16.6094 2.57264C16.6561 2.64431 16.6881 2.72495 16.7035 2.80968C16.7362 2.9804 16.7014 3.15744 16.6069 3.30188L15.8274 4.49819C15.7818 4.57154 15.7224 4.63474 15.6526 4.68406C15.5828 4.73338 15.504 4.76781 15.421 4.78531C15.2548 4.81856 15.0826 4.78358 14.9413 4.6879C14.8013 4.59093 14.7034 4.44207 14.6681 4.2726C14.6355 4.10189 14.6702 3.92485 14.7647 3.78041L15.5459 2.58409V2.57897ZM6.36827 13.8209C5.88321 13.2987 5.47727 12.7047 5.16402 12.0589C4.82356 11.3363 4.64649 10.5441 4.64601 9.74147C4.66298 8.87874 4.88055 8.03266 5.28061 7.27364C5.28404 7.26831 5.28684 7.26257 5.28894 7.25655C5.79619 6.35408 6.58129 5.65012 7.52089 5.25529C8.25635 4.95195 9.05218 4.83472 9.84111 4.91349C10.6231 4.98559 11.38 5.23358 12.0581 5.63982C12.9264 6.15375 13.6059 6.94644 13.9919 7.89573C14.2372 8.498 14.3635 9.14425 14.3635 9.79701C14.3635 10.4498 14.2372 11.096 13.9919 11.6983C13.5438 12.8177 12.5178 14.014 11.8449 15.1078C11.808 15.1 11.7701 15.1 11.7333 15.1078L7.3893 15.7658C7.16959 15.058 6.82335 14.3985 6.36827 13.8209Z"
                    fill="#FF0202"
                  />
                </svg>
              </span>
              <p className="text-[#2E70DD] text-lg pt-1">Examples</p>
            </div>
            <p className="text-white text-xs text-justify py-3">
              -The solution is capable of answering a wide variety of questions,
              ranging from factual queries to more complex inquiries. They can
              provide information on general knowledge topics based on the
              training data.
            </p>
            <p className="text-white text-xs text-justify py-3">
              Our solution can summarize long passages of text into shorter,
              more concise versions while retaining the essential information.
            </p>
            <p className="text-white text-xs text-justify py-3">
              The solution is able to reference and incorporate information from
              previous parts of the conversation to provide more contextually
              relevant answers
            </p>
            <p className="text-white text-xs text-justify py-3">
              The solution can understand and interpret large volumes of natural
              language input, including context, syntax, and semantics. They can
              grasp the meaning of user queries and generate relevant responses.
            </p>
          </div>
          <div className="md:w-1/2 min-h-full bg-[#021634] rounded-md p-6">
            <div className="flex items-center ">
              <span className="pe-3">
                <svg
                  width="19"
                  height="21"
                  viewBox="0 0 19 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.36169 21L9.158 12.8277L0 11.7753L13.3594 0H14.6834L9.77431 8.19325L19 9.22352L5.64062 20.9988L4.36169 21ZM7.733 17.5041L16.2569 10.0896L7.86125 9.16764L11.305 3.45634L2.74312 10.8929L11.1102 11.8766L7.733 17.5041Z"
                    fill="#FF0202"
                  />
                </svg>
              </span>
              <p className="text-[#2E70DD] text-lg pt-1">Capabilities</p>
            </div>
            <p className="text-xs text-justify text-white py-3">
              Tourism: The solution can be used as a virtual agent for tour
              operators, customers as well as Tourism officials for generating
              answers to queries, give insights of trend and future business
              advices based on the data analysis.
            </p>
            <p className="text-xs text-justify text-white py-3">
              Content Creation: Our tool can turn manual forms into digital
              forms, summarize information, and generate content . It&#39;s
              handy for creating brief summaries of news articles, blog posts,
              or other text.
            </p>
            <p className="text-xs text-justify text-white py-3">
              Legal: For legal professionals and researchers, our solution
              provides information, summarizes legal documents, and generates
              content for legal writing, like legal papers and input for
              predictions.
            </p>
            <p className="text-xs text-justify text-white py-3">
              Various Uses: Our solution can be used in insurance, tourism,
              personal assistant, Recruitment agencies and many other areas
            </p>
          </div>
        </div>
      </div> */}

      <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }'
        className="relative mt-10"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-[400px] rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="relative hs-carousel-slide">
              <div className="flex justify-center h-full p-6">
                <span className="self-center text-4xl transition duration-700">
                  <Image
                    src={Law1}
                    alt="costa-rica"
                    className="h-full w-full"
                  />
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">
                      Get Lost in The Mountains of Costa Rica
                    </h2>
                  </div> */}
                </span>
              </div>
            </div>
            <div className="relative hs-carousel-slide">
              <div className="flex justify-center h-full p-6">
                <span className="self-center text-4xl transition duration-700">
                  <Image
                    src={Law2}
                    alt="costa-rica"
                    className="h-full w-full"
                  />
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">
                      Beaches of Costa Rica
                    </h2>
                  </div> */}
                </span>
              </div>
            </div>
            {/* <div className="relative hs-carousel-slide">
              <div className="flex justify-center h-full p-6">
                <span className="self-center text-4xl transition duration-700">
                  <Image
                    src={image3}
                    alt="costa-rica"
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">
                      Nature of Costa Rica
                    </h2>
                  </div>
                </span>
              </div>
            </div> */}
          </div>
        </div>

        <button
          type="button"
          className="bg-gray-100/80 hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="bg-gray-100/80 duration-100 hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
      </div>
      {/* <PrelineScript /> */}
    </div>
  )
}

export default Initial
