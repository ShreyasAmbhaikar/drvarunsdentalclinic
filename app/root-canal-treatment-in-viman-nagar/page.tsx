import {
  createTreatmentMetadata,
  TreatmentPage,
  type TreatmentPageData
} from "@/components/treatment/treatment-page";

const rootCanalTreatment: TreatmentPageData = {
  pagePath: "/root-canal-treatment-in-viman-nagar",
  metaTitle: "Root Canal Treatment in Viman Nagar | Painless RCT Near Me",
  metaDescription:
    "Get painless root canal treatment in Viman Nagar at Dr. Varun's Dental Clinic. Visit an experienced dentist for tooth pain, infection, RCT, filling and dental crown care.",
  ogTitle: "Root Canal Treatment in Viman Nagar, Pune",
  ogDescription:
    "Comfortable, tooth-saving root canal treatment for tooth pain, swelling, sensitivity, and dental infection in Viman Nagar.",
  structuredPageName: "Root Canal Treatment in Viman Nagar, Pune",
  breadcrumbName: "Root Canal Treatment in Viman Nagar",
  h1Lines: ["Root Canal", "Treatment in", "Viman Nagar,", "Pune"],
  heroBadge: "Tooth-saving RCT in Viman Nagar",
  heroIntro:
    "Painless, careful root canal treatment at Dr. Varun's Dental Clinic to relieve tooth pain, control infection, and help save your natural tooth.",
  heroImage: "/images/root-canal-treatment-clinic.jpg",
  heroAlt: "Dentist performing painless root canal treatment in Viman Nagar Pune",
  ogImageAlt: "Root canal treatment in Viman Nagar at Dr. Varun's Dental Clinic",
  heroGradientClassName:
    "absolute inset-0 bg-[linear-gradient(90deg,rgba(72,39,10,0.88)_0%,rgba(108,60,17,0.58)_45%,rgba(255,248,239,0.05)_100%)]",
  ctaLabel: "Call for RCT Consultation",
  quickTreatment: "Single or multiple visits depending on infection and tooth condition",
  symptomsKicker: "Common warning signs",
  symptomsTitle: "When tooth pain should not wait",
  symptomsVisibleCount: 6,
  symptoms: [
    "Continuous tooth pain or throbbing pain",
    "Sensitivity to hot or cold food and drinks",
    "Pain while chewing or biting",
    "Swelling around the gums or jaw",
    "Deep cavity or black discoloration in the tooth",
    "Pus, gum boil, or recurring infection",
    "Cracked, fractured, or injured tooth",
    "Pain that disturbs sleep or daily routine"
  ],
  overviewKicker: "What Is RCT?",
  overviewTitle: "A modern way to remove infection while keeping your natural tooth.",
  overviewParagraphs: [
    "Root canal treatment, also called RCT, treats infection inside the tooth. Every tooth has soft inner tissue called pulp, which contains nerves and blood vessels. Deep decay, cracks, trauma, or repeated dental problems can inflame or infect this pulp.",
    "During treatment, the infected pulp is removed, the canals are cleaned and disinfected, and the tooth is sealed before being restored with a filling or crown. The aim is simple: save your natural tooth instead of removing it.",
    "If you are searching for a dentist near me for root canal treatment, painless root canal treatment in Viman Nagar, or a trusted dental clinic near PNG Jewellers, Dr. Varun's Dental Clinic offers experienced care in a clean, patient-friendly environment."
  ],
  reasonsTitle: "Root canal care that feels clear, calm, and carefully planned.",
  reasonsDescription:
    "Patients appreciate the clinic for clear explanations, cleanliness, punctuality, and supportive dental care.",
  reasons: [
    {
      title: "17+ Years Experience",
      text: "Dr. Varun Tomke brings advanced dental care experience with a calm, explanatory approach."
    },
    {
      title: "Comfort-First RCT",
      text: "Modern anaesthesia, gentle handling, and clear planning help keep treatment reassuring."
    },
    {
      title: "Clean Clinic Environment",
      text: "The clinic focuses on hygiene, punctuality, and a patient-friendly experience."
    },
    {
      title: "Easy Viman Nagar Location",
      text: "Visit Shop No. 3, Ideal Landmark, besides PNG Jewellers in Viman Nagar."
    }
  ],
  stepsTitle: "How root canal treatment is done at the clinic.",
  steps: [
    {
      title: "Dental Examination and X-Ray",
      text: "The tooth is checked carefully and an X-ray may be advised to understand the root shape, infection level, and surrounding bone condition."
    },
    {
      title: "Local Anaesthesia",
      text: "The treatment area is numbed so the root canal procedure can be completed comfortably."
    },
    {
      title: "Cleaning the Infected Pulp",
      text: "The infected pulp is removed and the root canals are cleaned, shaped, and disinfected with precision."
    },
    {
      title: "Filling and Sealing",
      text: "The cleaned canals are filled with a suitable biocompatible material to seal the internal space."
    },
    {
      title: "Tooth Restoration",
      text: "The tooth is restored with a filling, and in many molars or premolars a dental crown is recommended for long-term chewing strength."
    }
  ],
  procedureImage: "/images/root-canal-clinic-room.jpg",
  procedureImageAlt: "Dental clinic in Viman Nagar for root canal and crown treatment",
  procedureNoteTitle: "Is RCT painful?",
  procedureNoteText:
    "The tooth area is numbed before treatment, so most patients feel comfortable during the procedure.",
  highlightKicker: "Crown, time and cost",
  highlightTitle: "What to expect after diagnosis.",
  infoTiles: [
    {
      icon: "smile",
      title: "Do you need a crown?",
      text: "Back teeth often need a dental crown after RCT, especially if the tooth has deep decay, a large cavity, or a previous filling."
    },
    {
      icon: "clock",
      title: "How long does it take?",
      text: "Some root canals can be completed in one visit, while infected or complex teeth may need two or more appointments."
    },
    {
      icon: "cost",
      title: "What is the cost?",
      text: "The cost depends on the tooth, number of canals, infection level, complexity, filling, and whether a crown is needed."
    }
  ],
  benefitsTitle: "Save the tooth, restore comfort, protect your bite.",
  benefitsDescription:
    "Timely root canal treatment can make a major difference in saving the tooth and preventing infection from spreading.",
  benefits: [
    "Relief from tooth pain and infection",
    "Saves the natural tooth",
    "Restores chewing comfort",
    "Prevents infection from spreading",
    "Maintains smile appearance",
    "Avoids unnecessary tooth removal",
    "Helps maintain proper bite balance",
    "Supports long-term oral health"
  ],
  faqSectionClassName: "bg-section-light px-6 py-16 md:px-14 md:py-20",
  faqTitle: "Root canal questions patients usually ask first.",
  faqs: [
    {
      question: "What is root canal treatment?",
      answer:
        "Root canal treatment is a dental procedure used to treat infection inside the tooth. The infected pulp is removed, the root canals are cleaned and disinfected, and the tooth is sealed and restored."
    },
    {
      question: "Is root canal treatment painful?",
      answer:
        "Modern root canal treatment is usually comfortable because the tooth area is numbed before the procedure. The treatment is designed to remove the source of pain caused by infection."
    },
    {
      question: "How do I know if I need a root canal?",
      answer:
        "You may need a root canal if you have continuous tooth pain, swelling, sensitivity to hot or cold, pain while chewing, a deep cavity, gum boil, or tooth discoloration. A dentist can confirm this after examination and X-ray."
    },
    {
      question: "Can root canal treatment save my tooth?",
      answer:
        "Yes. The main purpose of root canal treatment is to save the natural tooth by removing infection from inside it. If the tooth structure is still restorable, RCT can help avoid extraction."
    },
    {
      question: "How many sittings are required for root canal treatment?",
      answer:
        "Some cases can be completed in one sitting, while others need two or more visits depending on infection, swelling, tooth condition, and canal complexity."
    },
    {
      question: "Do I need a cap after root canal treatment?",
      answer:
        "A dental cap or crown is commonly recommended after root canal treatment, especially for back teeth or weak teeth. It helps protect the tooth from fracture and restores chewing strength."
    },
    {
      question: "What happens if I delay root canal treatment?",
      answer:
        "Delaying treatment can allow infection to spread, causing more pain, swelling, pus formation, bone loss, or tooth loss. Early treatment usually gives better outcomes."
    },
    {
      question: "Is root canal better than tooth extraction?",
      answer:
        "If the tooth can be saved, root canal treatment is usually preferred because it preserves your natural tooth. Extraction may be needed only when the tooth is too badly damaged to restore."
    },
    {
      question: "What is the cost of root canal treatment in Viman Nagar?",
      answer:
        "The cost depends on the tooth type, number of canals, infection severity, treatment complexity, and whether a crown is required. A proper dental checkup is needed for an accurate estimate."
    },
    {
      question: "Where can I get root canal treatment in Viman Nagar?",
      answer:
        "You can visit Dr. Varun's Dental Clinic at Shop No. 3, Ideal Landmark, Besides PNG Jewellers, Viman Nagar, Pune, Maharashtra 411014."
    }
  ],
  ctaKicker: "Root canal treatment near me in Viman Nagar",
  ctaTitle: "Tooth pain, swelling, sensitivity, or chewing discomfort should be checked early.",
  ctaText:
    "Visit Dr. Varun's Dental Clinic, Viman Nagar, Pune for root canal treatment, tooth pain treatment, fillings, dental crowns, and other dental care services.",
  internalLinks: [
    { label: "dental crown after root canal treatment", href: "/our-services" },
    { label: "tooth extraction when a tooth cannot be saved", href: "/our-services" },
    { label: "tooth coloured dental filling", href: "/our-services" },
    { label: "emergency tooth pain treatment", href: "/our-services" },
    { label: "routine dental checkup", href: "/our-services" }
  ],
  structuredProcedureName: "Root Canal Treatment",
  structuredHowPerformed:
    "The infected pulp is removed, root canals are cleaned and disinfected, and the tooth is sealed and restored with a filling or crown."
};

export const metadata = createTreatmentMetadata(rootCanalTreatment);

export default function RootCanalTreatmentPage() {
  return <TreatmentPage data={rootCanalTreatment} />;
}
