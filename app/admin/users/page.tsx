import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function UsersPage() {
  const mockUsers = [
    {
      id: "usr_01h4g8k2m9p3",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      emailVerified: true,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      role: "admin",
      banned: false,
      banReason: null,
      banExpires: null,
      createdAt: new Date("2025-01-15T10:30:00Z"),
      updatedAt: new Date("2026-02-01T14:20:00Z"),
    },
    {
      id: "usr_02j5h9l3n8q4",
      name: "Marcus Chen",
      email: "marcus.chen@example.com",
      emailVerified: true,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      role: "user",
      banned: false,
      banReason: null,
      banExpires: null,
      createdAt: new Date("2025-05-20T08:15:00Z"),
      updatedAt: new Date("2025-05-20T08:15:00Z"),
    },
    {
      id: "usr_03k6m1p4r7s2",
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      emailVerified: false,
      image: null,
      role: "user",
      banned: true,
      banReason: "Violation of terms of service - spamming comments.",
      banExpires: new Date("2027-01-01T00:00:00Z"),
      createdAt: new Date("2025-08-10T12:00:00Z"),
      updatedAt: new Date("2025-09-01T09:45:00Z"),
    },
    {
      id: "usr_04l7n2q5t6v1",
      name: "David Kim",
      email: "david.kim@example.com",
      emailVerified: true,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      role: "user",
      banned: false,
      banReason: null,
      banExpires: null,
      createdAt: new Date("2025-11-05T16:40:00Z"),
      updatedAt: new Date("2026-01-10T11:10:00Z"),
    },
    {
      id: "usr_05p8r3s6v5w9",
      name: "Emma Watson",
      email: "emma.w@example.com",
      emailVerified: true,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      role: "user",
      banned: false,
      banReason: null,
      banExpires: null,
      createdAt: new Date("2026-01-02T19:25:00Z"),
      updatedAt: new Date("2026-01-02T19:25:00Z"),
    },
  ];
  return (
    <>
      <Table>
        <TableCaption>A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.createdAt.toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
