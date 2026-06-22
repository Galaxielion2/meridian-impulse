import { processSteps } from "@/data/content";

export function ProcessSteps() {
  return (
    <div className="grid gap-5 md:grid-cols-4">
      {processSteps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={step.title} className="relative rounded-[1.75rem] border border-navy/10 bg-white/75 p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 text-meridian">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-serif text-4xl text-navy/15">0{index + 1}</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-navy/65">{step.description}</p>
          </div>
        );
      })}
    </div>
  );
}
