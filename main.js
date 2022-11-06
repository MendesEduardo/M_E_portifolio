function skill(nomeling, img_ling, info) {
  return `
        <div class="column">
          <div class="card">
            <h3>${nomeling}</h3>
            <img src="./assets/logo-${img_ling}.png" alt="ç" />
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
    "Intermediate level in CSS such as types of animations, transitions and responsive website styling.<br>Knowledge of bootstrap framework."
  ) +
  skill(
    "JAVASCRIPT",
    "javascript",
    "Basic knowledge of javascript, such as object prototyping and user interaction.<br>In addition to using some libraries like JQUERY and REACT."
  ) +
  skill(
    "REACT",
    "react",
    "One of the leading JavaScript libraries, user interaction application development for website."
  ) +
  skill("BOOTSTRAP", "bootstrap", "Knowledge of bootstrap framework 4.0.") 