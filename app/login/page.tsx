"use client";

import { useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import LoginButton from "@/components/LoginButton";

function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { status } = useSession();
  const callbackUrl = searchParams.get("callbackUrl");

  // After successful login, redirect to callbackUrl or profile page
  useEffect(() => {
    if (status === "authenticated") {
      router.push(callbackUrl || "/");
    }
  }, [status, callbackUrl, router]);

  if (status === "authenticated") {
    return <div className="text-center mt-20 text-gray-400">Redirecting…</div>;
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold text-white">Sign In</h1>
      <p className="mt-2 text-gray-400">Authenticate with your Keycloak account</p>

      <div className="mt-8">
        <LoginButton callbackUrl={callbackUrl || "/"} />
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20 text-gray-400">Loading…</div>}>
      <LoginForm />
    </Suspense>
  );
}
