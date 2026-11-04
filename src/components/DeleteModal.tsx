
type DeleteModalProps = {
      productName: string;
      onConfirm: () => void;
      onCancel: () => void;
};

export const DeleteModal = ({
      productName,
      onConfirm,
      onCancel,
}: DeleteModalProps) => {
      return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                  <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">

                        <h2 className="mb-3 text-xl font-bold text-gray-800">
                              ¿Eliminar producto?
                        </h2>

                        <p className="mb-6 text-gray-600">
                              ¿Estás seguro de que quieres eliminar
                              <span className="font-semibold text-gray-800">
                                    {" "}{productName}
                              </span>
                              ?
                        </p>

                        <div className="flex justify-end gap-3">
                              <button
                                    type="button"
                                    onClick={onCancel}
                                    className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
                              >
                                    Cancelar
                              </button>

                              <button
                                    type="button"
                                    onClick={onConfirm}
                                    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                              >
                                    Sí, eliminar
                              </button>
                        </div>

                  </div>
            </div>
      );
};


export default DeleteModal