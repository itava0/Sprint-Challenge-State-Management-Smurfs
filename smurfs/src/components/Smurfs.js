import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchSmurfs } from "../actions";
import SmurfsLists from "./SmufsLists";

const Smurfs = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <h2>Loading Smurfs Facts...</h2>;
  }

  return (
    <div className="members">
      {props.error && <p>{props.error}</p>}
      {props.smurfs.map(item => (
        <SmurfsLists key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurfs);