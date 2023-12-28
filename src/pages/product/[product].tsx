import product from './product.json';
import helper from '@/utils/helper';
export default function Product() {
  let i = 0;
  return (
    <div className="flex flex-wrap items-center justify-start mt-20 gap-6 max-w-[950px] mx-60">
      {product.map((data) => {
        i++;
        return (
          <div
            className="flex flex-col justify-start items-start p-2 gap-2 border-2 border-gray-500 rounded-lg w-max"
            key={i}
          >
            <p className="font-bold text-lg">{data.title}</p>
            <p className="w-40 font-light">{data.description}</p>
            <p>{helper.convertToIDR(data.value)}</p>
          </div>
        );
      })}
    </div>
  );
}
