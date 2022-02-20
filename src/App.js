import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import LayOut from "./pages/LayOut";
import Videos from "./pages/Videos";
import Video from "./pages/Video";

export const VideosContext = createContext();

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  const [vids, setVids] = useState([]);
  return (
    <ThemeProvider theme={darkTheme}>
      <VideosContext.Provider value={[vids, setVids]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route index element={<Videos />} />
              <Route path="/video" element={<Video />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </VideosContext.Provider>
    </ThemeProvider>
  );
}

export default App;
