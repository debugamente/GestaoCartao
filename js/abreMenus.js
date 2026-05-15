
    // Função genérica para abrir/fechar submenus pelo ID
    function toggleSubmenu(id) {
    const sub = document.getElementById(id);
    if (sub){
        sub.classList.toggle('show');
    }
}

    function carregar(pagina, event) {
        // 1. Atualiza visual do menu lateral
        document.querySelectorAll('.menu-item, .submenu-item')
        .forEach(m => m.classList.remove('active'));

        if (event) {
            event.currentTarget.classList.add('active');
        }

        // 2. Atualiza o título
        document.getElementById('label-titulo').innerText = pagina.toUpperCase();

        // 3. Muda a página dentro do iframe
        const frame = document.getElementById('frame-conteudo');
        if (!frame) return;

        switch(pagina) {
            case 'cliente': frame.src = 'paginas/CadCliente.html'; break;
            case 'produtos': frame.src= 'paginas/CadProduto.html'; break;
            case 'financeiro': frame.src = 'paginas/CadFinanceiro.html'; break;
            case 'lojas': frame.src = 'paginas/CadLojas.html'; break;
            case 'marca': frame.src = 'paginas/CadMarca.html'; break;
            case 'cor': frame.src = 'paginas/CadCores.html'; break;
            case 'tamanho': frame.src = 'paginas/CadTamanho.html'; break;
            case 'cartoes': frame.src = 'paginas/CadCartao.html'; break;
            // Exemplo para os relatórios
            case 'relatorio1': frame.src = 'paginas/Relatorio1.html'; break;
            case 'relatorio2': frame.src = 'paginas/Relatorio2.html'; break;
            case 'relatorio3': frame.src = 'paginas/Relatorio3.html'; break;
            default:
                console.log("Página não encontrada: " + pagina);
        }
    }
    
    
