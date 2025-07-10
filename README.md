# API com integração de IA

Este projeto implementa uma API simples para análise de texto com integração de inteligência artificial para detecção de sentimento.

### Objetivo
Criar uma API simples que:
	1.	Analisa um texto de entrada.
	2.	Retorna estatísticas básicas.
	3.	Integra com uma API pública de IA para detectar sentimento.

### Requisitos obrigatórios
Crie um endpoint POST /analyze-text que receba um JSON com o seguinte formato:
```
{
  "text": "Seu texto livre aqui..."
}
```
A resposta da API deve conter:
- A contagem total de palavras.
- As 5 palavras mais frequentes (ignorando stopwords).
- Um resumo de sentimento do texto, utilizando a API pública de IA do Hugging Face (`pysentimiento/bertweet-pt-sentiment`).

### Opcional
Adicionar um endpoint GET /search-term?term=... que retorne:
- Se o termo informado foi encontrado na última análise.
- O histórico é mantido em cache/memória.

### Tecnologias Utilizadas
- **Linguagem:** Node.js
- **Framework:** Express.js
- **Bibliotecas:** `stopword` para remoção de stopwords, `axios` para requisições HTTP.
- **Testes:** Jest
- **Arquitetura:** Hexagonal Architecture
- **Armazenamento:** Cache em memória

### Como instalar e usar o projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/samuel-prates/coodesh
    cd coodesh
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure a variável de ambiente:**
    Defina a variável de ambiente `HF_TOKEN` com o seu token de API do Hugging Face. Você pode obter um token em [Hugging Face Settings](https://huggingface.co/settings/tokens).

    Exemplo (Linux/macOS):
    ```bash
    export HF_TOKEN="hf_YOUR_HUGGING_FACE_TOKEN"
    ```
    Exemplo (Windows - PowerShell):
    ```powershell
    $env:HF_TOKEN="hf_YOUR_HUGGING_FACE_TOKEN"
    ```

4.  **Execute a aplicação:**
    ```bash
    npm start
    ```
    A API estará disponível em `http://localhost:3000`.

5.  **Execute os testes:**
    ```bash
    npm test
    ```

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Se está usando github pessoal, referencie que é um challenge by coodesh:  

>  This is a challenge by [Coodesh](https://coodesh.com/)

## Finalização e Instruções para a Apresentação

1. Adicione o link do repositório com a sua solução no teste
2. Verifique se o Readme está bom e faça o commit final em seu repositório;
3. Envie e aguarde as instruções para seguir. Caso o teste tenha apresentação de vídeo, dentro da tela de entrega será possível gravar após adicionar o link do repositório. Sucesso e boa sorte. =)


## Suporte

Para tirar dúvidas sobre o processo envie uma mensagem diretamente a um especialista no chat da plataforma.