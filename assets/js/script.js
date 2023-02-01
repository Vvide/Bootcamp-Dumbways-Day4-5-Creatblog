function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let description = document.getElementById("description").value;

  if (name == "") {
    alert("column Name please fill in");
  } else if (email == "") {
    alert("column Email please fill in");
  } else if (phone == "") {
    alert("column Phone please fill in");
  } else if (subject == "") {
    alert("column Subject please fill in");
  } else if (description == "") {
    alert("column Description please fill in");
  }

  const defaultEmail = "mhmmdfiqrio9@gmail.com";

  let mailTo = document.createElement("a");
  mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo Pekernalkan nama saya ${name}, Perusahaan kami sedang mencari programmer dan ingin mengajak bekerja sama ${description}, jika berminat tolong hubungin saya ${phone}`;
  mailTo.click();

  let audience = {
    name,
    email,
    phone,
    subject,
    description,
  };

  console.log(audience);
}
