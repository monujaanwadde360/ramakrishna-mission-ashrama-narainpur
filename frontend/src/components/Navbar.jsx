import React, { useState, useRef, useEffect } from "react";
import { MENU } from "../data/navbarData";
import { Link, useNavigate } from "react-router-dom";

import TopNavbar from "./TopNavbar";
import Header from "./Header";

/* ================= MAIN ================= */

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* NORMAL SCROLL */}
      <TopNavbar />
      <Header />

      {/* STICKY NAVBAR */}
      <div className="sticky top-0 z-[9999] w-full">
        <nav className="bg-gradient-to-b from-[#f6c27a] to-[#c57b3a] text-[#2d1a00] border-y border-[#a15b24] font-serif font-bold tracking-wide shadow-md">

          {/* MOBILE */}
          <div className="flex justify-between items-center px-4 py-3 md:hidden">
            <span className="font-bold">Menu</span>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-2xl font-bold"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex justify-center flex-wrap">
            {MENU.map((item, index) => (
              <DropdownMenu key={index} item={item} />
            ))}
          </div>

          {/* MOBILE MENU */}
          {mobileOpen && (
            <div className="md:hidden bg-[#efe0ad] max-h-[80vh] overflow-y-auto">
              {MENU.map((item, index) => (
                <MobileMenu key={index} item={item} />
              ))}
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;

/* ================= DESKTOP DROPDOWN ================= */

const DropdownMenu = ({ item }) => {
  const [open, setOpen] = useState(false);

  const hasChildren = item.dropdown?.length > 0;

  /* ===== EXTERNAL URL ===== */
  if (!hasChildren && item.external) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-3 hover:bg-[#e4d296]"
      >
        {item.title}
      </a>
    );
  }

  /* ===== NORMAL LINK ===== */
  if (!hasChildren) {
    return (
      <Link
        to={item.path || "#"}
        className="px-4 py-3 hover:bg-[#e4d296]"
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="px-5 py-3 hover:bg-[#b76f31] hover:text-white">
        {item.title} ▼
      </button>

      {open && <DropdownList items={item.dropdown} />}
    </div>
  );
};

/* ================= DESKTOP DROPDOWN LIST ================= */

const DropdownList = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openLeft, setOpenLeft] = useState(false);

  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      if (rect.right > window.innerWidth - 40) {
        setOpenLeft(true);
      }
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute top-full ${
        openLeft ? "right-0" : "left-0"
      } bg-[#efe0ad] w-auto min-w-max whitespace-nowrap border border-[#a15b24] shadow-lg z-[9999]`}
    >
      {items.map((item, index) => {
        const hasChildren = item.submenu?.length > 0;

        return (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* ===== EXTERNAL URL ===== */}
            {item.external ? (
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left flex justify-between items-center px-3 py-2 text-sm hover:bg-[#e4d296]"
              >
                <span>{item.label || item.title}</span>

                {hasChildren && (
                  <span className="ml-2 text-xs">›</span>
                )}
              </a>
            ) : item.path ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(item.path);
                }}
                className="w-full text-left flex justify-between items-center px-3 py-2 text-sm hover:bg-[#e4d296]"
              >
                <span>{item.label || item.title}</span>

                {hasChildren && (
                  <span className="ml-2 text-xs">›</span>
                )}
              </button>
            ) : (
              <div className="flex justify-between items-center px-3 py-2 text-sm">
                <span>{item.label || item.title}</span>

                {hasChildren && (
                  <span className="ml-2 text-xs">›</span>
                )}
              </div>
            )}

            {/* SUBMENU */}
            {hasChildren && activeIndex === index && (
              <div
                className={`absolute top-0 ${
                  openLeft ? "right-full" : "left-full"
                }`}
              >
                <DropdownList items={item.submenu} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

/* ================= MOBILE MENU ================= */

const MobileMenu = ({ item }) => {
  const [open, setOpen] = useState(false);

  const hasChildren = item.dropdown?.length > 0;

  /* ===== EXTERNAL URL ===== */
  if (!hasChildren && item.external) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-2 border-b hover:bg-[#e4d296]"
      >
        {item.title}
      </a>
    );
  }

  /* ===== NORMAL LINK ===== */
  if (!hasChildren) {
    return (
      <Link
        to={item.path}
        className="block px-4 py-2 border-b hover:bg-[#e4d296]"
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 border-b flex justify-between"
      >
        {item.title}

        <span>{open ? "-" : "+"}</span>
      </button>

      {open && (
        <div className="pl-4 bg-[#f7e7b8]">
          {item.dropdown.map((sub, i) => (
            <MobileSubMenu key={i} item={sub} />
          ))}
        </div>
      )}
    </div>
  );
};

/* ================= MOBILE SUBMENU ================= */

const MobileSubMenu = ({ item }) => {
  const [open, setOpen] = useState(false);

  const hasChildren = item.submenu?.length > 0;

  /* ===== EXTERNAL URL ===== */
  if (!hasChildren && item.external) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-2 hover:bg-[#e4d296]"
      >
        {item.label || item.title}
      </a>
    );
  }

  /* ===== NORMAL LINK ===== */
  if (!hasChildren) {
    return (
      <Link
        to={item.path || "#"}
        className="block px-4 py-2 hover:bg-[#e4d296]"
      >
        {item.label || item.title}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 flex justify-between"
      >
        {item.label || item.title}

        <span>{open ? "-" : "+"}</span>
      </button>

      {open && (
        <div className="pl-4 bg-[#fff3cc]">
          {item.submenu.map((child, i) => (
            <MobileSubMenu key={i} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};