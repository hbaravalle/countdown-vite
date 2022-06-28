import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Step1 from "../../pages/Step1";
import Step2 from "../../pages/Step2";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
      </Routes>
    </AnimatePresence>
  );
}
