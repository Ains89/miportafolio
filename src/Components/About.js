import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
export default function SimplePaper() {
  return (
    <Box id='about'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 4,
          width: 300,
          height: 300,

        },
      }}
    >
      <Paper className='imgpaper1'> <img src='https://img.freepik.com/foto-gratis/sistema-html-concepto-sitios-web_23-2150323518.jpg' alt=''></img>
        <p>Mi pasión por la programación y el deseo de crear cosas nuevas cada día que mejoren nuestro diario vivir, hacen que todo lo que hago sea buscando la mayor calidad ý optimización posible.</p>
      </Paper>
      <Paper className='imgpaper2'> <img src='https://w0.peakpx.com/wallpaper/773/459/HD-wallpaper-java-script-baseball-black-chedesign-javascript-js-metal-music-never-programming-university.jpg' alt=''></img>
        <p>El diseño de páginas web en la actualidad es un entorno comercial para las diferentes industrias, y sus diferentes tipos de negocio, por lo que si no estas ne la web, estás feura del mercado. </p>
      </Paper>
      <Paper className='imgpaper3'><img src='https://miro.medium.com/v2/resize:fit:1100/1*f2i47G95nVCx71KzM1iXlg.png' alt=''></img>
        <p>Darle vida y estilo a tus páginas es quizá la parte más importante que afecta directamente a los usurios que a diario interactúan con nuetros servicios, por ello debe llevar un sello de originalidad.</p>
      </Paper>
    </Box>
  );
}