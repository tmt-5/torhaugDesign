import { Reveal } from "@/components/motion/Reveal";

type CaseStudyRoleProps = {
  label: string;
  intro: string;
  teams: { id?: string; title: string; body: string }[];
};

/**
 * "Min rolle" — a label|content row (site's established two-column pattern)
 * whose content is itself a short intro line followed by one paragraph per
 * team/workstream, each with its own bolded title.
 */
export function CaseStudyRole({ label, intro, teams }: CaseStudyRoleProps) {
  return (
    <Reveal
      as="section"
      className="mt-section grid gap-y-2 sm:grid-cols-[var(--col-label)_minmax(0,1fr)] sm:gap-x-0 sm:gap-y-0"
    >
      <p className="text-ink-muted">{label}</p>

      <div className="space-y-5">
        <p className="text-ink-muted text-pretty">{intro}</p>
        {teams.map((team) => (
          <p
            key={team.title}
            id={team.id}
            className="text-ink-muted scroll-mt-8 text-pretty"
          >
            <span className="text-ink">{team.title}: </span>
            {team.body}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
