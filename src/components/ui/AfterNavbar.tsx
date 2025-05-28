import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import RoomIcon from "@mui/icons-material/Room";
import { motion } from "framer-motion";

interface props{ 
    visible : boolean
}
const AfterNavbar = ({visible} : props) => {


  return (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{ width: "100%" }}
    >
        <Box
            sx={{
                width: "100%",
                bgcolor: "#222831",
                color: "white",
                py: 1,
                px: { xs: 1, md: 4 },
                display: visible ? "flex" : "none",
                transition: "opacity 0.4s cubic-bezier(0.4,0,0.2,1)",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: { xs: 14, md: 18 },
                zIndex: 20,
            }}
        >
            <Stack
                direction="row"
                spacing={8}
                alignItems="center"
                sx={{ width: "100%", justifyContent: "center" }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <GroupIcon sx={{ fontSize: 32, color: "white" }} />
                    <Typography
                        component="span"
                        sx={{ fontWeight: 500, fontSize: "14px" }}
                    >
                        Valores diferenciados para integradores e revendas
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <RoomIcon sx={{ fontSize: 32, color: "white" }} />
                    <Typography
                        component="span"
                        sx={{ fontWeight: 500, fontSize: "14px" }}
                    >
                        Envio para todo território nacional
                    </Typography>
                </Box>
            </Stack>
        </Box>
    </motion.div>
  );
};

export default AfterNavbar;
