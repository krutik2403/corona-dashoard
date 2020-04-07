import React, { useEffect } from "react";
import { fetchUsaReport } from "../view/home/_actions";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";

const StateTable = () => {
  const dispatch = useDispatch();
  const { loading, stats } = useSelector((state) => ({
    loading: state.HomeReducers.state.loading,
    stats: state.HomeReducers.state.stats,
  }));

  useEffect(() => {
    dispatch(fetchUsaReport());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {stats !== null && (
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Total</th>
                  <th>Active</th>
                  <th>Dead</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((state, index) => (
                  <tr key={index}>
                    <td>{state.state}</td>
                    <td>{state.cases}</td>
                    <td>{state.active}</td>
                    <td>{state.deaths}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </>
      )}
    </>
  );
};

export default StateTable;
