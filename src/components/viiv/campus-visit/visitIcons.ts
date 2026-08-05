import {
  BadgeCheck,
  CalendarClock,
  Clock3,
  Compass,
  FileText,
  GraduationCap,
  Presentation,
  Users,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type VisitIcon =
  | "compass"
  | "users"
  | "workflow"
  | "graduation"
  | "wallet"
  | "badge"
  | "clock"
  | "file"
  | "calendar"
  | "presentation";

export const VISIT_ICON: Record<VisitIcon, LucideIcon> = {
  compass: Compass,
  users: Users,
  workflow: Workflow,
  graduation: GraduationCap,
  wallet: Wallet,
  badge: BadgeCheck,
  clock: Clock3,
  file: FileText,
  calendar: CalendarClock,
  presentation: Presentation,
};
