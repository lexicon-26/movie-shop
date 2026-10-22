import { SignOutButton } from "@/components/sign-out-button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { Users, Film, UserCog } from "lucide-react";
import Link from "next/link";

export default function AdminSideBar() {
  return (
    <>
      <Sidebar>
        <SidebarHeader className="flex h-16 items-center justify-center border-b px-6">
          <div className="flex items-center gap-3">
            <UserCog className="h-4 w-4" />
            <span className="text-xl">Admin Panel</span>
          </div>
        </SidebarHeader>

        <SidebarContent className="space-y-1 px-3 py-4">
          <SidebarMenuButton
            render={<Link href="/admin/users" />}
            className="flex items-center gap-3"
          >
            <Users className="h-4 w-4" />
            <span>User</span>
          </SidebarMenuButton>

          <SidebarMenuButton
            render={<Link href="/admin/movies" />}
            className="flex items-center gap-3"
          >
            <Film className="h-4 w-4" />
            <span>Movies</span>
          </SidebarMenuButton>
        </SidebarContent>

        <SidebarFooter className="border-t p-4">
          <SignOutButton />
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
