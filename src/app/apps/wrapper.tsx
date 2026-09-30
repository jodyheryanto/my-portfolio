import { AppIntro, ContactCTA, Container, FadeIn, FadeInStagger, PageLinks, ProjectSlider, Section } from '@/components';
import { App, loadApps } from '@/lib/mdx';

export default async function AppsLayout({ appData, children }: { appData: App; children: React.ReactNode }) {
  const allApps = await loadApps();
  const moreApps = allApps.filter(({ metadata }) => metadata.pathname !== appData.pathname).slice(0, 2);

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden @container">
      <article>
        <header>
          <Section id="about">
            <FadeInStagger once>
              <FadeIn>
                <AppIntro eyebrow="Case Study" title={appData.title}>
                  <p>{appData.description}</p>
                </AppIntro>
              </FadeIn>
              <FadeIn>
                <div className="mt-24 border-gray-500/20 border-y bg-gray-900/20">
                  <div className="mx-auto max-w-5xl">
                    <dl className="grid grid-cols-1 text-sm text-gray-500 sm:mx-0 sm:grid-cols-3">
                      <div className="px-6 py-4 sm:border-l border-gray-500/20">
                        <dt className="font-semibold text-blue-100">Industry</dt>
                        <dd>{appData.industry}</dd>
                      </div>
                      <div className="px-6 py-4 sm:border-l border-gray-500/20">
                        <dt className="font-semibold text-blue-100">Year</dt>
                        <dd>
                          <time dateTime={appData.date.split('-')[0]}>{appData.date.split('-')[0]}</time>
                        </dd>
                      </div>
                      <div className="px-6 py-4 sm:border-l border-gray-500/20">
                        <dt className="font-semibold text-blue-100">Service</dt>
                        <dd>{appData.service}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
                {appData.highlights && appData.highlights.length > 0 && (
                  <Container>
                    <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
                      {appData.highlights.map((h, i) => (
                        <li key={h} className="rounded-2xl border border-gray-500/20 bg-gray-900/40 p-5">
                          <span className="font-mono text-xs text-blue-100">0{i + 1}</span>
                          <p className="mt-2 text-white">{h}</p>
                        </li>
                      ))}
                    </ul>
                  </Container>
                )}
                <div className="mt-10 p-0 app-gradient-bg h-[70vh] @3xl:h-[85vh] min-h-[500px] relative">
                  <ProjectSlider images={appData.images || [appData.image]} />
                </div>
              </FadeIn>
            </FadeInStagger>
          </Section>
        </header>

        <FadeIn>{children}</FadeIn>
        <Container>
          <ContactCTA />
        </Container>
      </article>

      {moreApps.length > 0 && <PageLinks pages={moreApps} />}
    </div>
  );
}
