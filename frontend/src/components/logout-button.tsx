"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm font-medium text-[var(--foreground)] hover:text-red-400 transition-colors"
    >
      Logout
    </button>
  );
}
