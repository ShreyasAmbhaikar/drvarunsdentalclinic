import {
  createTreatmentMetadata,
  TreatmentPage,
  type TreatmentPageData
} from "@/components/treatment/treatment-page";

const gumCare: TreatmentPageData = {
  pagePath: "/all-gum-care-in-viman-nagar",
  metaTitle: "All Gum Care in Viman Nagar | Flap Surgery & Gum Clinic Near Me",
  metaDescription:
    "Get complete gum care in Viman Nagar at Dr. Varun's Dental Clinic. We offer expert tartar cleaning, deep scaling, root planing, curettage, and gum flap surgery.",
  ogTitle: "All Gum Care & Periodontal Treatment in Viman Nagar, Pune",
  ogDescription:
    "Protect your smile from gum bleeding, recession, and bone loss. Professional deep curettage, scaling, and gum flap surgery in Viman Nagar, Pune.",
  structuredPageName: "All Gum Care in Viman Nagar, Pune",
  breadcrumbName: "Gum Care",
  h1Lines: ["All Gum Care", "in Viman Nagar,", "Pune"],
  heroBadge: "Periodontal Gum Protection",
  heroBadgeIcon: "sparkles",
  heroIntro:
    "Protect your teeth from gum bleeding, recession, and bone loss with our complete range of scaling, deep curettage, and gum flap surgeries.",
  heroImage: "/images/teeth-cleaning-viman-nagar.webp",
  heroAlt: "Deep gum scaling and periodontal curettage in Viman Nagar Pune at Dr. Varun's Dental Clinic",
  ogImageAlt: "Gum Care Treatment in Viman Nagar at Dr. Varun's Dental Clinic",
  heroObjectPosition: "48% 50%",
  heroGradientClassName:
    "absolute inset-0 bg-[linear-gradient(90deg,rgba(52,27,7,0.96)_0%,rgba(90,47,11,0.80)_46%,rgba(255,248,239,0.12)_100%)]",
  ctaLabel: "Book Gum Care Consultation",
  quickTreatment: "Deep scaling, root planing, subgingival curettage, and surgical gum flap therapy",
  symptomsKicker: "When should you seek gum care?",
  symptomsTitle: "Gum infections (gingivitis and periodontitis) should not be left untreated.",
  symptomsVisibleCount: 6,
  symptoms: [
    "Bleeding gums while brushing, flossing, or eating hard foods",
    "Gums that look red, swollen, tender, or puffy",
    "Persistent bad breath (halitosis) or sour taste in mouth",
    "Gum recession, making your teeth look longer",
    "Loose or shifting teeth due to loss of supporting bone",
    "Pus discharge appearing between teeth and gums",
    "Spaces or deep pockets developing between your gums and teeth",
    "Soreness or dull pain deep within the gums"
  ],
  overviewKicker: "What Is All Gum Care?",
  overviewTitle: "Protecting the foundation of your teeth—the gums and jawbone.",
  overviewParagraphs: [
    "Gum care (periodontics) focuses on treating infections of the gums, bone, and supporting tissues. Healthy gums form a tight seal around teeth, blocking bacteria. However, plaque and tartar build-up can lead to gingivitis (gum inflammation) and progress to periodontitis (bone loss).",
    "For early gum disease, we perform deep scaling and root planing (cleaning below the gumline to smoothen root surfaces). For advanced cases where deep periodontal pockets have formed, we offer subgingival curettage (removing infected soft tissue) and gum flap surgery (folding back the gums to clean deep roots and repair bone).",
    "Our goal is to stop gum infection, halt bone loss, eliminate bad breath, and save your natural teeth from loosening and falling out."
  ],
  reasonsTitle: "Gentle, expert periodontal therapy to restore gum health.",
  reasonsDescription:
    "From routine scaling to advanced gum surgeries, we provide painless care with premium sterile instruments.",
  reasons: [
    {
      title: "17+ Years Experience",
      text: "Dr. Varun Tomke provides comprehensive gum care, diagnosing and treating all stages of periodontal infection."
    },
    {
      title: "Painless Gum Therapies",
      text: "Deep cleaning, curettage, and flap surgeries are performed under local anesthesia for complete comfort."
    },
    {
      title: "Advanced Gum Surgery",
      text: "We specialize in micro-surgical flap therapy, gum grafting, and bone regeneration for advanced pocket depths."
    },
    {
      title: "Clear Care Guidelines",
      text: "Every patient receives personalized home-care guidance, custom mouthwashes, and regular follow-ups."
    }
  ],
  stepsTitle: "Gum care procedures we perform.",
  steps: [
    {
      title: "Periodontal Examination & Pocket Charting",
      text: "We check your gums for swelling and bleeding, and use a small probe to measure the depth of the space (pockets) between your gums and teeth."
    },
    {
      title: "Deep Scaling & Root Planing",
      text: "Under local anesthesia if needed, we remove tartar deposits from deep below the gumline and smoothen the root surfaces to help gums reattach."
    },
    {
      title: "Subgingival Curettage",
      text: "We gently remove the diseased soft tissue lining of the gum pockets using specialized curettes, stimulating healthy gum healing."
    },
    {
      title: "Gum Flap Surgery",
      text: "For deep, non-healing pockets, the gums are surgically separated from teeth to allow direct visualization for cleaning roots and reshaping damaged bone."
    },
    {
      title: "Suturing & Gum Dressing",
      text: "The gums are positioned back and secured with fine dissolving stitches. A soothing protective pack is placed over the area to facilitate healing."
    }
  ],
  procedureImage: "/images/teeth-cleaning-scaling-viman-nagar.webp",
  procedureImageAlt: "Dentist performing deep gum scaling and cleaning in Viman Nagar",
  procedureImageObjectPosition: "48% 50%",
  procedureNoteTitle: "How long does it take for gums to heal after surgery?",
  procedureNoteText:
    "Gum healing is very rapid. Stitches are typically removed after 7 to 10 days, and the gums fully mature and tighten around teeth within 3 to 4 weeks.",
  highlightKicker: "Treatment options for healthy gums",
  highlightTitle: "Halting infection and saving teeth from bone loss.",
  infoTiles: [
    {
      icon: "shield",
      title: "Root Planing",
      text: "Smoothening root surfaces to prevent plaque bacteria from attaching, reducing gum pocket depths naturally."
    },
    {
      icon: "smile",
      title: "Flap Surgery",
      text: "Surgical access to deep-seated tartar and bone defects, essential for saving loose teeth in advanced periodontitis."
    },
    {
      icon: "clock",
      title: "Deep Curettage",
      text: "A non-surgical scraping of diseased gum pocket linings to promote clean, healthy tissue regeneration."
    }
  ],
  benefitsTitle: "Stop gum bleeding, eliminate bad breath, and secure loose teeth.",
  benefitsDescription:
    "Periodontal gum care protects the jawbone, eliminates chronic bad breath, and reduces the risk of system-wide inflammatory diseases.",
  benefits: [
    "Stops gum bleeding during brushing and eating",
    "Improves persistent bad breath caused by gum bacteria",
    "Tightens and secures loose or shifting teeth",
    "Cleans hard-to-reach tartar deposits below the gumline",
    "Halts bone loss around teeth, preventing early extractions",
    "Reduces deep gum pockets, making home cleaning easier",
    "Eliminates painful gum swelling and recurrent abscesses",
    "Supports overall health by reducing chronic systemic inflammation"
  ],
  extra: {
    kicker: "Periodontal maintenance and support",
    title: "Gum care requires persistent professional maintenance.",
    text:
      "Gums damaged by periodontitis are highly vulnerable to re-infection. Following deep cleaning or flap surgery, patients should visit us every 3 to 4 months for periodontal maintenance cleanings to prevent tartar from returning below the gums.",
    estimateTitle: "What is the cost of gum treatment?",
    estimateText:
      "Deep scaling and root planing are very cost-effective. Surgical flap therapies, bone grafts, or tissue regeneration membranes depend on the number of quadrants treated and are estimated after probing pocket depths.",
    listTitle: "Risk factors that accelerate gum disease",
    list: [
      "Poor oral hygiene and irregular flossing",
      "Smoking, tobacco chewing, and gutka habits",
      "Uncontrolled diabetes or systemic health issues",
      "Hormonal changes during pregnancy",
      "Crooked teeth that trap food and plaque",
      "Genetic predisposition to weak bone support",
      "Chronic stress or dry mouth"
    ],
    listVisibleCount: 6
  },
  faqTitle: "Frequently asked questions about Gum Care & Flap Surgery.",
  faqs: [
    {
      question: "What is the difference between normal cleaning and deep scaling?",
      answer:
        "Normal cleaning (scaling) removes tartar from the visible tooth surfaces above the gumline. Deep scaling (root planing) goes beneath the gumline to clean root surfaces and remove bacteria causing gum inflammation and bone loss."
    },
    {
      question: "Is gum flap surgery painful?",
      answer:
        "No. Gum flap surgery is performed under local anesthesia, so you will feel no pain during the procedure. Post-treatment discomfort is typical for 3 to 5 days and is easily managed with prescribed painkillers and cold compresses."
    },
    {
      question: "Can receding gums grow back after gum treatment?",
      answer:
        "Gums that have receded due to bone loss cannot grow back naturally. However, gum care stops further recession. In cases of severe cosmetic concern or root exposure, we can perform gum grafting surgery to cover the exposed roots."
    },
    {
      question: "How much does gum treatment and flap surgery cost in Viman Nagar?",
      answer:
        "Deep scaling and root planing ranges from Rs. 3,500 to Rs. 6,000 for the entire mouth. Surgical gum flap therapy ranges from Rs. 5,000 to Rs. 12,000 per quadrant (quarter of the mouth), depending on whether bone graft materials are needed."
    },
    {
      question: "Can gum disease cause teeth to fall out?",
      answer:
        "Yes. Advanced periodontitis destroys the jawbone that anchors teeth in place. As the bone dissolves, teeth lose support, become loose, and will eventually fall out or require extraction if left untreated."
    },
    {
      question: "Why do my gums bleed when I brush, and is it normal?",
      answer:
        "Bleeding gums are NOT normal. It is a sign of gum inflammation (gingivitis) caused by accumulated plaque and tartar. Brushing harder will not fix it; you need professional dental scaling to remove the irritating deposits."
    },
    {
      question: "What is periodontal curettage?",
      answer:
        "Periodontal curettage is a procedure where a dentist uses a small curette to gently scrape and clean the diseased soft tissue lining of a deep gum pocket. This allows healthy, new gum tissue to grow and attach closer to the tooth."
    }
  ],
  ctaKicker: "Gum specialist and flap surgery near me in Viman Nagar",
  ctaTitle: "Stop gum bleeding and save your teeth before bone loss advances.",
  ctaText:
    "Visit Dr. Varun's Dental Clinic for deep scaling, root planing, gum curettage, periodontal flap surgery, bone grafting, and professional gum care in Viman Nagar, Pune.",
  internalLinks: [
    { label: "professional teeth cleaning and scaling", href: "/our-services" },
    { label: "dental implants to replace teeth lost to gum disease", href: "/dental-implant-in-viman-nagar" },
    { label: "root canal treatment to treat infected teeth", href: "/root-canal-treatment-in-viman-nagar" },
    { label: "dentures treatment for multiple missing teeth", href: "/dentures-treatment-in-viman-nagar" },
    { label: "crowns and bridges for tooth stability", href: "/crowns-and-bridges-in-viman-nagar" }
  ],
  structuredProcedureName: "Periodontal Gum Care & Flap Surgery",
  structuredHowPerformed:
    "Gum pocket depths are evaluated, deep root scaling is performed, and surgical gum flap reflection is carried out under local anesthesia to remove deep-seated bacteria and facilitate bone healing."
};

export const metadata = createTreatmentMetadata(gumCare);

export default function GumCarePage() {
  return <TreatmentPage data={gumCare} />;
}
