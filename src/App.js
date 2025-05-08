import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./App.css";

const Page = React.forwardRef(({ children, className = "", onClick }, ref) => (
  <div className={`page ${className}`} ref={ref} onClick={onClick}>
    {children}
  </div>
));

function App() {
  const bookRef = useRef();

  const handleOpenClick = (e) => {
    e.stopPropagation(); // Prevent auto flip on whole page click
    bookRef.current.pageFlip().flipNext(); // Flip to next page
  };

  return (
    <div className="book-container">
      <HTMLFlipBook
        width={300}
        height={400}
        showCover={true}
        className="flipbook"
        ref={bookRef}
      >
        <Page className="cover-page">
  <div className="card-content">
    <h1>Happy 7th Anniversary</h1>
    <p>To my beautiful soulmate</p>
    <p>Seven years of love, laughter, and unforgettable memories!</p>
    <button className="open-button" onClick={handleOpenClick}>
      Click to Open
    </button>
  </div>
</Page>

        <Page className="inside-page">
  <div className="message-content">
    <h2>Seven Years of Us 💕</h2>
    <p>
      Seven years of shared sunrises and skies,<br />
      Of holding hands and whispered goodbyes.<br />
      Of little moments only we understand,<br />
      Of building a life, hand in hand.<br /><br />

      Through laughter loud and quiet tears,<br />
      We’ve grown together over these years.<br />
      You’ve been my calm, my joy, my guide,<br />
      The love I cherish deep inside.<br /><br />

      Each day with you is still brand new,<br />
      My heart still races just for you.<br />
      In every way, through all life’s fuss,<br />
      I’d choose again these seven years of us.<br /><br />

      So here’s to now, to what’s ahead,<br />
      To dreams we’ve lived and words we’ve said.<br />
      My love, my life, my partner, my friend—<br />
      With you, I’d do it all again.
    </p>
  </div>
</Page>


      </HTMLFlipBook>
    </div>
  );
}

export default App;
