"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* الخلفية */}
      <div className="absolute inset-0">
        <Image
  src="/images/Picture4.png"
  alt="logistics"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
  priority
/>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-24 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className=" text-2xl md:text-3xl font-extrabold "
        >
          Energi<span className="text-[#f37121]">Z</span>e Future Group
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className=" text-sm md:text-sm font-bold mb-8 mt-8 text-center max-w-xl"
        >
            A multi-sector group leading in education and heavy logistics - shaping brighter futures and powering seamless operations across the region.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-4"
        >
          {/* <a href="#services" className="px-6 py-3 rounded-md bg-accent text-white font-semibold">
            Our Services
          </a> */}
          <a
            href="/contact"
            className="px-6 py-2 rounded-lg border border-gray-600 "
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
