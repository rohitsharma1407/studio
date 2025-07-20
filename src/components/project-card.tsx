import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Project } from "@/lib/mock-data";

export function ProjectCard({ project }: { project: Project }) {
  const progress = project.status === 'Completed' ? 100 : (project.deliverables.filter(d => d.status === 'Done').length / (project.deliverables.length || 1)) * 100;

  const getStatusVariant = (status: Project['status']) => {
    switch (status) {
      case 'Active':
        return 'default';
      case 'Completed':
        return 'secondary';
      case 'On Hold':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{project.name}</CardTitle>
          <Badge variant={getStatusVariant(project.status)}>{project.status}</Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Project Manager</p>
          <p className="text-sm">{project.manager}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Deadline</p>
          <p className="text-sm">{new Date(project.deadline).toLocaleDateString()}</p>
        </div>
        <div>
          <div className="flex justify-between text-sm text-muted-foreground mb-1">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} aria-label={`${Math.round(progress)}% complete`} />
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Started on {new Date(project.startDate).toLocaleDateString()}
        </p>
      </CardFooter>
    </Card>
  );
}
