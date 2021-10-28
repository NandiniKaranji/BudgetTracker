import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Header() {
  return (
    <header data-test="loading-header">
      <AppBar position="static">
        <Toolbar>
          <div className="header-nav">
            <Typography variant="h6" data-test="header_logo_heading">
              BitCoin Price Tracer
            </Typography>
            <a
              href="https://github.com/NandiniKaranji/Budget"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained">Source code</Button>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
