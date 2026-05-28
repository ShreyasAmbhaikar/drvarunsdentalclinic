import {
  createTreatmentMetadata,
  TreatmentPage,
  type TreatmentPageData
} from "@/components/treatment/treatment-page";

const dentalJewellery: TreatmentPageData = {
  pagePath: "/dental-jewellery-in-viman-nagar",
  metaTitle: "Dental Jewellery in Viman Nagar | Tooth Gem Clinic Near Me",
  metaDescription:
    "Enhance your smile with safe dental jewellery in Viman Nagar at Dr. Varun's Dental Clinic. Get pain-free, non-invasive tooth crystals and diamond gems.",
  ogTitle: "Dental Jewellery & Tooth Gems in Viman Nagar, Pune",
  ogDescription:
    "Add a sparkle to your smile with certified tooth crystals, gems, and temporary dental jewellery in Viman Nagar, Pune. Painless and safe procedures.",
  structuredPageName: "Dental Jewellery in Viman Nagar, Pune",
  breadcrumbName: "Dental Jewellery",
  h1Lines: ["Dental Jewellery", "Treatment in", "Viman Nagar"],
  heroBadge: "Cosmetic Smile Enhancement",
  heroBadgeIcon: "sparkles",
  heroIntro:
    "Add a subtle, sparkling touch to your smile with our certified, safe, and completely non-invasive tooth jewellery.",
  heroImage: "/images/dental-jewellery-viman-nagar.webp",
  heroAlt: "Tooth gem crystal sparkling on white teeth in Viman Nagar Pune",
  ogImageAlt: "Dental Jewellery in Viman Nagar at Dr. Varun's Dental Clinic",
  heroObjectPosition: "50% 50%",
  heroGradientClassName:
    "absolute inset-0 bg-[linear-gradient(90deg,rgba(52,27,7,0.96)_0%,rgba(90,47,11,0.80)_46%,rgba(255,248,239,0.12)_100%)]",
  ctaLabel: "Book Tooth Jewellery Visit",
  quickTreatment: "Safe, temporary, and painless application of sparkling tooth crystals and diamonds",
  symptomsKicker: "Who is dental jewellery for?",
  symptomsTitle: "Stand out with a unique, glittering smile for special occasions or daily style.",
  symptomsVisibleCount: 6,
  symptoms: [
    "Desire to add a unique sparkle to your natural smile",
    "Upcoming wedding, graduation, festival, or family event",
    "Wanting a fashion-forward dental accessory",
    "Looking for a non-invasive cosmetic smile upgrade",
    "Desire for temporary tooth gem crystals",
    "Wanting a painless alternative to dental veneers for smile accentuation"
  ],
  overviewKicker: "What Is Dental Jewellery?",
  overviewTitle: "A safe, glittering accessory bonded gently to your tooth.",
  overviewParagraphs: [
    "Dental jewellery involves attaching tiny, certified crystals, glass gems, or gold studs to the front surface of your natural teeth. It is a popular aesthetic treatment designed to accent your smile with a catch of light, adding style and personality.",
    "The application is completely non-invasive and painless. We do not drill, cut, or damage the natural tooth structure. Instead, the jewel is bonded to the enamel surface using a safe, dental-grade adhesive, similar to how orthodontic brackets are attached.",
    "These gems are temporary, light on the tooth, and can be easily removed or replaced by a dentist at any time without leaving any marks or discoloration on your enamel."
  ],
  reasonsTitle: "Painless, certified crystals applied with medical-grade safety.",
  reasonsDescription:
    "We prioritize enamel health, using only certified non-toxic dental crystals and safe bonding agents.",
  reasons: [
    {
      title: "Zero Tooth Damage",
      text: "No drilling or enamel removal is required. The jewel is bonded entirely on the surface of your tooth."
    },
    {
      title: "Certified Safe Gems",
      text: "We use only lead-free, medical-grade tooth crystals (like Swarovski) designed for long-term oral safety."
    },
    {
      title: "Painless 15-Minute Process",
      text: "The application is quick, entirely pain-free, and does not require local anesthesia or injections."
    },
    {
      title: "100% Reversible",
      text: "If you decide to remove it, we can gently polish it off in minutes, leaving your tooth completely intact."
    }
  ],
  stepsTitle: "How dental jewellery is applied at the clinic.",
  steps: [
    {
      title: "Tooth Selection & Cleaning",
      text: "We select the tooth (typically the lateral incisor or canine) and clean the surface thoroughly to remove any plaque or external stains."
    },
    {
      title: "Conditioning the Enamel",
      text: "A mild conditioning gel is applied to a microscopic spot on the enamel to prepare the surface for optimal bonding."
    },
    {
      title: "Applying the Bonding Agent",
      text: "A safe, medical-grade dental adhesive is applied to the selected spot on the tooth surface."
    },
    {
      title: "Placing & Curing the Crystal",
      text: "The crystal gem is carefully placed on the adhesive. A blue UV curing light is used to dry and set the bond within seconds."
    },
    {
      title: "Final Check & Polish",
      text: "We clean any excess bonding material around the crystal and check that it sits smoothly without irritating your lips."
    }
  ],
  procedureImage: "/images/dental-jewellery-consultation-viman-nagar.webp",
  procedureImageAlt: "Cosmetologist applying tooth gem crystal to patient in Viman Nagar",
  procedureImageObjectPosition: "50% 50%",
  procedureNoteTitle: "Does tooth jewellery affect brushing?",
  procedureNoteText:
    "No. You can brush your teeth normally. The gems are tiny and have smooth edges, so they do not trap food or interfere with dental hygiene.",
  highlightKicker: "Sparkling smile details",
  highlightTitle: "High-grade crystals designed specifically for safe oral wear.",
  infoTiles: [
    {
      icon: "smile",
      title: "Swarovski Crystals",
      text: "We use high-shine Swarovski tooth gems that reflect light brilliantly, giving a beautiful, elegant sparkle."
    },
    {
      icon: "shield",
      title: "Safe Bonding",
      text: "The bonding materials are bio-compatible, ensuring no allergy, gum irritation, or enamel wear."
    },
    {
      icon: "clock",
      title: "Easy Removal",
      text: "Removal is completely safe and quick. The dentist will polish off the adhesive without hurting your natural tooth."
    }
  ],
  benefitsTitle: "Express your style with a sparkling smile.",
  benefitsDescription:
    "Dental jewellery is a fun, reversible, and affordable way to highlight your smile without committing to permanent changes.",
  benefits: [
    "Painless and quick application in under 15 minutes",
    "Requires absolutely no drilling or tooth structure cutting",
    "100% reversible with no permanent marks on teeth",
    "Certified lead-free and biocompatible materials for safety",
    "Does not restrict routine brushing or flossing habits",
    "Adds a glittering accent for weddings, parties, and festivals",
    "Very cost-effective cosmetic smile upgrade",
    "Can last for several months or years depending on care"
  ],
  extra: {
    kicker: "Longevity and daily precautions",
    title: "How to maintain your sparkling tooth gem.",
    text:
      "Tooth gems typically stay bonded for 6 months up to a year or more. The longevity depends on your bite, eating habits, and the position of the gem. Hard foods should not be bitten directly with the tooth holding the jewel.",
    estimateTitle: "What to do if the jewel falls off?",
    estimateText:
      "If the gem eventually loosens and falls off, it is completely harmless. If accidentally swallowed, it passes naturally through the system as the gems are non-toxic and lead-free. You can visit us to have a new gem bonded.",
    listTitle: "Tips to make your tooth jewellery last longer",
    list: [
      "Avoid biting directly into hard foods like apples or raw carrots with the gemmed tooth",
      "Do not scratch or pick at the crystal with your nails or toothpicks",
      "Continue brushing twice daily with a soft toothbrush",
      "Avoid electric toothbrush high-vibration settings directly on the gem for the first week",
      "Avoid sticky candies or chewing gum directly on the decorated tooth"
    ],
    listVisibleCount: 5
  },
  faqTitle: "Frequently asked questions about dental jewellery.",
  faqs: [
    {
      question: "Is the application of dental jewellery painful?",
      answer:
        "No, it is completely painless. No drilling, anesthesia, or needles are involved. The crystal is bonded to the surface of the tooth using a safe dental adhesive, much like orthodontic braces."
    },
    {
      question: "Will the gem damage my natural tooth enamel?",
      answer:
        "No. Since the procedure is non-invasive and does not involve drilling, your enamel remains healthy. When the gem is removed, the adhesive is polished off, leaving the enamel clean and undamaged."
    },
    {
      question: "What is the cost of dental jewellery in Viman Nagar, Pune?",
      answer:
        "The cost of dental jewellery typically ranges from Rs. 1,500 to Rs. 4,500, depending on the type and size of the crystal (e.g. Swarovski crystals, semi-precious stones, or gold studs) chosen for the application."
    },
    {
      question: "How long does a tooth gem stay on the tooth?",
      answer:
        "A tooth gem can last anywhere from 6 months to a few years. It depends on your oral hygiene, the position of the tooth, and your diet. If you want it removed earlier, a dentist can easily polish it off at any time."
    },
    {
      question: "What happens if I accidentally swallow the tooth crystal?",
      answer:
        "Certified tooth gems are lead-free and non-toxic. If a gem accidentally loosens and is swallowed, it will pass through your digestive system naturally without causing any harm."
    },
    {
      question: "Can I still get my teeth cleaned professionally with a tooth gem?",
      answer:
        "Yes. You can proceed with professional teeth cleaning and dental scaling. Dental hygienists can clean around the gem safely without dislodging it."
    },
    {
      question: "Can tooth jewellery be applied on artificial teeth or crowns?",
      answer:
        "Tooth gems bond best to natural enamel. While they can occasionally be bonded to porcelain crowns or composite veneers, the bond strength is significantly lower, and the gem may fall off much faster than on natural teeth."
    }
  ],
  ctaKicker: "Tooth gems and dental jewellery near me in Viman Nagar",
  ctaTitle: "Add a glittering sparkle to your smile safely and painlessly.",
  ctaText:
    "Visit Dr. Varun's Dental Clinic for certified Swarovski tooth gems, dental jewellery bonding, safe removal, and cosmetic smile designs in Viman Nagar, Pune.",
  internalLinks: [
    { label: "cosmetic smile designing and veneers", href: "/our-services" },
    { label: "professional teeth whitening for a brighter smile", href: "/teeth-whitening-in-viman-nagar" },
    { label: "all gum care for bleeding and pocket treatments", href: "/all-gum-care-in-viman-nagar" },
    { label: "tooth coloured fillings to repair decay", href: "/dental-tooth-filling-in-viman-nagar" },
    { label: "Invisalign clear aligners for teeth straightening", href: "/invisalign-treatment-in-viman-nagar" }
  ],
  structuredProcedureName: "Dental Jewellery Application",
  structuredHowPerformed:
    "A microscopic spot on the tooth enamel is conditioned, bio-compatible dental adhesive is applied, and a certified Swarovski crystal or gold stud is placed and cured using a specialized blue light."
};

export const metadata = createTreatmentMetadata(dentalJewellery);

export default function DentalJewelleryPage() {
  return <TreatmentPage data={dentalJewellery} />;
}
