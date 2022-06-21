# Comandos

## Criação de containers

```sh
docker run -it ubuntu
```

-   "-it" Dá acesso ao terminal do container "ubuntu" (necessário para não
    finalizar o processo automaticamente)

### Criando Containers em background

Com "-d" antes da imagem, o docker monta o container em background (sem exibir o terminal).

```sh
docker run -d nginx
```

### Exepondo portas

Para expor portas é usado o "-p", por exemplo: -p 80:80. Sendo que a primeira
porta é refente a porta "aberta ao mundo" e a segunda referente a interna do container.

```sh
docker run -d -p 80:80 nginx
```

Dessa forma será possível acessar: http://localhost

### Nomeando containers

É utilizado a flag "--name" para nomear um container em sua criação.

```
docker run -d -p 80:80 --name nginx_app nginx
```

## Lidando com containers

### Verificando containers

Para verificar os container em execução:

```sh
docker ps // antigo
docker container ls // novo
```

-   "-a" Obtemos todos o container já executados (útil para verificar ações)

### Parando containers

Para o container pelo container id ou name.

```
docker stop nome_container_ou_id
```

### Reiniciando containers

É possivel reiniciar um container inicialmente parado com o comando:

```sh
docker start nome_container_ou_id
```

### Verificando logs

```
docker logs nome_container_ou_id
```

A flag "-f" mantem os logs em tempo real (terminal).

### Removendo containers

```
docker rm nome_container_ou_id
```

A flag "-f" força a remoção de um container ainda em uso.
