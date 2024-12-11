Feature: Testar pagina de vagas
  Como usuário do sistema
  Eu quero acessar as vagas
  Para que eu possa encontrar uma vaga de Analista de Qualidade

  Scenario: Encontrar vagas de Analista de qualidade
    Given que o usuário está na página inicial
    And o usuário clica em carreiras
    When o usuário preenche o campo de nome da vaga com "Analista de qualidade"
    And o usuário clica na lupa
    Then o sistema exibe a mensagem "2 vagas"
    And o usuário visualiza "Analista de Qualidade de Software Júnior" e "Analista de Qualidade de Software Pleno"

  Scenario: Vaga não encontrada
    Given que o usuário está na página inicial
    And o usuário clica em carreiras
    When o usuário preenche o campo de nome da vaga com "Teste"
    And o usuário clica na lupa
    Then o sistema exibe a mensagem "Não há vagas"