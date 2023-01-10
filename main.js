function skill(nameling, img_ling, info) {
  return `
        <div class="column">
          <div class="card">
            <h3>${nameling}</h3>
            <img src="./assets/logo-${img_ling}.png" alt="skills" />
            <p>${info}</p>
          </div>
        </div>
    `
}
  
document.querySelector("#row").innerHTML =
  skill("HTML", "html", "Intermediate level in text markup language.") +
  skill(
    "CSS",
    "css",
    "Intermediate level in CSS such as types of animations, transitions and responsive website styling.<br>Knowledge of bootstrap framework.") +
  skill(
    "JAVASCRIPT",
    "javascript",
    "Basic knowledge of javascript, such as object prototyping and user interaction.<br>In addition to using some libraries like REACT.") +
  skill(
    "REACT",
    "react",
    "One of the leading JavaScript libraries, user interaction application development for website.") +
  skill("BOOTSTRAP", "bootstrap", "Knowledge of bootstrap framework 5.") 


  
function project(nameproject, img, info, link) {
  return `
        <div class="column">
          <div class="card">
            <h3>${nameproject}</h3>
            <img src="./assets/${img}.png" alt="skills" />
            <p>${info}</p>
            <button><a href="${link}" class="btn btn-dark">Ver Projeto</a></button>
          </div>
        </div>
    `
}

document.querySelector("#listProject").innerHTML =
  project(
    "LIST TASKS",
    "task",
    "Task list in javascript with marking completed tasks and task execution.",
    "https://mendeseduardo.github.io/List_tasks/"
  ) +
  project(
    "iMovi",
    "imovi-icon",
    "Bootstrap real estate website",
    "https://mendeseduardo.github.io/iMovi/"
  ) +
  project(
    "News home page",
    "noticia",
    "Front end mentor challenge",
    "https://mendeseduardo.github.io/pg_de_noticia/"
  ) +
  project(
    "Advice generator app",
    "advice",
    "Generator app using the Advice Slip API",
    "https://mendeseduardo.github.io/Advice_generator_app/"
  ) +
  project(
    "Social media dashboard",
    "dashboard",
    "Social media dashboard using React.js",
    "https://mendeseduardo.github.io/Social_Media_Dashboard/"
  ) +
  project(
    "Adding People",
    "adding",
    "Site to add people in selected locations according to roles using React.js",
    "https://mendeseduardo.github.io/organo/"
  )
