function openModal(tipo){
    const modal = document.getElementById('modalInfo');
    const content = document.getElementById('modalContent');
    const title = document.getElementById('modalTitle')

    const guias = {
    vidro: '<h4> Vidro - Santo André</h4><p><strong> Aceita:</strong> Frascos,garrafas,potes<br><strong>Não:</strong> Espelhos,Cristal<br><strong> Pontos:</strong> 47 em Santo André</p>',
    papel: '<h4> Papel<h4><p><strong> Aceita:</strong>Jornais,papelão<br><strong> Não:</strong> Papel Sujo<br><strong>Benefício:</strong>Salva árvores </p>',
    plastico: '<h4> Plástico</h4><p><strong> Aceita:</strong> PET,emabalagens limpas<br><strong>Não:</strong>Isopor<br><strong> Impacto:</strong> Reduz poluição</p> ',
   organico: '<h4> Orgânico</h4><p><strong> Aceita:</strong> Cascas,comida<br><strong> Não:</strong> Oléo, carne<br><strong> Resultado:</strong> Adubo natural</p>'

  
    }

    title.innerHTML = 'Guia: ${tipo.toUpperCase()}; '
    content.innerHTML = guias[tipo];
    modal.classList.add('is-active')

}

function closeModal(){
    document.getElementById('modalInfo').classList.remove('is-active');
    
}