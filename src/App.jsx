import { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import "./App.css";
import { dummy } from "./assets/dummyImages";

function App() {
  const swapy = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current);

      swapy.current.onSwap((event) => {
        console.log("swap", event);
      });
    }

    return () => {
      swapy.current?.destroy();
    };
  }, []);

  return (
    <>
      <h1>Galeria</h1>
      <div className="gallery" ref={container} role="list">
        {dummy.map((image) => (
          <div className="slot" key={image.id} data-swapy-slot={image.id}>
            <div className="user" key={image.id} data-swapy-item={image.id}>
              <figure className="gallery__item" key={image.id} role="listitem">
                <img
                  src={image.imagen}
                  alt={image.titulo}
                  className="gallery__image"
                  loading="lazy"
                />
                <figcaption className="gallery__caption">
                  {image.titulo}
                </figcaption>
              </figure>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
