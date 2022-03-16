import Link from "next/link";

import LogoSVG from "../svg/logo.svg";
import CommerceJsSVG from "../svg/commercejs.svg";

function Footer() {
  return (
    <footer className="py-6 lg:py-12">
      <div className="container mx-auto px-3 md:px-4 lg:px-5 md:flex md:items-center space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3">
          <Link href="/">
            <a title="Retour sur DrinkDrop">
              <LogoSVG className="w-full md:w-auto md:h-8" />
            </a>
          </Link>
        </div>

        <div className="w-full md:w-1/3 flex items-center md:justify-center">
          <a
            href="https://commercejs.com"
            title="Visit Commerce.js website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-faded-black hover:text-black transition-colors"
          >
            <span>Backend Powered by</span>
            <CommerceJsSVG className="h-4" />
          </a>
        </div>

        <div className="w-full md:w-1/3">
          <div className="md:text-right space-x-1">
            <Link href="/">
              <a className="text-black">Accueil</a>
            </Link>
            ,
            <a
              href="https://github.com/Coffins-FR/drinkdrop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              A propos
            </a>
            ,
            <Link href="/">
              <a className="text-black">Mentions Légals</a>
            </Link>
            ,<span>&copy; 2022</span>
            <p className="hidden md:block italic font-serif">
              Vos Vins & produits locaux à porter de click !
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
