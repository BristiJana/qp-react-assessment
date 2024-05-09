import React from "react";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Bristi Jana</p>
    </footer>
  );
}

export default Footer;
