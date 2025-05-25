import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Categoria } from '@/models/Categoria';
import { Box, Button, CircularProgress, IconButton, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { blue } from '@mui/material/colors';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const CategoryNavbar = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isTransparent, setIsTransparent] = useState(true);


  
  const SCROLL_AMOUNT = 250;

  const handleScroll = (direction: "left" | "right") => {
    console.log("handleScroll", direction);
    if (scrollContainerRef.current) {
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === "left"
          ? currentScroll - SCROLL_AMOUNT
          : currentScroll + SCROLL_AMOUNT;


      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
     
    }
  };
  const arrowButtonStyle = {
    color: "orange",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  
    "&.Mui-disabled": {
      color: "rgba(255, 165, 0, 0.3)", 
    },
    zIndex: 2,
    height: "36px",
    width: "36px",
  };
  const params = new URLSearchParams(location.search);
  const selectedId = params.get("categoria");

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const data = await Categoria.getAll();
        setCategorias(data);
      } catch (err) {
        setCategorias([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCategorias();
  }, []);

  useEffect(() => {
    const notInHome = location.pathname !== "/";
    if (notInHome) {
      setIsTransparent(false);
      return;
    }
    setIsTransparent(true);
  }, [location]);

  const buttonStyle = {
    "&:hover": {
      color: "orange",
      fontWeight: "bold",
    },
    flexGrow: 1,
    flexShrink: 0,
    borderRadius: 2,
    fontFamily: "Poppins",
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        bgcolor: "white",
        alignItems: "center",
        maxHeight: "40px",
        padding: 2,
        justifyContent: "center",
        backgroundColor: "black",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <IconButton
        onClick={() => handleScroll("left")}
        sx={arrowButtonStyle}
        aria-label="Scroll Left"
      >
        <ArrowBackIosNewIcon sx={{ color: "white" }} fontSize="small" />
      </IconButton>
      {loading ? (
        <CircularProgress size={24} sx={{ color: "orange" }} />
      ) : categorias.length === 0 ? (
        <Typography color="text.secondary">
          Nenhuma categoria encontrada
        </Typography>
      ) : (
        <>
          <Box
          
            sx={{
              display: "flex",
              position: "relative",
              gap: "2rem",
              height: "100%",
              width: { 
                xs: '80%',
                sm: '90%',
              },
              justifyContent: "center",
            }}
          >
            <Box
              ref={scrollContainerRef}
              sx={{
                display: "flex",
                gap: "2rem",
                flexShrink: 0,
                overflow: "hidden",
                width: "90%",
              }}
            >
              {categorias.map((cat) => (
                <Button
                  key={cat.id}
                  onClick={() => navigate(`/produtos?categoria=${cat.id}`)}
                  sx={{
                    ...buttonStyle,
                    color: selectedId === String(cat.id) ? "orange" : "white",
                    fontWeight:
                      selectedId === String(cat.id) ? "bold" : "normal",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {cat.nome}
                </Button>
              ))}
            </Box>
          </Box>
        </>
      )}
      <IconButton
        onClick={() => handleScroll("right")}
        sx={arrowButtonStyle}
        aria-label="Scroll Right"
      >
        <ArrowForwardIosIcon sx={{ color: "white" }} fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default CategoryNavbar;
