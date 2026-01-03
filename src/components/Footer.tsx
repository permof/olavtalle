import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Olav Talle"
                width={180}
                height={46}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Arealplanlegger med base i Innlandet.
              Profesjonell bistand til kommuner, utbyggere og grunneiere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-raleway)] font-semibold mb-4">
              Snarveier
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#om" className="text-slate-400 hover:text-white transition-colors">
                Om meg
              </a>
              <a href="#tjenester" className="text-slate-400 hover:text-white transition-colors">
                Tjenester
              </a>
              <a href="#kontakt" className="text-slate-400 hover:text-white transition-colors">
                Kontakt
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-raleway)] font-semibold mb-4">
              Kontakt
            </h4>
            <div className="flex flex-col gap-3 text-slate-400">
              <a href="mailto:post@olavtalle.no" className="hover:text-white transition-colors">
                post@olavtalle.no
              </a>
              <a href="tel:+4700000000" className="hover:text-white transition-colors">
                +47 000 00 000
              </a>
              <p>Innlandet, Norge</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-500 text-sm text-center">
            &copy; {currentYear} Olav Talle. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
