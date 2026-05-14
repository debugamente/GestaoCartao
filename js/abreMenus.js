
    // Função genérica para abrir/fechar submenus pelo ID
    function toggleSubmenu(id) {
    const sub = document.getElementById(id);
    if (sub){
        sub.classList.toggle('show');
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
            case 'cliente': frame.src = '/cliente/cadastro'; break;
            case 'produtos': frame.src= '/produtos/cadastro'; break;
            case 'financeiro': frame.src = '/financeiro/lancamento'; break;
            case 'lojas': frame.src = '/lojas/cadastro'; break;
            case 'marca': frame.src = '/marca/cadastro'; break;
            case 'cor': frame.src = '/cores/cadastro'; break;
            case 'tamanho': frame.src = '/tamanho/cadastro'; break;
            case 'cartoes': frame.src = '/cartao/cadastro'; break;
            // Exemplo para os relatórios
            case 'relatorio1': frame.src = '/relatorios/Compras'; break;
            case 'relatorio2': frame.src = '/relatorios/Debitos'; break;
            case 'relatorio3': frame.src = '/relatorios/LimiteCartao'; break;
            default:
                console.log("Página não encontrada: " + pagina);
        }
    }
    
    }
