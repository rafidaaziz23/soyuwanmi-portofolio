import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "../styles/book.css";
import paper from "../assets/paper.jpg";

const Book: React.FC = () => {
  return (
    <div className="book-container">
      <HTMLFlipBook
        className=""
        style={{}}
        width={437}
        height={620}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        startPage={0}
        size="fixed"
        minWidth={499}
        maxWidth={665}
        minHeight={709}
        maxHeight={945}
        drawShadow={true}
        flippingTime={750}
        usePortrait={true}
        startZIndex={1}
        autoSize={true}
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
