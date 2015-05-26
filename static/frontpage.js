var main = document.getElementById("main");
var count = 0;
var current_row = null;

for ( var project in short_descriptions){
    if (count%3 === 0) {
      newRow = document.createElement("div");
      newRow.className = "row";
      main.appendChild(newRow);
      current_row = newRow;
    }
    new_project = document.createElement("div");
    new_project.className = "project col-xs-12 col-md-4";
    new_project.id = project;
    if ( short_descriptions[project].hasOwnProperty('image')){
      var project_image = document.createElement("img");
      project_image.className = "img-responsive";
      project_image.src = "images/"+short_descriptions[project].image;
      // project_image.width = "200";
      new_project.appendChild(project_image);
    }
    new_project.addEventListener("mouseenter", show_desc);
    new_project.addEventListener("mouseleave", show_image);
    current_row.appendChild(new_project);
    count ++;
}

function show_desc(){
  this.innerHTML="";
  var project = this.id;
  title = document.createElement("h3");
  title.className = "title";
  title.innerHTML = project;
  this.appendChild(title);
  if ( short_descriptions[project].hasOwnProperty('date')){
    var project_date = document.createElement("h6");
    project_date.className = "date";
    project_date.innerHTML = short_descriptions[project].date;
    this.appendChild(project_date);
  }
  if ( short_descriptions[project].hasOwnProperty('desc')){
      project_desc = document.createElement("p");
      project_desc.className = "desc";
      project_desc.innerHTML = short_descriptions[project].desc;
      this.appendChild(project_desc);
  }
}

function show_image(){
  this.innerHTML="";
  var project = this.id;
  if ( short_descriptions[project].hasOwnProperty('image')){
      var project_image = document.createElement("img");
      project_image.className = "img-responsive";
      project_image.src = "images/"+short_descriptions[project].image;
      // project_image.width = "200";
      this.appendChild(project_image);
  }
}