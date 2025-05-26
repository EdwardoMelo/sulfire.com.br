import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions,
  Button, 
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  CircularProgress,
  Snackbar,
  Alert,
  Pagination,
  Chip,
  IconButton,
  Tooltip
} from '@mui/material';
import { Search, ShoppingCart } from '@mui/icons-material';
import { Produto } from '../models/Produto';
import { Categoria } from '../models/Categoria';
import { Stack, styled } from '@mui/system';
import { useUser } from '@/contexts/userContext';
import AddIcon from "@mui/icons-material/Add";
import { motion } from 'framer-motion';

const ProductCard = styled(Card)(({ theme }) => ({
  height: 500,
  cursor: "pointer",
  width: 300,
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    scale: 1.1,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 380,
    minWidth: 0,
  },
}));

const ProductMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: "75%",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "60%",
  },
}));

const ProductContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "orange",
  color: "white",
  margin: "0 4px 4px 0",
  fontSize: 12,
  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
    padding: "0 4px",
  },
}));

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      type: "spring",
      stiffness: 60,
    },
  }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(
    searchParams.get("categoria")
      ? parseInt(searchParams.get("categoria")!)
      : null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { user } = useUser();

  console.log("user: ", user);

  const navigate = useNavigate();

  const handleCategoryChange = (
    _event: React.SyntheticEvent,
    newValue: number | null
  ) => {
    setSelectedCategory(newValue);
    setCurrentPage(1);
    if (newValue) {
      setSearchParams({ categoria: newValue.toString() });
    } else {
      setSearchParams({});
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const navigateToProduct = (id: number) => {
    navigate(`/produtos/${id}`);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredProdutos = produtos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.descricao?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.marca?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Cálculo da paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProdutos = filteredProdutos.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProdutos.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        setLoading(true);
        const categoriasData = await Categoria.getAll();
        setCategorias(categoriasData);
        let produtosData;
        if (selectedCategory) {
          produtosData = await Produto.getByCategoria(selectedCategory);
        } else {
          produtosData = await Produto.getAll();
        }
        setProdutos(produtosData);
      } catch (err) {
        setError("Erro ao carregar os produtos. Por favor, tente novamente.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    const categoria_id = searchParams.get("categoria");
    if (categoria_id) {
      setSelectedCategory(parseInt(categoria_id));
    }
  }, [searchParams]);

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Box
        sx={{
          py: { xs: 2, md: 6 },
          px: { xs: 2, md: 4 },
          minHeight: "80vh",
          marginTop: { xs: "12vh", md: "10vh" },
          width: { xs: "98%", sm: "95%", md: "90%" },
          mx: "auto",
        }}
      >
        {/* Header Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: { xs: "center", md: "left" },
              fontFamily: "Poppins, sans-serif",
              color: "darkorange",
              fontSize: { xs: 28, sm: 32, md: 38 },
            }}
          >
            Produtos
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: { xs: "center", md: "left" },
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: 14, sm: 16, md: 18 },
            }}
            variant="body1"
            color="slategray"
            paragraph
          >
            Conheça nossa linha completa de equipamentos para prevenção e
            combate a incêndios, segurança e muito mais.
          </Typography>
        </motion.div>
        {/* Search and Filter Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2} gap={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ fontSize: { xs: 14, sm: 16 } }}
                />
              </Grid>
              <Stack direction="row" spacing={2} alignItems="center">
                {user && user.hasPermission("criar_produto") && (
                  <Tooltip title="Adicionar novo produto">
                    <IconButton
                      onClick={() => navigate("/produtos/new")}
                      sx={{
                        backgroundColor: "darkorange",
                        "&:hover": {
                          backgroundColor: "orange",
                          scale: 1.2,
                        },
                        transition: "all 0.3s ease-in-out",
                        color: "white",
                        fontSize: { xs: 18, sm: 22 },
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Stack>
            </Grid>
          </Box>
        </motion.div>
        {/* Category Tabs */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Box
            sx={{
              mb: 4,
              overflow: "auto",
              padding: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            {user && user.hasPermission("criar_produto") && (
              <Tooltip title="Criar nova categoria">
                <IconButton
                  onClick={() => navigate("/categorias/new")}
                  sx={{
                    backgroundColor: "darkorange",
                    "&:hover": {
                      backgroundColor: "orange",
                      scale: 1.2,
                    },
                    transition: "all 0.3s ease-in-out",
                    color: "white",
                    fontSize: { xs: 18, sm: 22 },
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
            )}
            <Tabs
              value={selectedCategory}
              onChange={handleCategoryChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              textColor="inherit"
              sx={{
                overflow: "auto",
                borderBottom: "1px solid lightgray",
                minWidth: 0,
                maxWidth: "100vw",
                ".MuiTab-root": {
                  minWidth: { xs: 80, sm: 120 },
                  fontSize: { xs: 12, sm: 16 },
                  px: { xs: 1, sm: 2 },
                },
              }}
              TabIndicatorProps={{
                style: { backgroundColor: "orange" },
              }}
            >
              <Tab
                label="Todos"
                value={null}
                sx={{
                  "&.Mui-selected": {
                    color: "orange",
                    fontWeight: "bold",
                  },
                  fontSize: { xs: 12, sm: 16 },
                  px: { xs: 1, sm: 2 },
                }}
              />
              {categorias.map((categoria) => (
                <Tab
                  key={categoria.id}
                  label={categoria.nome}
                  value={categoria.id}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: { xs: 12, sm: 16 },
                    letterSpacing: "0.5px",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&.Mui-selected": {
                      color: "orange",
                      fontWeight: "bold",
                      transition: "all 0.3s ease-in-out",
                    },
                    "&:hover": {
                      color: "darkorange",
                      fontWeight: "bold",
                      zIndex: 30,
                    },
                    px: { xs: 1, sm: 2 },
                    transition: "all 0.3s ease-out",
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </motion.div>
        {/* Products Grid */}
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", my: 8 }}>
            <CircularProgress sx={{ color: "orange" }} />
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ my: 4 }}>
            {error}
          </Alert>
        ) : currentProdutos.length === 0 ? (
          <Box sx={{ textAlign: "center", my: 8 }}>
            <Typography variant="h6">Nenhum produto encontrado.</Typography>
          </Box>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {currentProdutos.map((produto, idx) => (
                <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    custom={idx + 1}
                    style={{ height: "100%" }}
                  >
                    <ProductCard
                      onClick={() => navigateToProduct(produto.id)}
                      sx={{
                        width: { xs: "100%", sm: 260, md: 300 },
                        minWidth: 0,
                        mx: "auto",
                      }}
                    >
                      <ProductMedia
                        image={
                          produto.imagem || "/images/product-placeholder.jpg"
                        }
                        title={produto.nome}
                      />
                      <ProductContent>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: { xs: 14, sm: 16 } }}
                        >
                          {produto.nome}
                        </Typography>
                        {categorias.map((cat) =>
                          cat.id === produto.categoria_id ? (
                            <StyledChip
                              key={cat.id}
                              label={cat.nome}
                              size="small"
                            />
                          ) : null
                        )}
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mt: 1,
                            mb: 2,
                            minHeight: "3em",
                            fontSize: { xs: 12, sm: 14 },
                          }}
                        >
                          {produto.descricao?.substring(0, 80)}
                          {produto.descricao && produto.descricao.length > 80
                            ? "..."
                            : ""}
                        </Typography>
                        {produto.marca && (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: { xs: 12, sm: 14 } }}
                          >
                            <strong>Marca:</strong> {produto.marca}
                          </Typography>
                        )}
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: { xs: 12, sm: 14 } }}
                        >
                          <strong>Codigo: </strong> {produto.id}
                        </Typography>
                      </ProductContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          fullWidth
                          onClick={() => navigateToProduct(produto.id)}
                          sx={{
                            bgcolor: "darkorange",
                            "&:hover": {
                              backgroundColor: "orange",
                              scale: 1.1,
                            },
                            maxWidth: 200,
                            transition: "all 0.3s ease-in-out",
                            color: "white",
                            textTransform: "uppercase",
                            fontSize: { xs: 12, sm: 14 },
                          }}
                        >
                          Ver mais
                        </Button>
                      </CardActions>
                    </ProductCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              sx={{
                "& .MuiPaginationItem-root.Mui-selected": {
                  bgcolor: "orange",
                  color: "white",
                },
                fontSize: { xs: 12, sm: 14 },
              }}
            />
          </Box>
        )}

        {/* Snackbar para feedback */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Produto adicionado ao carrinho!
          </Alert>
        </Snackbar>
      </Box>
    </motion.div>
  );
};

export default Products;
