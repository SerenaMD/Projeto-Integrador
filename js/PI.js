const guias = {
    vidro: {
        titulo: "Vidro",
        cor: "vidro",
        aceito: [
            "Frascos de perfume",
            "Garrafas de bebidas",
            "Potes de alimentos , conservas e alimentos ",
            "Vidros Verdes, marrons e transparentes"
        ],
        naoAceito: [
            "Espelhos e vidros temperados",
            "Porcelana,cerâmica e cristal",
            "Ampolas de medicamentos ",
            "Vidro laminado(para-brisa)"
        ],
        dicas: [
            "Lavar com água e sabão, enxaguar bem",
            "Remover rotúlos, tampas e anéis de borracha ",
            " Quebrar os vidros em pedaços grandes(mão protegida)",
            "NÃO precisa secar completamente o vidro ",
        ]

    },

    papel: {


        titulo: "Papel",
        cor: "papel",
        aceito: [
            "Jornais e Revistas ",
            "Papelão e caixas de delivery",
            "Cadernos e folhas de sulfite  ",
            "Papel de escritório (sem grampos)"
        ],

        naoAceito: [
            "Papel plastificado ou metalizado ",
            "Guardanapos e papéis seujos de comida",
            "Papéis carbonos e térmicos",
            "Fitas adesivas e etiquetas",
        
        ],

        dicas: [
            " Remover grampos,clipes e espirais metálicas",
            " Separar papel sulfite do papelão",
            "Dobrar caixas grandes ao meio ",
            "NÃO precisa estar seco ou limpo",
        ],
    },

    plastico: {
        titulo: "Plástico",
        cor: "plastico",
        aceito: [
        "Garrafas PET(água,refrigerante)",
        "Embalagens de shampoo e detergente",
        "Potinhos de margarina/requeijão",
        "Sacos plásticos limpos(supermercado) ",

        ],
        naoAceito: [
         "Isopor (EPS) e embalagens de fast-food",
         "Plástico sujo ou com comida",
         " CDs,DvDs e canetas",
         " Brinquedos e utensílios plásticos ",
        ],
        dicas: [
          "LAVAR SEMPRE (remove resíduo de comida)",
          "Remover tampas e rotúlos ",
          "Amassar garrafas para economizar espaço",
          " Separar por cor se possivél (transparente/colorido)",

        ],
    },

    organico: {
        titulo: "Orgânico",
        cor: "organico",
        aceito: [
            "Cascas de frutas e legumes",
            "Restos de comida(arroz,feijão)",
            "Folhas secas e podas de jardim",
            "Saquetas de chá e café usado"
        ],
        naoAceito: [
            "Carne, peixes e derivados ",
            "Oléo de cozinha usado",
            "Pão mofado",
            " Frutas estragadas com mofo",
        ],
        dicas: [
           "Corte em pedaços pequenos: Quanto menor os pedaços, mais rápido eles se decompõem! Corte cascas, legumes e restos de comida em tamanhos pequenos",
           "Retire embalagens: Tire todo plástico, papel ou metal que estiver junto com o alimento. Só coloque a matéria orgânica pura!",
           "Evite líquidos em excesso: Não coloque muita água ou molhos junto, pois pode estragar. O ideal é que esteja úmido, mais não encharcado",

        ],
    }
};

function montarConteudo(dados) {
    return `

        <strong>O que é Aceito(Sim):</strong>
        <ul>
            ${dados.aceito.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <hr>

        <strong>O que não é Aceito(Não):</strong>
        <ul>
            ${dados.naoAceito.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <hr>

        <strong>Dicas de preparo:</strong>
        <ul>
            ${dados.dicas.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `

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