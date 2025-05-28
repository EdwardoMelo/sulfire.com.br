import { Box, Button, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, styled, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion';

import servicesImge from '../assets/services-banner.jpg';

import manutencao from '../../assets/manutencao.jpg';
import equipamentos from "../../assets/venda-equip.jpg";
import projetos from "../../assets/projeto.jpg";
import instalacao from "../../assets/instalacoes.png";
import treinamentos from "../../assets/treinamento-basico-de-simulacao-de-combate-incendio-e-evacuacao-para-seguranca-em-condominio-ou-fabrica.jpg";
import { 
  LocalFireDepartment, 
  Engineering,
  Build,
  School,
  Construction,
  CheckCircle
} from '@mui/icons-material';

const IconWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
  "& .MuiSvgIcon-root": {
    fontSize: "3.5rem",
    color: "#00bbf0",
  },
});

const SectionTitle = styled(Typography)({
  position: "relative",
  marginBottom: "40px",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-15px",
    left: 0,
    width: "80px",
    height: "4px",
    backgroundColor: "#00bbf0",
  },
});

const ServiceCard = styled(Card)({
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
  borderRadius: 0
});

const services = [
  {
    id: 1,
    title: "Venda de Equipamentos",
    description:
      "Oferecemos uma ampla gama de equipamentos de prevenção e combate a incêndio de alta qualidade, certificados e em conformidade com as normas técnicas vigentes.",
    image: equipamentos,
    icon: <LocalFireDepartment fontSize="large" />,
    features: [
      "Extintores de todos os tipos",
      "Sistemas de alarme e detecção",
      "Equipamentos de sinalização",
      "EPIs para combate ao fogo",
      "Mangueiras e hidrantes",
    ],
  },
  {
    id: 2,
    title: "Projetos Técnicos",
    description:
      "Desenvolvimento de projetos técnicos completos de prevenção e combate a incêndio, seguindo rigorosamente as normas do Corpo de Bombeiros e ABNT.",
    icon: <Engineering fontSize="large" />,
    image: projetos,
    features: [
      "Projetos preventivos completos",
      "Saídas de emergência e rotas de fuga",
      "Sistemas de hidrantes",
      "Sistemas de sprinklers",
      "Aprovação junto aos órgãos fiscalizadores",
    ],
  },
  {
    id: 4,
    title: "Treinamentos",
    description:
      "Capacitação de equipes para atuação em situações de emergência, formação de brigadas de incêndio e treinamentos específicos sobre segurança.",
    icon: <School fontSize="large" />,
    image: treinamentos,
    features: [
      "Formação de brigada de incêndio",
      "Primeiros socorros",
      "Simulados de evacuação",
      "Uso correto de equipamentos",
      "Certificação dos participantes",
    ],
  },
  {
    id: 5,
    title: "Contratos",
    description:
      "Gestão de equipamentos contra incêndio com manutenção, inspeção e controle, garantindo conformidade com as normas e funcionamento ideal em emergências.",
    icon: <Construction fontSize="large" />,
    image: instalacao,
    features: [
      "Instalação de sistemas preventivos",
      "Inspeções periódicas",
      "Emissão de laudos técnicos",
      "Verificação de conformidade com normas",
      "Planos de manutenção preventiva",
    ],
  },
];
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

const Services = () => {
  return (
    <Box sx={{ py: 8, width: "90%" }}>
      {/* Intro Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          marginBottom: "40px",
          gap: 4,
        }}
      >
        <SectionTitle
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            mt: 1,
            fontFamily: "Poppins, sans-serif",
            color: "#393e46",
          }}
        >
          Serviços Especializados em Segurança Contra Incêndio
        </SectionTitle>
        <Typography variant="body1" color="text.secondary" paragraph>
          Há mais de uma década no mercado, a SulFire desenvolve soluções
          personalizadas para diversos segmentos, sempre com o objetivo de
          proteger vidas e patrimônios. Nosso time de profissionais qualificados
          está preparado para atender às necessidades específicas de sua empresa
          ou residência, com serviços de alta qualidade e tecnologia avançada.
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
              style={{ height: "100%" }}
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
                  }}
                />
                <CardContent sx={{ p: 4, borderTop: "4px solid #00bbf0" }}>
                  <IconWrapper>{service.icon}</IconWrapper>
                  <Typography
                    variant="h5"
                    component="h2"
                    align="center"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      mt: 1,
                      fontFamily: "Poppins, sans-serif",
                      color: "#393e46",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" textAlign="justify" paragraph>
                    {service.description}
                  </Typography>
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
        <SectionTitle
          sx={{
            fontWeight: 700,
            mb: 2,
            mt: 1,
            fontFamily: "Poppins, sans-serif",
            marginBottom: "4rem",
          }}
          variant="h4"
        >
          Por que escolher a SulFire?
        </SectionTitle>
        <Grid container spacing={1} rowSpacing={1}>
          {[
            [
              {
                title: "Qualidade garantida",
                description:
                  "Utilizamos apenas produtos certificados e que atendem rigorosamente às normas técnicas.",
              },
              {
                title: "Expertise técnica",
                description:
                  "Nossa equipe é formada por profissionais especializados e constantemente atualizados.",
              },
              {
                title: "Soluções personalizadas",
                description:
                  "Desenvolvemos projetos adaptados às necessidades específicas de cada cliente.",
              },
            ],
            [
              {
                title: "Atendimento ágil",
                description:
                  "Equipe pronta para atender emergências e demandas com rapidez e eficiência.",
              },
              {
                title: "Compromisso com segurança",
                description:
                  "Priorizamos a proteção da vida acima de tudo em nossas soluções.",
              },
              {
                title: "Manutenção preventiva",
                description:
                  "Planos de manutenção que evitam problemas futuros e garantem a durabilidade dos equipamentos.",
              },
            ],
          ].map((column, colIdx) => (
            <Grid item xs={12} md={6} key={colIdx}>
              {column.map((item, idx) => (
                <Box
                  sx={{
                    borderLeft: "4px solid #00bbf0",
                    marginBottom: "1rem",
                    borderRadius: 0,
     
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 4,
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
                  }}
                  key={idx}
                >
                  <Typography variant="body1" paragraph>
                    <strong>{item.title}:</strong> {item.description}
                  </Typography>
                </Box>
              ))}
            </Grid>
          ))}
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
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              mt: 1,
              fontFamily: "Poppins, sans-serif",
                color: "#393e46",
            }}
          >
            Precisa de algum de nossos serviços?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontFamily: 'Poppins' }} >
            Entre em contato com nossa equipe para um orçamento personalizado e
            sem compromisso.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              "&:hover": { bgcolor: "black", color: "primary.main", scale: 1.1 },
              transition: "all 0.3s ease-in-out",
              color: "white",
              fontFamily: 'Poppins',
            }}
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=5135885463&text=Oi, vim pelo site, gostaria de fazer um orçamento!"
              )
            }
          >
            Solicite um Orçamento
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
}

export default Services