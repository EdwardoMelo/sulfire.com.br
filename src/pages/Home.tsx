
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Paper,
  Divider
} from '@mui/material';
import { 
  LocalFireDepartment, 
  Security, 
  Handshake, 
  Lightbulb, 
  Nature,
  CheckCircle
} from '@mui/icons-material';
import { Stack, styled } from '@mui/system';
import heroBanner from '../assets/hero-banner.jpg'
import { motion } from 'framer-motion';
import { orange } from '@mui/material/colors';
import teamBanner from '../assets/team-banner.jpg'
import valueBanner from '../assets/values.jpg';
import destaqueSprinkler from "../assets/destaque-sprinkler.jpg";
import destaqueProtecao from '../assets/produtos/destaque-protecao.png';
import destaqueSensor from '../assets/produtos/detaque-sensor.png';

const values = [
  {
    icon: <CheckCircle sx={{ color: "orange", mr: 2, fontSize: "2rem" }} />,
    title: "Segurança em primeiro lugar",
    description:
      "Priorizamos a segurança em todas as nossas soluções e procedimentos.",
  },
  {
    icon: <CheckCircle sx={{ color: "orange", mr: 2, fontSize: "2rem" }} />,
    title: "Ética e transparência",
    description:
      "Conduzimos nossos negócios com honestidade e clareza em todas as relações.",
  },
  {
    icon: <CheckCircle sx={{ color: "orange", mr: 2, fontSize: "2rem" }} />,
    title: "Comprometimento com o cliente",
    description:
      "Dedicação total à satisfação e segurança dos nossos clientes.",
  },
  {
    icon: <CheckCircle sx={{ color: "orange", mr: 2, fontSize: "2rem" }} />,
    title: "Inovação constante",
    description:
      "Buscamos sempre as melhores e mais modernas soluções do mercado.",
  },
  {
    icon: <CheckCircle sx={{ color: "orange", mr: 2, fontSize: "2rem" }} />,
    title: "Respeito às normas",
    description:
      "Seguimos rigorosamente todas as normas e regulamentações técnicas.",
  },
  {
    icon: <CheckCircle sx={{ color: "orange", mr: 2, fontSize: "2rem" }} />,
    title: "Respeito ao meio ambiente",
    description:
      "Comprometimento com práticas sustentáveis e responsabilidade ambiental.",
  },
];



const featuredProducts = [
  {
    image: destaqueSprinkler,
    title: "Sprinklers",
    description:
      "Dispositivos automáticos de combate a incêndio com alta eficiência.",
  },
  {
    image: destaqueSensor,
    title: "Sistemas de Alarme",
    description:
      "Detectores de fumaça, alarmes de incêndio e sistemas completos de detecção.",
  },
  {
    image: destaqueProtecao,
    title: "Equipamentos de Proteção",
    description:
      "EPIs completos para segurança no trabalho e prevenção de acidentes.",
  },
];

const HeroBanner = styled(Box)({
  minHeight: '100vh',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  padding: '100px 50px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start'
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

const FeatureCard = styled(Card)({
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    border: '1px solid lightgray'
  },
  cursor: 'pointer'
});

const FeatureIcon = styled(Box)({
  color: 'orange',
  fontSize: '3rem',
  marginBottom: '1rem',
});

const ValueCard = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
  borderRadius: '8px',
  padding: '16px',
});

