import './page.modules.scss'

export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <div className="profile">
          <img
            src="https://avatars.githubusercontent.com/u/73470355?s=400&u=f3ca3fe115cdeac57075dea21422684a25238f59&v=4"
            alt=""
            className="avatar"
          />
          <span className="username">Álvaro Sena</span>
        </div>

        <div className="list">
          <a
            className="item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/alvarosen4/"
          >
            Veja o meu Linkedin
          </a>
          <a
            className="item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alvarosena"
          >
            Conheça o meu GitHub
          </a>
          <a
            className="item"
            target="_blank"
            rel="noopener noreferrer"
            href="NewCV.pdf"
          >
            Ver CV
          </a>
        </div>

        <footer>
          <p>Website desenvolvido por Álvaro Sena 🤌</p>
        </footer>
      </div>
    </div>
  )
}
