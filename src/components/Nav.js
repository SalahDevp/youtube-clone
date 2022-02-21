import {
  AppBar,
  Toolbar,
  IconButton,
  OutlinedInput,
  Avatar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import React, { useContext, useState } from "react";
import { VideosContext } from "../App";
import search from "../api/search";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setVids] = useContext(VideosContext);
  const navigate = useNavigate();
  const handleSearch = () =>
    search(searchQuery).then((vids) => {
      setVids(vids);
      navigate("/");
    });
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between", padding: "0 16px" }}>
        <div className="nav-item-div" style={{ flex: 1 }}>
          <IconButton>
            {/*menu button*/}
            <HomeIcon onClick={() => navigate("/")} />
          </IconButton>
        </div>
        <div className="nav-item-div" style={{ padding: "0 30px", flex: 3 }}>
          {/*search input*/}
          <OutlinedInput
            placeholder="search"
            sx={{ flexGrow: 1 }}
            inputProps={{
              height: "20px",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />

          {/*search button*/}
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </div>
        <div className="nav-item-div" style={{ padding: "0 40px", flex: 1 }}>
          <IconButton>
            <VideoCallOutlinedIcon />
          </IconButton>
          <IconButton>
            <AppsOutlinedIcon />
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <Avatar>S</Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
