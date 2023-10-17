import React, { useState, useEffect } from "react";
import dialogBox from "/assets/dialog.png";
import "../App.css";


// Dialog Box
export default function DialogBox() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Setelah 5 detik, ubah isVisible menjadi false
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Membersihkan timer jika komponen dibongkar sebelum waktu habis
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible ? (
        <div
          className="w-48 h-56 pt-20 pl-8 bg-center bg-no-repeat bg-cover md:w-64 md:h-64 text-primary md:pl-16 md:pt-24"
          style={{ backgroundImage: `url(${dialogBox})` }}
        >
          Thanks for visiting
        </div>
      ) : null}
    </>
  );
}


// Background SVG
export function Svg({ rows, cols, colors }) {
  const defaultColor = "bg-main dark:bg-main/20";

  const bullet = () => {
    return (
      <div className="flex">
        {Array.from({ length: cols }).map((_, i) => (
          <div
            key={i}
            className={`${defaultColor} ${colors} w-1.5 h-1.5 m-1`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i}>{bullet()}</div>
      ))}
    </>
  );
}

