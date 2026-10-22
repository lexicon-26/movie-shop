import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AdminSideBar from "./_components/admin-side-bar";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.role !== "admin") {
    redirect("/");
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background text-foreground">
        <AdminSideBar />
        <SidebarTrigger className="text-foreground hover:bg-accent hover:text-accent-foreground" />
        <SidebarInset className="flex-1 bg-background p-6">
          <main className="space-y-4">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
