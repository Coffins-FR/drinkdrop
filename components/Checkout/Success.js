import Image from 'next/image';

function Success({ has }) {
  return (
    <div className="h-full lg:flex lg:items-center lg:space-x-12 lg:space-x-24">
      <div className="lg:w-1/2 ">
        <h1 className="font-serif font-medium italic text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          Merci!
        </h1>
        <p className="mt-3 text-lg md:text-xl font-sans">
          {has.digital_fulfillment
            ? "Vous allez recevoir un email avec votre facture, et un lien pour télécharger votre logiciel !"
            : "Vous allez recevoir un email avec votre facture, et un les informations de votre commande !"}
        </p>
      </div>
    </div>
  );
}

export default Success;
