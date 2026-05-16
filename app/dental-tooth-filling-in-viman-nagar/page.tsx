import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { dentalToothFilling } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(dentalToothFilling);

export default function DentalToothFillingPage() {
  return <TreatmentPage data={dentalToothFilling} />;
}
