import { useTableQuery } from "../services/tableApi";
import { formatTime } from "../../utils/formatTime";

export const Table = () => {
  const { data, isLoading, isError, isSuccess } = useTableQuery({ "page": 1, "last_page": 0, "sort_field": "id", "sort": "desc", "search_string": null, "device_state": "all", "is_archived": false, "paginate": true, "append_fields": ["active_polling", "attributes", "tied_point"], "per_page": 10 });

  const array = data?.data.metering_devices?.data.map((item) => {
    const lastActive = formatTime(item.last_active);
    return {
      ...item,
      last_active: lastActive,
    };
  });

const time1: Date = new Date();

  return (
    <div className=" flex justify-center h-screen w-screen items-center">
      {isLoading && (
        <div>
          <h1>Загрузка...</h1>
        </div>
      )}
      {isError && (
        <div>
          <h1>Произошла ошибка</h1>
        </div>
      )}

      {isSuccess && (
        <table className="relative overflow-x-auto">
          <thead>
            <tr className="text-left border">
              {/* Add table headers here */}
              <th className="px-6 py-3 border">ID</th>
              <th className="px-6 py-3 border">Name</th>
              <th className="px-6 py-3 border">Last Active</th>
              {/* ... */}
            </tr>
          </thead>
          <tbody>
            {data?.data.metering_devices?.data.map((item, index) => (
              <tr key={item.id}>
                {/* Add table cells here */}
                <td className="px-6 py-3 border">{item.id}</td>
                <td className="px-6 py-3 border">{item.name}</td>
                <td className="px-6 py-3 border">
                  {array && array[index] && (
                    <>
                      <div>{array[index].last_active}</div>
                    </>
                  )}
                 
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};