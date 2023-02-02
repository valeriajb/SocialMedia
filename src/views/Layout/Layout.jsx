import React,{useContext} from "react";
import './Layout.css'
import "../../DarkMode.css"
import HistoryCards from "../../components/historyCards/HistoryCards";
import ShareComponent from '../../components/shareComponent/ShareComponent';
import PostComponent from '../../components/postComponent/PostComponent';
import {dataStories} from '../../hooks/DataStories';
import {ContextDark} from '../../context/contextDark';
function Layout() {
  const {  currentMode}=useContext(ContextDark);

  return (
    <div className={"container-layout " + (currentMode && "dark")}>
      <HistoryCards listImages={dataStories}/>
      <ShareComponent/>
      <PostComponent/>
    </div>
  );
}

export default Layout;
