import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: { title: string; description: string; icon: LucideIcon }[];
  columns?: 2 | 3;
}) {
  return (
    <div className={columns === 2 ? "grid gap-5 md:grid-cols-2" : "grid gap-5 md:grid-cols-3"}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <FadeIn key={item.title} delay={index * 0.05}>
            <Card className="h-full transition hover:-translate-y-1 hover:border-ocean/40">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-meridian">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-navy/65">{item.description}</p>
              </CardContent>
            </Card>
          </FadeIn>
        );
      })}
    </div>
  );
}
