import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { invisalignTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(invisalignTreatment);

export default function InvisalignTreatmentPage() {
  return <TreatmentPage data={invisalignTreatment} />;
}
