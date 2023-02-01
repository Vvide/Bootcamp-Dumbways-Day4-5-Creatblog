// global array
let blogs = [];

// function get data from input text html
function getData(e) {
  e.preventDefault();

  // delaclaration variable dom selection
  let title = document.getElementById("create-project-name").value;
  // let startdate = document.getElementById('start-date').value
  // let enddate = document.getElementById('end-date').value
  let content = document.getElementById("create-project-textarea").value;
  let html = document.getElementById("html").checked
    ? document.getElementById("html").value
    : false;
  let css = document.getElementById("css").checked
    ? document.getElementById("css").value
    : false;
  let nextjs = document.getElementById("next-js").checked
    ? document.getElementById("next-js").value
    : false;
  let php = document.getElementById("php").checked
    ? document.getElementById("php").value
    : false;
  let image = document.getElementById("input-file-image").files;

  if (title == "") alert("Pleas insert Name");
  else if (content == "") alert("Pleas insert Description");
  else if (html == false && css == false && nextjs == false && php == false)
    alert("Select a Technologies first ");
  else if (image.length == 0) alert("Select a Picture first");
  else {
    image = URL.createObjectURL(image[0]);
    html = html != false ? `<i class="fa-brands ${html} fa-3x"></i>` : false;
    css = css != false ? `<i class="fa-brands ${css} fa-3x"></i>` : false;
    nextjs =
      nextjs != false ? `<i class="fa-brands ${nextjs} fa-3x"></i>` : false;
    php = php != false ? `<i class="fa-brands ${php} fa-3x"></i>` : false;

    let dataBlog = {
      title,
      content,
      html,
      css,
      nextjs,
      php,
      image,
    };

    blogs.push(dataBlog);
    // console.log(blogs);
    showData();
  }
}

// declaration function show list preview data blog
function showData() {
  console.log(blogs);
  document.getElementById("containers-project").innerHTML = "";
  for (let blog of blogs) {
    document.getElementById("containers-project").innerHTML += `
    <div id="container-project">
      <img src="${blog.image}"/>
      <a href=""><h3>${blog.title}</h3></a>
      
      <p>
        ${blog.content}
      </p>
      <div>
        ${blog.html != false ? blog.html : ""}
        ${blog.css != false ? blog.css : ""}
        ${blog.nextjs != false ? blog.nextjs : ""}
        ${blog.php != false ? blog.php : ""}
      </div>
      <div>
      <div style="display: flex; justify-content: space-between; margin-top:10px; column-gap: 10px">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
    `;
  }
}
