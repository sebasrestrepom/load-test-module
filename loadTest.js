const axios = require('axios');
const { program } = require('commander');

program
  .option('-u, --url <type>', 'URL a la que realizar solicitudes')
  .option('-n, --number <type>', 'Número de solicitudes por minuto')
  .option('-m, --method <type>', 'Método HTTP a utilizar')
  .option(
    '-b, --body <type>',
    'Cuerpo del mensaje para peticiones POST en formato JSON'
  )
  .parse(process.argv);

const options = program.opts();

if (!options.url || !options.number || !options.method) {
  console.error(
    'Por favor, proporciona una url, un número de solicitudes por minuto y un método HTTP.'
  );
  process.exit(1);
}

if (options.method.toLowerCase() === 'post' && !options.body) {
  console.error(
    'Por favor, proporciona un cuerpo del mensaje para peticiones POST.'
  );
  process.exit(1);
}

const interval = 60000 / options.number;
let count = 0;

setInterval(() => {
  count++;

  const axiosConfig = {
    method: options.method,
    url: options.url,
  };

  if (options.method.toLowerCase() === 'post') {
    axiosConfig.data = JSON.parse(options.body);
  }

  axios(axiosConfig)
    .then((response) => {
      console.log(
        `Solicitud ${count}: Estado de la solicitud: ${response.status}`
      );
    })
    .catch((error) => {
      console.error(
        `Solicitud ${count}: Error en la solicitud: ${error.message}`
      );
    });
}, interval);
