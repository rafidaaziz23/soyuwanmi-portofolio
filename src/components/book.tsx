import { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import "../styles/book.css";
import paper from "../assets/paper.jpg";

const Book: React.FC = () => {
  const [width, setWidth] = useState(399);
  const [height, setHeight] = useState(526);
  const [usePortrait, setUsePortrait] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        setUsePortrait(true);
        // Mobile
        setWidth(250);
        setHeight(330);
      } else if (screenWidth <= 1024) {
        // Tablet
        setWidth(350);
        setHeight(460);
      } else if (screenWidth <= 1366) {
        // Laptop 13"
        setWidth(380);
        setHeight(500);
      } else if (screenWidth <= 1536) {
        // Laptop 15"-16"
        setWidth(485); // 420
        setHeight(635); // 550
      } else if (screenWidth <= 1920) {
        // Desktop 24"
        setWidth(650); //55o
        setHeight(847.5); //720
      } else {
        // Monitor besar (4K, ultrawide, dll.)
        setWidth(750);
        setHeight(975);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="book-container">
      <HTMLFlipBook
        className=""
        style={{}}
        width={width}
        height={height}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        startPage={0}
        size="fixed"
        minWidth={250}
        maxWidth={width}
        minHeight={330}
        maxHeight={height}
        drawShadow={true}
        flippingTime={750}
        usePortrait={usePortrait}
        startZIndex={31}
        autoSize={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={20}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {/* Cover */}
        <div className="page cover"></div>

        {/* Page 1 - Introduction */}
        <div className="page paper">
          <h2>About Me</h2>
          <p>
            Hi! I'm Nadya Budy Tjandra, an illustrator and visual artist
            passionate about storytelling through art. My works blend
            creativity, emotion, and detail to create stunning visual
            experiences.
          </p>
        </div>
        <div className="page paper">
          <h2>Artistic Style</h2>
          <ul>
            <li>Digital & Traditional Illustration</li>
            <li>Character Design & Concept Art</li>
            <li>Fantasy & Surrealism</li>
            <li>Children’s Book Illustration</li>
          </ul>
        </div>
        <div className="page paper">
          <h2>Portfolio</h2>
          <p>Here are some of my featured artworks:</p>
          <ul>
            <li>
              <strong>Project A:</strong> A fantasy-themed character series
            </li>
            <li>
              <strong>Project B:</strong> Illustrated book covers and posters
            </li>
            <li>
              <strong>Project C:</strong> Commissioned digital paintings
            </li>
          </ul>
        </div>
        <div className="page paper">
          <h2>Experience</h2>
          <p>
            With years of experience in illustration, I have worked with
            authors, game developers, and brands to bring visual concepts to
            life. My work has been featured in various exhibitions and
            publications.
          </p>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
