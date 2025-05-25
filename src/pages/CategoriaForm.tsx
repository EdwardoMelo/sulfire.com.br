import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Categoria } from "../models/Categoria"; // Assuming Categoria model is in this path
import { Subcategoria, SubcategoriaDTO } from "@/models/SubCategoria";
import SubcategoriaList from "@/components/ui/SubCategoriaList";

const CategoriaForm = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [formData, setFormData] = useState({
    nome: ""
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const [subcategorias, setSubcategorias] = useState <SubcategoriaDTO[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubcategoriasChange =  (updatedSubcategorias: SubcategoriaDTO[]) => { 
      setSubcategorias(updatedSubcategorias);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.nome.trim()) {
      setError("O nome da categoria é obrigatório.");
      setLoading(false);
      return;
    }
    try {
      const categoria = new Categoria({
        id: editing ? parseInt(id!) : 0,
        nome: formData.nome,
        subcategorias: [], // Subcategorias are not managed in this form directly
      });

      if (editing) {
        await categoria.update();  //subcategorias will be crete directily from the SubCategoriaList component when the categoria is being edited
        navigate(-1);
        return;
      } 
       const cretedCategoria = await categoria.create();
       if(subcategorias.length){ 
           await Subcategoria.createManyByCategoryId(cretedCategoria.id, subcategorias);
       }
       navigate(-1);
    } catch (err) {
      console.error("Erro ao salvar categoria:", err);
      setError(
        `Erro ao ${
          editing ? "atualizar" : "criar"
        } a categoria. Verifique os dados e tente novamente.`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    navigate("/admin/categorias"); // Adjust if your back navigation is different
  };

  useEffect(() => {
    const fetchCategoria = async () => {
      if (id) {
        setEditing(true);
        setLoading(true);
        try {
          const categoriaData = await Categoria.getById(parseInt(id));
          setFormData({ nome: categoriaData.nome });
          setSubcategorias(categoriaData.subcategorias);
        } catch (err) {
          console.error("Erro ao carregar categoria:", err);
          setError(
            "Erro ao carregar as informações da categoria. Por favor, tente novamente."
          );
        } finally {
          setLoading(false);
        }
      } else {
        setEditing(false);
        setFormData({ nome: "" }); // Reset for new category
      }
    };

    fetchCategoria();
  }, [id]);


  if (loading && editing) { // Only show full page loader when fetching existing data
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
        <CircularProgress sx={{ color: "orange" }} />
      </Container>
    );
  }

  return (
    <Container sx={{ py: 6, minHeight: "80vh", marginTop: "10vh" }}>
      <Button
        variant="text"
        startIcon={<ArrowBack />}
        onClick={handleGoBack}
        sx={{ mb: 3 }}
      >
        Voltar para categorias
      </Button>

      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        {editing ? "Editar Categoria" : "Cadastrar Nova Categoria"}
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome da Categoria"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              variant="outlined"
              disabled={loading && !editing} // Disable input while submitting new
            />
          </Grid>
          <Grid item xs={12}>
           <SubcategoriaList 
           categoria_id={editing ? parseInt(id!) : 0}
           subcategoriasFromParent={subcategorias}
           onSubcategoriasChange={onSubcategoriasChange}
           />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                bgcolor: "orange",
                "&:hover": { bgcolor: "darkorange" },
                color: "white",
                textTransform: "uppercase",
                py: 1.5,
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : editing ? (
                "Salvar Alterações"
              ) : (
                "Cadastrar Categoria"
              )}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CategoriaForm;