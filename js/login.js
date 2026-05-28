document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("loginEmail");
    const senhaInput = document.getElementById("loginSenha");
    const measurementErro = document.getElementById("mensagemErro");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const emailDigitado = emailInput.value.trim();
        const senhaDigitada = senhaInput.value.trim();

        try {
            if (mensagemErro) mensagemErro.textContent = "";

            // Faz o login oficial usando a chave nova do Supabase
            const { data, error } = await window.supabaseApp.auth.signInWithPassword({
                email: emailDigitado,
                password: senhaDigitada
            });

            if (error) {
                console.error("Erro no login:", error.message);
                if (mensagemErro) {
                    if (error.message.includes("Invalid login credentials")) {
                        mensagemErro.textContent = "E-mail ou senha incorretos.";
                    } else {
                        mensagemErro.textContent = "Erro: " + error.message;
                    }
                }
                return;
            }

            if (data && data.user) {
                console.log("Admin logado com sucesso:", data.user);
                localStorage.setItem("adm_logado", "true");
                window.location.href = "principal.html"; // Redireciona!
            }

        } catch (err) {
            console.error("Erro inesperado:", err);
        }
    });
});