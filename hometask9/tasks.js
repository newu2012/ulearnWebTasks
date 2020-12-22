/*
    В этом задании нельзя менять разметку, только писать JS-код в этом файле.
 */

/**
 *   1. Удали со страницы элемент с id "deleteMe"
 **/

document.getElementById("deleteMe").remove();

/**
 *  2. Сделай так, чтобы во всех элементах с классом wrapper остался только один параграф,
 *  в котором будет сумма чисел из всех параграфов.
 *
 *  Например, такой элемент:
 *
 *  <div class="wrapper"><p>5</p><p>15</p><p>25</p><p>35</p></div>
 *
 *  должен стать таким
 *
 *  <div class="wrapper"><p>80</p></div>
 */

wrappers = document.getElementsByClassName("wrapper");
for (let wrapper in wrappers) {
    let wrapperSum = 0;
    for (let i = 0; i < wrapper.length; i++) {
        wrapperSum += parseInt(wrapper[i].nodeValue);
    }
    wrapper.replace(new RegExp("/*/"), wrapperSum.toString());
}


/**
 *  3. Добавь обработчик события клика на элемент кнопки с классом button. Обработчик должен выводить
 *  в консоль текст "Кнопка нажата {количество} раз". В тексте должно быть количество нажатий кнопки, которое
 *  инкрементируется при каждом нажатии. Соответственно, в первый раз будет выведено "Кнопка нажата 1 раз", на
 *  следующий: "Кнопка нажата 2 раз".
 *
 *  3.1 *Необязательное дополнение к задаче 3. Добавь склонение в текст, выводимый в консоль. Чтобы слово «раз»
 *  склонялось в зависимости от количества. "Кнопка нажата 1 раз", "Кнопка нажата 2 раза", "Кнопка нажата 15 раз"...
 */

let buttonClickCounter = 0;
let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons.item(i).addEventListener("click", onButtonClick);
}

function onButtonClick() {
    buttonClickCounter++;
    console.log(`Кнопка нажата ${buttonClickCounter} раз`);
}



/**
 *  4. Сделай так, чтобы клик по ссылкам на странице никуда не вел
 *  (но, чтобы возможность скопировать ссылку или открыть в отдельной вкладке сохранилась).
 * */

let links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    links.item(i).addEventListener("click", onLinkClick);
}

function onLinkClick() {
    console.log("You go nowhere");
}

/**
 *  5. Сделай так, чтобы на потерю фокуса поля ввода с классом input,
 *  выводился alert с текстом: "Ты точно сказал все, что хотел?"
 */

let input = document.getElementsByClassName("input");
for (let i = 0; i < input.length; i++) {
    input.item(i).addEventListener("focusout", onFocusOut);
}

function onFocusOut() {
    alert("Ты точно сказал всё, что хотел?");
}

/**
 *  6. Напиши код, который при клике на любом элементе внутри блока с классом "container" выведет в консоль название
 *  тега этого элемента. То есть, при клике на параграф, в консоль должно вывестить "P", при клике на div — "DIV"
 */

let container = document.getElementsByClassName("container").item(0).childNodes;
for (let i = 0; i < container.length; i++) {
    container.item(i).addEventListener("click", function() {onContainerClick(container.item(i).nodeName)});
}

function onContainerClick(className) {
    console.log(`${className}`);
}
