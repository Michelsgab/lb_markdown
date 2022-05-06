import pegaArquivo from "../index.js";

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("pegaArquivo::", () => {
  it("deve ser uma função", () => {
    expect(typeof pegaArquivo).toBe("function");
  });
  it("deve retornar array com resultados", async () => {
    const result = await pegaArquivo(
      "C:UsersInfraDesktoplb_markdown\testarquivos\texto1.md"
    );
    expect(result).toEqual(arrayResult);
  });
  it('deve retornar mensagem "Não há links"', async () => {
      const result = await pegaArquivo('C:\Users\Infra\Desktop\lb_markdown\test\arquivos\texto1_semlinks.md')
      expect(result).toBe('Não há links')
  })
});
