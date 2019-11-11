import React from "react";
import { useAsync } from "react-async";
import { fetchSingleDataset } from "./API";
import { withRouter } from "react-router-dom";

const loadingMsg = <p>Loading...</p>;
const errorMsg = <p>Error</p>;

const DatasetDetail = props => {
  const dataset = useAsync(fetchSingleDataset, {
    datasetId: props.match.params.id
  });

  if (dataset.isPending) return loadingMsg;
  if (dataset.isRejected) return errorMsg;

  return (
    <div>
      <p>we in this</p>
      {JSON.stringify(dataset.data)}
    </div>
  );
};

export default withRouter(DatasetDetail);
