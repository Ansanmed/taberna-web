import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Welcome from "../pages/Welcome/Welcome";
import { useRef } from "react";
import audioFile from "../assets/media/the-doors-the-end.mp3";
import { AnimatePresence, motion } from "framer-motion";

// Componente contenedor para las rutas con animación
const AnimatedRoutes = () => {
  const location = useLocation();
  const audioRef = useRef(null);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio
        .play()
        .then(() => {
          console.log("Audio reproduciéndose correctamente");
        })
        .catch((error) => {
          console.error("Error al reproducir el audio:", error);
        });
    } else {
      console.error("audioRef.current es null");
    }
  };

  const handlePause = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      console.log("Audio pausado");
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioFile} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 3, // Fade-in de 3 segundos
              ease: "easeInOut", // Transición suave
              delay: location.pathname === "/home" ? 1 : 0, // Retraso de 3s solo para /home
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 3, // Fade-out de 3 segundos
              ease: "easeInOut", // Transición suave
            },
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<Welcome handlePlay={handlePlay} />} />
            <Route
              path="/home"
              element={
                <Home handlePause={handlePause} handlePlay={handlePlay} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default AppRoutes;
