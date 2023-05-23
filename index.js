document.getElementById("add").onclick  = function() {
    let text = document.getElementById("listItem").value; 
    if (text != "") {
        let liNode = document.createElement("li");
        liNode.setAttribute("class","newListItem");
        let doneButtonNode = document.createElement("input");
        doneButtonNode.setAttribute("class", "doneButton");
        doneButtonNode.setAttribute("type", "button");
        doneButtonNode.setAttribute("value", "✓");
        let textNode = document.createTextNode(text);
        liNode.appendChild(textNode);
        liNode.appendChild(doneButtonNode);
        document.getElementById("list").appendChild(liNode);
    }
}

document.addEventListener("click", archive);

function archive(event) {
    let element = event.target;
    let archiveNode = document.getElementById("archiveList");
    let text = element.parentNode.innerText;
    if (element.className == "doneButton") {
        let textNode = document.createTextNode(text);
        let liNode = document.createElement("li");
        liNode.setAttribute("class","archiveItem");
        let trashButtonNode = document.createElement("input");
        trashButtonNode.setAttribute("class", "trashButton");
        trashButtonNode.setAttribute("type", "button");
        trashButtonNode.setAttribute("value", "🗑️");
        liNode.appendChild(textNode);
        liNode.appendChild(trashButtonNode);
        archiveNode.appendChild(liNode);
        element.parentNode.parentNode.removeChild(element.parentNode);
    }
}

document.addEventListener("click", clear);

function clear(event) {
    let element = event.target;
    let getValue = document.getElementById("listItem");
    if (element.id == "add") {
        if (getValue.value != "") {
            getValue.value = "";
        }
    }
}

document.addEventListener("click", deleteLine);

function deleteLine(event) {
    let element = event.target;
    if (element.className == "trashButton") {
        element.parentNode.parentNode.removeChild(element.parentNode);
    }
}

document.addEventListener("click", emptyTrash);

function emptyTrash(event) {
    let element = event.target;
    let archiveListNode = document.getElementById("archiveList")
    if (element.id == "clearAll") {
        archiveListNode.innerHTML = "";
    }
}