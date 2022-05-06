import chalk from "chalk";
import fs from "fs";

function extraiLink(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultado = [];
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultado.push({ [temp[1]]: [temp[2]] });
  }
  return arrayResultado.length === 0
    ? "Não foi encontrado nenhum resultado"
    : arrayResultado;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Não foi possível localizar o caminho"));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extraiLink(texto);
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow("Ação finalizada"));
  }
}

export default pegaArquivo;

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch((erro) => trataErro(erro));
// }

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if (erro) {
//       trataErro(erro);
//     }
//     console.log(chalk.green(texto));
//   });
// }

// console.log(chalk.red('vermelho', chalk.underline.bgWhite('azul')));

// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// const paragrafo = 'I am being returned by a function';

// function texto(string){
//   return string;
// }

// console.log(texto(paragrafo));
