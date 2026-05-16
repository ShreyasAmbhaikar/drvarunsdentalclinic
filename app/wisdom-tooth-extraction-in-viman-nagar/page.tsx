import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { wisdomToothExtraction } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(wisdomToothExtraction);

export default function WisdomToothExtractionPage() {
  return <TreatmentPage data={wisdomToothExtraction} />;
}
