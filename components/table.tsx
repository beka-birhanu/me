type TableProps = {
  header: string;
  data: string[];
};

export const Table = ({ header, data }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-secondary">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-secondary text-center text-white text-2xl font-medium capitalize">
              {header}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b border-secondary text-2xl text-secondary whitespace-pre-wrap">
              {data.join("  ")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
