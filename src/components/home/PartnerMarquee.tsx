import olympus from "@/assets/partners/olympus.png";
import shimadzu from "@/assets/partners/shimadzu.png";
import wego from "@/assets/partners/wego.png";
import ge from "@/assets/partners/ge-healthcare.png";
import baxter from "@/assets/partners/baxter-hillrom.png";
import cochlear from "@/assets/partners/cochlear.jpeg";
import natus from "@/assets/partners/Natus_logo.jpg";
import leica from "@/assets/partners/leica.png";
import eskay from "@/assets/partners/eskay.jpg";
import zittron from "@/assets/partners/zittron-wordmark.png";

const logos: { name: string; src: string; large?: boolean }[] = [
  { name: "Olympus", src: olympus, large: true },
  { name: "Shimadzu", src: shimadzu, large: true },
  { name: "GE HealthCare", src: ge },
  { name: "WEGO", src: wego },
  { name: "Baxter", src: baxter },
  { name: "Cochlear", src: cochlear },
  { name: "Leica", src: leica },
  { name: "Natus", src: natus },
  { name: "Eskay Fine Chemicals", src: eskay },
  { name: "Zittron", src: zittron },
];

/** A slim, endlessly scrolling strip of partner logos. Pauses on hover. */
const PartnerMarquee = () => (
  <section aria-label="Our partners" className="border-b bg-background py-10">
    <p className="mb-6 text-center text-xs font-heading font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:tracking-[0.25em]">
      Authorised partner of world-leading manufacturers
    </p>
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            aria-hidden={i >= logos.length}
            className="flex h-14 w-36 flex-shrink-0 items-center justify-center"
          >
            <img
              src={logo.src}
              alt={i < logos.length ? logo.name : ""}
              loading="lazy"
              className={`${
                logo.large
                  ? "max-h-14 scale-150 hover:scale-[1.65]"
                  : "max-h-12 hover:scale-110"
              } max-w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0`}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerMarquee;
