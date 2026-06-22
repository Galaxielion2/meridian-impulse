import { CheckCircle2 } from "lucide-react";

export function RoleGrid({ roles }: { roles: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {roles.map((role) => (
        <div key={role} className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-white/75 p-4 shadow-sm">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ocean" />
          <span className="text-sm font-semibold leading-6 text-navy/78">{role}</span>
        </div>
      ))}
    </div>
  );
}
