

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
      // const handleSubtract = () => {
      //       const subtract = counter - 1;
      //       if (subtract <= 0) {
      //             return
      //       };
      //       setCounter(subtract);
      // };

      // const handleAdd = () => {

      //       setCounter(counter + 1);
      // };

      return (

            <div className="border-2 flex justify-center items-center gap-2 p-1">
                  <button
                        className="border-2 border-green-300 rounded-md p-1"
                        onClick={handleSubtract}
                  >
                        -
                  </button>
                  <span>{quantity}</span>
                  <button
                        className="border-2 border-green-300 rounded-md p-1 "
                        onClick={handleAdd}
                  >
                        +
                  </button>
            </div>
      )
}

export default Counter