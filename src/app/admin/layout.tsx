import { DashboardLayout } from "@/components/dashboard-layout";
import { LayoutDashboard, Users, FolderKanban, Ticket } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
    { href: "/admin/clients", label: "Clients", icon: <Users /> },
    { href: "/admin/projects", label: "Projects", icon: <FolderKanban /> },
    { href: "/admin/tickets", label: "Tickets", icon: <Ticket /> },
  ];

  return <DashboardLayout navItems={navItems}>{children}</DashboardLayout>;
}
