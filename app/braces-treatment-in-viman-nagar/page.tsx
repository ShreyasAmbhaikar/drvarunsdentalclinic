import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { bracesTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(bracesTreatment);

export default function BracesTreatmentPage() {
  return <TreatmentPage data={bracesTreatment} />;
}
