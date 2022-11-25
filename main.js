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
    "Basic knowledge of javascript, such as object prototyping and user interaction.<br>In addition to using some libraries like JQUERY and REACT.") +
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
  )
