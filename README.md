# React: Estilize Componentes com Styled Components e Manipule Arquivos Estáticos

* Diferencie o Vite do CRA e conheça as vantagens do uso do Styled Components.
* Utilize styled-components para criação de uma NavBar e estilização de um banner.
* Projete e implemente componentes React para exibir imagens e legendas.
* Aplique estilos personalizados e acessíveis para uma galeria de fotos.
* Adicione uma barra lateral de imagens populares e footer.

URL do curso -> [React: Estilize Componentes com Styled Components e Manipule Arquivos Estáticos](https://cursos.alura.com.br/course/react-estilize-componentes-styled-components-manipule-arquivos-estaticos)

![React: Estilize Componentes com Styled Components e Manipule Arquivos Estáticos](https://www.alura.com.br/assets/api/share/curso-react-estilize-componentes-styled-components-manipule-arquivos-estaticos.png)

## Links Úteis &#x1F517;
* [Design do Projeto](https://www.figma.com/file/2LFVvhAwy08j6kCaPcnOzs/SpaceApp-%7C-React%3A-arquivos-est%C3%A1ticos-com-integra%C3%A7%C3%A3o-de-conceito-%C3%A1rea-de-component?type=design&mode=design) - Protótipo do projeto feito no **Figma**.
* [Imagens do Assets](https://github.com/alura-cursos/space-app/raw/main/assets.zip) - Imagens que serão usadas na pasta *assets*.
* [Imagens do Public](https://github.com/alura-cursos/space-app/raw/main/public.zip) - Imagens que serão usadas na pasta *public*.

***

> Explicação do Código de cada capítulo dentro dos commits.

## 01 - Iniciando o Projeto
* Utilizar o Vite com o comando `npm create vite@latest` para iniciar um projeto React.
* Instalar e implementar a biblioteca **styled-components**.
* Criar um objeto com *styled-components* usando 
```jsx
const StyledElement = styled.{NOME_DO_ELEMENTO_HTML}`
    {CSS_STYLES}
`;
```
* Normalizar o CSS com estilos globais usando **styled-components**.

## 02 - Componentes Iniciais e Fontes
* Criar e estilizar o componente **Header**.
* Estruturar o menu da barra lateral.
* Passar parâmetros para o **styled-components** com:
```jsx
...
<ItemStyle $isCurrentPage={true}>
    ...
</ItemStyle>
...
```
* Utilizar JS dentro do **styled-components** com:
```jsx
...
a {
    color: ${props => props.$isCurrentPage ? "#7b78e5" : "#d9d9d9"};
    font-family: ${props => props.$isCurrentPage ? "GandhiSans Bold" : "GandhiSans Regular"};
    text-decoration: none;
}
...
```
* Criar um item de lista que recebe propriedades de componentização.
* Importar fontes e defini-las como padrão.

## 03 - Criando Galeria
* Montar um layout desktop.
* Estruturar o código de uma galeria de fotos.
* Trabalhar com tags dinamicamente.
* Importar dados de um arquivo estático **.json**.

## 04 - Um Modal de Zoom
* Criar uma janela de diálogo.
* Trabalhar com eventos de seleção.
* Posicionar elementos de forma fixa e definir opacidade com rgba.
* Criar um estado que representa o elemento selecionado.
* Passar funções através do **props** e usa-las através do `onClick`.