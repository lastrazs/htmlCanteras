function setUpThemes() {
  // Leer el tema guardado en el almacenamiento local
  let theme = localStorage.getItem('theme');

  // Si existe un tema guardado, establecerlo en la página
  if (theme) {
    setTheme(theme);
  } else {
    setTheme('theme-1'); // Establecer el tema predeterminado
  }

  document.getElementById("themeButton").onclick = function() {
    var themeOptions = document.getElementById("themeOptions");
    if (themeOptions.style.display === "none") {
      themeOptions.style.display = "block";
    } else {
      themeOptions.style.display = "none";
    }
  };
  
  document.getElementById("theme-1").onclick = function() {
    setTheme('theme-1');
  };

  document.getElementById("theme-2").onclick = function() {
    setTheme('theme-2');
  };
  
  document.getElementById("theme-3").onclick = function() {
    setTheme('theme-3');
  };
}

window.onload = function() {
  setUpThemes();
};

function setTheme(themeName) {
  let theme = document.getElementById('theme-style');
  if (theme) {
    theme.href = 'css/' + themeName + '.css';
  } else {
    let style = document.createElement('link');
    style.id = 'theme-style';
    style.rel = 'stylesheet';
    style.href = 'css/' + themeName + '.css';
    document.head.appendChild(style);
  }
  localStorage.setItem('theme', themeName);
}

function initAccordion(){
 var acc = document.getElementsByClassName("accordion-btn");
 var i;

 for (i = 0; i < acc.length; i++){
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
  
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    }else{
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
}