const Home = () => {
  // Animation variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sectionTitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const contentFadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageScaleInVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const listStaggerContainerVariants = {
    hidden: {}, // No initial state needed for the container itself for whileInView
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const listItemFadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroBanner id="hero-section">
        <Box
          component="img"
          src={heroBanner}
          alt="Hero Image"
          sx={{
            position: "absolute",
            top: 10,
            left: 0,
            objectFit: "cover",
            width: "100%",
            height: "100%",
            zIndex: 10,
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 50, 0.7)", // Linear gradient with transparency
            zIndex: 15,
          }}
        ></Box>

        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box
            sx={{
              zIndex: 20,
              color: "white",
              width: {
                xs: "100%",
                sm: "80%",
                md: "50%",
              },
              position: "relative",
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <motion.div variants={heroItemVariants}>
              <Typography
                variant="h2"
                sx={{ fontWeight: 550, mb: 2, textAlign: "left" }}
              >
                Sua proteção Confiável Contra{" "}
                <motion.span
                  style={{ display: "inline-block" }}
                  variants={heroItemVariants}
                >
                  <span style={{ color: "orange" }}>Incêndio</span>
                </motion.span>
              </Typography>
            </motion.div>
            <motion.div variants={heroItemVariants}>
              <Typography fontSize="1.8rem" sx={{ mb: 4, textAlign: "left" }}>
                Equipamentos e Serviços com excelência em prevenção e combate a
                incêndios
              </Typography>
            </motion.div>
            <motion.div variants={heroItemVariants}>
              <Button
                component={RouterLink}
                size="large"
                variant="contained"
                to="/produtos"
                sx={{
                  "&:hover": { bgcolor: "black", color: "orange", scale: 1.1 },
                  transition: "all 0.3s ease-in-out",
                  color: "white",
                }}
              >
                Conheça Nossos Produtos
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </HeroBanner>

      {/* Sobre Nós Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                variants={sectionTitleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <SectionTitle variant="h4">Sobre a SulFire</SectionTitle>
              </motion.div>
              <motion.div
                variants={contentFadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Typography variant="body1" paragraph>
                  A SulFire Sistemas Preventivos LTDA é uma empresa
                  especializada em soluções completas para prevenção e combate a
                  incêndios localiza em São Leopoldo - RS, com experiência no
                  mercado, oferecendo produtos e serviços da mais alta
                  qualidade.
                </Typography>
              </motion.div>
              <motion.div
                variants={contentFadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Typography variant="body1" paragraph>
                  Nossa missão é proteger vidas e patrimônios através de
                  soluções eficazes e inovadoras de prevenção e combate a
                  incêndios, seguindo rigorosamente as normas técnicas e
                  regulamentações do setor.
                </Typography>
              </motion.div>
              <motion.div
                variants={contentFadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/servicos"
                  sx={{
                    backgroundColor: "orange",
                    "&:hover": {
                      bgcolor: "black",
                      color: "orange",
                      scale: 1.1,
                    },
                    transition: "all 0.3s ease-in-out",
                    color: "white",
                  }}
                >
                  Conheça Nossos Serviços
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                variants={imageScaleInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Box
                  component="img"
                  src={teamBanner}
                  alt="Equipe SulFire"
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Nossos Valores Section */}
      <Box
        sx={{
          bgcolor: "#f8f8f8",
          py: 8,
          position: "relative",
          display: "flex",
        }}
      >
        <Box
          component="img"
          src={valueBanner}
          alt="Valores SulFire"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            width: "100%",
            height: "100%",
            zIndex: 0,
            opacity: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            width: "100%",
            height: "100%",
            zIndex: 10,
            background: "rgba(0, 0, 0, 0.7)", // Linear gradient with transparency
          }}
        />
        <Container sx={{ zIndex: 20 }}>
          <motion.div
            variants={contentFadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ mb: 6, color: "orange" }}
            >
              Nossos Valores
            </Typography>
          </motion.div>

          <motion.div
            variants={listStaggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Grid container spacing={3}>
              {values.map((value, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div variants={listItemFadeInUpVariants}>
                    <ValueCard>
                      {value.icon}
                      <Box>
                        <Typography
                          color="orange"
                          fontWeight="bold"
                          variant="h6"
                        >
                          {value.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="white"
                          fontWeight="bold"
                        >
                          {value.description}
                        </Typography>
                      </Box>
                    </ValueCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Produtos Destacados */}
      <Box sx={{ py: 8 }}>
        <Container>
          <motion.div
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionTitle variant="h4" sx={{ mb: 6 }}>
              Destaques
            </SectionTitle>
          </motion.div>
          <motion.div
            variants={listStaggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Grid container spacing={4}>
              {featuredProducts.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div variants={listItemFadeInUpVariants}>
                    <FeatureCard>
                      <CardMedia
                        component="img"
                        height="200"
                        image={product.image}
                        alt={product.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                      </CardContent>
                    </FeatureCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <motion.div
              variants={contentFadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Button
                variant="contained"
                component={RouterLink}
                to="/produtos"
                sx={{
                  "&:hover": { bgcolor: "black", color: "orange", scale: 1.1 },
                  transition: "all 0.3s ease-in-out",
                  color: "white",
                }}
              >
                Ver Todos os Produtos
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: "black",
          color: "white",
          py: 8,
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/cta-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} spacing={2} md={8} textAlign="center">
              <motion.div
                variants={contentFadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Precisa de Ajuda com Equipamentos de Segurança?
                </Typography>
              </motion.div>
              <motion.div
                variants={contentFadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Entre em contato com nossa equipe especializada para
                  consultoria e orçamentos personalizados para sua empresa.
                </Typography>
              </motion.div>
              <motion.div
                variants={contentFadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    variant="contained"
                    component="a"
                    href="https://api.whatsapp.com/send?phone=5135885463&text=Oi, vim pelo site,gostaria de saber mais sobre os produtos e serviços da SulFire!"
                    target="_blank"
                    size="large"
                    sx={{
                      "&:hover": {
                        bgcolor: "black",
                        color: "orange",
                        scale: 1.1,
                      },
                      transition: "all 0.3s ease-in-out",
                      color: "white",
                    }}
                  >
                    Entre em Contato
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: "white",
                      borderColor: "white",
                      "&:hover": {
                        borderColor: "orange",
                        color: "orange",
                      },
                    }}
                  >
                    +55 5135885463
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
