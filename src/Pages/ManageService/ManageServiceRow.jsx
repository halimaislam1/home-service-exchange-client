const ManageServiceRow = ({ service }) => {
  const { serviceName, date, price, photo } = service;
  return (
    <tr>
      <th><img className="w-12 h-12" src={photo} alt="" /></th>
      <td>{serviceName}</td>
      <td>{price}</td>
      <td>{date}</td>
      <td></td>
      <td>
        <button>update</button>
      </td>
      <td>
        <button className="btn btn-circle btn-sm text-white bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>

    // <tr>
    //  <th>
    //     <label>
    //       <input type="checkbox" className="checkbox" />
    //     </label>
    //   </th>
    //    <td>

    //       <div className="avatar">
    //         <div className="rounded w-28 h-28">
    //          {photo && <img
    //             src={photo}
    //             alt="Avatar Tailwind CSS Component" />}

    //       </div>

    //     </div>
    //   </td>
    //   <td>
    //     {
    //       serviceName
    //     }

    //   </td>
    //   <td>{date}</td>
    //   <td>{price}</td>
    //   <th>
    //     <button className="btn btn-ghost btn-xs">details</button>
    //   </th>
    // </tr>
  );
};

export default ManageServiceRow;
