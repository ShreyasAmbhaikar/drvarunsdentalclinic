import {
  createTreatmentMetadata,
  TreatmentPage,
  type TreatmentPageData
} from "@/components/treatment/treatment-page";

const wisdomToothSurgery: TreatmentPageData = {
  pagePath: "/wisdom-tooth-surgery-in-viman-nagar",
  metaTitle: "Wisdom Tooth Surgery in Viman Nagar | Impacted Tooth Cap Clinic Near Me",
  metaDescription:
    "Get expert wisdom tooth surgery in Viman Nagar at Dr. Varun's Dental Clinic. Painless removal of impacted, tilted, and painful wisdom teeth by experienced surgeons.",
  ogTitle: "Wisdom Tooth Surgery & Impacted Extraction in Viman Nagar, Pune",
  ogDescription:
    "Painless surgical extraction of impacted, decayed, or painful wisdom teeth. Advanced osteotomy and surgical tooth removal in Viman Nagar, Pune.",
  structuredPageName: "Wisdom Tooth Surgery in Viman Nagar, Pune",
  breadcrumbName: "Wisdom Tooth Surgery",
  h1Lines: ["Wisdom Tooth", "Surgery in", "Viman Nagar"],
  heroBadge: "Surgical Oral Extraction",
  heroBadgeIcon: "sparkles",
  heroIntro:
    "Eliminate pain, pressure, and dental infections with our precise, painless surgical extraction of impacted wisdom teeth.",
  heroImage: "/images/wisdom-tooth-extraction-viman-nagar.webp",
  heroAlt: "Impacted wisdom tooth surgery near me in Viman Nagar Pune at Dr. Varun's Dental Clinic",
  ogImageAlt: "Wisdom Tooth Surgery in Viman Nagar at Dr. Varun's Dental Clinic",
  heroObjectPosition: "50% 50%",
  heroGradientClassName:
    "absolute inset-0 bg-[linear-gradient(90deg,rgba(52,27,7,0.96)_0%,rgba(90,47,11,0.80)_46%,rgba(255,248,239,0.12)_100%)]",
  ctaLabel: "Book Wisdom Tooth Consultation",
  quickTreatment: "Surgical removal of impacted, horizontally tilted, and painful wisdom teeth",
  symptomsKicker: "When do you need wisdom tooth surgery?",
  symptomsTitle: "Tilted or trapped wisdom teeth can trigger severe dental infections.",
  symptomsVisibleCount: 6,
  symptoms: [
    "Severe ache or pressure pain at the back of your jaws",
    "Swelling, redness, or infection in the gums around the tooth (pericoronitis)",
    "Difficulty opening your mouth fully (lockjaw or trismus)",
    "Frequent food lodgement behind the last standing molar",
    "Wisdom tooth pushing and causing crowding in front teeth",
    "Cysts or fluid-filled sacs developing around the trapped tooth crown",
    "Decay on the wisdom tooth or the neighboring second molar",
    "Chronic headaches or earaches caused by deep jaw bone pressure"
  ],
  overviewKicker: "What Is Wisdom Tooth Surgery?",
  overviewTitle: "Painless surgical extraction of trapped or impacted molars.",
  overviewParagraphs: [
    "Wisdom teeth (third molars) are the last teeth to erupt, usually between ages 17 and 25. Because modern jaws often do not have enough space, these teeth frequently become 'impacted'—meaning they remain trapped under the bone or gums, growing at abnormal angles (horizontal, vertical, or tilted).",
    "Traditional extraction works for normally erupted teeth. However, impacted teeth require wisdom tooth surgery (surgical extraction). This involve gently opening the overlying gum tissue, carefully removing a small amount of surrounding bone (osteotomy) if necessary to access the tooth, sectioning the tooth into pieces for easier removal, and placing dissolvable stitches.",
    "Performed under local anesthesia, the procedure is completely painless. Removing problematic wisdom teeth early prevents decay on adjacent teeth, gum infections, and severe jaw discomfort."
  ],
  reasonsTitle: "Expert oral surgery for comfortable and precise extractions.",
  reasonsDescription:
    "We use advanced digital X-rays and 3D imaging to map the tooth roots relative to sensory nerves, ensuring a safe procedure.",
  reasons: [
    {
      title: "17+ Years Experience",
      text: "Dr. Varun Tomke utilizes precise surgical techniques to minimize bone loss and ensure rapid post-operative healing."
    },
    {
      title: "Nerve Safety Mapping",
      text: "We study root relationships to the alveolar nerve on digital scans, ensuring no nerve irritation during surgery."
    },
    {
      title: "Painless Anesthesia",
      text: "Advanced local anesthesia blocks pain completely, keeping you relaxed and comfortable throughout the extraction."
    },
    {
      title: "Suture & Healing Care",
      text: "We place precise dissolvable sutures to close the gums and provide full post-operative instructions and medications."
    }
  ],
  stepsTitle: "The wisdom tooth surgery process.",
  steps: [
    {
      title: "X-Ray & Nerve Assessment",
      text: "We take a digital OPG X-ray or CBCT scan to evaluate root curvature, bone coverage, and proximity to the sensory nerve."
    },
    {
      title: "Anesthesia & Numbing",
      text: "Local anesthesia is administered to completely numb the wisdom tooth, jawbone, and surrounding gum tissues."
    },
    {
      title: "Gum Incision & Bone Release",
      text: "A small incision is made in the gum to expose the tooth. If bone covers the tooth, a small amount is gently polished away."
    },
    {
      title: "Tooth Sectioning & Removal",
      text: "The wisdom tooth is often cut into smaller sections, allowing us to remove it safely piece-by-piece without stress on the jaw."
    },
    {
      title: "Cleaning, Suturing & Gauze",
      text: "The socket is cleaned, and stitches are placed to close the gums. You will bite on a sterile gauze pad to stop minor bleeding."
    }
  ],
  procedureImage: "/images/wisdom-tooth-xray-consultation-viman-nagar.webp",
  procedureImageAlt: "Dentist showing wisdom tooth X-ray to a patient in Viman Nagar clinic",
  procedureImageObjectPosition: "50% 50%",
  procedureNoteTitle: "What is the recovery time after surgery?",
  procedureNoteText:
    "Initial healing takes 3 to 5 days. Mild swelling and stiffness are normal and subside with prescribed anti-inflammatory medicines and warm salt water rinses.",
  highlightKicker: "Safe surgical oral extractions",
  highlightTitle: "Resolving back jaw pain and preventing damage to adjacent teeth.",
  infoTiles: [
    {
      icon: "shield",
      title: "Impacted Removal",
      text: "Surgical access to extract teeth fully trapped beneath the bone, avoiding future tooth decay and cyst formation."
    },
    {
      icon: "smile",
      title: "Adjacent Protection",
      text: "Removing tilted wisdom teeth prevents them from pushing against and decaying the root of your critical chewing molars."
    },
    {
      icon: "clock",
      title: "Bite Comfort",
      text: "Eliminating chronic pressure and swelling behind the last molars, allowing you to chew and open your mouth comfortably."
    }
  ],
  benefitsTitle: "Relieve jaw pain, stop infections, and protect your bite.",
  benefitsDescription:
    "Surgical extraction of impacted wisdom teeth protects neighboring teeth from decay and prevents recurrent painful infections.",
  benefits: [
    "Stops chronic, throbbing pain at the back of the mouth",
    "Prevents pericoronitis (painful gum swelling around wisdom teeth)",
    "Protects neighboring second molars from decay and root damage",
    "Reduces pressure that can lead to front teeth crowding",
    "Prevents development of jaw bone cysts and infections",
    "Resolves difficulty in mouth opening caused by pressure",
    "Performed under complete local anesthesia for zero pain",
    "Promotes healthy, clean gum tissue behind the last molars"
  ],
  extra: {
    kicker: "Post-operative recovery guidelines",
    title: "How to ensure smooth healing after wisdom tooth surgery.",
    text:
      "For the first 24 hours, avoid spitting, sucking through a straw, smoking, or drinking alcohol, as these actions can dislodge the blood clot and cause a painful condition called 'dry socket'. Eat soft, cool foods and maintain a liquid diet on day one.",
    estimateTitle: "What is the cost of wisdom tooth surgery?",
    estimateText:
      "The cost of removal depends on the complexity of the impaction. A simple erupted wisdom tooth extraction is less expensive, while bone-impacted or horizontally lying teeth require specialized surgical equipment and time.",
    listTitle: "Instructions for the first 48 hours after surgery",
    list: [
      "Keep the gauze pad in place for 45 to 60 minutes after surgery, biting gently but firmly",
      "Apply an ice pack to the outside of your cheek for 10-minute intervals to reduce swelling",
      "Do not brush the surgery site or rinse vigorously on the first day",
      "From the second day, rinse gently with warm salt water 4 to 5 times a day",
      "Eat soft foods like curd rice, ice cream, soup, or mashed potatoes (avoid hot or spicy food)"
    ],
    listVisibleCount: 5
  },
  faqTitle: "Frequently asked questions about Wisdom Tooth Surgery.",
  faqs: [
    {
      question: "Is wisdom tooth removal painful?",
      answer:
        "The procedure itself is completely painless as it is performed under local anesthesia. After the anesthesia wears off, some throbbing pain, jaw stiffness, and swelling are normal for 3 to 4 days, which can be easily managed with prescribed medications."
    },
    {
      question: "What is an impacted wisdom tooth?",
      answer:
        "An impacted wisdom tooth is one that fails to erupt fully into its normal position because it is blocked by other teeth or jawbone. It may remain completely hidden under the gums or emerge partially at an angle."
    },
    {
      question: "What is the cost of wisdom tooth surgery in Viman Nagar?",
      answer:
        "A simple wisdom tooth extraction costs around Rs. 2,500 to Rs. 4,500. A surgical extraction for an impacted or tilted wisdom tooth requiring bone removal and tooth sectioning ranges from Rs. 6,000 to Rs. 12,000 per tooth, depending on complexity."
    },
    {
      question: "What is a dry socket and how can I prevent it?",
      answer:
        "Dry socket occurs when the blood clot in the extraction socket dissolves or is dislodged, exposing the underlying bone and nerves. It causes severe pain. You can prevent it by avoiding spitting, smoking, sucking through straws, or rinsing vigorously for the first 24 hours."
    },
    {
      question: "Do I need stitches after wisdom tooth surgery?",
      answer:
        "Yes, stitches are usually placed to close the gum incision and promote neat healing. We typically use dissolvable stitches that disappear on their own in 7 to 10 days, or non-dissolvable ones that we quickly remove at a follow-up visit."
    },
    {
      question: "How long does the wisdom tooth surgery take?",
      answer:
        "A simple extraction takes about 15 to 20 minutes. A surgical extraction for an impacted tooth usually takes between 30 to 60 minutes, depending on the tooth's orientation and root structure."
    },
    {
      question: "Can I drive home after wisdom tooth surgery?",
      answer:
        "If the surgery is performed under local anesthesia (which only numbs the mouth), you are completely alert and can drive home safely. If sedation or general anesthesia is used, you will need someone to accompany you."
    }
  ],
  ctaKicker: "Oral surgeon and wisdom tooth surgery near me in Viman Nagar",
  ctaTitle: "Get relief from wisdom tooth pain with painless surgical care.",
  ctaText:
    "Visit Dr. Varun's Dental Clinic for impacted wisdom tooth surgery, surgical extractions, painless tooth removals, and jaw pain relief in Viman Nagar, Pune.",
  internalLinks: [
    { label: "painless tooth extraction for non-wisdom teeth", href: "/extraction-in-viman-nagar" },
    { label: "dental implants to replace missing molars", href: "/dental-implant-in-viman-nagar" },
    { label: "all gum care for back gums swelling", href: "/all-gum-care-in-viman-nagar" },
    { label: "root canal treatment to salvage teeth", href: "/root-canal-treatment-in-viman-nagar" },
    { label: "routine dental checkup and consultation", href: "/our-services" }
  ],
  structuredProcedureName: "Surgical Wisdom Tooth Extraction",
  structuredHowPerformed:
    "A gum incision is made, bone blocking the tooth is removed under local anesthesia, the tooth is sectioned and extracted, and dissolvable sutures are placed to close the gums."
};

export const metadata = createTreatmentMetadata(wisdomToothSurgery);

export default function WisdomToothSurgeryPage() {
  return <TreatmentPage data={wisdomToothSurgery} />;
}
