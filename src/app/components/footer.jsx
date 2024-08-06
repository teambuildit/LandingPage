import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-slate-400 p-6">
      <aside>
        <p className="text-lg text-blue-900 text-center text-sm md:text-lg">
          Copyright © {new Date().getFullYear()} - All right reserved by BuildIt
          team.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
