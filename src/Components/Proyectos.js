import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export default function ActionAreaCard() {
  return (
    <Card id='tarjeta' deep={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image="https://humanidades.com/wp-content/uploads/2017/03/sistema-solar-e1564771413564.jpg"
          alt="sistema solar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Galeria Sistema Solar
          </Typography>
          <button className='btn1'><a href='https://github.com/Ains89/Ains89.github.io'>Ver Más</a></button>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image="https://www.nintenderos.com/wp-content/uploads/2022/11/plataformas.jpg"
          alt="Juego plataforma"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dude Juego De Plataforma
          </Typography>
          <button className='btn2' ><a href='https://github.com/Ains89/JuegosClase/tree/main/JuegosEnClase/JuegoPlataformaDude' >Ver Más</a></button>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image="https://play-lh.googleusercontent.com/Fwy6A80NJnko2SbwPFvTxGKUsKG9kvOqfnjFRAhKWVlRvXFkonQ59FZPxfiNruTRDA"
          alt="Sopa de letras"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Juego Sopa De Letras
          </Typography>
          <button className='btn3'> <a href='https://github.com/Ains89/JuegosClase/tree/main/JuegosEnClase/JuegoSopaDeLetras'>Ver Más</a></button>
        </CardContent>
      </CardActionArea>
    </Card>


  );
}

