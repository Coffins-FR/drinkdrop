import { useCheckoutState } from "../context/checkout";

// TODO: Build array of crumbs dynamically from available steps

function Breadcrumbs({ inCart }) {
  const { currentStep, extrafields } = useCheckoutState();

  if (inCart) {
    return <span className="text-lg md:text-xl">Panier</span>;
  }

  if (currentStep === "success") {
    return <span className="text-lg md:text-xl">Commande reçu</span>;
  }

  return (
    <div className="space-x-3">
      {currentStep === "extrafields" && (
        <>
          <span className="text-lg md:text-xl">Panier</span>
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl">Commande</span>
          <span className="text-lg md:text-xl opacity-50">&rarr;</span>
          <span className="text-lg md:text-xl opacity-50">Livraison</span>
          <span className="text-lg md:text-xl opacity-50">&rarr;</span>
          <span className="text-lg md:text-xl opacity-50">Paiement</span>
        </>
      )}
      {currentStep === "shipping" && (
        <>
          <span className="text-lg md:text-xl">Panier</span>

          {extrafields.length > 0 && (
            <>
              <span className="text-lg md:text-xl">&rarr;</span>
              <span className="text-lg md:text-xl">Commande</span>
            </>
          )}
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl">Livraison</span>
          <span className="text-lg md:text-xl opacity-50">&rarr;</span>
          <span className="text-lg md:text-xl opacity-50">Paiement</span>
        </>
      )}
      {currentStep === "billing" && (
        <>
          <span className="text-lg md:text-xl">Panier</span>
          {extrafields.length > 0 && (
            <>
              <span className="text-lg md:text-xl">&rarr;</span>
              <span className="text-lg md:text-xl">Commande</span>
            </>
          )}
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl">Livraison</span>
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl">Paiement</span>
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;
