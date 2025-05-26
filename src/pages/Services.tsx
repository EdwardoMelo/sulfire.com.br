import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  LocalFireDepartment, 
  Engineering,
  Build,
  School,
  Construction,
  CheckCircle
} from '@mui/icons-material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

import servicesImge from '../assets/services-banner.jpg';

import manutencao from '../assets/manutencao.jpg';
import equipamentos from '../assets/venda-equip.jpg';
import projetos from '../assets/projeto.jpg';
import instalacao from '../assets/instalacoes.png';
import treinamentos from '../assets/treinamento-basico-de-simulacao-de-combate-incendio-e-evacuacao-para-seguranca-em-condominio-ou-fabrica.jpg';

import ServicesSection from '../components/sections/Services'

const HeroSection = styled(Box)({
  position: 'relative',
  backgroundColor: 'black',
  backgroundPosition: 'center',
  minHeight: '70vh',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '80px 0',
  width: '100%'
});

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const Services = () => {


  return (
    <Box
      sx={{
        marginTop: "12vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{ width: "100%" }}
      >
        <HeroSection>
          <Box
            component="img"
            src={servicesImge}
            sx={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
            }}
          />
          <Container
            sx={{
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",

              height: "100%",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                textAlign: "left",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Nossos Serviços
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: "800px",fontSize: '1.5rem' }}>
              A SulFire oferece soluções completas em prevenção e combate a
              incêndios, desde a venda de equipamentos até treinamentos
              especializados.
            </Typography>
            <Button
              size="large"
              variant="contained"
              sx={{
                "&:hover": { bgcolor: "black", color: "orange", scale: 1.1 },
                transition: "all 0.3s ease-in-out",
                color: "white",
              }}
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=5135885463&text=Oi, vim pelo site, gostaria de fazer um orçamento!"
                )
              }
            >
              Solicite um Orçamento
            </Button>
          </Container>
        </HeroSection>
      </motion.div>

      {/* Main Content */}
      <ServicesSection />
    </Box>
  );
};

export default Services;
