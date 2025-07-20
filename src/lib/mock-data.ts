export type Deliverable = {
  id: string;
  title: string;
  status: "Pending" | "In Progress" | "Done";
  dueDate: string;
  fileUrl?: string;
};

export type ProjectUpdate = {
  id: string;
  message: string;
  timestamp: string;
  author: string;
};

export type Project = {
  id: string;
  name: string;
  status: "Active" | "On Hold" | "Completed";
  startDate: string;
  deadline: string;
  manager: string;
  clientName: string;
  clientId: string;
  description: string;
  deliverables: Deliverable[];
  updates: ProjectUpdate[];
};

export type Ticket = {
  id: string;
  title: string;
  description: string;
  status: "Open" | "In Progress" | "Closed";
  priority: "Low" | "Medium" | "High";
  createdBy: string;
  createdDate: string;
  assignedTo: string;
  projectId: string;
};

export type Client = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  projectIds: string[];
};

export const clients: Client[] = [
  { id: "client-1", name: "John Doe", company: "Innovate Inc.", email: "john.doe@innovate.com", phone: "123-456-7890", projectIds: ["proj-101", "proj-102"] },
  { id: "client-2", name: "Jane Smith", company: "Tech Solutions", email: "jane.smith@techsolutions.com", phone: "098-765-4321", projectIds: ["proj-103"] },
];

export const projects: Project[] = [
  {
    id: "proj-101",
    name: "E-commerce Platform",
    status: "Active",
    startDate: "2023-01-15",
    deadline: "2024-06-30",
    manager: "Alice Johnson",
    clientName: "Innovate Inc.",
    clientId: "client-1",
    description: "Development of a new e-commerce platform with custom features.",
    deliverables: [
      { id: "d-1", title: "UI/UX Mockups", status: "Done", dueDate: "2023-02-28" },
      { id: "d-2", title: "Frontend Development", status: "In Progress", dueDate: "2024-05-30" },
      { id: "d-3", title: "Backend API", status: "In Progress", dueDate: "2024-06-15" },
    ],
    updates: [
        { id: "u-1", message: "Project kickoff meeting held.", timestamp: "2023-01-16T10:00:00Z", author: "Alice Johnson" },
        { id: "u-2", message: "UI/UX mockups have been approved by the client.", timestamp: "2023-03-01T14:30:00Z", author: "Alice Johnson" },
    ],
  },
  {
    id: "proj-102",
    name: "Mobile App Development",
    status: "On Hold",
    startDate: "2023-03-01",
    deadline: "2024-09-01",
    manager: "Bob Williams",
    clientName: "Innovate Inc.",
    clientId: "client-1",
    description: "A cross-platform mobile app for internal communication.",
     deliverables: [],
     updates: [],
  },
  {
    id: "proj-103",
    name: "CRM Integration",
    status: "Completed",
    startDate: "2022-11-01",
    deadline: "2023-04-01",
    manager: "Alice Johnson",
    clientName: "Tech Solutions",
    clientId: "client-2",
    description: "Integrating a new CRM system with existing company tools.",
    deliverables: [
        { id: "d-4", title: "System Analysis", status: "Done", dueDate: "2022-11-30" },
        { id: "d-5", title: "Integration Build", status: "Done", dueDate: "2023-03-15" },
    ],
    updates: [],
  },
];

export const tickets: Ticket[] = [
    { id: "t-1", projectId: "proj-101", title: "Cannot login to test server", description: "Getting a 500 error when trying to access the staging environment.", status: "In Progress", priority: "High", createdBy: "John Doe", createdDate: "2024-04-10", assignedTo: "Charlie Brown" },
    { id: "t-2", projectId: "proj-101", title: "Request for new report feature", description: "We would like to add a sales report to the admin dashboard.", status: "Open", priority: "Medium", createdBy: "John Doe", createdDate: "2024-04-12", assignedTo: "Pending" },
    { id: "t-3", projectId: "proj-103", title: "Data sync issue", description: "Customer data from October is not syncing correctly.", status: "Closed", priority: "High", createdBy: "Jane Smith", createdDate: "2023-03-20", assignedTo: "Alice Johnson" },
];
