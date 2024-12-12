Feature: GitHub API Test Suite

  Scenario: Criar, consultar e excluir um repositório no GitHub

    Given que eu possuo um token de acesso válido
    When eu envio uma requisição para criar um repositório
    Then o repositório deve ser criado com sucesso
    And o nome do repositório deve ser retornado corretamente

    When eu envio uma requisição para criar uma issue no repositório
    Then os detalhes da issue devem ser retornados corretamente

    When eu envio uma requisição para excluir o repositório
    Then o repositório deve ser excluído com sucesso