import { createContext, useEffect, useState } from 'react';
import { OperationModel } from './OperationModal';
import { TableBodyRow } from './TableBodyRow';

interface IResponseData {
  id: string;
  description: string;
  a: number;
  b: number;
}

export interface IOperationModalState {
  isOpen: boolean;
  description?: string;
  a?: number;
  b?: number;
}

export function ItemListScreen() {
  const [modal, setModal] = useState<IOperationModalState>({
    isOpen: false,
  });

  const [items, setItems] = useState<IResponseData[]>([]);

  useEffect(() => {
    fetch('https://duett-server-api.azurewebsites.net/items')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <table className="table-fixed">
        <thead className="bg-sky-700 text-sky-50 text-left">
          <tr>
            <th className="w-1/2 px-6 py-3">Descrição</th>
            <th className="w-1/4 px-6 py-3">A</th>
            <th className="w-1/4 px-6 py-3">B</th>
            <th className="w-1/4 px-6 py-3">Ação</th>
          </tr>
        </thead>
        <tbody className="text-left bg-sky-50">
          {items.map((item: IResponseData) => (
            <TableBodyRow
              description={item.description}
              a={item.a}
              b={item.b}
              setModal={setModal}
            ></TableBodyRow>
          ))}
        </tbody>
      </table>
      <OperationModel modal={modal} modalState={setModal} />
    </div>
  );
}
