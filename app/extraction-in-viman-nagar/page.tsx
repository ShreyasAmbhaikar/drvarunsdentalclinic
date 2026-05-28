import {
  createTreatmentMetadata,
  TreatmentPage,
  type TreatmentPageData
} from "@/components/treatment/treatment-page";

const extraction: TreatmentPageData = {
  pagePath: "/extraction-in-viman-nagar",
  metaTitle: "Tooth Extraction in Viman Nagar | Painless Tooth Removal Near Me",
  metaDescription:
    "Get safe and painless tooth extraction in Viman Nagar at Dr. Varun's Dental Clinic. Get gentle tooth removal, broken root extractions, and socket preservation near you.",
  ogTitle: "Painless Tooth Extraction & Removal in Viman Nagar, Pune",
  ogDescription:
    "Gentle and pain-free simple or surgical tooth extraction in Viman Nagar, Pune. Safe dental extraction for decayed, broken, or crowded teeth.",
  structuredPageName: "Tooth Extraction in Viman Nagar, Pune",
  breadcrumbName: "Tooth Extraction",
  h1Lines: ["Tooth Extraction", "in Viman Nagar,", "Pune"],
  heroBadge: "Gentle Tooth Removal",
  heroBadgeIcon: "smile",
  heroIntro:
    "Experience gentle, painless tooth extraction in a calm environment when a tooth cannot be saved by other treatments.",
  heroImage: "/images/extraction-treatment-viman-nagar.webp",
  heroAlt: "Painless tooth extraction near me in Viman Nagar Pune at Dr. Varun's Dental Clinic",
  ogImageAlt: "Tooth Extraction in Viman Nagar at Dr. Varun's Dental Clinic",
  heroObjectPosition: "50% 50%",
  heroGradientClassName:
    "absolute inset-0 bg-[linear-gradient(90deg,rgba(52,27,7,0.96)_0%,rgba(90,47,11,0.80)_46%,rgba(255,248,239,0.12)_100%)]",
  ctaLabel: "Book Extraction Appointment",
  quickTreatment: "Painless tooth removal, surgical extractions, broken roots retrieval, and socket preservation",
  symptomsKicker: "When is tooth extraction necessary?",
  symptomsTitle: "A tooth is extracted only when saving it is no longer healthy for your mouth.",
  symptomsVisibleCount: 6,
  symptoms: [
    "Severe tooth decay that has destroyed most of the tooth structure",
    "Deeply broken or fractured teeth that cannot hold a crown",
    "Loose teeth caused by advanced gum disease (bone loss)",
    "Severe tooth infection or abscess that root canal cannot resolve",
    "Orthodontic crowding where teeth need space to be straightened",
    "Extra or supernumerary teeth blocking normal eruption",
    "Decayed, painful roots left behind from previously broken teeth",
    "Baby teeth that are loose or refuse to fall out naturally"
  ],
  overviewKicker: "What Is Tooth Extraction?",
  overviewTitle: "Painless removal of compromised teeth under local anesthesia.",
  overviewParagraphs: [
    "Tooth extraction is the complete removal of a tooth from its socket in the jawbone. At our clinic, we consider extraction a last resort. We make every effort to save natural teeth using fillings, crowns, or root canals. However, when a tooth is severely decayed, fractured, or compromised by gum disease, removing it is necessary to protect the rest of your mouth from infection.",
    "Extractions are divided into simple extractions (performed on teeth that are fully visible in the mouth, using specialized elevators and forceps) and surgical extractions (performed on teeth that are broken at the gumline, have curved roots, or are partially trapped under bone, requiring minor surgical access).",
    "Using advanced local anesthesia, the entire procedure is completely pain-free. We also offer socket preservation therapies, placing bone grafts in the empty socket immediately after extraction to prepare the site for a future dental implant."
  ],
  reasonsTitle: "Gentle and calm tooth removals with excellent post-extraction support.",
  reasonsDescription:
    "We plan extractions with care, focusing on preserving the surrounding bone and guiding you on comfortable replacement options.",
  reasons: [
    {
      title: "17+ Years Experience",
      text: "Dr. Varun Tomke performs gentle extractions, ensuring minimal trauma to the surrounding jawbone and gums."
    },
    {
      title: "Zero Pain Promise",
      text: "We use high-grade anesthetics to numb the tooth completely. You will feel pressure, but no pain."
    },
    {
      title: "Broken Root Experts",
      text: "We specialize in retrieving complex broken roots, ensuring the socket is cleaned and sutured perfectly."
    },
    {
      title: "Socket Preservation",
      text: "We offer immediate bone graft placements to preserve your jawbone width for future implant replacements."
    }
  ],
  stepsTitle: "The tooth extraction process.",
  steps: [
    {
      title: "X-Ray Assessment",
      text: "We take a digital dental X-ray to examine the tooth's root curvature, shape, bone height, and surrounding nerve pathways."
    },
    {
      title: "Local Numbing",
      text: "We apply a numbing gel to the gums, followed by local anesthesia, completely numbing the tooth and surrounding area."
    },
    {
      title: "Gentle Tooth Release",
      text: "Using specialized dental instruments (elevators), the tooth is gently loosened within its socket before forceps are used to lift it out."
    },
    {
      title: "Cleaning & Socket Care",
      text: "The extraction socket is thoroughly cleaned of any infected tissue. Sutures are placed if the extraction was surgical."
    },
    {
      title: "Pressure Gauze Placement",
      text: "We place a sterile cotton gauze pad over the socket. You will bite firmly on it for 45 minutes to control bleeding and allow a clot to form."
    }
  ],
  procedureImage: "/images/extraction-consultation-viman-nagar.webp",
  procedureImageAlt: "Dentist performing gentle tooth checkup and extraction preparation in Viman Nagar",
  procedureImageObjectPosition: "50% 50%",
  procedureNoteTitle: "Why replace a missing tooth?",
  procedureNoteText:
    "Leaving an empty space can cause neighboring teeth to tilt, shift, or collapse into the gap, disrupting your bite and leading to jaw pain and decay.",
  highlightKicker: "Gentle tooth removal care",
  highlightTitle: "Painless extractions and planning for functional tooth replacements.",
  infoTiles: [
    {
      icon: "smile",
      title: "Painless Removal",
      text: "Advanced local numbing blocks pain completely, keeping you relaxed and comfortable throughout the tooth removal."
    },
    {
      icon: "shield",
      title: "Bone Preservation",
      text: "Placing immediate bone grafts (socket preservation) protects jawbone density, facilitating future implant success."
    },
    {
      icon: "clock",
      title: "Quick Recovery",
      text: "Following our simple post-op instructions ensures the socket closes cleanly within 1 to 2 weeks."
    }
  ],
  benefitsTitle: "Stop tooth pain, control infection, and protect your jaw.",
  benefitsDescription:
    "Extracting a severely decayed tooth removes dental infections and prevents bacteria from spreading to adjacent healthy teeth.",
  benefits: [
    "Provides immediate relief from severe, throbbing toothache",
    "Stops the spread of dental abscesses and deep infections",
    "Removes severely loose teeth that cause pain while chewing",
    "Creates necessary space for orthodontic braces treatment",
    "Painless procedure under complete local anesthesia",
    "Sutures placed to ensure clean, rapid healing of the gums",
    "Enables immediate socket preservation for future implants",
    "Removes non-restorable broken root tips safely"
  ],
  extra: {
    kicker: "Post-extraction recovery care",
    title: "How to care for your mouth after a tooth removal.",
    text:
      "Avoid spitting, rinsing your mouth vigorously, drinking hot liquids, smoking, or drinking through a straw for the first 24 hours. These actions can dislodge the blood clot in the socket, leading to dry socket, which is extremely painful. Stick to cool, soft foods.",
    estimateTitle: "What is the cost of tooth extraction?",
    estimateText:
      "The cost of tooth extraction depends on whether the tooth is simple to remove or requires surgical extraction (such as deeply broken teeth or curved roots). An exact estimate is provided after viewing the tooth X-ray.",
    listTitle: "Guidelines for recovery after tooth extraction",
    list: [
      "Keep biting firmly on the cotton gauze pad for 45 to 60 minutes after the procedure",
      "Do not spit; swallow your saliva naturally to keep the blood clot stable",
      "Apply a cold compress or ice pack to the outside of your jaw to minimize swelling",
      "Avoid touching the socket with your tongue, fingers, or toothpicks",
      "From the next day, rinse very gently with warm salt water after meals to keep the socket clean"
    ],
    listVisibleCount: 5
  },
  faqTitle: "Frequently asked questions about Tooth Extraction.",
  faqs: [
    {
      question: "Will I feel pain during a tooth extraction?",
      answer:
        "No. We administer local anesthesia to numb the tooth and surrounding bone completely. You will feel some pressure and movement as the tooth is loosened, but you will not feel any pain. Let the dentist know if you feel any sharp sensations."
    },
    {
      question: "How long does the socket take to heal completely?",
      answer:
        "The gum tissue over the socket typically closes and heals in about 1 to 2 weeks. The underlying jawbone takes about 3 to 6 months to fully fill in and mature. You can resume normal eating habits within a few days."
    },
    {
      question: "What is the cost of tooth extraction in Viman Nagar, Pune?",
      answer:
        "A simple tooth extraction costs between Rs. 1,000 to Rs. 2,500. A surgical extraction (for deeply decayed roots or teeth broken beneath the gumline) ranges from Rs. 3,000 to Rs. 6,000. Wisdom tooth extractions are priced separately based on complexity."
    },
    {
      question: "What should I eat after a tooth removal?",
      answer:
        "Stick to a soft, cool diet for the first 24 to 48 hours. Excellent options include curd rice, ice cream, pudding, yogurt, smoothies, lukewarm soups, or mashed potatoes. Avoid hot, spicy, or crunchy foods that can get trapped in the socket."
    },
    {
      question: "Can I brush my teeth after an extraction?",
      answer:
        "Yes, you must continue brushing your other teeth to keep your mouth clean. However, avoid brushing directly over the extraction socket on the first day. From the second day, you can brush very gently around the adjacent teeth."
    },
    {
      question: "When can I replace my extracted tooth with an implant or bridge?",
      answer:
        "If socket preservation (bone graft) was performed, we can sometimes place an implant after 3 months of healing. In standard cases, implants or bridges are planned after 2 to 3 months of gum and bone healing."
    },
    {
      question: "What happens if a broken root is left in the jawbone?",
      answer:
        "Leaving a small root tip in the bone can occasionally lead to chronic pain, recurrent gum swelling, or deep jaw bone infections. It is best to have broken roots professionally retrieved by an oral surgeon."
    }
  ],
  ctaKicker: "Painless dentist and tooth removal near me in Viman Nagar",
  ctaTitle: "Painless tooth removals and strategic replacement planning.",
  ctaText:
    "Visit Dr. Varun's Dental Clinic for simple extractions, surgical tooth removals, broken root retrievals, socket preservation, and cosmetic tooth replacements in Viman Nagar, Pune.",
  internalLinks: [
    { label: "dental implant to replace missing teeth", href: "/dental-implant-in-viman-nagar" },
    { label: "wisdom tooth surgery for impacted back teeth", href: "/wisdom-tooth-surgery-in-viman-nagar" },
    { label: "all gum care for bleeding or loose teeth", href: "/all-gum-care-in-viman-nagar" },
    { label: "dental crowns and bridges for tooth gaps", href: "/crowns-and-bridges-in-viman-nagar" },
    { label: "tooth coloured fillings for decayed cavities", href: "/dental-tooth-filling-in-viman-nagar" }
  ],
  structuredProcedureName: "Painless Tooth Extraction",
  structuredHowPerformed:
    "Local anesthesia is administered, the tooth is gently loosened from the ligament using elevators, lifted out using forceps, the socket is curetted, and pressure gauze is applied to initiate clotting."
};

export const metadata = createTreatmentMetadata(extraction);

export default function ExtractionPage() {
  return <TreatmentPage data={extraction} />;
}
