function calculateResult() {
    const answers = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    // Get all the answers
    const formData = new FormData(document.getElementById('quiz-form'));

    for (const [key, value] of formData.entries()) {
        if (answers.hasOwnProperty(value)) {
            answers[value]++;
        }
    }

    // Determine which character has the highest score
    const resultElement = document.getElementById('result');
    const maxAnswer = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);

    let resultText = '';

    switch (maxAnswer) {
        case 'A':
            resultText = 'Você seria Rick Grimes! Líder natural e alguém que toma decisões rápidas para proteger o grupo.';
            break;
        case 'B':
            resultText = 'Você seria Daryl Dixon! Leal e protetor dos seus amigos, sempre pronto para ajudar.';
            break;
        case 'C':
            resultText = 'Você seria Michonne! Inteligente e estratégica, valoriza a solução pacífica dos conflitos.';
            break;
        case 'D':
            resultText = 'Você seria Maggie Rhee! Resiliente e forte, com uma habilidade notável de lidar com as dificuldades e manter a esperança viva.';
            break;
        case 'E':
            resultText = 'Você seria Glenn Rhee! Corajoso e engenhoso, sempre encontrando maneiras de superar os desafios.';
            break;
        case 'F':
            resultText = 'Você seria Carl Grimes! Jovem, corajoso e com uma visão de mundo única, lutando para proteger aqueles que ama.';
            break;
    }

    resultElement.textContent = resultText;
}
