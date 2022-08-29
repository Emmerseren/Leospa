import { useState, useEffect } from "react";
import { getFooter } from "../helpers/apicall.js";
import Nav from "../layout/Nav";
import footerCss from "./footer.module.scss";

const Footer = () => {
  const [footer, setFooter] = useState();
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getFooter()
        .then((data) => {
          if (data) {
            console.log(data);
            setFooter(data);
            setNoData(false);
          } else {
            setFooter();
            setNoData(true);
          }
        })
        .finally(setLoading(false));
    }, 2000);
  }, []);

  return (
    <footer className={footerCss.footer}>
      <Nav></Nav>
      <div className={footerCss.footer__Logos}>
        <img src="/images/facebook.png" alt="" />
        <img src="/images/twitter.png" alt="" />
        <img src="/images/vimeo.png" alt="" />
        <img src="/images/instagram.png" alt="" />
      </div>
        {footer && (
          <div className={footerCss.footer__Data}>
            <div><p>Adresse </p><p>{footer.address}</p></div>
            <div><p>Cvr </p>{footer.cvr}</div>
            <div><p>Email</p>{footer.email}</div>
            <div><p>åbningstider </p>{footer.openinghours}</div>
            <div><p>Telefon </p>{footer.phone}</div>
            <div><p>Zip </p>{footer.zipncity}</div>
          </div>
        )}
    </footer>
  );
};

export default Footer;


