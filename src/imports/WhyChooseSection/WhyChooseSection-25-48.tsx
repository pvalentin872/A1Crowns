import imgImageYourSmileYourWay from "./3d86ce31ccbad9f15b220eeee687108352a93ff1.png";
import imgImageYourSmileYourWay1 from "./eab0114f9d25b35d0f5c9acb40a32436a11fc74f.png";
import imgImageYourSmileYourWay2 from "./ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgImageYourSmileYourWay3 from "./be519f46dc21aa6a339e63e520948d211aebfee7.png";

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-[1024px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Lato:Regular',sans-serif] leading-[21px] left-[511.79px] not-italic text-[#a58e55] text-[14px] text-center top-[-0.62px] tracking-[2.52px] uppercase whitespace-nowrap">WHY A1 SMILE DESIGN</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <p className="font-['Oswald:Light',sans-serif] font-light leading-[0] min-w-full relative shrink-0 text-[#f9f9f9] text-[0px] text-center w-[min-content]">
        <span className="leading-[48.4px] text-[44px]">{`Why `}</span>
        <span className="font-['Oswald:Bold',sans-serif] font-bold leading-[48.4px] text-[#c4a96a] text-[44px]">Thousands</span>
        <span className="leading-[48.4px] text-[44px]">{` Choose Us`}</span>
      </p>
      <p className="font-['Lato:Regular',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(249,249,249,0.8)] text-center w-[min-content]">{`We combine top-tier dental expertise with a world-class Cancun experience you won't find anywhere else.`}</p>
    </div>
  );
}

function ImageYourSmileYourWay() {
  return (
    <div className="relative self-stretch shrink-0 w-[498px]" data-name="Image (Your Smile. Your Way.)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageYourSmileYourWay} />
      <div className="size-full" />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <p className="font-['Lato:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#a58e55] text-[10px] tracking-[1.5px] uppercase w-full">LUXURY EXPERIENCE</p>
        <p className="font-['Oswald:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#f9f9f9] text-[24px] w-full">
          <span className="font-['Oswald:Light',sans-serif] font-light leading-[28.8px]">Clinic + Suites, The</span>
          <span className="leading-[28.8px]">{` A1 Tower`}</span>
        </p>
        <div className="font-['Lato:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(249,249,249,0.75)] w-full whitespace-pre-wrap">
          <p className="leading-[21px] mb-0">Speaking of the A1 Tower, the suites and clinic are divide into floor levels. This is why A1 Smile Design we will be just few floors away from your Luxury Suite.</p>
          <p className="leading-[21px] mb-0">​</p>
          <p className="leading-[21px]">The first two floors are fully equipped for dental procedures, general, restorative and cosmetic. While the next two floors are where all the A1 Luxury Suites Are located.</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <ImageYourSmileYourWay />
      <Container3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[0.08px] not-italic text-[#a58e55] text-[10px] top-[0.14px] tracking-[1.5px] uppercase whitespace-nowrap">PREMIUM DENTISTRY</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[29px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Oswald:SemiBold',sans-serif] font-semibold leading-[0] left-[0.08px] text-[#f9f9f9] text-[24px] top-[0.38px] whitespace-nowrap">
        <span className="leading-[28.8px]">Dental Service</span>
        <span className="font-['Oswald:Light',sans-serif] font-light leading-[28.8px]">{` at Your Door`}</span>
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[234px] items-start p-[24px] relative shrink-0 w-[524.388px]" data-name="Container">
      <Paragraph1 />
      <Heading />
      <div className="font-['Lato:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(249,249,249,0.75)] w-full whitespace-pre-wrap">
        <p className="leading-[21px] mb-0">No matter the time of your appointment, the main benefit of having luxury suites and a dental clinic in the same building is the contact facility between you and us.</p>
        <p className="leading-[21px] mb-0">​</p>
        <p className="leading-[21px]">You can come down to your appointment in your bed clothes, or even in a swimsuit (preferably dry), we will always be at your disposal.</p>
      </div>
    </div>
  );
}

function ImageYourSmileYourWay1() {
  return (
    <div className="h-[290px] relative shrink-0 w-[498px]" data-name="Image (Your Smile. Your Way.)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageYourSmileYourWay1} />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <ImageYourSmileYourWay1 />
    </div>
  );
}

function ImageYourSmileYourWay2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Image (Your Smile. Your Way.)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImageYourSmileYourWay2} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImageYourSmileYourWay3} />
      </div>
      <div className="size-full" />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <p className="font-['Lato:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#a58e55] text-[10px] tracking-[1.5px] uppercase w-full">in-house Laboratory</p>
        <p className="font-['Oswald:Light',sans-serif] font-light leading-[0] relative shrink-0 text-[#f9f9f9] text-[24px] w-full">
          <span className="font-['Oswald:Bold',sans-serif] font-bold leading-[28.8px]">{`High Tech Dentistry `}</span>
          <span className="leading-[28.8px]">in Playa del Carmen, Mexico</span>
        </p>
        <div className="font-['Lato:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(249,249,249,0.75)] w-full whitespace-pre-wrap">
          <p className="leading-[21px] mb-0">Speaking of the A1 Tower, the suites and clinic are divide into floor levels. This is why A1 Smile Design we will be just few floors away from your Luxury Suite.</p>
          <p className="leading-[21px] mb-0">​</p>
          <p className="leading-[21px]">The first two floors are fully equipped for dental procedures, general, restorative and cosmetic. While the next two floors are where all the A1 Luxury Suites Are located.</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <ImageYourSmileYourWay2 />
      <Container7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container4 />
      <Container6 />
    </div>
  );
}

export default function WhyChooseSection() {
  return (
    <div className="bg-[#21201e] content-stretch flex flex-col gap-[32px] items-start px-[401px] py-[40px] relative size-full" data-name="WhyChooseSection">
      <Container />
      <Container1 />
    </div>
  );
}