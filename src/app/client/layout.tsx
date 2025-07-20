import { DashboardLayout } from "@/components/dashboard-layout";
import { LayoutDashboard, FolderKanban, Ticket } from "lucide-react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { href: "/client/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
    { href: "/client/tickets", label: "Support Tickets", icon: <Ticket /> },
  ];

  return <DashboardLayout navItems={navItems}>{children}</DashboardLayout>;
}
