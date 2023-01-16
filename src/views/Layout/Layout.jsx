import React from "react";
import './Layout.css'
import HistoryCards from "../../components/historyCards/HistoryCards";
import ShareComponent from '../../components/shareComponent/ShareComponent';
import PostComponent from '../../components/postComponent/PostComponent';
import {dataStories} from '../../hooks/DataStories';
function Layout() {
  return (
    <div className="container-layout">
      <HistoryCards listImages={dataStories}/>
      <ShareComponent/>
      <PostComponent/>
    </div>
  );
}

export default Layout;
