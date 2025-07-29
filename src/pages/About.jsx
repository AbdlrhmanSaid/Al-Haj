import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-[#FFF9F0] min-h-screen overflow-hidden">
      {/* overlay */}
      <div className="absolute inset-0 bg-black z-0"></div>

      {/* Background Image */}
      {/* Modern Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y }}
      >
        {/* Improved Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>

        <img
          src="/alhaj-background.png"
          alt="مزارع تمور الورود"
          className="absolute w-full h-full object-cover z-0"
        />

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block text-[#F8F4E8]">تمور الورود</span>
            <span className="text-3xl md:text-5xl font-light text-[#D3B159]">
              Alworood Dates
            </span>
          </h1>
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-10 h-10 mx-auto text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative" ref={ref}>
        {/* Arabic Section */}
        <motion.section
          className="mb-32"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="md:w-1/2"
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 100 },
                },
              }}
            >
              <h2
                className="text-4xl font-bold text-[#A17D23] mb-8 text-right"
                dir="rtl"
              >
                شركة تمور الورود
              </h2>
              <p
                className="text-xl text-gray-7S00 mb-6 leading-relaxed text-right"
                dir="rtl"
              >
                تمور الورود هي شركة فلسطينية رائدة في زراعة وإنتاج التمور، تتخذ
                من مدينة أريحا - أقدم مدن العالم - موطنًا لمزارعها الخصبة.
              </p>
              <p
                className="text-xl text-gray-700 leading-relaxed text-right"
                dir="rtl"
              >
                بخبرة متجذّرة في الأرض وعناية دقيقة بكل نخلة، ننتج بكل فخر
                تمورنا المميزة تحت اسم علامتنا الخاصة "تمور الحج"، التي تمثل
                رمزًا للجودة والبركة، وهدية تعبق بروح الأرض المقدسة.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl"
              variants={{
                hidden: { x: 100, opacity: 0, rotate: -5 },
                visible: {
                  x: 0,
                  opacity: 1,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 50 },
                },
              }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/aboutImg.png"
                alt="مزارع تمور الورود"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* English Section */}
        <motion.section
          className="mb-32"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <motion.div
              className="md:w-1/2"
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 100 },
                },
              }}
            >
              <h2 className="text-4xl font-bold text-[#A17D23] mb-8">
                Our Heritage
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Alworood Dates is a leading Palestinian company specializing in
                date cultivation and production, based in Jericho - the oldest
                city in the world.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                With deep-rooted expertise and meticulous care for each palm
                tree, we proudly produce our premium dates under our brand
                "Al-Haj Dates", representing quality, blessing, and the spirit
                of the Holy Land.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl"
              variants={{
                hidden: { x: -100, opacity: 0, rotate: 5 },
                visible: {
                  x: 0,
                  opacity: 1,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 50 },
                },
              }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/tmrImg.png"
                alt="Date processing"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="bg-gradient-to-r from-[#A17D23] to-[#D3B159] rounded-3xl p-12 text-white mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            قيمنا الأساسية | Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "الجودة المتميزة",
                subtitle: "Premium Quality",
                description:
                  "نلتزم بأعلى معايير الجودة في كل مرحلة من مراحل الإنتاج",
              },
              {
                title: "التراث الأصيل",
                subtitle: "Authentic Heritage",
                description:
                  "حفاظًا على تراثنا الزراعي الذي يمتد لعقود من الزمن",
              },
              {
                title: "الاستدامة",
                subtitle: "Sustainability",
                description:
                  "ممارسات زراعية مستدامة تحترم البيئة وتضمن المستقبل",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-2">
                  <span className="block" dir="rtl">
                    {item.title}
                  </span>
                  <span className="text-lg font-normal">{item.subtitle}</span>
                </h3>
                <p className="text-lg mt-4" dir="rtl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          className="text-center py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#A17D23] mb-6">
            <span className="block">جودة تعانق التراث</span>
            <span className="text-2xl text-[#D3B159]">
              Quality Meets Heritage
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8" dir="rtl">
            نرحب بكم لاكتشاف عالم تمور الورود، حيث تلتزم كل حبة تمر بأعلى معايير
            الجودة والطعم الأصيل.
          </p>
          <motion.button
            className="bg-[#A17D23] hover:bg-[#D3B159] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact">تواصل معنا | Contact Us </Link>
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
