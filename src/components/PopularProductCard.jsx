import { star } from "../assets/assets/icons"

export
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.4">
        <img src={star} alt="rating" width={24} height={24}/>
        <p className="font-montserrat text-xl text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2  leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-2lx leaging-normal font-semibold font-montserral text-coral-red">
        {price}
      </p>
    </div>
  )
}

export default PopularProductCard
