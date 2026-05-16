import {
  createTreatmentMetadata,
  TreatmentPage,
  type TreatmentPageData
} from "@/components/treatment/treatment-page";

const teethCleaning: TreatmentPageData = {
  pagePath: "/teeth-cleaning-in-viman-nagar",
  metaTitle: "Teeth Cleaning in Viman Nagar | Dental Scaling Near Me",
  metaDescription:
    "Get professional teeth cleaning and dental scaling in Viman Nagar at Dr. Varun's Dental Clinic. Visit an experienced dentist for tartar removal, polishing, bad breath and gum care.",
  ogTitle: "Teeth Cleaning in Viman Nagar, Pune",
  ogDescription:
    "Professional dental scaling, polishing, tartar removal, bad breath care, and bleeding gums evaluation in Viman Nagar.",
  structuredPageName: "Teeth Cleaning in Viman Nagar, Pune",
  breadcrumbName: "Teeth Cleaning in Viman Nagar",
  h1Lines: ["Teeth Cleaning", "in Viman Nagar,", "Pune"],
  heroBadge: "Preventive gum care",
  heroBadgeIcon: "sparkles",
  heroIntro:
    "Professional dental scaling and polishing to remove tartar, reduce bad breath, and support healthier gums.",
  heroImage: "/images/teeth-cleaning-viman-nagar.jpg",
  heroAlt: "Dental scaling near me for tartar removal in Viman Nagar Pune",
  ogImageAlt: "Teeth cleaning in Viman Nagar at Dr. Varun's Dental Clinic",
  heroObjectPosition: "48% 50%",
  heroGradientClassName:
    "absolute inset-0 bg-[linear-gradient(90deg,rgba(72,39,10,0.92)_0%,rgba(108,60,17,0.68)_46%,rgba(255,248,239,0.08)_100%)]",
  ctaLabel: "Call for Cleaning Appointment",
  quickTreatment: "Scaling, polishing, bad breath care, and bleeding gums evaluation",
  symptomsKicker: "You may need cleaning for",
  symptomsTitle: "Tartar and gums should not be left waiting.",
  symptomsVisibleCount: 6,
  symptoms: [
    "Yellow or brown tartar deposits",
    "Bad breath that does not improve with brushing",
    "Bleeding gums while brushing",
    "Swollen or tender gums",
    "Food getting stuck between teeth",
    "Visible stains from tea, coffee, tobacco, or smoking",
    "Rough feeling on teeth",
    "Long gap since your last dental checkup"
  ],
  overviewKicker: "What Is Dental Scaling?",
  overviewTitle: "Professional cleaning removes what brushing cannot.",
  overviewParagraphs: [
    "Teeth cleaning, also known as dental scaling, removes plaque, tartar, stains, and bacterial deposits from the teeth and gumline. Plaque is soft, but once it hardens into tartar it cannot be removed by brushing or home remedies.",
    "During scaling, the dentist cleans tooth surfaces, the gumline, and areas between teeth using dental instruments or ultrasonic scalers. Polishing may be done afterward to make the tooth surface smoother and cleaner.",
    "The goal is simple: prevent gum disease, control bad breath, reduce tartar build-up, and maintain long-term oral health."
  ],
  reasonsTitle: "Gentle preventive care for cleaner teeth and healthier gums.",
  reasonsDescription:
    "Patients receive a gum and teeth evaluation, gentle scaling, polishing guidance, and clear home-care advice after treatment.",
  reasons: [
    {
      title: "17+ Years Experience",
      text: "Dr. Varun Tomke provides preventive and advanced dental care with patient-first guidance."
    },
    {
      title: "Gentle Scaling",
      text: "Cleaning is planned to remove deposits carefully while keeping the visit comfortable."
    },
    {
      title: "Scaling and Polishing",
      text: "Professional cleaning can remove tartar, plaque, and minor external stains for a fresher feel."
    },
    {
      title: "Near PNG Jewellers",
      text: "Visit Shop No. 3, Ideal Landmark, besides PNG Jewellers in Viman Nagar."
    }
  ],
  stepsTitle: "How teeth cleaning is done at the clinic.",
  steps: [
    {
      title: "Dental Examination",
      text: "The dentist checks tartar build-up, plaque deposits, gum bleeding, bad breath, cavities, stains, existing restorations, and overall oral hygiene."
    },
    {
      title: "Plaque and Tartar Removal",
      text: "Plaque and hardened tartar are removed from the tooth surface and gumline using dental scaling instruments or ultrasonic cleaning."
    },
    {
      title: "Cleaning Between Teeth",
      text: "Areas between the teeth are cleaned carefully to remove food debris and deposits where gum problems and cavities often begin."
    },
    {
      title: "Teeth Polishing",
      text: "After scaling, polishing may be done to smoothen the tooth surface and remove minor external stains."
    },
    {
      title: "Oral Hygiene Guidance",
      text: "The dentist may guide you on brushing technique, flossing, interdental brushes, mouthwash, gum care, and follow-up intervals."
    }
  ],
  procedureImage: "/images/root-canal-treatment-clinic.jpg",
  procedureImageAlt: "Dentist performing professional teeth cleaning in Viman Nagar",
  procedureImageObjectPosition: "48% 50%",
  procedureNoteTitle: "Does cleaning whiten teeth?",
  procedureNoteText:
    "Scaling removes external stains and tartar, so teeth may look cleaner and brighter, but whitening is a separate cosmetic treatment.",
  highlightKicker: "Bad breath, bleeding gums and timing",
  highlightTitle: "Cleaning helps catch gum problems before they grow.",
  infoTiles: [
    {
      icon: "smile",
      title: "Bad breath care",
      text: "Scaling can help reduce bad breath caused by tartar, plaque, gum infection, food lodgement, and bacterial deposits."
    },
    {
      icon: "shield",
      title: "Bleeding gums",
      text: "Cleaning removes bacteria and deposits that irritate gums. With proper home care, bleeding often reduces over time."
    },
    {
      icon: "clock",
      title: "Every six months",
      text: "Most patients benefit from cleaning every six months, while gum concerns or heavy tartar may need closer follow-up."
    }
  ],
  benefitsTitle: "Cleaner teeth, fresher breath, and better gum protection.",
  benefitsDescription:
    "Regular dental scaling is one of the simplest preventive ways to protect oral health and reduce gum-related problems.",
  benefits: [
    "Removes tartar and plaque build-up",
    "Reduces gum bleeding",
    "Improves bad breath",
    "Helps prevent gum infection",
    "Reduces stains and improves cleanliness",
    "Supports long-term gum health",
    "Helps detect cavities and gum problems early",
    "Maintains crowns, bridges, braces, and implants better"
  ],
  extra: {
    kicker: "Cost and frequency",
    title: "Cleaning cost depends on tartar, stains, and gum condition.",
    text:
      "Routine dental scaling usually costs less than advanced gum treatment. Heavy tartar, gum infection, deep pockets, or periodontal disease may need deep cleaning or additional gum care.",
    estimateTitle: "Estimate after examination",
    estimateText:
      "The dentist will check tartar level, stains, gum health, polishing needs, and whether deeper gum care is required before confirming the cost.",
    listTitle: "You may need cleaning more often if you have",
    list: [
      "Bleeding gums",
      "Bad breath",
      "Heavy tartar build-up",
      "Smoking or tobacco habits",
      "Diabetes",
      "Braces or aligners",
      "Dental implants",
      "Crowns or bridges",
      "Gum disease history"
    ],
    listVisibleCount: 6
  },
  faqTitle: "Teeth cleaning questions patients usually ask first.",
  faqs: [
    {
      question: "What is teeth cleaning or dental scaling?",
      answer:
        "Teeth cleaning, also called dental scaling, is a professional dental procedure used to remove plaque, tartar, stains, and bacterial deposits from the teeth and gumline. It helps maintain clean teeth, healthy gums, and fresh breath."
    },
    {
      question: "Is teeth cleaning painful?",
      answer:
        "Teeth cleaning is usually not painful. Most patients feel mild vibration or pressure. If there is heavy tartar, gum swelling, or sensitivity, slight discomfort may be felt in some areas, but it is generally manageable."
    },
    {
      question: "How often should I get teeth cleaning done?",
      answer:
        "Most patients should get professional teeth cleaning every six months. Patients with gum disease, smoking habits, diabetes, braces, implants, crowns, bridges, or heavy tartar may need more frequent cleaning."
    },
    {
      question: "Does dental scaling make teeth white?",
      answer:
        "Dental scaling removes external stains and tartar, so teeth may look cleaner and brighter after the procedure. It does not change the natural shade of teeth like professional teeth whitening."
    },
    {
      question: "Can teeth cleaning damage enamel?",
      answer:
        "No. Professional teeth cleaning does not damage healthy enamel when done correctly. It removes plaque and tartar deposits from the tooth surface and gumline."
    },
    {
      question: "Why do gums bleed during or after cleaning?",
      answer:
        "Gums may bleed during cleaning if they are already inflamed due to plaque, tartar, or gum infection. After proper cleaning and improved oral hygiene, gum bleeding usually reduces over time."
    },
    {
      question: "Can teeth cleaning remove bad breath?",
      answer:
        "Yes, teeth cleaning can help reduce bad breath caused by plaque, tartar, gum infection, or bacterial deposits. If bad breath continues, the dentist may check for cavities, gum disease, tongue coating, or other causes."
    },
    {
      question: "What is the difference between teeth cleaning and deep cleaning?",
      answer:
        "Routine teeth cleaning removes plaque and tartar from the tooth surface and gumline. Deep cleaning may be needed when gum disease has created deeper pockets around teeth."
    },
    {
      question: "Is polishing included after teeth cleaning?",
      answer:
        "In many cases, polishing is done after scaling to smoothen the tooth surface and remove minor external stains. The dentist will advise whether polishing is suitable based on your teeth and gum condition."
    },
    {
      question: "Where can I get teeth cleaning in Viman Nagar?",
      answer:
        "You can visit Dr. Varun's Dental Clinic in Viman Nagar, Pune for teeth cleaning, dental scaling, teeth polishing, bad breath care, bleeding gums evaluation, and preventive dental checkups."
    }
  ],
  ctaKicker: "Teeth cleaning near me in Viman Nagar",
  ctaTitle: "Tartar build-up, bad breath, bleeding gums, or stains should be checked early.",
  ctaText:
    "Visit Dr. Varun's Dental Clinic for teeth cleaning, dental scaling, teeth polishing, bad breath care, bleeding gums evaluation, and preventive dental checkups in Viman Nagar.",
  internalLinks: [
    { label: "routine dental checkup", href: "/our-services" },
    { label: "bleeding gums and gum disease treatment", href: "/our-services" },
    { label: "professional teeth whitening after cleaning", href: "/our-services" },
    { label: "tooth coloured dental filling", href: "/our-services" },
    { label: "urgent dental care for gum swelling or pain", href: "/our-services" }
  ],
  structuredProcedureName: "Teeth Cleaning and Dental Scaling",
  structuredHowPerformed:
    "Plaque, tartar, stains, and bacterial deposits are removed from the teeth and gumline, followed by polishing and oral hygiene guidance when suitable."
};

export const metadata = createTreatmentMetadata(teethCleaning);

export default function TeethCleaningPage() {
  return <TreatmentPage data={teethCleaning} />;
}
