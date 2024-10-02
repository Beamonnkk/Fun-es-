const questions = [
    {
        question: "Como você lida com problemas?",
        options: [
            "Enfrento de frente!",
            "Prefiro evitar conflitos.",
            "Faço o que for preciso.",
            "Analiso a situação antes de agir."
        ]
    },
    {
        question: "Qual é o seu maior medo?",
        options: [
            "Perder minha família.",
            "Não conseguir sobreviver.",
            "Ser traído por alguém.",
            "Ficar sozinho."
        ]
    },
    {
        question: "Como você se descreveria?",
        options: [
            "Corajoso e líder.",
            "Empático e protetor.",
            "Inteligente e estratégico.",
            "Calmo e reflexivo."
        ]
    },
    {
        question: "Qual é a sua habilidade mais valiosa?",
        options: [
            "Liderar pessoas.",
            "Cuidar e apoiar os outros.",
            "Planejamento e estratégia.",
            "Habilidades de combate."
        ]
    },
    {
        question: "Como você se sentiria em uma situação de crise?",
        options: [
            "Pronto para agir!",
            "Tentando ajudar os outros.",
            "Analisando a situação.",
            "Nervoso, mas tentando manter a calma."
        ]
    },
    {
        question: "Qual é seu tipo de liderança?",
        options: [
            "Autoritário.",
            "Democrático.",
            "Visionário.",
            "Inspirador."
        ]
    },
    {
        question: "Você tem facilidade em fazer amigos?",
        options: [
            "Sim, sou muito sociável.",
            "Sim, mas escolho bem.",
            "Não muito, sou reservado.",
            "Depende da situação."
        ]
    },
    {
        question: "Como você se sente em relação à violência?",
        options: [
            "É necessária em certas situações.",
            "Evito sempre que posso.",
            "É triste, mas pode ser inevitável.",
            "A violência é uma última opção."
        ]
    },
    {
        question: "O que você faria se encontrasse um zumbi?",
        options: [
            "Atacaria imediatamente.",
            "Tentaria evitar o confronto.",
            "Tentaria usar a astúcia.",
            "Estudaria a situação antes de agir."
        ]
    },
    {
        question: "Qual é a sua principal motivação para sobreviver?",
        options: [
            "Proteger minha família.",
            "Buscar uma vida melhor.",
            "Provar que sou forte.",
            "Encontrar um propósito maior."
        ]
    },
    {
        question: "Como você reagiria se tivesse que tomar uma decisão difícil?",
        options: [
            "Tomaria a decisão mais rápida.",
            "Consultaria os outros.",
            "Pesaria prós e contras.",
            "Seguiria meu instinto."
        ]
    },
    {
        question: "O que você valoriza mais em um amigo?",
        options: [
            "Lealdade.",
            "Compreensão.",
            "Coragem.",
            "Inteligência."
        ]
    }
];

let currentQuestionIndex = 0;
const answers = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
};

const characterImages = {
    "Rick Grimes": "img/rick-grimes.webp", // Substitua pelo URL da imagem do Rick
    "Carol Peletier": "img/Carol.jpg", // Substitua pelo URL da imagem da Carol
    "Maggie Greene": "img/Maggie.jpg", // Substitua pelo URL da imagem da Maggie
    "Michonne": "img/michonne.webp", // Substitua pelo URL da imagem da Michonne
    "Glenn Rhee": "img/glenn.webp", // Substitua pelo URL da imagem do Glenn
    "Rosita Espinosa": "img/rosita.webp", // Substitua pelo URL da imagem da Rosita
    "Daryl Dixon": "img/daryl.jpg", // Substitua pelo URL da imagem do Daryl
    "Carl Grimes": "img/carl.jpg" // Substitua pelo URL da imagem do Carl
};

function startQuiz() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz-form').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.options.map((option, index) => `
            <label>
                <input type="radio" name="question${currentQuestionIndex}" value="${String.fromCharCode(65 + index)}">
                ${option}
            </label>
        `).join('')}
    `;
}

function nextQuestion() {
    const selected = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selected) {
        answers[selected.value]++;
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            calculateResult();
        }
    } else {
        alert("Por favor, selecione uma resposta.");
    }
}

function calculateResult() {
    let maxScore = Math.max(answers.A, answers.B, answers.C, answers.D);
    let result;
    let characterImage;

    if (answers.A === maxScore) {
        result = "Você seria o Rick Malandrão";
        characterImage = characterImages["Rick Grimes"];
    } else if (answers.B === maxScore) {
        result = "Você seria a Carol Boladona";
        characterImage = characterImages["Carol Peletier"];
    } else if (answers.C === maxScore) {
        result = "Você seria a Maggie Cremosinha!";
        characterImage = characterImages["Maggie Greene"];
    } else if (answers.D === maxScore) {
        result = "Você seria a Michonne Bombomzinha!";
        characterImage = characterImages["Michonne"];
    } else if (answers.A + answers.B === maxScore) {
        result = "Você seria o Glenn Safadão!";
        characterImage = characterImages["Glenn Rhee"];
    } else if (answers.B + answers.C === maxScore) {
        result = "Você seria a Rosita Espinhuda!";
        characterImage = characterImages["Rosita Espinosa"];
    } else if (answers.C + answers.D === maxScore) {
        result = "Você seria o Daryl Topetudo!";
        characterImage = characterImages["Daryl Dixon"];
    } else {
        result = "Você seria o Carlinhos Fuleragem!";
        characterImage = characterImages["Carl Grimes"];
    }

    document.getElementById('result').innerText = result;
    document.getElementById('character-image').innerHTML = `<img src="${characterImage}" alt="${result}" style="width: 200px; height: auto;">`;
    document.getElementById('quiz-form').style.display = 'none';
}

showQuestion();
