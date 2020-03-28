const React = require("react");
const Link = require("react-router-dom").Link;
const MemeGenerator = require("./MemeGenerator.jsx");

/* the main page for the index route of this app */
const Header = function() {
  return (
    <div>
      <header>
        <img
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="Problem?"
        />
        <p>Header</p>
      </header>
      <MemeGenerator />
    </div>
  );
};

module.exports = Header;
