interface Column {
  header: string;
  accessor: string;
  className?: string;
}

interface TableProps {
  columns: Column[];
  data: Teacher[];
}

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  phone?: string;
  photo?: string;
  subjects?: string[];
  classes?: string[];
  address?: string;
};

const Table = ({ columns,renderRow, data }: TableProps) => {
  return (
    <table className="w-full mt-4 r">
      <thead>
        <tr className="text-left text-[16px] text-gray-400">
          {columns.map((column) => (
            <th key={column.accessor} className={`${column.className}`}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => renderRow(item))
        }
      </tbody>
    </table>
  );
};

export default Table;
