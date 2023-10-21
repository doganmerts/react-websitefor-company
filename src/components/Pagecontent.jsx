import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
import Map from "./Map";

function Pagecontent() {
  return (
    <>
      <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}></div>
      <Project />
      <About />
      <Contact />
      <Map />
    </>
  );
}

export default Pagecontent;
