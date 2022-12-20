interface IOperationModalFild {
  label: string;
  value: string;
}

export function OperationModalField(props: IOperationModalFild) {
  return (
    <div className="mb-3">
      <p className="text-sm mb-1">{props.label}</p>
      <div className="border rounded px-4 py-2">{props.value}</div>
    </div>
  );
}
