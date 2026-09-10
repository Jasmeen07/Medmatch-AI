"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterRedirect() {
  const router = useRouter();

  useEffect(() => {
    // We merged the registration form into the sliding layout on the login page!
    router.replace("/login");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-mesh">
      <p className="text-[var(--muted)]">Redirecting to authentication...</p>
    </div>
  );
}
