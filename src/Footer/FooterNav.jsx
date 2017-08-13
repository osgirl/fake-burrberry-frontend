import React from "react";
import styled from "styled-components";

const NavHeading = styled.nav`
  @media screen and (min-width: 48rem) {
    margin: 0;
    margin-bottom: 1rem;
    font-size: .75rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: .875rem;
  }
`;

const Link = styled.a`
  @media screen and (min-width: 48rem) {
    display: block;
    margin-bottom: .75rem;
    font-size: .75rem;
    font-weight: 500;
    line-height: 1rem;
    text-transform: capitalize;
    text-decoration: none;
    color: #999;
  }
`;

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <nav>
            <NavHeading>Customer service</NavHeading>
            <Link href="/">Contact Us</Link>
            <Link href="/">Payment</Link>
            <Link href="/">Shipping</Link>
            <Link href="/">Returns</Link>
            <Link href="/">Faqs</Link>
            <Link href="/">Live Chat</Link>
            <Link href="/">The Burberry App</Link>
            <Link href="/">Store Location</Link>
          </nav>
        </div>

        <div className="col-md-3">
          <nav>
            <NavHeading>Our Company</NavHeading>
            <Link href="/">Our History</Link>
            <Link href="/">Burberry Group Plc</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Corporate Responsibility</Link>
            <Link href="/">Site Map</Link>
          </nav>
        </div>

        <div className="col-md-3">
          <nav>
            <NavHeading>Legal & Cookies</NavHeading>
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Cookie Policy</Link>
            <Link href="/">Accessibility Statement</Link>
            <Link href="/">Japan Only - SCTL indications</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
