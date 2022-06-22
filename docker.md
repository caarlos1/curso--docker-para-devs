# Docker

## Remoção em massa.

    docker system prune

Esse comando remove todas imagens, containers e networks não utilizadas.

## Copaiando arquivos entre containers

    docker cp nome_container:/app/app.js ./copy

Sendo que o segundo directório é para a onde a copia vai.

## Verificando informações de processamento

    docker top nome_container_ou_id

## Verificar dados do container

Inspenciona as informações de configuração do container.

    docker inspect nome_container_ou_id

## Verificar processamento do Docker

    docker stats
