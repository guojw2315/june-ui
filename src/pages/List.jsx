import React from "react";
import { useHistory } from 'react-router-dom'
import { FlowList } from "../components";
import '../components/FlowList/style'


export default function List(props) {
  const history = useHistory()

  const onClick = () => {
    history.push('/detail')
  }

  return (
    <FlowList onClick={onClick} />
  );
}
