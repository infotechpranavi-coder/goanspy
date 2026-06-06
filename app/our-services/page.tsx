import { redirect } from "next/navigation";
import { SERVICES_HUB_PATH } from "@/lib/service-routes";

export default function OurServicesRedirectPage() {
  redirect(SERVICES_HUB_PATH);
}
