import minus from "../assets/heroicons-outline_minus-sm.png"
import plus from "../assets/heroicons-outline_plus-sm.png"


type CounterProps = {
      quantity: number;
      onChange: (quantity: number) => void;
};

const Counter = ({ quantity, onChange }: CounterProps) => {

      const handleSubtract = () => {
            onChange(Math.max(1, quantity - 1));
      };

      const handleAdd = () => {
            onChange(quantity + 1);
      };

      return (

            <div className="flex justify-center items-center gap-2 p-1">
                  <button
                        className="flex items-center w-4 h-4 cursor-pointer"
                        onClick={handleSubtract}
                  >
                        <img src={minus} alt="Minus" />
                  </button>
                  <span>
                        <p className='w-6 h-5 text-[#2a5b45] bg-[#2a5b451a] text-center rounded-full'>{quantity}</p>
                  </span>
                  <button
                        className="flex items-center w-4 h-4 cursor-pointer "
                        onClick={handleAdd}
                  >
                        <img src={plus} alt="Plus" />
                  </button>
            </div>
      )
}

export default Counter