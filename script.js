//Capturar input de novo item
const newItem = document.getElementById("newItem");
//Capturar botão de adicionar item
const bttnAddItem = document.getElementById("add-item");
//Capturar a ul existente
const itemsList = document.getElementById("items-list");
//Captura os elementos do alerta de item removido
const delAlert = document.getElementById("del-alert");
const removeDelAlertIcon = document.getElementById("delete-alert-icon");

//Itens padrão
const defaultItems = ["Suco de Laranja", "Pão Integral", "Aveia em Flocos"];

//Cria os itens padrão ao carregar a página
let itemCounter = 0;
defaultItems.forEach((itemText) => {
  createItem(itemText);
});

//Ouve o botão add item
bttnAddItem.addEventListener("click", () => {
  addItem();
});

//Listener do remover item
removeDelAlertIcon.addEventListener("click", () => {
  delAlert.classList.add("del-alert-hidden");
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

  //Cria o item e limpa o input
  createItem(content);
  newItem.value = "";
}

// Função reutilizável para criar itens
function createItem(content) {
  itemCounter++;
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" name="item${itemCounter}" id="item${itemCounter}" value="" />
            <label class="checkbox" for="item${itemCounter}"></label>
            <span>${content}</span>
            <img src="./assets/icons/Frame-3.svg" alt="Deletar item" class="trashIcon" />`;
  li.classList.add("show-item");
  itemsList.append(li);
  deleteItem(li);
}

function deleteItem(li) {
  const deleteBttn = li.querySelector(".trashIcon");

  deleteBttn.addEventListener("click", () => {
    li.remove();
    displayAlert();
  });
}

function displayAlert() {
  //Garante que delAlert comece oculto
  delAlert.classList.add("del-alert-hidden");

  setTimeout(() => {
    delAlert.classList.remove("del-alert-hidden");
  }, 10);

  removeDelAlertIcon.addEventListener("click", () => {
    delAlert.classList.add("del-alert-hidden");
  });

  setTimeout(() => {
    delAlert.classList.add("del-alert-hidden");
  }, 1500);
}
