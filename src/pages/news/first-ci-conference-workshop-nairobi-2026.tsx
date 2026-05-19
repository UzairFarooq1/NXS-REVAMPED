import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Microscope } from "lucide-react";

import heroImage from "@/assets/news-events/COCHLEAR_CONFERENCE.jpg";
import standImage from "@/assets/news-events/COCHLEAR_STAND.jpg";
import simulationImage from "@/assets/news-events/COCHLEAR_ELECTRODE_SIMULATION.jpg";

const FirstCIConferenceWorkshopNairobi2026 = () => {
  return (
    <Layout>
      <PageHero
        title="First CI Conference & Workshop 2026"
        subtitle="Cochlear, CIGOK, KENTS and NXS bring together surgeons, audiologists and speech therapists for advanced cochlear implant discussions and hands-on temporal bone training in Nairobi, Kenya."
        backgroundImage={heroImage}
      />

      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>10th - 11th May 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>CIGOK • KENTS • Cochlear • NXS</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-lg leading-8 text-muted-foreground">
                NXS joined Cochlear during the inaugural Cochlear Implant (CI)
                Conference and Workshop hosted together with the Cochlear
                Implant Group of Kenya (CIGOK) and the Kenya ENT Society (KENTS)
                in Nairobi, Kenya.
              </p>

              <p className="text-lg leading-8 text-muted-foreground mt-6">
                The conference brought together surgeons, audiologists, speech
                therapists and clinical specialists for high-level discussions
                and hands-on experience focused on advancing cochlear implant
                care across the region.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-10 items-center mb-20"
          >
            <div>
              <img
                src={standImage}
                alt="Cochlear exhibition stand"
                className="rounded-3xl shadow-xl w-full object-cover"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Microscope className="h-4 w-4" />
                Conference Exhibition
              </div>

              <h2 className="text-3xl font-bold mb-6">
                Showcasing the Latest Cochlear Implant Innovations
              </h2>

              <p className="text-muted-foreground leading-8 mb-4">
                The event featured live demonstrations and discussions around
                Cochlear technologies, connected care solutions, surgical
                navigation systems and sound processor innovations designed to
                improve long-term hearing outcomes.
              </p>

              <p className="text-muted-foreground leading-8">
                NXS and Cochlear team members engaged in discussions with
                participants through technical support sessions, product
                showcases and collaborative learning opportunities aimed at
                strengthening the regional cochlear implant ecosystem.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Users className="h-4 w-4" />
                  Scientific Sessions
                </div>

                <h2 className="text-3xl font-bold mb-6">
                  High-Level Discussions Across Multiple Disciplines
                </h2>

                <p className="text-muted-foreground leading-8 mb-4">
                  Day one of the conference focused on collaborative scientific
                  discussions and knowledge exchange involving ENT surgeons,
                  audiologists, speech therapists and hearing care teams.
                </p>

                <p className="text-muted-foreground leading-8">
                  Participants explored modern cochlear implant practices,
                  patient management approaches and the growing role of advanced
                  hearing technologies in improving quality of life for hearing
                  impaired patients.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={heroImage}
                  alt="CI conference session in Nairobi"
                  className="rounded-3xl shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <img
                src={simulationImage}
                alt="Temporal bone workshop and electrode simulation"
                className="rounded-3xl shadow-xl w-full h-[320px] object-cover"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Microscope className="h-4 w-4" />
                Hands-On Workshop
              </div>

              <h2 className="text-3xl font-bold mb-6">
                Temporal Bone Training and Electrode Simulation
              </h2>

              <p className="text-muted-foreground leading-8 mb-4">
                The highlight of day two was the well-organised Temporal Bone
                (TB) workshop, where surgeons and clinical teams participated in
                practical simulation sessions focused on cochlear implant
                electrode handling and surgical techniques.
              </p>

              <p className="text-muted-foreground leading-8">
                By combining hands-on technical workshops with in-depth academic
                sessions, the conference reinforced the importance of
                multidisciplinary collaboration and continuous training in
                advancing hearing healthcare in Kenya and across Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FirstCIConferenceWorkshopNairobi2026;
