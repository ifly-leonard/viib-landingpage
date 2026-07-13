import {
  BadgeCheck,
  Briefcase,
  Building2,
  ClipboardCheck,
  Compass,
  FileText,
  FlaskConical,
  GraduationCap,
  Images,
  MapPin,
  Presentation,
  Sparkles,
  Users,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type { NavIcon } from "@/content/navigation";

export const NAV_ICON: Record<NavIcon, LucideIcon> = {
  graduation: GraduationCap,
  sparkles: Sparkles,
  briefcase: Briefcase,
  workflow: Workflow,
  building: Building2,
  flask: FlaskConical,
  presentation: Presentation,
  images: Images,
  users: Users,
  pin: MapPin,
  file: FileText,
  compass: Compass,
  clipboard: ClipboardCheck,
  badge: BadgeCheck,
  wallet: Wallet,
};
