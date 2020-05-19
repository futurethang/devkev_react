import React, { useState } from "react";
import { ReactComponent as AWS } from "../assets/logos/aws.svg";
import { ReactComponent as CSS3 } from "../assets/logos/css-3.svg";
import { ReactComponent as EXPRESS } from "../assets/logos/express.svg";
import { ReactComponent as HTML5 } from "../assets/logos/html-5.svg";
import { ReactComponent as JAVASCRIPT } from "../assets/logos/javascript.svg";
import { ReactComponent as MONGODB } from "../assets/logos/mongodb.svg";
import { ReactComponent as MYSQL } from "../assets/logos/mysql.svg";
import { ReactComponent as NODE } from "../assets/logos/nodejs.svg";
import { ReactComponent as NUXT } from "../assets/logos/nuxt.svg";
import { ReactComponent as REACT } from "../assets/logos/react.svg";
import { ReactComponent as SASS } from "../assets/logos/sass.svg";
import { ReactComponent as VUE } from "../assets/logos/vue.svg";
import Ticker from "react-ticker";

const logos = [
  <AWS />,
  <CSS3 />,
  <EXPRESS />,
  <HTML5 />,
  <JAVASCRIPT />,
  <MONGODB />,
  <MYSQL />,
  <NODE />,
  <NUXT />,
  <REACT />,
  <SASS />,
  <VUE />,
];

let logoIndex = 0;

const logoLoop = () => {
  logoIndex += 1;
  if (logoIndex > logos.length - 1) {
    logoIndex = 0;
  }
  return logoIndex;
};

function CurrentLogo() {
  return <div className="logo">{logos[logoLoop()]}</div>;
}

export default function LogoTicker() {
  return (
    <Ticker speed={7}>
      {({ index }) => (
        <>
          <CurrentLogo />
        </>
      )}
    </Ticker>
  );
}
