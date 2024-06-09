const bio_edit = document.querySelector(".fb-bio-edit");
const bio_show = document.querySelector(".fb-bio-show");
const bio_add = document.querySelector(".fb-bio-add");
const bio_content = document.getElementById("bio-content");
const bioData = document.getElementById("bio_data");

const btn_add_bio = document.querySelector(".btn-add-bio");
const btn_save = document.querySelector(".btn-save");
const btn_cancel = document.querySelector(".btn-cancel");
const btn_edit = document.querySelector(".btn-edit");
const bio_char = document.getElementById("bio_char");

const getBioData = () => {
  const data = localStorage.getItem("bio");

  if (data) {
    bio_add.style.display = "none";
    bio_edit.style.display = "none";
    bio_show.style.display = "block";
    bioData.innerHTML = data;
  } else {
    bio_add.style.display = "block";
    bio_edit.style.display = "none";
    bio_show.style.display = "none";
  }
}; //end getBioData func
getBioData();

//bio add btn action
btn_add_bio.onclick = () => {
  bio_add.style.display = "none";
  bio_edit.style.display = "block";
};
btn_cancel.onclick = () => {
  bio_add.style.display = "block";
  bio_edit.style.display = "none";
};

bio_content.onkeyup = () => {
  bio_length = bio_content.value.length;
  const remainChar = 101 - bio_length;
  //console.log(remainChar);
  if (remainChar <= 0) {
    alert("Char Limit Crossed");
  }
  bio_char.innerText = `${remainChar} character remaining`;
  btn_save.disabled = false;
};
btn_save.onclick = () => {
  localStorage.setItem("bio", bio_content.value);
  getBioData();
};
btn_edit.onclick = () => {
  const oldBioData = localStorage.getItem("bio");
  bio_content.value = oldBioData;
  bio_edit.style.display = "block";
  bio_show.style.display = "none";
};
