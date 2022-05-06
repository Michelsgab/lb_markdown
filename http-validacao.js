// import { link } from "fs";
import fetch from "node-fetch";

function handleError(erro) {
  throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise.all(
      arrayURLs.map(async (url) => {
        const res = await fetch(url);
        return res.status;
      })
    );
    return arrayStatus;
  } catch (erro) {
    handleError(erro);
  }
}

function geraArrayDeURLs(arrayLinks) {
  return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
  const links = geraArrayDeURLs(arrayLinks);
  const statusLink = await checaStatus(links);

  const resultados = arrayLinks.map((objeto, indice) => ({
    ...objeto,
    status: statusLink[indice],
  }));

  return resultados;
}

export default validaURLs;
