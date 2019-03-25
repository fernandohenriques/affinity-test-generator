module.exports = {
  validTest: {
    title: 'Teste de Presidenciáveis - 2022',
    category: {
      name: 'Política',
    },
    questions: [
      {
        title: 'Você é a favor da privatização da Petrobras?',
        options: ['Sim', 'Não'],
      },
    ],
    personas: [
      {
        name: 'Jair Messias Bolsonaro',
        answers: [0],
      },
      {
        name: 'Fernando Haddad',
        answers: [1],
      },
    ],
  },

  unvalidTest: {
    title: 'Teste de Presidenciáveis - 2022',
  },
};
