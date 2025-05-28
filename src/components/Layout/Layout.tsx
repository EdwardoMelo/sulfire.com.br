
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box, CssBaseline } from '@mui/material';
import { useNav } from '@/contexts/navContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { navbarHeight } = useNav();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: {
            xs: `calc(${navbarHeight  + 50}px)`,
            md: `calc(${navbarHeight}px )`,
          },
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
