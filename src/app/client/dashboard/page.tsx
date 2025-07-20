import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
import { clients, projects, tickets, type Deliverable, type ProjectUpdate } from "@/lib/mock-data";
import { ProjectCard } from "@/components/project-card";
import { ArrowUpRight, CheckCircle, Circle, Clock, File } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const DeliverableStatusIcon = ({ status }: { status: Deliverable["status"] }) => {
  if (status === "Done") {
    return <CheckCircle className="h-4 w-4 text-green-500" />;
  }
  if (status === "In Progress") {
    return <Clock className="h-4 w-4 text-blue-500" />;
  }
  return <Circle className="h-4 w-4 text-muted-foreground" />;
};


const UpdatesTimeline = ({ updates }: { updates: ProjectUpdate[] }) => (
    <Card>
      <CardHeader>
        <CardTitle>Project Updates</CardTitle>
        <CardDescription>Latest updates on your active projects.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
            {updates.map((update, index) => (
                <div key={update.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <CheckCircle className="h-4 w-4" />
                        </div>
                        {index < updates.length - 1 && <div className="h-full w-px bg-border" />}
                    </div>
                    <div>
                        <p className="font-medium">{update.message}</p>
                        <p className="text-sm text-muted-foreground">
                            by {update.author} on {new Date(update.timestamp).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            ))}
            {updates.length === 0 && <p className="text-sm text-muted-foreground">No updates yet.</p>}
        </div>
      </CardContent>
    </Card>
  );
  
const DeliverablesTracker = ({ deliverables }: { deliverables: Deliverable[] }) => (
<Card>
    <CardHeader>
    <CardTitle>Deliverables Tracker</CardTitle>
    <CardDescription>Track the status of all your project deliverables.</CardDescription>
    </CardHeader>
    <CardContent>
    <Table>
        <TableHeader>
        <TableRow>
            <TableHead>Deliverable</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>File</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        {deliverables.map((d) => (
            <TableRow key={d.id}>
            <TableCell className="font-medium">{d.title}</TableCell>
            <TableCell>
                <Badge variant={d.status === "Done" ? "secondary" : "default"} className="gap-1">
                    <DeliverableStatusIcon status={d.status} />
                    {d.status}
                </Badge>
            </TableCell>
            <TableCell>{new Date(d.dueDate).toLocaleDateString()}</TableCell>
            <TableCell>
                {d.fileUrl && (
                <Button variant="outline" size="icon" asChild>
                    <Link href={d.fileUrl}><File className="h-4 w-4"/></Link>
                </Button>
                )}
            </TableCell>
            </TableRow>
        ))}
         {deliverables.length === 0 && <TableRow><TableCell colSpan={4} className="text-center">No deliverables found.</TableCell></TableRow>}
        </TableBody>
    </Table>
    </CardContent>
</Card>
);

export default function ClientDashboardPage() {
  const client = clients[0]; // Mock: current logged in client
  const clientProjects = projects.filter((p) => p.clientId === client.id);
  const clientTickets = tickets.filter((t) => t.createdBy === client.name);

  const allDeliverables = clientProjects.flatMap(p => p.deliverables);
  const allUpdates = clientProjects.flatMap(p => p.updates).sort((a,b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome, {client.name}</h1>
        <p className="text-muted-foreground">Here's what's happening with your projects.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {clientProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <UpdatesTimeline updates={allUpdates} />
        <DeliverablesTracker deliverables={allDeliverables} />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Support Tickets</CardTitle>
            <CardDescription>Your recent support requests.</CardDescription>
          </div>
          <Button asChild variant="outline">
            <Link href="/client/tickets">View All <ArrowUpRight className="ml-2 h-4 w-4"/></Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientTickets.slice(0, 3).map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.title}</TableCell>
                  <TableCell><Badge variant={ticket.status === 'Closed' ? "outline" : "default"}>{ticket.status}</Badge></TableCell>
                  <TableCell><Badge variant={ticket.priority === 'High' ? "destructive" : "secondary"}>{ticket.priority}</Badge></TableCell>
                  <TableCell>{new Date(ticket.createdDate).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
