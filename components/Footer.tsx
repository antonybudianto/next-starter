import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="container w-full flex justify-evenly mx-auto py-10 border-t">
      <div className="">
        <img
          className="mb-2"
          src="/favicon.ico"
          alt="favicon-footer"
          width="34"
          height="34"
        />
        <small className="d-block mb-3 text-gray-500">© Starter. 2022.</small>
      </div>
      <div className="">
        <h5 className="text-gray-500">Resources</h5>
        <ul className="list-unstyled">
          <li>
            <a
              className="text-blue-500"
              href="https://www.producthunt.com/posts/stickynoted"
            >
              Product Hunt
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <h5 className="text-gray-500">About</h5>
        <ul className="list-unstyled text-small">
          <li>
            <Link href="/contact">
              <a className="text-blue-500">Contact us</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a className="text-blue-500">Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a className="text-blue-500">Privacy and Terms</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
