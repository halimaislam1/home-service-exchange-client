import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ManageServiceRow from "./ManageServiceRow";

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const [manageService, setManageService] = useState([]);

  const url = `http://localhost:5000/purchase?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageService(data));
  });

  return (
    <div>
      <h2 className="text-2xl mt-16 text-center mb-8 font-bold text-rose-700">
        Manage Your service: {manageService.length}
      </h2>

      <div className="overflow-x-auto max-w-6xl mx-auto mb-20 border">
        <table className="table ">
          {/*table header */}
          <thead className="text-rose-700 bg-base-200">
            <tr>
              <th>photo</th>
              <th>Service Name</th>
              <th>Job</th>
              <th>date</th>
              <th>status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
                {
                    manageService.map(service => <ManageServiceRow key={manageService._id}
                    service={service}
                    ></ManageServiceRow>)
                  }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;
