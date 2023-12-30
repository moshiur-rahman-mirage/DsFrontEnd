import { Box } from "@mui/material";
import { styled } from "@mui/material";
const Dashboardbox=styled(Box)(({theme})=>({
      backgroundColor:theme.palette.background.light,
      borderRadius:"1rem",
      boxShadow:"0.15rem 0.2rem 0.15rem 0.1rem"
      
}))

export default Dashboardbox;