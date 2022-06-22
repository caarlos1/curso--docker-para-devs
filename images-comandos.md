# Imagens Comandos

## Build de Imagem

Para dar build é necessario o seguinte comando:

    docker build diretorio_da_imagem -t nome_da_imagem:nome_tag

A flag "-t" tem a função de nomear a imagem e adicionar tag.

E depois é feito como sempre:

    docker run nome_da_imagem_ou_id // Exemplo sem flags

## Alterando uma Imagem

Sempre que alterarmos uma imagem, será necessario dar um novo build.

## Renomeando Imagens / Tags

    docker tag id_da_imagem nome_da_imagem:nome_tag

Exemplo:

    docker tag 3ecbc71c2894 app_node:v1

## Baixando Imagens

    docker pull nome_da_imagem

Exemplo:

    docker pull python

## Removendo imagens

    docker rmi nome_ou_id_imagem

A flag "-f" força a remoção caso a imagem esteja sendo utilizada em algum container ativo.
