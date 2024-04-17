// components/ProtectedRoute.tsx
import { useSession, signIn } from "next-auth/react";
import { useEffect, ReactNode } from "react";
import { useRouter } from "next/router";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && !session) {
      // Redirect to the sign-in page
      signIn("your-auth-provider", { callbackUrl: "/snippet-generator" }); // Customize the provider if needed
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // Or your custom loading indicator
  }

  return <>{session ? children : null}</>;
};

export default ProtectedRoute;
