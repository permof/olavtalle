import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Landskap i Innlandet"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-700/60" />
          </div>
          <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl">
              <h1 className="font-[family-name:var(--font-raleway)] text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                Arealplanlegger Beitostølen i Innlandet
              </h1>
              <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                Jeg bistår grunneiere, utbyggere, det offentlige og andre med dispensasjonssaker,
                delingssaker, reguleringsplaner, stedsanalyser, kommuneplanarbeid med medvirkning
                og prosjektledelse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Ta kontakt
                </a>
                <a
                  href="#tjenester"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Se tjenester
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Om meg Section */}
        <section id="om" className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Om meg</span>
                <h2 className="font-[family-name:var(--font-raleway)] text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
                  Olav Talle
                </h2>
                <div className="font-[family-name:var(--font-lora)] text-muted space-y-4 leading-relaxed">
                  <p>
                    Jeg har lang erfaring med arealplanlegging med base på Beitostølen i Innlandet,
                    og har mange års erfaring fra både offentlig og privat sektor. Jeg har opparbeidet
                    meg bred kompetanse innen arealplanlegging og reguleringsarbeid og også planlegging
                    av skianlegg.
                  </p>
                  <p>
                    Min tilnærming er grundig og løsningsorientert, og jeg legger vekt på god
                    kommunikasjon med alle involverte parter, fra kommunale saksbehandlere til
                    naboer og interesseorganisasjoner.
                  </p>
                  <p>
                    Gjennom årene har jeg bistått med et bredt spekter av prosjekter - fra
                    mindre reguleringsendringer til større områdeplaner, kommune(del)planer
                    og regionalplan.
                  </p>
                </div>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Last ned CV
                </a>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/portrait.jpg"
                    alt="Olav Talle"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tjenester Section */}
        <section id="tjenester" className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Tjenester</span>
              <h2 className="font-[family-name:var(--font-raleway)] text-3xl md:text-4xl font-semibold text-foreground mt-2">
                Hva jeg kan hjelpe deg med
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reguleringsplaner */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-raleway)] text-xl font-semibold text-foreground mb-3">
                  Reguleringsplaner
                </h3>
                <p className="font-[family-name:var(--font-lora)] text-muted leading-relaxed">
                  Utarbeidelse av detaljreguleringsplaner og områdeplaner. Prosess med reguleringsplaner
                  fra planinitiativ og mulighetsskisser til vedtatt plan i kommunen.
                </p>
              </div>

              {/* Konsekvensutredninger */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-raleway)] text-xl font-semibold text-foreground mb-3">
                  Konsekvensutredninger
                </h3>
                <p className="font-[family-name:var(--font-lora)] text-muted leading-relaxed">
                  Utredning av konsekvenser for miljø, samfunn og omgivelser
                  i henhold til gjeldende regelverk.
                </p>
              </div>

              {/* Medvirkning */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-raleway)] text-xl font-semibold text-foreground mb-3">
                  Medvirkning
                </h3>
                <p className="font-[family-name:var(--font-lora)] text-muted leading-relaxed">
                  Planlegging og gjennomføring av medvirkningsprosesser
                  med berørte parter og interessenter.
                </p>
              </div>

              {/* Stedsanalyser */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-raleway)] text-xl font-semibold text-foreground mb-3">
                  Stedsanalyser
                </h3>
                <p className="font-[family-name:var(--font-lora)] text-muted leading-relaxed">
                  Kartlegging og analyse av stedskvaliteter,
                  kulturmiljø og landskapsverdier.
                </p>
              </div>

              {/* Kommuneplanarbeid */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-raleway)] text-xl font-semibold text-foreground mb-3">
                  Kommuneplanarbeid
                </h3>
                <p className="font-[family-name:var(--font-lora)] text-muted leading-relaxed">
                  Bistand til kommuner med arealdel,
                  planprogram og planstrategier.
                </p>
              </div>

              {/* Dispensasjonssaker */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-raleway)] text-xl font-semibold text-foreground mb-3">
                  Dispensasjonssaker
                </h3>
                <p className="font-[family-name:var(--font-lora)] text-muted leading-relaxed">
                  Utarbeidelse og oppfølging av søknader
                  om dispensasjon fra gjeldende planer.
                </p>
              </div>

              {/* Delingssaker */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-raleway)] text-xl font-semibold text-foreground mb-3">
                  Delingssaker
                </h3>
                <p className="font-[family-name:var(--font-lora)] text-muted leading-relaxed">
                  Bistand med rekvisisjon av kart og oppmåling
                  og delingssaker.
                </p>
              </div>

              {/* Skiløypeplanlegging */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-raleway)] text-xl font-semibold text-foreground mb-3">
                  Skiløypeplanlegging
                </h3>
                <p className="font-[family-name:var(--font-lora)] text-muted leading-relaxed">
                  Planlegging og utvikling av skianlegg og skiløyper.
                  Lang erfaring med planlegging av skiinfrastruktur.
                </p>
                <a
                  href="/skianlegg.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Les om Skianlegg
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section id="kontakt" className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Kontakt</span>
                <h2 className="font-[family-name:var(--font-raleway)] text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
                  Ta kontakt for en uforpliktende prat
                </h2>
                <p className="font-[family-name:var(--font-lora)] text-muted leading-relaxed mb-8">
                  Har du et prosjekt du trenger hjelp med? Jeg tar gjerne en prat
                  om hvordan jeg kan bistå deg med arealplanlegging.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">E-post</h4>
                      <a href="mailto:post@olavtalle.no" className="text-primary hover:text-primary-dark transition-colors">
                        post@olavtalle.no
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Telefon</h4>
                      <a href="tel:+4799232230" className="text-primary hover:text-primary-dark transition-colors">
                        +47 99 23 22 30
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Lokasjon</h4>
                      <p className="text-muted">Beitostølen, Innlandet</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Navn
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Ditt navn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-post
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="din@epost.no"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Melding
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                      placeholder="Fortell om prosjektet ditt..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Send melding
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
