import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { allLogs, clearError } from "../redux/features/logSlice";
import LogCard from "./LogCard";

const Logs = () => {
  const { logs, loading, error } = useSelector((state) => state.log);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    dispatch(allLogs());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <span>Loading.....</span>
      ) : (
        <>
          <div className="bg-[#F5F5F5] flex flex-wrap justify-center">
            <h3>Our Logs</h3>
            {logs &&
              logs.map((log, index) => <LogCard key={log._id} log={log} />)}
          </div>
        </>
      )}
    </>
  );
};

export default Logs;
