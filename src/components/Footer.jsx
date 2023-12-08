import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="foo">
      <footer>
        <p>
          Copyright ⓒ {year} -{" "}
          <a href="https://codeliterature.netlify.app/" target="_blank">
            CodeLiterature
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
