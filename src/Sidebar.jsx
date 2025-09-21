import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import {
  Home as HomeIcon,
  Person as UserIcon,
  EmojiEvents as TrophyIcon,
  AccountTree as ProjectIcon,
  Article as BlogIcon,
  Brightness2 as MoonIcon,
  Download as DownloadIcon,
} from "@mui/icons-material"; // Material UI icons
import ProfileImg from "./assets/profile.jpg";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid #ddd",
        p: 2,
        bgcolor: "background.paper",
      }}
    >
      {/* Profile Section */}
      <Box textAlign="center">
        <Avatar
          src={ProfileImg}
          alt="Profile"
          sx={{ width: 100, height: 100, margin: "0 auto" }}
        />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Dikshit Phuyal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Front-End Developer
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          href="/resume.pdf"
          download
          sx={{ mt: 2 }}
        >
          Resume
        </Button>
      </Box>

      {/* Navigation */}
      <Box display="flex" flexDirection="column" gap={1} mt={3}>
        <Button startIcon={<HomeIcon />} href="#home">
          Home
        </Button>
        <Button startIcon={<UserIcon />} href="#about">
          About
        </Button>
        <Button startIcon={<TrophyIcon />} href="#achievements">
          Achievements
        </Button>
        <Button startIcon={<ProjectIcon />} href="#projects">
          Projects
        </Button>
        <Button startIcon={<BlogIcon />} href="#blogs">
          Blogs
        </Button>
      </Box>

      {/* Dark Mode Toggle */}
      <Box textAlign="center" mt={2}>
        <Button
          variant="outlined"
          startIcon={<MoonIcon />}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Box>

      {/* Footer */}
      <Box textAlign="center" mt={3}>
        <Typography variant="caption" color="text.secondary">
          Designed & Built by <br />
          <strong>Dikshit Phuyal</strong> <br />
          © {new Date().getFullYear()}, All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
