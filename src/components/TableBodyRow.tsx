import { useContext, useState } from 'react';
import { IOperationModalState } from './ItemListScreen';

interface ITableBodyRow {
  description: string;
  a: number;
  b: number;
  setModal: (data: IOperationModalState) => void;
}

export function TableBodyRow(props: ITableBodyRow) {
  return (
    <tr>
      <td className="px-6 py-4">{props.description}</td>
      <td className="px-6 py-4">{props.a}</td>
      <td className="px-6 py-4">{props.b}</td>
      <td className="px-6 py-4">
        <button
          onClick={() =>
            props.setModal({
              isOpen: true,
              description: props.description,
              a: props.a,
              b: props.b,
            })
          }
          className="border-2 rounded border-solid px-4 py-2"
        >
          Selecionar
        </button>
      </td>
    </tr>
  );
}
