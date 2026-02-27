import "./style.css";

// Variáveis de Ambiente
const CHAVE_API = import.meta.env.VITE_API_KEY;
const ENDERECO_API = import.meta.env.VITE_API_URL;

// Formulário de descrição do código
const formulario = document.getElementById('form-descricao');

// Descrição do código a ser gerado pela IA
const areaDescricao = document.getElementById('area-descricao');

// Secção de resultado do código gerado pela IA
const areaResultado = document.querySelector('.resposta-gerada');

// Local para exibir e renderizar o HTML + CSS + Javascript
const areaExibirCodigo = document.getElementById('area-codigo');
const areaRenderizarCodigo = document.getElementById('area-renderizacao');

// Botão de copiar código
const botaoCopiar = document.getElementById('copiar');

// Observar o evento de submit do formulário
formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    const descricao = areaDescricao.value.trim();
    if (!descricao) return;

    areaResultado.classList.remove('ocultar');

    areaExibirCodigo.textContent = 'Gerando código...';

    try {
        // Resposta da IA para a descrição do código feita pela usuário
        const resposta = await fetch(ENDERECO_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${CHAVE_API}`,
            },
            body: JSON.stringify({
                model: import.meta.env.VITE_AI_MODEL,
                messages: [
                    {
                        role: 'system',
                        content:
                            'Você é um gerador de código HTML, CSS e Javascript. Responda SOMENTE com código puro e conserve a identação. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, segundo <script> com o Javascript e depois o HTML. Comentarios no código APENAS em PT-BR. Siga EXATAMENTE o que o usuário pedir.',
                    },
                    {
                        role: 'user',
                        content: descricao,
                    },
                ],
            }),
        });

        if (!resposta.ok) throw new Error('Erro na requisição!');

        // Transforma a resposta em json para melhor manipulação dos dados
        const dados = await resposta.json();

        // Resultado: código gerador pela IA
        const resultado = dados.choices[0].message.content || 'Sem resposta.';

        // Inserir resultado na tela
        areaExibirCodigo.textContent = resultado;
        areaRenderizarCodigo.srcdoc = resultado;
    } catch (e) {
        areaExibirCodigo.textContent =
            'Erro ao gerar código, tente novamente mais tarde!';
        console.error(e);
    }
});

// Observar o evento de click do botão de copiar
botaoCopiar.addEventListener('click', async () => {
    const codigo = areaExibirCodigo.textContent;

    try {
        await navigator.clipboard.writeText(codigo);
    } catch {
        alert('Não foi possível copiar.');
    }
});
