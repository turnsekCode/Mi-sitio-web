import Link from "next/link";
import styles from "../proyect_card/proyect_car.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const Proyect_card = () => {
  return (
    <div className={styles.container_card}>
       <Card sx={{ maxWidth: "48%", backgroundColor: '#0e0e12', boxShadow:"0 0 10px 0 rgba(255, 254, 254, 0.2)" }}>
        <CardMedia
          component="img"
          max-height="350"
          image="../../imagenes/proyecto 1.png"
          alt="Proyecto 1"
        />
        <CardContent box-shadow="0 0 10px 0 rgba(255, 254, 254, 0.2)">
          <Typography gutterBottom variant="h5" component="div">
            <a className={styles.title} href="https://quickgold.es/" target="_blank">Proyecto 1</a>
          </Typography>
          <Typography variant="body2" color="#788ca0">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <a className={styles.cta} href="https://quickgold.es/" target="_blank"><span>Ver Proyecto</span></a>
          <ArrowForwardIcon />
        </Button>
      </CardActions>
    </Card>
         <Card sx={{ maxWidth: "48%", backgroundColor: '#0e0e12', boxShadow:"0 0 10px 0 rgba(255, 254, 254, 0.2)" }}>
        <CardMedia
          component="img"
          max-height="350"
          image="../../imagenes/proyecto 2.png"
          alt="Proyecto 1"
        />
        <CardContent box-shadow="0 0 10px 0 rgba(255, 254, 254, 0.2)">
          <Typography gutterBottom variant="h5" component="div">
            <a className={styles.title} href="https://preciodeloro.quickgold.es/alfonsoelsabio/" target="_blank">Proyecto 2</a>
          </Typography>
          <Typography variant="body2" color="#788ca0">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <a className={styles.cta} href="https://preciodeloro.quickgold.es/alfonsoelsabio/" target="_blank"><span>Ver Proyecto</span></a>
          <ArrowForwardIcon />
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}
