import { useContext } from "react";
import { SortContext } from "../contexts/SortContext";

const useSort = () => {
  return useContext(SortContext);
};

export default useSort;
