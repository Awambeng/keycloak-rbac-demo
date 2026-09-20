import { requireRole } from "@/lib/auth-helpers";
import { ROLES } from "@/lib/roles";

export default async function AdminPage() {
  await requireRole(ROLES.ADMIN);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-1">Welcome, Admin!</h1>
      <p className="text-gray-400 mb-8">Admin Dashboard</p>

      <div className="bg-[#2d2d2d] rounded-xl shadow p-8 max-w-lg border border-gray-700">
        <h2 className="text-lg font-semibold text-gray-300 mb-3">
          User Management
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Users and roles are managed directly in the{" "}
          <a
            href="http://localhost:8080/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            Keycloak Admin Console
          </a>
          . From there you can:
        </p>
        <ul className="mt-4 space-y-2 text-gray-400 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-indigo-400 mt-0.5">•</span>
            Create new users
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-400 mt-0.5">•</span>
            Assign realm roles (admin, volunteer)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-400 mt-0.5">•</span>
            Enable / disable accounts
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-400 mt-0.5">•</span>
            Reset passwords
          </li>
        </ul>
      </div>
    </div>
  );
}
