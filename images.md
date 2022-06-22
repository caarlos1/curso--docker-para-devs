# Imagens

Imagens são arquivos de configurações que são usadas como base ao se criar
um container.

Podem possuir:

-   Imagens base
-   Diretório base
-   Comandos
-   Portas
-   Etc

## Criando Imagens

-   O arquvio deve ter o nome de Dockfile
-   Costuam possuir:
    -   FROM - Imagem base
    -   WORKDIR - Diretório da aplicação
    -   EXPOSE - Portas da aplicação
    -   COPY - Arquivos a serem copiados.
