var toDo = toDo()
var visit = 0;

(function settoDo(toDo) {
  
}

function saveData(toDo) {
  localStorage.setItem("toDo", toDo);
    
  var data = {
    toDo: toDo,
    
  };
  
  localStorage.setItem("data", JSON.stringify(data));
}

function getItem(keyName, defaultValue) {
  return localStorage.getItem(keyName) || defaultValue;
}

function toDo() {
  return getItem("toDo",);
}

function taskCount() {
  visit = parseInt(getItem("taskCount"), 10) || 0;
  return visit;
}

function updatetoDo(id) {
  var newtToDo = prompt("toDo");
  
  
  if (newFirst && newFirst !== first) {
    first = newFirst;
  }
  
  if (newLast && newLast !== last) {
    last = newLast;
  }
  
  setName(first, last);
  document.getElementById(id).textContent = name;
  
  saveData(first, last, visit);
  localStorage.setItem("_version", "1.0");
}

function getData() {
  var data = localStorage.getItem("data") || {};
  first = data.firstName || "Anonymous";
  last = data.lastName || "Coward";
  setName(first, last);
  visit = parseInt(data.visitCount, 10) || 0; 
}

function clearLocalStorage() {
  var key;
  for(var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    if (!key.startsWith("_")) {
      
      
  }
}
   
);
};

})();