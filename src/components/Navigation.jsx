import { useState } from "react";
import "../styles/navigation.css";

export default function Navigation({ currentPath }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 w-full bg-white z-50 overflow-hidden">
      <div className="flex items-center nav-container mx-0 sm:mx-3">
        <img
          className="rounded-full"
          width="40"
          height="40"
          src="/profile.jpeg"
          alt="Profile"
        />
        <div
          style={{
            fontSize: "1.125rem",
            paddingLeft: "0.6875rem",
            fontWeight: 500,
          }}
        >
          Htet Lin Maung
        </div>
        <div className="flex-grow"></div>
        {!open ? (
          <svg
            onClick={() => setOpen(!open)}
            className="md:hidden"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33333 24H26.6667C27.4 24 28 23.4 28 22.6667C28 21.9333 27.4 21.3333 26.6667 21.3333H5.33333C4.6 21.3333 4 21.9333 4 22.6667C4 23.4 4.6 24 5.33333 24ZM5.33333 17.3333H26.6667C27.4 17.3333 28 16.7333 28 16C28 15.2667 27.4 14.6667 26.6667 14.6667H5.33333C4.6 14.6667 4 15.2667 4 16C4 16.7333 4.6 17.3333 5.33333 17.3333ZM4 9.33333C4 10.0667 4.6 10.6667 5.33333 10.6667H26.6667C27.4 10.6667 28 10.0667 28 9.33333C28 8.6 27.4 8 26.6667 8H5.33333C4.6 8 4 8.6 4 9.33333Z"
              fill="#5C5C5C"
            />
          </svg>
        ) : (
          <svg
            className="md:hidden"
            onClick={() => setOpen(!open)}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 17.8667L9.46667 24.4001C9.22223 24.6445 8.91112 24.7667 8.53334 24.7667C8.15556 24.7667 7.84445 24.6445 7.6 24.4001C7.35556 24.1556 7.23334 23.8445 7.23334 23.4667C7.23334 23.089 7.35556 22.7778 7.6 22.5334L14.1333 16.0001L7.6 9.46673C7.35556 9.22229 7.23334 8.91118 7.23334 8.5334C7.23334 8.15562 7.35556 7.84451 7.6 7.60006C7.84445 7.35562 8.15556 7.2334 8.53334 7.2334C8.91112 7.2334 9.22223 7.35562 9.46667 7.60006L16 14.1334L22.5333 7.60006C22.7778 7.35562 23.0889 7.2334 23.4667 7.2334C23.8444 7.2334 24.1556 7.35562 24.4 7.60006C24.6444 7.84451 24.7667 8.15562 24.7667 8.5334C24.7667 8.91118 24.6444 9.22229 24.4 9.46673L17.8667 16.0001L24.4 22.5334C24.6444 22.7778 24.7667 23.089 24.7667 23.4667C24.7667 23.8445 24.6444 24.1556 24.4 24.4001C24.1556 24.6445 23.8444 24.7667 23.4667 24.7667C23.0889 24.7667 22.7778 24.6445 22.5333 24.4001L16 17.8667Z"
              fill="#5C5C5C"
            />
          </svg>
        )}

        <div
          className="navigation hidden md:flex"
          style={{ fontSize: "1.125rem" }}
        >
          <a
            href="/htetlinmaung"
            style={
              currentPath == "/htetlinmaung"
                ? { color: "black", fontWeight: 500 }
                : {}
            }
          >
            Home
          </a>
          <a
            href="/htetlinmaung/about"
            style={
              currentPath == "/htetlinmaung/about"
                ? { color: "black", fontWeight: 500 }
                : {}
            }
          >
            About
          </a>
          <a
            href="/htetlinmaung/works"
            style={
              currentPath == "/htetlinmaung/works"
                ? { color: "black", fontWeight: 500 }
                : {}
            }
          >
            Works
          </a>
          <a
            href="/htetlinmaung/contact"
            style={
              currentPath == "/htetlinmaung/contact"
                ? { color: "black", fontWeight: 500 }
                : {}
            }
          >
            Contact
          </a>
        </div>
      </div>
      <div
        style={{ fontSize: "1.125rem", maxHeight: open ? "1000px" : "1px" }}
        className="navigation px-2"
      >
        <div className="p-2">
          <a
            href="/htetlinmaung"
            style={
              currentPath == "/htetlinmaung"
                ? { color: "black", fontWeight: 500 }
                : {}
            }
          >
            Home
          </a>
        </div>
        <div className="p-2">
          <a
            href="/htetlinmaung/about"
            style={
              currentPath == "/htetlinmaung/about"
                ? { color: "black", fontWeight: 500 }
                : {}
            }
          >
            About
          </a>
        </div>
        <div className="p-2">
          <a
            href="/htetlinmaung/works"
            style={
              currentPath == "/htetlinmaung/works"
                ? { color: "black", fontWeight: 500 }
                : {}
            }
          >
            Works
          </a>
        </div>
        <div className="p-2">
          <a
            href="/htetlinmaung/contact"
            style={
              currentPath == "/htetlinmaung/contact"
                ? { color: "black", fontWeight: 500 }
                : {}
            }
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
