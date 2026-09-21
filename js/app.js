document.addEventListener('DOMContentLoaded', () => {
  inicializarTema();
  inicializarNavegacao();
  renderizarProjetos();
  inicializarFiltros();
});

/* ==========================================================================
   1. (CLARO / ESCURO)
   ========================================================================== */
function inicializarTema() {
  const temaSalvo = localStorage.getItem('tema-blueprint');
  const prefereClaro = window.matchMedia('(prefers-color-scheme: light)').matches;
  
  const temaInicial = temaSalvo || (prefereClaro ? 'claro' : 'escuro');
  aplicarTema(temaInicial);

  const botaoTema = document.getElementById('botaoAlternarTema');
  if (botaoTema) {
    botaoTema.addEventListener('click', () => {
      const temaAtual = document.documentElement.getAttribute('data-tema') || 'escuro';
      const novoTema = temaAtual === 'escuro' ? 'claro' : 'escuro';
      aplicarTema(novoTema);
      localStorage.setItem('tema-blueprint', novoTema);
    });
  }

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem('tema-blueprint')) {
      aplicarTema(e.matches ? 'claro' : 'escuro');
    }
  });
}

function aplicarTema(tema) {
  document.documentElement.setAttribute('data-tema', tema);
  
  const textoTema = document.getElementById('textoModoTema');
  if (textoTema) {
    textoTema.textContent = tema === 'escuro' ? 'Modo Escuro' : 'Modo Claro';
  }

  document.querySelectorAll('iframe').forEach(iframe => {
    try {
      if (iframe.contentDocument) {
        iframe.contentDocument.documentElement.setAttribute('data-tema', tema);
      }
    } catch (e) {
      // Proteção de segurança contra cross-origin
    }
  });
}

/* ==========================================================================
   2. NAVEGAÇÃO
   ========================================================================== */
function inicializarNavegacao() {
  const botoesAba = document.querySelectorAll('.botao-aba');
  const paineisAba = document.querySelectorAll('.painel-aba');

  function ativarAba(idAba) {
    botoesAba.forEach(botao => {
      const corresponde = botao.getAttribute('data-aba') === idAba;
      botao.classList.toggle('ativo', corresponde);
      botao.setAttribute('aria-selected', corresponde);
    });

    paineisAba.forEach(painel => {
      const corresponde = painel.id === idAba;
      painel.classList.toggle('ativo', corresponde);
    });


    history.replaceState(null, '', `#${idAba.replace('aba-', '')}`);
  }

  botoesAba.forEach(botao => {
    botao.addEventListener('click', () => {
      const idAba = botao.getAttribute('data-aba');
      ativarAba(idAba);
    });
  });

  const hashAtual = window.location.hash.replace('#', '');
  if (hashAtual) {
    const botaoCorrespondente = document.querySelector(`.botao-aba[data-aba="aba-${hashAtual}"]`);
    if (botaoCorrespondente) {
      ativarAba(`aba-${hashAtual}`);
    }
  }
}

/* ==========================================================================
   3. GRADES
   ========================================================================== */
function renderizarProjetos(filtro = 'todos') {
  const container = document.getElementById('gradeProjetos');
  if (!container || typeof PROJETOS_DADOS === 'undefined') return;

  const projetosFiltrados = filtro === 'todos' 
    ? PROJETOS_DADOS 
    : PROJETOS_DADOS.filter(p => p.categoria.toLowerCase() === filtro.toLowerCase());

  const contadorEl = document.getElementById('contadorProjetos');
  if (contadorEl) {
    contadorEl.textContent = `${projetosFiltrados.length} projeto(s) listado(s)`;
  }

  container.innerHTML = projetosFiltrados.map(projeto => `
    <article class="cartao-projeto">
      <!-- Prévia em miniatura -->
      <div class="previa-projeto">
        <iframe src="${projeto.caminho}" title="${projeto.titulo}" loading="lazy"></iframe>
      </div>

      <!-- Informações do Projeto -->
      <div class="conteudo-projeto">
        <h3 class="titulo-projeto">${projeto.titulo}</h3>
        <p class="descricao-projeto">${projeto.resumo}</p>
        
        <div class="etiquetas-projeto">
          ${projeto.etiquetas.map(etiqueta => `<span class="etiqueta-tecnologia">${etiqueta}</span>`).join('')}
        </div>

        <a href="projects/project-viewer.html?id=${projeto.id}" class="botao-abrir-projeto">
          Executar Projeto e Codigo
        </a>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   4. FILTROS DE CATEGORIA
   ========================================================================== */
function inicializarFiltros() {
  const botoesFiltro = document.querySelectorAll('.botao-filtro');
  botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
      botoesFiltro.forEach(b => b.classList.remove('ativo'));
      botao.classList.add('ativo');
      const filtro = botao.getAttribute('data-filtro');
      renderizarProjetos(filtro);
    });
  });
}
