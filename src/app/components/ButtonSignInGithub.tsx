import { signIn } from "next-auth/react";

export default function ButtonSignInGithub() {
  async function realizarLoginGithub() {
    // Obter a URL de retorno após o login com o GitHub
    const callbackUrl = "http://localhost:3000/callback";
    
    // Realizar o login com o provedor GitHub
    await signIn("github", { callbackUrl });
  }

  return (
    <div>
      <button
        className="border-2 border-black bg-black text-white rounded-md p-1"
        onClick={realizarLoginGithub}
      >
        Github Login
      </button>
    </div>
  );
}
