import {
  createTreatmentMetadata,
  TreatmentPage,
  type TreatmentPageData
} from "@/components/treatment/treatment-page";

const minorSurgeries: TreatmentPageData = {
  pagePath: "/all-minor-surgeries-in-viman-nagar",
  metaTitle: "All Minor Surgeries in Viman Nagar | Oral Surgeon Near Me",
  metaDescription:
    "Get expert minor oral surgeries in Viman Nagar, Pune at Dr. Varun's Dental Clinic. Painless treatments for jaw fractures, oral cyst/tumor removal, and surgical extractions near you.",
  ogTitle: "All Minor Oral Surgeries in Viman Nagar, Pune | Dr. Varun's",
  ogDescription:
    "Trusted minor surgeries clinic in Viman Nagar Pune. Painless removal of salivary mucoceles, mouth tumors, jaw fracture wiring, and surgical extractions nearby.",
  structuredPageName: "All Minor Surgeries in Viman Nagar, Pune",
  breadcrumbName: "Minor Surgeries",
  h1Lines: ["All Minor", "Surgeries in", "Viman Nagar"],
  heroBadge: "Oral & Maxillofacial Care",
  heroBadgeIcon: "sparkles",
  heroIntro:
    "Experience safe, precise, and completely painless minor oral surgeries including jaw fracture wiring, small tumor/cyst removals, and surgical extractions in a sterile clinic environment.",
  heroImage: "/images/extraction-treatment-viman-nagar.webp",
  heroAlt: "Minor oral surgeries and jaw fracture wire stabilization in Viman Nagar Pune at Dr. Varun's Dental Clinic",
  ogImageAlt: "Minor Oral Surgeries in Viman Nagar at Dr. Varun's Dental Clinic",
  heroObjectPosition: "50% 50%",
  heroGradientClassName:
    "absolute inset-0 bg-[linear-gradient(90deg,rgba(52,27,7,0.96)_0%,rgba(90,47,11,0.80)_46%,rgba(255,248,239,0.12)_100%)]",
  ctaLabel: "Book Minor Surgery Consultation",
  quickTreatment: "Surgical removal of small tumors, cysts, mucoceles, jaw fracture stabilization, and tooth extractions",
  symptomsKicker: "When do you need a minor oral surgery?",
  symptomsTitle: "Addressing painful growths, jaw injuries, and dental damage around the area.",
  symptomsVisibleCount: 6,
  symptoms: [
    "Pain, clicking, or shifting of teeth after a face or jaw injury",
    "Painless lumps, salivary bumps, or cysts forming on your lips or under the tongue",
    "Impacted or severely broken teeth that cannot be pulled out normally",
    "Difficulty chewing or opening the mouth due to bone or soft tissue lesions",
    "Failing, loose, or decayed teeth requiring extraction and tooth replacement planning",
    "Recurrent painful gum swelling over partially erupted teeth (operculectomy needed)",
    "Tight muscle bands restricting tongue movement (tongue-tie) or causing space gaps",
    "Soreness or structural instability in the jawbone indicating minor fracture"
  ],
  overviewKicker: "What Are Minor Oral Surgeries?",
  overviewTitle: "Targeted, safe surgical procedures to restore oral stability and comfort.",
  overviewParagraphs: [
    "Minor oral surgeries include a range of specialized procedures performed directly in the dental chair under local anesthesia. Unlike major surgeries that require general anesthesia and hospital stays, these treatments are designed for rapid recovery, minimal post-operative discomfort, and maximum safety right here in our Viman Nagar clinic.",
    "At Dr. Varun's Dental Clinic, we perform precise removal of small benign tumors, salivary mucoceles (salivary gland cysts), and jaw cysts. We also stabilize minor or non-displaced jaw fractures using dental arch bars and intermaxillary wiring to ensure proper bone healing without major incisions.",
    "Additionally, we handle surgical extractions for broken roots, frenectomies (for tongue-tie or tight lip frenums), and operculectomies. Every procedure is customized to ensure patients from nearby areas like Kalyani Nagar, Wadgaon Sheri, and Kharadi receive gentle, top-tier care."
  ],
  reasonsTitle: "Gentle minor oral surgeries with 17+ years of clinical excellence.",
  reasonsDescription:
    "From diagnostic digital X-rays to meticulous sterile procedures and follow-up care, we prioritize your healing and comfort.",
  reasons: [
    {
      title: "17+ Years Experience",
      text: "Dr. Varun Tomke utilizes advanced surgical techniques to perform minor oral procedures with absolute precision."
    },
    {
      title: "Painless & Comfortable",
      text: "Every surgery is done under high-strength local anesthesia so you will feel no pain, only light touch and pressure."
    },
    {
      title: "Rigid Sterile Protocols",
      text: "Our clinic maintains international sterilization standards, eliminating any risk of infection during bone and soft tissue work."
    },
    {
      title: "Local SEO Care Nearby",
      text: "Conveniently located near PNG Jewellers inside Viman Nagar, Pune, making access easy for emergency care around the area."
    }
  ],
  stepsTitle: "Our surgical treatment protocol.",
  steps: [
    {
      title: "Detailed Diagnosis & Digital Imaging",
      text: "We evaluate the swelling, tumor, or fracture using digital X-rays to assess bone boundaries and nearby root structures."
    },
    {
      title: "Personalized Surgical Plan",
      text: "We plan the incision, tissue margins for growths, or wiring alignment for jaw fractures, explaining every detail to you."
    },
    {
      title: "Anesthetic Numbing",
      text: "We administer premium local anesthesia to make the surgical site completely numb and comfortable."
    },
    {
      title: "Surgical Intervention & Fixation",
      text: "We perform the cyst removal, excision, or wire the jaw arches together to stabilize fractures with minimal impact on surrounding tissues."
    },
    {
      title: "Dissolving Sutures & Recovery Advice",
      text: "The site is closed using fine, self-absorbing sutures. We place a sterile gauze pack and outline clear home-care instructions."
    }
  ],
  procedureImage: "/images/extraction-consultation-viman-nagar.webp",
  procedureImageAlt: "Oral surgeon explaining jaw fracture wiring and cyst removal to a patient in Viman Nagar clinic",
  procedureImageObjectPosition: "50% 50%",
  procedureNoteTitle: "How is a jaw fracture stabilized?",
  procedureNoteText:
    "We use soft dental wires and arch bars attached to your teeth. By wiring the top and bottom teeth together, we keep the jaw bone still, allowing it to fuse naturally over 4 to 6 weeks.",
  highlightKicker: "Advanced surgical expertise",
  highlightTitle: "Safe, chairside surgical solutions for soft and hard tissue conditions.",
  infoTiles: [
    {
      icon: "shield",
      title: "Growth Removal",
      text: "Surgical removal of salivary gland mucoceles and small benign tumors with complete biopsy and margin clearing."
    },
    {
      icon: "smile",
      title: "Jaw Stabilization",
      text: "Conservative intermaxillary wiring for non-displaced jaw fractures, avoiding complex general surgery."
    },
    {
      icon: "clock",
      title: "Frenectomy Support",
      text: "Quick tongue-tie and lip-tie release to restore speech, swallowing patterns, and close spaces in teeth."
    }
  ],
  benefitsTitle: "Relieve dental pain, eliminate mouth lumps, and restore bone structure.",
  benefitsDescription:
    "Timely minor oral surgery protects adjacent healthy teeth, stops jaw misalignment, and prevents benign growths from expanding.",
  benefits: [
    "Removes uncomfortable salivary mucoceles and oral bumps",
    "Restores correct tooth alignment after jaw trauma or fracture",
    "Prevents infection inside jawbones caused by impacted tooth roots",
    "Improves speech clarity and chewing with frenectomy release",
    "Painless surgical teeth extraction for complex root breakages",
    "Facilitates successful teeth replacement (implants/bridges) with bone site preservation",
    "Minimally invasive, safe procedures with rapid healing time",
    "Done comfortably under local anesthesia in under an hour"
  ],
  extra: {
    kicker: "Post-operative surgical care guidelines",
    title: "How to ensure smooth healing after minor oral surgery.",
    text:
      "Your recovery depends heavily on your post-treatment care. Rinsing gently, sticking to soft foods, and taking your medicines on time prevents infection and allows sutures to heal rapidly.",
    estimateTitle: "What is the cost of minor surgeries?",
    estimateText:
      "Simple mucoceles or frenectomy procedures are very cost-effective. Small tumor removals, cyst excisions, or jaw fracture wiring depend on size, location, and materials used.",
    listTitle: "Care guidelines to follow after minor oral surgery",
    list: [
      "Keep the sterile gauze pack bitten firmly for 45 minutes to stop bleeding",
      "Apply an ice pack to your face on the side of surgery for 10-minute intervals",
      "Do not smoke, spit, or use a straw for 48 hours to preserve the healing clot",
      "Eat cold, soft foods (ice cream, yogurt, mashed potatoes) on the first day",
      "Brush your other teeth gently, avoiding the surgical area for 24 hours"
    ],
    listVisibleCount: 5
  },
  faqTitle: "Frequently asked questions about Minor Oral Surgeries.",
  faqs: [
    {
      question: "Is minor oral surgery painful at Dr. Varun's Dental Clinic?",
      answer:
        "No. We use premium local anesthesia to completely block pain. You will only feel light pressure. If any mild soreness occurs after the numbing wears off, it is easily controlled with standard pain relievers we prescribe."
    },
    {
      question: "What is a salivary mucocele and how do you treat it?",
      answer:
        "A mucocele is a harmless, fluid-filled pocket that forms on the lip or under the tongue when a salivary gland is blocked or bitten. We perform a minor surgical excision in our clinic, removing the cyst and the affected tiny gland to prevent recurrence."
    },
    {
      question: "How long does it take for a jaw fracture to heal after dental wiring?",
      answer:
        "A minor jaw fracture stabilized with dental wiring generally takes about 4 to 6 weeks to heal. During this time, you will stick to a liquid or pureed diet, and we will monitor your bite and bone alignment weekly."
    },
    {
      question: "Why would I need an operculectomy?",
      answer:
        "An operculectomy is a minor procedure where we remove the flap of gum tissue (operculum) covering a partially erupted tooth (often a wisdom tooth). This stops food trap, bleeding, and painful infection (pericoronitis) around the area."
    },
    {
      question: "Will I need stitches after small tumor or cyst removal?",
      answer:
        "Yes, we usually place tiny, dissolvable stitches to close the gum tissue. They hold the wound edges together and dissolve on their own within 7 to 10 days, so you do not need them pulled out."
    },
    {
      question: "Do minor oral surgeries require general anesthesia?",
      answer:
        "No, almost all minor surgeries (mucoceles, frenectomy, small tumors, jaw wiring) are completed safely under local anesthesia in our dental chair. You remain awake and can go home immediately after the procedure."
    }
  ],
  ctaKicker: "Oral surgeon and minor surgery clinic near me in Viman Nagar",
  ctaTitle: "Address oral growths, jaw injuries, or broken roots comfortably.",
  ctaText:
    "Schedule an evaluation at Dr. Varun's Dental Clinic for painless salivary cyst removal, jaw wiring, frenectomy, and minor oral surgeries in Viman Nagar, Pune.",
  internalLinks: [
    { label: "gentle tooth extraction for severely damaged teeth", href: "/extraction-in-viman-nagar" },
    { label: "all gum care for deep scaling and flap treatment", href: "/all-gum-care-in-viman-nagar" },
    { label: "dental implants for stable teeth replacement", href: "/dental-implant-in-viman-nagar" },
    { label: "root canal treatment to save infected teeth", href: "/root-canal-treatment-in-viman-nagar" },
    { label: "wisdom tooth surgery for impacted molars", href: "/wisdom-tooth-surgery-in-viman-nagar" }
  ],
  structuredProcedureName: "Minor Oral Surgery",
  structuredHowPerformed:
    "An oral evaluation and digital X-rays are done, followed by sterile surgical excision or wiring stabilization under local anesthesia to restore health and structure."
};

export const metadata = createTreatmentMetadata(minorSurgeries);

export default function MinorSurgeriesPage() {
  return <TreatmentPage data={minorSurgeries} />;
}
