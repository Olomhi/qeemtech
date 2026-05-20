import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sports from "../components/Sports";
import Tech from "../components/Tech";
import Agriculture from "../components/Agriculture";
import Contact from "../components/Contact";
import WhatIDo from "../components/WhatIDo";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <Hero />
          <WhatIDo />
          <Sports />
          <Tech />
          <Agriculture />
          <Contact />
        </motion.div>
      )}
    </>
  );
};

export default LandingPage;
