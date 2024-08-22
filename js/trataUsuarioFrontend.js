async function cadastrarUsuario() {
    let usuarioCadastroInput =
        document.querySelector('#usuarioCadastroInput')
    let passwordCadastroInput =
        document.querySelector('#passwordCadastroInput')
    let usuarioCadastro = usuarioCadastroInput.value
    let passwordCadastro = passwordCadastroInput.value
    if (usuarioCadastro && passwordCadastro) {
        try {
            const cadastroEndpoint = '/signup'
            const URLCompleta = `${protocolo}${baseURL}${cadastroEndpoint}`
            await axios.post(URLCompleta, { login: usuarioCadastro, password: passwordCadastro });
            usuarioCadastroInput.value = ""
            passwordCadastroInput.value = ""
            let alert = document.querySelector('.alert-modal-cadastro')
            alert.innerHTML = "Usuário cadastrado com sucesso!"
            //alert-success significa que o alerta é verde para esse tema
            alert.classList.add('show', 'alert-success')
            //alert-danger significa que o alerta é vermelho para esse tema
            alert.classList.remove('d-none', 'alert-danger')
            setTimeout(() => {
                alert.classList.remove('show')
                alert.classList.add('d-none')
                let modalCadastro =
                    bootstrap.Modal.getInstance(document.querySelector('#modalCadastro'))
                modalCadastro.hide()
            }, 2000)
        }
        catch (error) {
            let alert = document.querySelector('.alert-modal-cadastro')
            alert.innerHTML = "Não foi possível cadastrar"
            alert.classList.add('show', 'alert-danger')
            alert.classList.remove('d-none', 'alert-success')
            setTimeout(() => {
                alert.classList.remove('show')
                alert.classList.add('d-none')
                let modalCadastro =
                    bootstrap.Modal.getInstance(document.querySelector('#modalCadastro'))
                modalCadastro.hide()
            }, 2000)
        }
    }
    else {
        let alert = document.querySelector('.alert-modal-cadastro')
        alert.innerHTML = "Preencha todos os campos"
        alert.classList.add('show', 'alert-danger')
        alert.classList.remove('d-none')
        setTimeout(() => {
            alert.classList.remove('show')
            alert.classList.add('d-none')
        }, 2000)
    }
}

