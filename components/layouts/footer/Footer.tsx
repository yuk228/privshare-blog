import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-4 py-10 md:px-6 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="pr-4">
            <h3 className="font-bold mb-4 text-lg">PrivShare</h3>
            <p className="text-muted-foreground">
              PrivShare is an open source blogging service that provides
              knowledge about privacy protection
            </p>
          </div>
          <div className="pr-4">
            <h3 className="font-bold mb-4 text-lg">Blogs</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <Link
                  href="/blogs/desktop"
                  className="hover:text-foreground transition-colors"
                >
                  Desktop
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/mobile"
                  className="hover:text-foreground transition-colors"
                >
                  Mobile
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/anonimity"
                  className="hover:text-foreground transition-colors"
                >
                  Anonimity
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/other"
                  className="hover:text-foreground transition-colors"
                >
                  Other
                </Link>
              </li>
            </ul>
          </div>
          <div className="pr-4">
            <h3 className="font-bold mb-4 text-lg">About us</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://simplex.chat/contact#/?v=2-7&smp=smp%3A%2F%2F0YuTwO05YJWS8rkjn9eLJDjQhFKvIYd8d4xG8X1blIU%3D%40smp8.simplex.im%2FolTYtcyMcPa5kpG5fWsIKogPE5FogsWh%23%2F%3Fv%3D1-3%26dh%3DMCowBQYDK2VuAyEAxzijX3CIw_xX_4XtA7k6oHA0I3q7FHPdCv9UG65spig%253D%26srv%3Dbeccx4yfxxbvyhqypaavemqurytl6hozr47wfc7uuecacjqdvwpw2xid.onion"
                  className="hover:text-foreground transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="pr-4">
            <h3 className="font-bold mb-4 text-lg">Legal Information</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex pt-4 mt-4 gap-4 border-t border-gray-800 text-muted-foreground">
          <p>Copyright © 2025 PrivShare</p>
          <p>
            The source code is available on{" "}
            <span>
              <Link
                href="https://github.com/yuk228/privshare-blog"
                className="hover:text-foreground transition-colors underline"
              >
                Github
              </Link>
            </span>
            , <br className="md:hidden" />
            Made with{" "}
            <span>
              <Link
                href="https://21st.dev"
                className="hover:text-foreground transition-colors underline"
              >
                21st.dev
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
