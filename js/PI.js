const guias = {
    vidro: {
        titulo: "Vidro",
        cor: "vidro",
        aceito: [
            "Frascos de perfume",
            "Garrafas de bebidas",
            "Potes de alimentos"
        ],
        naoAceito: [
            "Espelhos",
            "Cerâmica",
            "Vidro laminado"
        ]
    },

    papel: {
        titulo: "Papel",
        cor: "papel",
        aceito: ["Jornais", "Papelão", "Cadernos"],
        naoAceito: ["Papel sujo", "Papel plastificado"]
    },

    plastico: {
        titulo: "Plástico",
        cor: "plastico",
        aceito: ["Garrafas PET", "Embalagens", "Sacolas"],
        naoAceito: ["Isopor", "Plástico sujo"]
    },

    organico: {
        titulo: "Orgânico",
        cor: "organico",
        aceito: ["Cascas", "Restos de comida"],
        naoAceito: ["Óleo", "Carne"]
    }
};

function montarConteudo(dados) {
    return `
        <h4>${dados.titulo}</h4>

        <strong>O que é Aceito:</strong>
        <ul>
            ${dados.aceito.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <hr>

        <strong>O que NÃO é Aceito:</strong>
        <ul>
            ${dados.naoAceito.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}


function openModal(tipo) {
    const modal = document.getElementById('modalInfo');
    const content = document.getElementById('modalContent');
    const title = document.getElementById('modalTitle');
    const modalCard = modal.querySelector('.modal-card');

    const dados = guias[tipo];
    if (!dados) return;

    modalCard.classList.remove('vidro', 'papel', 'plastico', 'organico');
    modalCard.classList.add(dados.cor);

    title.innerText = `Detalhes de Resíduo: ${dados.titulo}`;
    content.innerHTML = montarConteudo(dados);

    modal.classList.add('is-active');
}


function closeModal() {
    document.getElementById('modalInfo').classList.remove('is-active');
}


document.querySelectorAll('.btn-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        openModal(btn.dataset.tipo);
    });
});

document.getElementById('closeModal').addEventListener('click', closeModal);
document.querySelector('.modal-background').addEventListener('click', closeModal);