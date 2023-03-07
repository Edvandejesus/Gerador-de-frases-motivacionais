function gerarFraseMotivacional() {
    const frases = [

      "Lembre-se de que nunca é tarde demais para começar a viver uma vida nova.O potencial existe sempre e os meios estão disponíveis para qualquer pessoa que estenda a mão e os alcance.",

      "Não é o fracasso que define você. É a forma como você se levanta dele.",

      "O sucesso é a soma de pequenas vitórias.",

      "A persistência é a chave para o sucesso.",

      "A verdadeira motivação vem de realização desenvolvimento pessoal satisfação no trabalho e reconhecimento.",

      "Se você quer algo que nunca teve terá que fazer algo que nunca fez.",

      "Não importa o quão devagar você vá desde que não pare.",

      "Não importa o quão difícil seja o começo com persistência e dedicação você pode superar qualquer obstáculo.",

   
    ]

    const numeroAleatorio = Math.floor(Math.random() * 10)
    const frase = frases[numeroAleatorio]
    document.getElementById("frase").innerHTML = frase
  }
