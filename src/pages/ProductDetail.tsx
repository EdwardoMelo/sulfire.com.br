import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Box,
  Chip,
  Divider,
  CircularProgress,
  Alert,
  Breadcrumbs,
  Link,
  Stack,
  List,
  Tooltip,
  IconButton,
} from "@mui/material";
import { ShoppingCart, ArrowBack } from "@mui/icons-material";
import { Produto } from "../models/Produto";
import { blue } from "@mui/material/colors";
import { useUser } from "@/contexts/userContext";
import EditIcon from "@mui/icons-material/Edit";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantidade, setQuantidade] = useState<number>(1);

  const {user} = useUser();

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        setLoading(true);
        if (id) {
          const produtoData = await Produto.getById(parseInt(id));
          setProduto(produtoData);
        }
      } catch (err) {
        console.error("Erro ao carregar produto:", err);
        setError(
          "Erro ao carregar as informações do produto. Por favor, tente novamente."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduto();
  }, [id]);

  const handleGoBack = () => {
    navigate("/produtos");
  };

  if (loading) {
    return (
      <Container
        sx={{
          py: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress sx={{ color: "primary.main" }} />
      </Container>
    );
  }

  if (error || !produto) {
    return (
      <Container sx={{ py: 8, minHeight: "60vh", marginTop: "20rem" }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error || "Produto não encontrado"}
        </Alert>
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={handleGoBack}
          sx={{ mt: 2 }}
        >
          Voltar
        </Button>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "80vh",
        marginBottom: "2rem",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: 1,
        alignItems: "start",
        padding: { 
          xs : 2,
          md: 4
        },
      }}
    >
    
      {user && user.hasPermission("editar_produto") && (
        <Tooltip
          title="Editar produto"
          sx={{
            position: "absolute",
            top: 16,
            right: 20,
            bgcolor: "primary.main",
            "&:hover": { bgcolor: "primary.main" },
            color: "white",
          }}
        >
          <IconButton onClick={() => navigate(`/produtos/${produto.id}/edit`)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      )}

      {/* Breadcrumbs */}
      <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb: 0 }}>
        <Link
          color="inherit"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          underline="hover"
        >
          Home
        </Link>
        <Link
          color="inherit"
          href="/produtos"
          onClick={(e) => {
            e.preventDefault();
            navigate("/produtos");
          }}
          underline="hover"
        >
          Produtos
        </Link>

        <Typography color="text.primary">{produto.nome}</Typography>
      </Breadcrumbs>

      <Grid container spacing={1}>
        {/* Imagem do Produto */}
        <Grid item xs={12} md={6}>
          <Box sx={{ overflow: "hidden", borderRadius: 2, padding: 2 }}>
            <Box
              component="img"
              src={produto.imagem || "/images/product-placeholder.jpg"}
              alt={produto.nome}
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                maxHeight: "500px",
                borderRadius: 2,
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send?phone=5135885463&text=Oi, vim pelo site,gostaria de saber mais sobre o produto ${produto.nome}, código ${produto.id}!`
                )
              }
              sx={{
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.main" },
                color: "white",
                textTransform: "uppercase",
                mt: 2,
                py: 1.5,
              }}
            >
              Solicitar Orçamento
            </Button>
          </Box>
        </Grid>

        {/* Detalhes do Produto */}
        <Grid item xs={12} md={6} sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box
            sx={{
              mb: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              height: "100%",
              gap: 1
            }}
          >
            {produto.nome && (
              <Chip
                label={produto.id}
                size="small"
                sx={{
                  backgroundColor: blue[900],
                  color: "white",
                  mb: 1,
                  width: 50,
                  fontWeight: "bold",
                }}
              />
            )}

            <Typography
              fontSize="1.5rem"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "darkblue",
                textTransform: "uppercase",
              }}
            >
              {produto.nome}
            </Typography>
            {produto.marca && (
              <Typography fontSize="small" color="text.secondary">
                <strong>CODIGO DO PRODUTO:</strong> {produto.id}
              </Typography>
            )}
            {produto.marca && (
              <Typography fontSize="small" color="text.secondary">
                <strong>MARCA:</strong> {produto.marca}
              </Typography>
            )}

            <Stack
              padding={2}
              sx={{
                borderLeft: "4px solid " + blue[800],
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              }}
            >
              <Typography
                fontSize="small"
                sx={{ color: "gray", textTransform: "uppercase" }}
              >
                <strong>Variações</strong>{" "}
              </Typography>
              <List>
                {produto.variacoes &&
                  produto.variacoes.map((variacao) => (
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      key={variacao.id}
                    >
                      {variacao.nome}
                    </Typography>
                  ))}
              </List>
            </Stack>
          </Box>
          <Divider  />
          <Typography variant="body1" sx={{ fontWeight: "bold", whiteSpace: 'pre-line' }}>
            {produto.descricao || "Sem descrição disponível para este produto."}
          </Typography>

          <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ddd",
                borderRadius: 1,
                mr: 3,
              }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
