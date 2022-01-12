import { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const [coins, setCoins] = useState(data?.data?.coins);

  if (isFetching) return "Loading...";
  console.log(coins);
  return <div className=""></div>;
};

export default Cryptocurrencies;
