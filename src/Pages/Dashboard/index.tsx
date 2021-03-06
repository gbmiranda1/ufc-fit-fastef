import { Box } from "@mui/material";
import {useStyles} from "./style"
import Header from "../../Components/Header"
import Search from "../../Components/Search"
import Vitrine from "../../Components/Vitrine";
import {Cart} from "../../Components/Cart";

function Dashboard({}) {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Header></Header>
        <Search></Search>
      </Box>
      <Box className={styles.vitrineCart}>
        <Vitrine/>
        <Cart />
      </Box>
    </Box>
  );
}

export default Dashboard;
