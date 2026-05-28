import {
  createTreatmentMetadata,
  TreatmentPage,
  type TreatmentPageData
} from "@/components/treatment/treatment-page";

const pediatricDentistry: TreatmentPageData = {
  pagePath: "/pediatric-dentistry-in-viman-nagar",
  metaTitle: "Pediatric Dentistry in Viman Nagar | Child Dentist Near Me",
  metaDescription:
    "Gentle pediatric dentistry and child dental care in Viman Nagar at Dr. Varun's Dental Clinic. Visit a child-friendly dentist for cavities protection, fluoride, and painless care.",
  ogTitle: "Pediatric Dentistry & Child Dental Care in Viman Nagar, Pune",
  ogDescription:
    "Keep your child's smile healthy with gentle pediatric dental checkups, cavity fillings, fluoride therapies, and kids' dentistry in Viman Nagar, Pune.",
  structuredPageName: "Pediatric Dentistry in Viman Nagar, Pune",
  breadcrumbName: "Pediatric Dentistry",
  h1Lines: ["Pediatric", "Dentistry in", "Viman Nagar"],
  heroBadge: "Gentle Child Dental Care",
  heroBadgeIcon: "smile",
  heroIntro:
    "Provide your child with a happy, fear-free dental experience. We specialize in gentle checkups, cavities prevention, and early smile guidance.",
  heroImage: "/images/pediatric-dentistry-viman-nagar.webp",
  heroAlt: "Cheerful Indian child showing clean healthy teeth in Viman Nagar Pune",
  ogImageAlt: "Pediatric Dentistry in Viman Nagar at Dr. Varun's Dental Clinic",
  heroObjectPosition: "50% 50%",
  heroGradientClassName:
    "absolute inset-0 bg-[linear-gradient(90deg,rgba(52,27,7,0.96)_0%,rgba(90,47,11,0.80)_46%,rgba(255,248,239,0.12)_100%)]",
  ctaLabel: "Schedule Child Consultation",
  quickTreatment: "Kids checkups, painless cavity fillings, fluoride gel therapy, and dental sealants",
  symptomsKicker: "When should your child see a dentist?",
  symptomsTitle: "Protect baby teeth early to ensure healthy adult teeth growth.",
  symptomsVisibleCount: 6,
  symptoms: [
    "First baby tooth erupts or child reaches 1 year of age",
    "Visible brown or black spots showing tooth decay (cavities)",
    "Toothache, sensitivity, or crying while chewing foods",
    "Swollen, red gums or bleeding while brushing",
    "Thumb-sucking, mouth-breathing, or pacifier habits",
    "Crooked, crowded, or abnormally growing teeth",
    "Chipped or broken tooth due to school play or sports fall",
    "Fear of dentists or need for a positive, gentle first dental checkup"
  ],
  overviewKicker: "What Is Pediatric Dentistry?",
  overviewTitle: "Friendly, specialized dental care tailored for children.",
  overviewParagraphs: [
    "Pediatric dentistry (also known as child dental care) focuses on the unique oral health needs of infants, toddlers, children, and teenagers. Baby teeth play a critical role: they help children chew and speak correctly, hold space for adult teeth, and guide healthy jaw development.",
    "Children require a gentle, welcoming approach to dental visits. We focus on building a fun, fear-free environment so children feel safe and relaxed, preventing dental anxiety that can last into adulthood.",
    "From preventive treatments like fluoride varnishes and tooth-protecting sealants to pediatric fillings and habit correction, we guide your child toward a lifetime of healthy, confident smiles."
  ],
  reasonsTitle: "Patient, kid-friendly dentist focusing on fear-free checkups.",
  reasonsDescription:
    "We use soft communication, play-based demonstrations, and painless techniques to keep children comfortable and smiling.",
  reasons: [
    {
      title: "Gentle & Playful",
      text: "Dr. Varun Tomke uses gentle language and kid-friendly explanations to make appointments feel like a game."
    },
    {
      title: "Cavity Shielding",
      text: "We provide preventive cavity therapies like dental sealants and professional fluoride applications."
    },
    {
      title: "Habit Guidance",
      text: "We offer early diagnostic reviews and appliances to correct thumb-sucking, tongue-thrusting, and mouth-breathing."
    },
    {
      title: "Parents Companion",
      text: "We guide parents on child nutrition, proper brushing techniques, flossing, and bottle-feeding hygiene."
    }
  ],
  stepsTitle: "What happens during your child's dental visit.",
  steps: [
    {
      title: "Warm Greeting & Adaptation",
      text: "The child is introduced to the dental chair, interactive tools, and light-hearted dental toys to help them feel relaxed."
    },
    {
      title: "Gentle Dental Checkup",
      text: "The dentist carefully checks baby teeth, gums, jaw alignment, bites, oral hygiene, and checks for early cavity spots."
    },
    {
      title: "Teeth Cleaning & Polishing",
      text: "If plaque is present, we gently brush and polish the child's teeth using sweet, fruit-flavored dental polishing pastes."
    },
    {
      title: "Fluoride Protection (Varnish)",
      text: "A protective fluoride gel is brushed on the teeth to strengthen enamel, shielding them from sugar and bacteria decay."
    },
    {
      title: "Parent Counseling & Reward",
      text: "We guide parents on teeth cleaning habits, discuss diet, and reward the brave little patient with a gift sticker!"
    }
  ],
  procedureImage: "/images/pediatric-dentistry-consultation-viman-nagar.webp",
  procedureImageAlt: "Child laughing naturally while friendly dentist checks teeth in Viman Nagar clinic",
  procedureImageObjectPosition: "50% 50%",
  procedureNoteTitle: "Why treat baby teeth if they will fall out?",
  procedureNoteText:
    "Baby teeth hold space for permanent teeth. Neglecting cavities in baby teeth can cause pain, infection, poor nutrition, and damage the developing adult teeth underneath.",
  highlightKicker: "Preventive care for young smiles",
  highlightTitle: "Shielding teeth from decay with advanced pediatric therapies.",
  infoTiles: [
    {
      icon: "shield",
      title: "Dental Sealants",
      text: "Thin protective coatings painted on the chewing surfaces of back molars, blocking food and bacteria from deep grooves."
    },
    {
      icon: "smile",
      title: "Fluoride Shield",
      text: "Professional, concentrated fluoride varnishes applied to strengthen baby enamel, making it highly resistant to cavities."
    },
    {
      icon: "clock",
      title: "Painless Fillings",
      text: "Safe, tooth-colored composite restorations placed gently to stop decay before it reaches the tooth nerve."
    }
  ],
  benefitsTitle: "A healthy foundation for your child's permanent teeth.",
  benefitsDescription:
    "Early pediatric dental checkups help catch teeth crowding, decay, and bite issues early, reducing the need for braces later.",
  benefits: [
    "Builds a lifetime of positive, anxiety-free dental habits",
    "Prevents painful cavities and sudden pediatric toothaches",
    "Protects baby teeth to guide proper adult teeth eruption",
    "Strengthens soft baby enamel with professional fluoride",
    "Blocks bacteria in deep molar grooves using dental sealants",
    "Corrects harmful oral habits like thumb-sucking early",
    "Helps children chew foods easily for proper growth and nutrition",
    "Teaches children the fun way to brush and floss daily"
  ],
  extra: {
    kicker: "Preventive schedule and diet",
    title: "Protecting children's teeth from sugar decay.",
    text:
      "Children's tooth enamel is thinner and softer than adult enamel, making it highly susceptible to cavities from sticky chocolates, juices, and baby bottles. Routine checkups every 6 months allow us to catch and treat cavity spots when they are tiny and painless.",
    estimateTitle: "First visit timing",
    estimateText:
      "Pediatric dental associations recommend scheduling your child's first checkup by their first birthday or when their first tooth erupts. This helps kids adapt to the clinic environment early.",
    listTitle: "Signs your child needs an urgent dentist visit",
    list: [
      "Complains of pain or sensitivity while drinking cold liquids",
      "Avoids chewing on one side of their mouth",
      "Swelling, redness, or a small boil on the gums near a tooth",
      "Visible black, brown, or white chalky spots on teeth",
      "Loose baby tooth that is causing severe pain or bleeding",
      "Dental injury or chipped tooth from sports or a fall",
      "Persistent bad breath despite regular brushing"
    ],
    listVisibleCount: 6
  },
  faqTitle: "Frequently asked questions about pediatric dentistry.",
  faqs: [
    {
      question: "At what age should a child first visit the dentist?",
      answer:
        "A child should have their first dental visit by their first birthday or within six months of their first baby tooth erupting. This early visit helps assess oral development and educates parents on infant oral hygiene."
    },
    {
      question: "Why are baby teeth so important if they eventually fall out?",
      answer:
        "Baby teeth are crucial for proper chewing, clear speech development, and facial structure. Importantly, they act as placeholders for permanent teeth. If a baby tooth is lost too early due to decay, neighboring teeth can shift, causing adult teeth to emerge crooked."
    },
    {
      question: "What is a dental sealant and how does it protect teeth?",
      answer:
        "A dental sealant is a thin, protective plastic coating painted onto the chewing surfaces of the back teeth (molars). It flows into the deep grooves and pits of the teeth, forming a shield that prevents plaque, food, and bacteria from getting trapped."
    },
    {
      question: "Is fluoride application safe for young children?",
      answer:
        "Yes, professional fluoride application (fluoride varnish) performed by a dentist is highly safe and effective. We use a concentrated gel that is brushed on quickly, sets instantly in contact with saliva, and strengthens the soft baby enamel against cavities."
    },
    {
      question: "What is the cost of child dental checkups and treatments in Viman Nagar?",
      answer:
        "A routine pediatric consultation and checkup ranges from Rs. 400 to Rs. 800. Preventive fluoride therapies cost around Rs. 1,500 to Rs. 2,500. Painless tooth-colored cavity fillings for children usually cost between Rs. 1,500 to Rs. 3,000 per tooth."
    },
    {
      question: "How can I prevent cavities in my child's teeth at home?",
      answer:
        "Brush your child's teeth twice a day with fluoride toothpaste (use a smear for under 3, and a pea-sized amount for ages 3-6). Limit sticky sugary snacks, sodas, and juices. Never let your child fall asleep with a baby bottle containing milk or juice."
    },
    {
      question: "What should I do if my child has a severe fear of dentists?",
      answer:
        "Start early, read child-friendly books about dental visits, and avoid using words like 'pain', 'injection', or 'hurt' at home. We use a gentle 'Tell-Show-Do' approach, showing children the tools in a fun way (like calling the water spray a water gun) to build trust."
    }
  ],
  ctaKicker: "Pediatric dentist near me in Viman Nagar",
  ctaTitle: "Give your child the gift of a healthy, cavity-free smile.",
  ctaText:
    "Visit Dr. Varun's Dental Clinic for kids' checkups, gentle cavity fillings, fluoride varnish shielding, dental sealants, and friendly child-friendly dentistry in Viman Nagar, Pune.",
  internalLinks: [
    { label: "all gum care for bleeding and pocket treatments", href: "/all-gum-care-in-viman-nagar" },
    { label: "braces consultation for crooked teeth guidance", href: "/braces-treatment-in-viman-nagar" },
    { label: "Invisalign clear aligners for teenagers", href: "/invisalign-treatment-in-viman-nagar" },
    { label: "tooth coloured fillings for cavities", href: "/dental-tooth-filling-in-viman-nagar" },
    { label: "emergency dentist appointments for tooth pain", href: "/our-services" }
  ],
  structuredProcedureName: "Pediatric Dental Checkup and Prevention",
  structuredHowPerformed:
    "Gently examine the child's teeth and gums, perform scaling using kid-friendly paste, apply cavity-shielding fluoride varnish or dental sealants, and guide parents on home care."
};

export const metadata = createTreatmentMetadata(pediatricDentistry);

export default function PediatricDentistryPage() {
  return <TreatmentPage data={pediatricDentistry} />;
}
