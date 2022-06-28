import { motion } from "framer-motion";
import Layout from "../component/Layout";
import Clock from "../component/Clock";
import Numpad from "../component/Numpad";

export default function Step1() {
  return (
    <Layout>
      <motion.div
        className="wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 0 }}
      >
        <p>Set a timer...</p>
        <Clock
          onClick={() => {
            console.log("Pepe");
          }}
          size="small"
        />
        <Numpad />
      </motion.div>
    </Layout>
  );
}
