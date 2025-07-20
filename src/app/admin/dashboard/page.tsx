import {
  Users,
  FolderKanban,
  Ticket,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { StatsCard } from "@/components/stats-card";
import { projects, clients, tickets } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  const openTickets = tickets.filter((ticket) => ticket.status !== "Closed");

  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <StatsCard
          title="Total Clients"
          value={clients.length.toString()}
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          description="+2 this month"
        />
        <StatsCard
          title="Active Projects"
          value={projects.filter((p) => p.status === "Active").length.toString()}
          icon={<FolderKanban className="h-4 w-4 text-muted-foreground" />}
          description={`${projects.filter((p) => p.status === "Completed").length} completed`}
        />
        <StatsCard
          title="Open Tickets"
          value={openTickets.length.toString()}
          icon={<Ticket className="h-4 w-4 text-muted-foreground" />}
          description={`${tickets.filter((t) => t.priority === "High" && t.status !== "Closed").length} high priority`}
        />
        <StatsCard
          title="Client Satisfaction"
          value="92%"
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
          description="Up 3% from last quarter"
        />
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>An overview of the latest projects.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Deadline</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.slice(0, 5).map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>{project.clientName}</TableCell>
                    <TableCell><Badge variant={project.status === "Active" ? "default" : project.status === "Completed" ? "secondary" : "destructive"}>{project.status}</Badge></TableCell>
                    <TableCell>{new Date(project.deadline).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Open Support Tickets</CardTitle>
            <CardDescription>Tickets that need attention.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Assigned</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {openTickets.slice(0, 5).map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium">{ticket.title}</TableCell>
                    <TableCell>{ticket.createdBy}</TableCell>
                    <TableCell><Badge variant={ticket.priority === "High" ? "destructive" : "secondary"}>{ticket.priority}</Badge></TableCell>
                    <TableCell>{ticket.assignedTo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
