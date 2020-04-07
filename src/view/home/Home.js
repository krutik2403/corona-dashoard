import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "./_actions";
import { StatsCard, CountriesTable, StateTable } from "../../components";
import { Container, Row } from "reactstrap";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, stats } = useSelector((state) => ({
    loading: state.HomeReducers.loading,
    stats: state.HomeReducers.stats,
  }));

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <div>loading....</div>
      ) : (
        <>
          {stats !== null && (
            <Row className="mt-5">
              <StatsCard name="Cases" stats={stats.cases} />
              <StatsCard name="Deaths" stats={stats.deaths} />
              <StatsCard name="Recovered" stats={stats.recovered} />
              <StatsCard name="Active" stats={stats.active} />
            </Row>
          )}
        </>
      )}
      <CountriesTable />
      <StateTable />
    </Container>
  );
};

export default Home;
