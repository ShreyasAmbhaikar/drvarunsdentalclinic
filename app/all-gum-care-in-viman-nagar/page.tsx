import {
  createTreatmentMetadata,
  TreatmentPage,
  type TreatmentPageData
} from "@/components/treatment/treatment-page";

const gumCare: TreatmentPageData = {
  pagePath: "/all-gum-care-in-viman-nagar",
  metaTitle: "All Gum Care & Preventative Care in Viman Nagar | Clinic Near Me",
  metaDescription:
    "Get complete gum care, teeth cleaning, deep scaling, fluoride varnish, and pit & fissure sealants in Viman Nagar at Dr. Varun's Dental Clinic near you.",
  ogTitle: "All Gum Care & Preventative Dentistry in Viman Nagar, Pune",
  ogDescription:
    "Protect your smile from gum bleeding and tooth decay. Professional scaling, flap surgery, deep curettage, fluoride application, and sealants in Viman Nagar, Pune.",
  structuredPageName: "All Gum Care & Preventative Dentistry in Viman Nagar, Pune",
  breadcrumbName: "Gum & Preventive Care",
  h1Lines: ["All Gum Care", "& Prevention", "in Viman Nagar"],
  heroBadge: "Gum Protection & Prevention",
  heroBadgeIcon: "sparkles",
  heroIntro:
    "Protect your teeth from gum bleeding, recession, and cavities with our complete scaling, cleaning, and flap surgery treatments, combined with clinical fluoride varnish and fissure sealants.",
  heroImage: "/images/teeth-cleaning-viman-nagar.webp",
  heroAlt: "Deep gum scaling, teeth cleaning, and fluoride application in Viman Nagar Pune at Dr. Varun's Dental Clinic",
  ogImageAlt: "Gum Care & Preventive Dentistry in Viman Nagar at Dr. Varun's Dental Clinic",
  heroObjectPosition: "48% 50%",
  heroGradientClassName:
    "absolute inset-0 bg-[linear-gradient(90deg,rgba(52,27,7,0.96)_0%,rgba(90,47,11,0.80)_46%,rgba(255,248,239,0.12)_100%)]",
  ctaLabel: "Book Gum & Preventive Care",
  quickTreatment: "Teeth cleaning, deep scaling, flap surgery, fluoride varnish, and pit & fissure sealants",
  symptomsKicker: "When should you seek gum & preventive care?",
  symptomsTitle: "Preventing decay early and keeping gums healthy around the area.",
  symptomsVisibleCount: 6,
  symptoms: [
    "Bleeding gums while brushing, flossing, or eating hard foods",
    "Gums that look red, swollen, tender, or puffy",
    "Persistent bad breath (halitosis) or sour taste in mouth",
    "High cavity risk, especially in children with deep grooves in back teeth",
    "Tooth sensitivity to hot and cold due to enamel erosion",
    "Gum recession, making your teeth look longer",
    "Loose or shifting teeth due to loss of supporting bone",
    "Visible yellow plaque or hard dark tartar build-up on teeth"
  ],
  overviewKicker: "What Is All Gum Care & Prevention?",
  overviewTitle: "Protecting your gums and shielding enamel from decay.",
  overviewParagraphs: [
    "Gum care (periodontics) and preventive dentistry form the core foundation of a lifelong healthy smile. Gums lock teeth securely into place, while enamel acts as a shell protecting them. However, bacterial plaque and tartar build-up can lead to gum infections (gingivitis and periodontitis) and deep cavities if not checked regularly.",
    "At Dr. Varun's Dental Clinic, we provide complete, customized periodontal treatments including teeth cleaning, deep scaling, root planing (smoothing root surfaces to help gums reattach), subgingival curettage, and gum flap surgery to clean deep-seated bacteria and repair supporting bone.",
    "To shield teeth from future decay, we also provide advanced preventive applications: clinical-strength fluoride varnish to remineralize weak spots and custom pit and fissure sealants to seal deep chewing grooves in molar teeth, blocking food and cavity-causing plaque from entering."
  ],
  reasonsTitle: "Gentle, expert care for healthy gums and cavity-free teeth.",
  reasonsDescription:
    "Patients receive thorough oral evaluations, sterile micro-cleaning, and premium preventive materials.",
  reasons: [
    {
      title: "17+ Years Experience",
      text: "Dr. Varun Tomke carefully diagnoses gum health, applying precise scaling or advanced flap surgery based on your pockets."
    },
    {
      title: "Sterile Teeth Cleaning",
      text: "We perform professional scaling using advanced ultrasonic devices, clearing plaque and tartar comfortably."
    },
    {
      title: "Premium Fluoride & Sealants",
      text: "We use high-concentration, quick-setting fluoride varnish and durable resin sealants to provide maximum cavity defense."
    },
    {
      title: "Care Close to You",
      text: "Our clinic is situated near PNG Jewellers in Viman Nagar, Pune, convenient for patients from nearby areas."
    }
  ],
  stepsTitle: "Our gum and preventive care workflow.",
  steps: [
    {
      title: "Detailed Examination & Mapping",
      text: "We examine teeth for plaque, check gums for bleeding, and evaluate cavity risk and pocket depths using digital X-rays if needed."
    },
    {
      title: "Professional Teeth Cleaning & Scaling",
      text: "Using gentle ultrasonic scalers, we sweep away all plaque, tartar, and surface stains from your teeth and around the gumline."
    },
    {
      title: "Deep Root Planing & Curettage",
      text: "If deep gum pockets exist, we clean deep below the gums and smoothen root surfaces under local anesthesia for comfort."
    },
    {
      title: "Fluoride Varnish & Sealants Application",
      text: "We paint quick-drying fluoride varnish on dry teeth to strengthen enamel, and flow sealants into molar grooves, curing them with a light."
    },
    {
      title: "Gum Flap Surgery (Only if Advanced)",
      text: "For advanced bone loss, gums are reflected back to clean deep roots and reshape damaged bone, then secured with fine sutures."
    }
  ],
  procedureImage: "/images/teeth-cleaning-scaling-viman-nagar.webp",
  procedureImageAlt: "Dentist performing scaling and teeth cleaning in Viman Nagar clinic",
  procedureImageObjectPosition: "48% 50%",
  procedureNoteTitle: "How effective are pit and fissure sealants?",
  procedureNoteText:
    "According to clinical studies, sealants prevent up to 80% of cavities in back teeth for several years by acting as a physical block against plaque.",
  highlightKicker: "Preventive and gum care solutions",
  highlightTitle: "Protecting the bone foundations and enamel coating of your smile.",
  infoTiles: [
    {
      icon: "shield",
      title: "Fluoride Therapy",
      text: "Clinical application of high-concentration fluoride varnish to remineralize weak spots and reverse early decay."
    },
    {
      icon: "smile",
      title: "Flap Surgery",
      text: "Micro-surgical cleaning of deep gum pockets and bone defect repair to save loose teeth from extraction."
    },
    {
      icon: "clock",
      title: "Fissure Sealants",
      text: "Durable protective barriers painted on molars to seal deep grooves and prevent food particles from trapping."
    }
  ],
  benefitsTitle: "Stop gum bleeding, prevent deep cavities, and relieve sensitivity.",
  benefitsDescription:
    "Active gum treatments combined with enamel-strengthening shields prevent painful tooth infections and early extractions.",
  benefits: [
    "Stops gum bleeding and swelling while brushing or flossing",
    "Reduces cavity risk in children and adults by up to 80%",
    "Removes tough tartar build-up and yellow staining effectively",
    "Restores bone stability and tightens loose teeth",
    "Reverses early stages of enamel decay and tooth sensitivity",
    "Eliminates bad breath by clearing deep bacteria pockets",
    "Protects root surfaces exposed by gum recession",
    "Provides a sterile, comfortable, and painless patient experience"
  ],
  extra: {
    kicker: "Enamel protection and gum maintenance guidelines",
    title: "How to maintain your preventive shields and gum health.",
    text:
      "Scaling and teeth cleaning should be repeated every 6 months. Dental sealants and fluoride varnish are evaluated during these visits. Keep brushing twice daily and flossing to ensure your gums heal fully.",
    estimateTitle: "What is the cost of these treatments?",
    estimateText:
      "Teeth cleaning, fluoride varnish, and fissure sealants are highly affordable. Quadrant-wise deep root planing or surgical flap surgeries are estimated after checking your pocket depths.",
    listTitle: "Guidelines to protect your teeth after fluoride application",
    list: [
      "Avoid eating hard, sticky, or hot foods for at least 4 to 6 hours",
      "Do not brush or floss your teeth until the next morning to let the varnish absorb",
      "Stick to cool drinks and soft foods on the day of treatment",
      "Keep visiting the clinic every 6 months for a clean, professional checkup",
      "Avoid alcohol-containing mouthwashes for 24 hours"
    ],
    listVisibleCount: 5
  },
  faqTitle: "Frequently asked questions about Gum & Preventive Care.",
  faqs: [
    {
      question: "What is the difference between scaling and deep root planing?",
      answer:
        "Scaling is a routine teeth cleaning that removes plaque and tartar above the gumline. Deep root planing goes deep below the gums to clean root surfaces, removing bacteria that cause gum pocket depth and bone loss."
    },
    {
      question: "Are pit and fissure sealants painful to apply?",
      answer:
        "No. Applying sealants is completely non-invasive and painless. There is no drilling or scraping involved. The tooth is simply cleaned, prepared with a mild gel, coated with the sealant resin, and set with a curing light."
    },
    {
      question: "How long does fluoride varnish stay on my teeth?",
      answer:
        "Fluoride varnish is painted on teeth and dries instantly when it contacts saliva. It remains in contact with the enamel for several hours, slowly absorbing. It is completely brushed off the following morning."
    },
    {
      question: "Can receding gums grow back after gum treatment?",
      answer:
        "Receded gums cannot grow back on their own. However, gum care stops the recession from worsening. For advanced cosmetic or sensitivity issues, we can plan gum grafting to recover the exposed root surfaces."
    },
    {
      question: "Do you offer teeth cleaning near me in Viman Nagar?",
      answer:
        "Yes! Dr. Varun's Dental Clinic offers professional teeth cleaning, scaling, and advanced gum care for patients across Viman Nagar, Kalyani Nagar, Wadgaon Sheri, and surrounding Pune areas."
    },
    {
      question: "Are dental sealants suitable for adults?",
      answer:
        "Yes. While sealants are highly recommended for children as soon as their molars erupt, adults with deep grooves in their back teeth and no active decay can also get sealants to prevent future cavities."
    }
  ],
  ctaKicker: "Gum specialist and preventive care near me in Viman Nagar",
  ctaTitle: "Keep your gums healthy and shield your teeth from cavities.",
  ctaText:
    "Visit Dr. Varun's Dental Clinic for professional teeth cleaning, deep scaling, gum flap surgery, fluoride varnish, and pit & fissure sealants in Viman Nagar, Pune.",
  internalLinks: [
    { label: "gentle tooth extraction for severely decayed teeth", href: "/extraction-in-viman-nagar" },
    { label: "dental implants to replace missing teeth", href: "/dental-implant-in-viman-nagar" },
    { label: "minor oral surgeries for jaw and mouth growths", href: "/all-minor-surgeries-in-viman-nagar" },
    { label: "root canal treatment to treat deep decay", href: "/root-canal-treatment-in-viman-nagar" },
    { label: "wisdom tooth surgery for painful molars", href: "/wisdom-tooth-surgery-in-viman-nagar" }
  ],
  structuredProcedureName: "Periodontal Gum Care & Preventive Dentistry",
  structuredHowPerformed:
    "Teeth scaling is performed to remove tartar, deep root planing and flap surgery are done if pockets are deep, and fluoride varnish/sealants are applied to reinforce enamel."
};

export const metadata = createTreatmentMetadata(gumCare);

export default function GumCarePage() {
  return <TreatmentPage data={gumCare} />;
}
