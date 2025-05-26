
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Container, Menu, MenuItem, Avatar } from '@mui/material';
import { Menu as MenuIcon, ShoppingCart, Person } from '@mui/icons-material';
import { borderBottom, Stack, styled, textTransform } from '@mui/system';
import { orange } from '@mui/material/colors';
import { useUser } from '@/contexts/userContext';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CategoryNavbar from '../ui/CategoryNavbar';

import logo from '../../assets/logo.png';


const navActions = [
  {
    label: "Manda um zap!",
    icon: <WhatsAppIcon sx={{ color: "white" }} />,
    //colocar numero de telefone real
    href: "https://api.whatsapp.com/send?phone=5135885463&text=Oi, vim pelo site,gostaria de saber mais sobre os produtos e serviços da SulFire!",
  },
  {
    label: "Mande-nos um email",
    icon: <EmailIcon sx={{ color: "white" }} />,
    href: "mailto:sulfiresistemas@gmail.com",
  },
  {
    label: "Ligue pra gente",
    icon: <LocalPhoneIcon sx={{ color: "white" }} />,
    href: "tel:+55 5135885463",
  },
];

const StyledAppBar = styled(AppBar)(
  ({ isTransparent }: { isTransparent: boolean }) => ({
    backgroundColor: 'white',
    position: "fixed",
    top: 0,
    zIndex: 30,
    padding: 1,
    boxShadow: "none",
    transition: "background-color 0.3s ease-in-out",
  })
);

const Logo = styled(Typography)({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  fontWeight: 'bold',
});

const NavButton = styled(RouterLink)({
  color: 'white',
  margin: '0 8px',
  padding: 4,
  '&:hover': {
    padding: 4,
    color: orange[500],
  },
  transition: 'all 0.5s ease-in-out',
});

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation();

  const {user,logout } = useUser();
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/login');
  };

  const handleAdminPanel = () => {
    handleClose();
    navigate('/admin');
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', zIndex: 30 }}>
       <Box component="img" src={logo} alt="SulFire" />
      <List >
        <ListItem  component={RouterLink} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem  component={RouterLink} to="/produtos">
          <ListItemText primary="Produtos" />
        </ListItem>
        <ListItem  component={RouterLink} to="/servicos">
          <ListItemText primary="Serviços" />
        </ListItem>
        {!user && (
          <ListItem  component={RouterLink} to="/login">
            <ListItemText primary="Login" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="static" isTransparent={isTransparent}>
        <CategoryNavbar background={isTransparent ? "transparent" : "black"} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 1,
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="SulFire"
            sx={{
              width: 200,
              left: 1,
              top: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              maxHeight: 60,
              padding: 2,
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "orange" }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {[
                { label: "Home", to: "/" },
                { label: "Produtos", to: "/produtos" },
                { label: "Serviços", to: "/servicos" },
              ].map(({ label, to }) => (
                <NavButton
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "gray",
                  }}
                  to={to}
                  key={to}
                >
                  {label}
                </NavButton>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
                gap: 2,
                zIndex: 30,
              }}
            >
              {navActions.map((action) => (
                <Stack
                  component="a"
                  href={action.href}
                  direction="row"
                  target="_blank"
                  alignItems="center"
                  gap={1}
                  key={action.label}
                  sx={{
                    color: "black",
                    "&:hover": {
                      marginLeft: "1rem",
                      color: "orange",
                      transition: "all 0.3s ease-in-out",
                    },
                  }}
                >
                  <IconButton
                    sx={{
                      width: 40,
                      height: 40,

                      bgcolor: "orange",
                      "&:hover": {
                        bgcolor: "black",
                        color: "orange",
                        scale: 1.2,
                      },
                    }}
                    key={action.label}
                  >
                    {action.icon}
                  </IconButton>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    {action.label}
                  </Typography>
                </Stack>
              ))}
            </Box>

            {user ? (
              <>
                <IconButton onClick={handleMenu} color="inherit">
                  <Avatar sx={{ width: 40, height: 40, bgcolor: "orange" }}>
                    {user?.nome.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={handleClose}
                    component={RouterLink}
                    to="/perfil"
                  >
                    Meu Perfil
                  </MenuItem>
                  {user.tipo_usuario.tipo === "administrador" && (
                    <MenuItem onClick={handleAdminPanel}>Painel Admin</MenuItem>
                  )}
                  <MenuItem onClick={handleLogout}>Sair</MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                color="inherit"
                component={RouterLink}
                to="/login"
                startIcon={<Person />}
                sx={{
                  "&:hover": {
                    bgcolor: "darkorange",
                  },
                  color: "black",
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Box>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
