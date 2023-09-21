const textinholol = "text-[13px] text-[#9CA3AF]";

export default function Home() {
  return (
    <main className="flex w-full h-full justify-center items-center content-center">
      <div className="flex bg-[#070709] text-white rounded-[38px]">
        <div className="flex flex-col h-auto p-10 justify-evenly">
          <h1 className="font-bold text-[50px] align-middle">
            Faça seu Login
            <div className="jefferson w-[12px] h-[12px] rounded-full inline-flex ml-2" />
          </h1>

          <div>
            <p className={textinholol}>Email</p>
            <input
              className="w-full rounded-lg bg-[#111112] focus:outline outline-[#c850c0] p-2"
              type="text"
            />
          </div>

          <div>
            <p className={textinholol}>Senha</p>
            <input
              className="w-full rounded-lg bg-[#111112] focus:outline outline-[#c850c0] p-2"
              type="password"
            />
          </div>
          <p className={`${textinholol} text-end w-full underline`}>
            Esqueci minha senha
          </p>
          <button className="w-full jefferson rounded-lg p-2">
            <strong>Entrar</strong>
          </button>
          <p className={`${textinholol} text-center w-full underline`}>
            Ainda não tenho uma conta
          </p>
        </div>
        <div className="">
          <img className="h-[500px] rounded-r-[38px]" src="https://img.freepik.com/fotos-gratis/natureza-paisagem-com-montanhas-e-ceu-noturno-estrelado_23-2150367320.jpg"/>
        </div>
      </div>
    </main>
  );
}
