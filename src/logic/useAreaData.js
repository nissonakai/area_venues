import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { currentContext } from "../contexts/AppContext";

const useAreaData = () => {
  const { current, setCurrent } = useContext(currentContext);
  const [data, setData] = useState([]);
  const handleSelect = (e) => setCurrent(e.target.value);

  useEffect(() => {
    const getAreaData = async () => {
      await axios
        .get(process.env.REACT_APP_VENUES_JSON_PATH)
        .then((r) => {
          setData(r.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    getAreaData();
  }, []);

  return { data, current, handleSelect };
};

export default useAreaData;
