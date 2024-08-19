# Pokepacks

## Objetivo

Este projeto utiliza o serviço [Pokémon TCG](https://docs.pokemontcg.io). A ideia é que o usuário consiga construir e gerenciar seus próprios baralhos, baseado nas cartas e informações que este serviço retorna.

## Requisitos

- Cadastro de baralhos

	- Para criar um baralho, basta que o usuário dê um nome a ele e selecione uma lista de cartas
	- Um baralho deve ter no mínimo 24 cartas e no máximo 60 cartas.
	- Dentre essas cartas, só possível armazenar 4 cartas com o mesmo nome, ou seja, um mesmo Pokémon não aparece mais que 4 vezes no baralho
	- Quando o baralho for criado, o usuário deve ser redirecionado para a listagem de baralhos

- Listagem de baralhos

	- O usuário deve ser capaz de visualizar seus baralhos

- Edição de baralhos

	- O usuário pode selecionar um baralho e editar seu nome, bem como as suas cartas
	- As mesmas regras do requisito de criação serão aplicadas

- Remoção de baralhos

	- O usuário pode remover um baralho da lista

- Exibição dos detalhes do baralho
	- Ao clicar em um dos baralhos da lista, devem ser apresentados os detalhes desse baralho, que incluem
		- a) De todas as cartas, quantas são do supertype "Pokémon"
		- b) De todas as cartas, quantas são do supertype "Trainer" (Treinador)
		- c) Quais são os types (tipos) de carta únicos presentes no baralho

- Armazenamento
	- Os baralhos devem ser salvos em memória

## Tecnologias

Neste projeto, foram utilizadas as seguintes tecnologias:

- Angular v.17
- NgRx (Store e Effects) para gerenciamento de estado do app
- Observables (RxJs)
- Jasmine Framework para testes unitários
- Biblioteca [INFRAGISTICS - Ignite UI](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/getting-started) para construção visual dos componentes
- Tailwind CSS
- Docker


## Ambiente de desenvolvimento

### IDE
- Visual Studio Code

### Deploy
- Docker Desktop

### Imagens utilizadas
- node:18-slim
- nginx:alpine

## Arquitetura e funcionalidades

### Telas e componentes desenvolvidos

Para atender os requisitos, foram desenvolvidas 3 telas principais: a de listagem, cadastro e edição de baralhos. Todas as páginas foram concentradas em um único módulo (packs.module.ts), que foi encapsulado pelo módulo de páginas da aplicação (pages.module.ts). Com esse modelo de arquitetura fica mais fácil identificar quais telas e componentes atendem aos requisitos de baralho, além de facilitar a inserção de novos módulos no projeto.

### Análise e consumo da API

As cartas são obtidas através de uma chamada GET na API do Pokémon TCG. Elas são exibidas tanto no cadastro quanto na edição dos baralhos.

```http
GET https://api.pokemontcg.io/v2/cards
```

Foi criado uma classe de serviço (service) para consumir os dados dessa requisição.

Para melhorar a experiência do usuário na escolha das cartas, foi desenvolvido um filtro e uma paginação com base em alguns campos presentes no objeto de carta, seguindo as documentações do modelo de resposta da API. Os campos são: `name,types,subtypes,supertype,rarity`. 

A API também permite que o desenvolvedor escolha quais campos serão necessários no retorno. Isso foi implementado para uma melhora no tempo de resposta da aplicação. Segue um exemplo de consulta:

```http
GET https://api.pokemontcg.io/v2/cards?q=name:"charizard*"&page=1&pageSize=20&select=id,name,supertype,types,subtypes,images
```

Endpoints auxiliares utilizados para os dados do filtro:

a) Lista de tipos
```http
GET https://api.pokemontcg.io/v2/types
```

b) Lista de subtipos
```http
GET https://api.pokemontcg.io/v2/subtypes
```

c) Lista de supertipos
```http
GET https://api.pokemontcg.io/v2/supertypes
```

d) Lista de raridades
```http
GET https://api.pokemontcg.io/v2/rarities
```

### Manipulação dos baralhos em memória

Não só os baralhos, mas todo o estado da aplicação foi implementado utilizando o **NgRx**, que se baseia no **Redux Pattern**. Nesse padrão, mudanças de estado são sempre provocadas por uma **ação** solicitada pelo componente. Então um **redutor** se encarrega de identificar qual ação foi disparada e de modificar o estado. 

**Se ação utiliza de assincronismo** (como promisses chamadas HTTP por exemplo), **um Effect (efeito)** se encarrega de tratar os retornos de erro e sucesso do código, **retornando sempre uma nova ação**, para que o padrão de comunicação entre os componentes e o estado da aplicação se mantenham.

Para que o componente saiba quando ocorreu uma mudança de estado, são criados diversos **seletores**. Para o Angular, os seletores são **Observables**, ou seja, vão emitir um valor automaticamente se houver mudanças na parte do estado que o seletor está observando. 

Uma vez que o componente se inscreve em um seletor, mudanças no seu comportamento podem ser aplicadas.

[Fluxo NgRx](docs/ngrxflow.png)

## Execução do projeto

### Via Angular CLI

Na raiz do projeto, executar pelo terminal:

```shell
npm install
ng s
```

Caso queira visualizar a cobertura de testes:

```
ng test --code-coverage
```

O relatório de coberturas pode ser visualizado no diretório `/coverage` do projeto

### Via Docker

Na raiz do projeto, criar a imagem pelo terminal:

```shell
docker build -t nome_imagem .
```

Depois:

```shell
docker run --name nome_container -d -p porta_do_seu_pc:80 nome_imagem:latest
```