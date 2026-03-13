import { AppIntro, FadeIn, FadeInStagger, PageLinks, ProjectSlider, Section } from '@/components';
import { App, loadApps } from '@/lib/mdx';

export default async function AppsLayout({ appData, children }: { appData: App; children: React.ReactNode }) {
  const allApps = await loadApps();
  const moreApps = allApps.filter(({ metadata }) => metadata.url !== appData.url).slice(0, 2);

  // Use an array of 3 identical images for the slider as requested
  const sliderImages = [appData.image, appData.image, appData.image];

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
                <div className="p-0 app-gradient-bg h-[70vh] @3xl:h-[85vh] min-h-[500px] relative">
                  <ProjectSlider images={appData.images || [appData.image]} />
                </div>
              </FadeIn>
            </FadeInStagger>
          </Section>
        </header>

        <FadeIn>{children}</FadeIn>
      </article>

      {moreApps.length > 0 && <PageLinks pages={moreApps} />}
    </div>
  );
}
