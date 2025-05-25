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

const SectionTitle = styled(Typography)({
  position: 'relative',
  marginBottom: '40px',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: 0,
    width: '80px',
    height: '4px',
    backgroundColor: 'orange',
  },
});

const ServiceCard = styled(Card)({
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
});

const IconWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  '& .MuiSvgIcon-root': {
    fontSize: '3.5rem',
    color: 'orange',
  },
});

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: 'spring',
      stiffness: 60,
    },
  }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Venda de Equipamentos',
      description: 'Oferecemos uma ampla gama de equipamentos de prevenção e combate a incêndio de alta qualidade, certificados e em conformidade com as normas técnicas vigentes.',
      image : equipamentos,
      icon: <LocalFireDepartment fontSize="large" />,
      features: [
        'Extintores de todos os tipos',
        'Sistemas de alarme e detecção',
        'Equipamentos de sinalização',
        'EPIs para combate ao fogo',
        'Mangueiras e hidrantes',
      ]
    },
    {
      id: 2,
      title: 'Projetos Técnicos',
      description: 'Desenvolvimento de projetos técnicos completos de prevenção e combate a incêndio, seguindo rigorosamente as normas do Corpo de Bombeiros e ABNT.',
      icon: <Engineering fontSize="large" />,
      image: projetos,
      features: [
        'Projetos preventivos completos',
        'Saídas de emergência e rotas de fuga',
        'Sistemas de hidrantes',
        'Sistemas de sprinklers',
        'Aprovação junto aos órgãos fiscalizadores',
      ]
    },
    {
      id: 3,
      title: 'Manutenção de Extintores',
      description: 'Serviço completo de manutenção, recarga e teste hidrostático em extintores de incêndio, garantindo sua eficiência em situações de emergência.',
      icon: <Build fontSize="large" />,
      image: manutencao,
      features: [
        'Recarga de extintores',
        'Teste hidrostático',
        'Manutenção preventiva',
        'Substituição de peças',
        'Lacração e garantia',
      ]
    },
    {
      id: 4,
      title: 'Treinamentos',
      description: 'Capacitação de equipes para atuação em situações de emergência, formação de brigadas de incêndio e treinamentos específicos sobre segurança.',
      icon: <School fontSize="large" />,
      image: treinamentos,
      features: [
        'Formação de brigada de incêndio',
        'Primeiros socorros',
        'Simulados de evacuação',
        'Uso correto de equipamentos',
        'Certificação dos participantes',
      ]
    },
    {
      id: 5,
      title: 'Instalações e Inspeções',
      description: 'Realizamos instalações completas de sistemas preventivos, além de inspeções periódicas para garantir a conformidade e funcionamento dos equipamentos.',
      icon: <Construction fontSize="large" />,
      image: instalacao,
      features: [
        'Instalação de sistemas preventivos',
        'Inspeções periódicas',
        'Emissão de laudos técnicos',
        'Verificação de conformidade com normas',
        'Planos de manutenção preventiva',
      ]
    }
  ];

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
        style={{ width: '100%' }}
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
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              Nossos Serviços
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: "800px" }}>
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
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5135885463&text=Oi, vim pelo site, gostaria de fazer um orçamento!")}
            >
              Solicite um Orçamento
            </Button>
          </Container>
        </HeroSection>
      </motion.div>

      {/* Main Content */}
      <Box sx={{ py: 8, width: "90%" }}>
        {/* Intro Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <SectionTitle variant="h4">
            Serviços Especializados em Segurança Contra Incêndio
          </SectionTitle>
          <Typography variant="body1" paragraph>
            Há mais de uma década no mercado, a SulFire desenvolve soluções
            personalizadas para diversos segmentos, sempre com o objetivo de
            proteger vidas e patrimônios. Nosso time de profissionais
            qualificados está preparado para atender às necessidades específicas
            de sua empresa ou residência, com serviços de alta qualidade e
            tecnologia avançada.
          </Typography>
        </motion.div>

        {/* Services Cards */}
        <Grid container spacing={4} sx={{ mb: 8, padding: 1 }}>
          {services.map((service, idx) => (
            <Grid item xs={12} md={3} key={service.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                custom={idx + 1}
                style={{ height: '100%' }}
              >
                <ServiceCard>
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    }}
                  />
                  <CardContent sx={{ p: 4 }}>
                    <IconWrapper>{service.icon}</IconWrapper>
                    <Typography
                      variant="h5"
                      component="h2"
                      align="center"
                      sx={{ mb: 2 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {service.description}
                    </Typography>
                    <List>
                      {service.features.map((feature, index) => (
                        <ListItem key={index} disableGutters>
                          <ListItemIcon sx={{ minWidth: "30px" }}>
                            <CheckCircle sx={{ color: "green" }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </ServiceCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Why Choose Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <SectionTitle variant="h4">Por que escolher a SulFire?</SectionTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph>
                <strong>Qualidade garantida:</strong> Utilizamos apenas produtos
                certificados e que atendem rigorosamente às normas técnicas.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Expertise técnica:</strong> Nossa equipe é formada por
                profissionais especializados e constantemente atualizados.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Soluções personalizadas:</strong> Desenvolvemos projetos
                adaptados às necessidades específicas de cada cliente.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph>
                <strong>Atendimento ágil:</strong> Equipe pronta para atender
                emergências e demandas com rapidez e eficiência.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Compromisso com segurança:</strong> Priorizamos a
                proteção da vida acima de tudo em nossas soluções.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Manutenção preventiva:</strong> Planos de manutenção que
                evitam problemas futuros e garantem a durabilidade dos
                equipamentos.
              </Typography>
            </Grid>
          </Grid>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Box
            sx={{
              bgcolor: "#f8f8f8",
              p: 4,
              borderRadius: 2,
              textAlign: "center",
              mt: 6,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Precisa de algum de nossos serviços?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Entre em contato com nossa equipe para um orçamento personalizado e
              sem compromisso.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                "&:hover": { bgcolor: "black", color: "orange", scale: 1.1 },
                transition: "all 0.3s ease-in-out",
                color: "white",
              }}
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5135885463&text=Oi, vim pelo site, gostaria de fazer um orçamento!")}
            >
              Solicite um Orçamento
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Services;
