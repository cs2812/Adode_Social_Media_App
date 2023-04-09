import "./App.css";
import { Box} from "@chakra-ui/react";
import Home from "./Pages/Home";
import {Routes,Route} from "react-router-dom"
import UserAnalytics from "./Components/UserAnalytics";
import PostAnalytics from "./Components/PostAnalytics";

function App() {
  return (
    <Box className="App" w="100%">
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users_analytics" element={<UserAnalytics/>}/>
        <Route path="/posts_analytics" element={<PostAnalytics/>}/>
      </Routes>
    </Box>
  );
}

export default App;
