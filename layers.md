# Camadas (Layers)

Cada instrução em um Dockfile representa uma camada do build, dessa forma, cada uma possui um "cache",
e ao ser montada a imagem, apenas as instruções modificadas são re-feita.

Tudo que é intocado é reaproveitado.