import Button from "../Button/Button";
import Card from "../Card/Card";

export default function SubscriptionPlanCard({
  image,
  price,
  size,
  descriptionList,
  packageDescription,
  onAddToCartClick = () => {},
}) {

  return (
    <Card className="px-12 py-6 h-full">
      <div className="grid justify-items-center my-6">
        <img className="h-24" src={image} />
      </div>

      <div className="relative mb-4">
        <p className="text-neutral-black font-bold text-6xl">${price}</p>
        <p className="text-lg text-neutral-gray-three absolute bottom-0 right-36">
          pesos mensuales
        </p>
      </div>
      <p className="text-orange-one text-5xl font-bold mb-10">{size}</p>
      <p className="text-neutral-gray-three text-lg mb-10">
        {packageDescription}
      </p>

      <div className="my-6 text-lg">
        <ul>
          {descriptionList.map((descriptionItem, index) => (
            <div key={index} className="flex mb-4">
              <img className="w-10 h-8" src="/assets/caquita.png" />
              {descriptionItem}
            </div>
          ))}
        </ul>
      </div>

      <Button onClick={onAddToCartClick} variant="primary" isFull>
        Añadir al carrito
      </Button>
    </Card>
  );
}
