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
    <table className="w-full mt-4 border-collapse border">
      <thead>
        <tr className="text-left bg-gray-200 text-gray-600">
          {columns.map((column, index) => (
            <th key={index} className={`px-4 py-2 ${column.className || ""}`}>
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
