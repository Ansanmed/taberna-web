import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Welcome from "../pages/Welcome/Welcome";
import { useRef } from "react";
import audioFile from "../assets/media/the-doors-the-end.mp3";
import UnderConstruction from "../pages/UnderConstruction/UnderConstruction";

const AppRoutes = () => {
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

      <Router>
        <Routes>
          <Route path="/" element={<Welcome handlePlay={handlePlay} />} />
          <Route
            path="/home"
            element={<Home handlePause={handlePause} handlePlay={handlePlay} />}
          />
          <Route
            path="/under-construction"
            element={<UnderConstruction />}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
