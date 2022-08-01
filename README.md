# Validador de Formulário 

# Sobre o projeto

https://lucascarvalhop.github.io/Validador-De-Formulario/

Este projeto é um script que fiz com JavaScript para adicionar validação (via front-end) em formulários feitos usando html.
O script funciona a base de regras, inicialmente temos pré-configuradas duas regras, a de campo obrigatório e a de caracteres mínimos, porém, com conhecimento
básico na linguagem você consegue por sí só adicionar novas regras conforme sua necessidade.

# Como utilizar

Para que o script funcione de forma completa e sem nenhum bug, seu formulário precisará seguir um padrão de label e input, como no exemplo abaixo:

```
      <form class="validator">
        <label for="nome">Seu nome:</label>
        <input type="text" name="nome" id="nome" data-rules="required|min=2">
      </form>
```

Note que o formulário precisará ter a classe "validator" para manipularmos ele no JavaScript. <br>
O atributo "data-rules" é onde podemos definir nossas regras, pré definidas no exemplo acima ja temos a regra "required", que faz com que os inputs
que possuem o atributo sejam de obrigatorio preenchimento, e a regra "min=2" que faz com que o input tenha no mínimo 2 caracteres para que seja aceito <br>
Caso você não queira que um determinado campo do formulário seja de obrigatório preenchimento, basta não adicionar o "required" no data-rules. <br>
### IMPORTANTE: a sintaxe do atributo data-rules precisa seguir o padrão, onde se é utilizado o simbolo " | " para separar uma regra da outra <br>

Com o seu formulário já adaptado, partiremos para o JavaScript <br>

Para customizar a validação de acordo com seus critérios, basta alterar algumas linhas de código dentro do script, como por exemplo a mensagem de erro
que retornará caso o campo não esteja nos critérios de validação <br>
Para customizar a mensagem de erro em caso de campo não preenchido, basta alterar a mensagem na linha 11 do script:

```
    10 if (input.value == '') {
    11    return 'O campo precisa ser preenchido';
    12  }
    
```
Para customizar a mensagem de erro em caso de quantidade de caracteres não suficiente, basta alterar a mensagem na linha 16 do script:

```
    15 if (input.value.length < rDetail[1]) {
    16   return `Você precisa inserir no minimo ${rDetail[1]} caracteres`;
    17  }
    
```
### Juntamente com o script deixei o arquivo css com o esquema de cores em caso de erro e também algumas outras configurações de css como o posicionamento de cada campo do formulário, altere como quiser!

## Exemplo de uso do script na tela de um formulário fictício que criei e está no exemplo do <a href="https://lucascarvalhop.github.io/Validador-De-Formulario/">github pages: </a>

![validador](https://user-images.githubusercontent.com/88468443/182053304-75742a46-c0c7-4a9c-a1d4-e0f4d95365c4.png)


