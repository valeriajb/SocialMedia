import React from "react";
import HistoryCards from "../../components/historyCards/HistoryCards";
import {dataStories} from '../../hooks/DataStories';
function Layout() {
  return (
    <>
      <HistoryCards listImages={dataStories}/>
    </>
  );
}

export default Layout;
