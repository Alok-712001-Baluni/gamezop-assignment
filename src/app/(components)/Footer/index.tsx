import React from "react";
import Logo from "../Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-3 mx-8 my-5">
      <Logo width={100} height={28} />
      <div className="mt-8 mb-4 border-b-2 border-customPurple"></div>
      <div className="flex gap-4 underline mb-8">
        <Link href="#">Terms of Use</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">About</Link>
        <Link href="#">Jobs</Link>
        <Link href="#">Partner With Us</Link>
      </div>
      <div className="text-sm text-lightPurple">
        <p>
          Gamezop is a plug-and-play gaming platform that any app or website can
          integrate to bring casual gaming for its users. Gamezop also operates
          Quizzop, a quizzing platform, that digital products can add as a
          trivia section.
        </p>
        <p className="mt-5">
          Over 5,000 products from more than 70 countries have integrated
          Gamezop and Quizzop. These include Amazon, Samsung Internet, Snap,
          Tata Play, AccuWeather, Paytm, Gulf News, and Branch.
        </p>
        <p className="mt-5">
          Games and trivia increase user engagement significantly within all
          kinds of apps and websites, besides opening a new stream of
          advertising revenue. Gamezop and Quizzop take 30 minutes to integrate
          and can be used for free: both by the products integrating them and
          end users
        </p>
        <p className="mt-5">
          Increase ad revenue and engagement on your app / website with games,
          quizzes, astrology, and cricket content. Visit:{" "}
          <Link href="#" className="text-customYellow">
            business.gamezop.com
          </Link>
        </p>
        <p className="font-bold my-5">
          © Advergame Technologies Pvt. Ltd. (&quot;ATPL&quot;). Gamezop ® &
          Quizzop ® are registered trademarks of ATPL.
        </p>
      </div>
    </div>
  );
};

export default Footer;
