//Capturar input de novo item
const newItem = document.getElementById("newItem");
//Capturar botão de adicionar item
const bttnAddItem = document.getElementById("add-item");
//Capturar a ul existente
const itemsList = document.getElementById("items-list");

//Ouve o botão add item
bttnAddItem.addEventListener("click", () => {
  addItem();
});

function getItemContent() {
  return newItem.value.trim();
}

function isValidContent(content) {
  return content !== "";
}

function addItem() {
  const content = getItemContent();

  if (!isValidContent(content)) {
    alert("Digite um item válido!");
    return;
  }

  createLi();
  li.innerHTML = `<input type="checkbox" name="item01" id="item01" value="" />
            <label class="checkbox" for="item01"></label>

            <span>${content}</span>

            <img src="./assets/icons/Frame-3.svg" alt="" id="trashIcon" /> `;
  li.classList.add("show-item");
  itemsList.append(li);
  newItem.value = "";
  deleteItem();
}

function createLi() {
  const li = document.createElement("li");
  return li;
}

const li = createLi();

function deleteItem() {
  const deleteBttn = document.getElementById("trashIcon");
  const delAlert = document.getElementById("del-alert");
  deleteBttn.addEventListener("click", () => {
    li.remove();
    delAlert.classList.remove("del-alert-hidden");
    console.log(delAlert);
  });
}
