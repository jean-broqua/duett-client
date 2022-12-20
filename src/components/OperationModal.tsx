import { useState } from 'react';
import { IOperationModalState } from './ItemListScreen';
import { OperationModalField } from './OperationModalField';

interface IOperationModal {
  modal: IOperationModalState;
  modalState: (data: IOperationModalState) => void;
}

export function OperationModel(props: IOperationModal) {
  if (!props.modal.isOpen) return null;
  if (!props.modal.a || !props.modal.b) return null;

  const [result, setResult] = useState('0');

  const closeModal = (): void => {
    props.modalState({ isOpen: false });
  };

  const devide = () => {
    if (props.modal.a && props.modal.b) {
      const result = props.modal.a / props.modal.b;
      setResult(result.toFixed(2).toString());
    }
  };

  const multiply = () => {
    if (props.modal.a && props.modal.b) {
      const result = props.modal.a * props.modal.b;
      setResult(result.toString());
    }
  };

  return (
    <div
      onClick={() => closeModal()}
      className="flex items-center justify-center fixed inset-0 overflow-y-auto h-full w-full bg-slate-900 bg-opacity-80"
    >
      <div
        onClick={(e: any) => {
          e.stopPropagation();
        }}
        className="block bg-sky-50 p-8 w-4/6 sm:w-96"
      >
        <OperationModalField
          label="Descrição"
          value={props.modal.description || ''}
        ></OperationModalField>
        <OperationModalField
          label="Valor A"
          value={props.modal.a?.toString() || ''}
        ></OperationModalField>
        <OperationModalField
          label="Valor B"
          value={props.modal.b?.toString() || ''}
        ></OperationModalField>
        <OperationModalField
          label="Resultado"
          value={result}
        ></OperationModalField>
        <div className="flex justify-between">
          <button
            onClick={() => devide()}
            className="border rounded border-solid px-4 py-2"
          >
            Dividir
          </button>
          <button
            onClick={() => multiply()}
            className=" border rounded border-solid px-4 py-2"
          >
            Multiplicar
          </button>
        </div>
      </div>
    </div>
  );
}
