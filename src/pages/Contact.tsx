import React, { useState } from 'react'
import { Box, Button, Container, Typography, TextField, Paper, Alert, Snackbar, CircularProgress } from '@mui/material'
import { styled } from '@mui/system'
import heroBanner from '../assets/hero-banner.jpg'
import { sendContactForm } from '@/utils'

const HeroBanner = styled(Box)({
  minHeight: '50vh',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  padding: '60px 20px 40px 20px',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const Contact = () => {
        const [form, setForm] = useState({ numero: '', email: '', mensagem: '' })
        const [snackbarOpen, setSnackbarOpen] = useState(false);
        const [message, setMessage] = useState('');
        const [alertColor, setAlertColor] = useState<'success' | 'error' | 'info'>('info');
        const [loading, setLoading] = useState(false);

    const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
    ) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
    };

const showFeedBack = (msg: string, color: 'success' | 'error' | 'info') => {
  setMessage(msg);
  setAlertColor(color);
  setSnackbarOpen(true);
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await sendContactForm(form);
      if (data.message === "Mensagem recebida com sucesso!") {
        showFeedBack("Mensagem enviada com sucesso!", "success");
        setForm({ numero: "", email: "", mensagem: "" });
      }
    } catch (e: any) {
      setForm({ numero: "", email: "", mensagem: "" });
      showFeedBack(e.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <HeroBanner
        sx={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBanner})`,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Fale <strong style={{ color: "#F64E29" }}>Conosco</strong>
        </Typography>
        <Typography variant="h6" sx={{ mb: 1, maxWidth: 600 }}>
          Entre em contato para dúvidas, orçamentos ou sugestões. Nossa equipe
          responderá o mais breve possível!
        </Typography>
      </HeroBanner>
      <Container
        maxWidth="sm"
        sx={{ mt: { 
          xs: 0,
          md: -8
        }, mb: 8, position: "relative", zIndex: 2 }}
      >
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Formulário de Contato
            </Typography>
            <TextField
              label="Número de telefone"
              name="numero"
              value={form.numero}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              type="tel"
            />
            <TextField
              label="E-mail"
              name="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              type="email"
            />
            <TextField
              label="Mensagem"
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              multiline
              minRows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="warning"
              sx={{
                "&:hover": {
                  bgcolor: "black",
                  color: "primary.main",
                  scale: 1.1,
                },
                transition: "all 0.3s ease-in-out",
                color: "white",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Enviar Mensagem"
              )}
            </Button>
          </form>
        </Paper>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={alertColor}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Contact