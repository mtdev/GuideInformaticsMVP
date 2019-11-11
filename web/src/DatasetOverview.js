import React from "react";
import { useAsync } from "react-async";
import { fetchDataset } from "./API";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const loadingMsg = <p>Loading...</p>;
const errorMsg = <p>Error</p>;

const columns = [
  {
    name: "Title",
    cell: row => <Link to={`/dataset/${row.id}`}>{row.title}</Link>,
    sortable: true
  },
  {
    name: "Body",
    selector: "body",
    sortable: false
  }
];

const DatasetOverview = () => {
  const dataset = useAsync(fetchDataset);

  if (dataset.isPending) return loadingMsg;
  if (dataset.isRejected) return errorMsg;

  return (
    <div>
      <p>we in this</p>
      <DataTable
        title="some data yo"
        columns={columns}
        data={dataset.data}
        dense
      />
    </div>
  );
};

export default DatasetOverview;
