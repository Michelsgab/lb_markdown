import chalk from "chalk";
import pegaArquivo from "./index.js";
import validaURLs from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  if (caminho[3] === "validar") {
    console.log(chalk.blue("Links validados: "), await validaURLs(resultado));
  } else {
    console.log(chalk.blue("Lista de links: "), resultado);
  }
}

processaTexto(caminho);
