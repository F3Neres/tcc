import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function cadastrarServico(categoria, nome, descricao, valor) {
    const resposta = await api.post('/servico', {
        categoria: categoria,
        nome: nome,
        descricao: descricao,
        valor: valor
    })
    return resposta.data;
}

export async function imagemServico(id, imagem){
    const formData = new FormData();
    formData.append('capa', imagem);

    const resposta = await api.put(`/servico/$${id}/capa`, formData, {
        headers: {
            "content-Type": "multipart/form-data"
        },
    })
    return resposta.status;
}