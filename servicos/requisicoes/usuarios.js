import api from "../api/api";


export async function loginUsuario(email, senha) {

    try {
        const resultado = await api.post('/login', {
            email,
            senha
        });

        return resultado.data
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function criarLogin(apelido, nome, email, senha, senhaConfirmar) {

    try {
        const resultado = await api.post('/usuarios', {
            apelido,
            nome,
            email,
            senha,
            "celular": "",
            "tipo_usuario_id": "2",
            "midia_social": ""
        });

        return resultado.data
    } catch (error) {
        if (error.response) {
            console.log('Resposta da API:', error.response.data);
          }
          console.error('Erro:', error);
        return null
    }
}