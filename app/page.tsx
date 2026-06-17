import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.url}/dental-clinic-viman-nagar/`
  }
};

export default function RootRedirect() {
  redirect("/dental-clinic-viman-nagar/");
  return null;
}
