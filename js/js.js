// public, protected, private

function Container(id, className, tagName) {
    // public
    this.id = id;
    this.className = className;

    // protected
    this._tagName = tagName;

    // private
    var element;

    this.getElement = function() {
        return element;
    }

    this.setElement = function(newValue) {
        element = newValue;
    }
}

Container.prototype.render = function() {
    var element = this.getElement();

    if (!element) {
        element = document.createElement(this._tagName);
        element.id = this.id;
        element.className = this.className;

        this.setElement(element);
    }

    return element;
}

Container.prototype.remove = function() {
    var element = this.getElement();

    if(element) {
        element.parentElement.removeChild(element);
        this.setElement(null);
    }
}

function Menu(id, className, items) {
    Container.call(this, id, className, 'div');

    // protected
    this._items = items;

}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function() {
    var container = Container.prototype.render.call(this);

    this._items.forEach(function(item) {
        if(item instanceof Container) {
            container.appendChild(item.render());

        }
    });

    return container;
}


function MenuItem4(className, link, title) {
    Container.call(this, '', className, "ul");


    this.link = link;
    this.title = title;

}
function MenuItem3(className, link, title) {
    Container.call(this, '', className, "ul");


    this.link = link;
    this.title = title;

}
function MenuItem2(className, link, title) {
    Container.call(this, '', className, "div");


    this.link = link;
    this.title = title;

}
function MenuItem1(className, link, title) {
    Container.call(this, '', className, "div");


    this.link = link;
    this.title = title;

}
function MenuItem(id, className, link, title) {
    Container.call(this, '', className, "ul");


    this.link = link;
    this.title = title;

}


MenuItem1.prototype = Object.create(Container.prototype);
MenuItem1.prototype.render = function() {

    var container = Container.prototype.render.call(this);


    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/json/women.json");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var menuName = JSON.parse(xhr.responseText);
            var div = document.createElement("ul");
            menuName.forEach(function (name) {
                var li = document.createElement("li");
                var  a = document.createElement("a");
                a.textContent = name.title;
                a.href = name.link;
                console.log(a.textContent);
                div.appendChild(li);
                li.appendChild(a);
                container.appendChild(div);
            })


        }

    }
    return container;
}
MenuItem2.prototype = Object.create(Container.prototype);
MenuItem2.prototype.render = function() {

    var container = Container.prototype.render.call(this);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/json/accessories.json");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var menuName = JSON.parse(xhr.responseText);
            var ul = document.createElement("ul");
            var ul1 = document.createElement("ul");
            menuName.forEach(function (name) {

                if(name.classNameli === "kids-menulist-last"){

                    var li1 = document.createElement("li");
                    var  a1 = document.createElement("a");
                    a1.textContent = name.title;
                    a1.href = name.link;
                    ul1.appendChild(li1);
                    li1.appendChild(a1);
                    container.appendChild(ul1);
                    return container;
                }


                var li = document.createElement("li");
                var  a = document.createElement("a");
                a.textContent = name.title;
                a.href = name.link;
                ul.appendChild(li);
                li.appendChild(a);
                container.appendChild(ul);
            })

        }

    };
    return container;
};
MenuItem3.prototype = Object.create(Container.prototype);
MenuItem3.prototype.render = function() {

    var container = Container.prototype.render.call(this);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/json/man.json");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var menuName = JSON.parse(xhr.responseText);
            var ul = document.createElement("ul");
            var ul1 = document.createElement("ul");
            menuName.forEach(function (name) {

                if(name.classNameli === "discont-menulist-last"){

                    var li1 = document.createElement("li");
                    var  a1 = document.createElement("a");
                    a1.textContent = name.title;
                    a1.href = name.link;

                    var div = document.createElement("div");
                    var video = document.createElement("video");
                    video.autoplay = true;
                    video.loop = true;
                    var source = document.createElement("source");

                    div.className = name.clssNameDiv;
                    video.width = name.width;
                    video.height = name.height;
                    source.src = name.videoSrc;
                    source.type = name.type;
                    ul1.appendChild(li1);
                    li1.appendChild(a1);
                    a1.appendChild(div);
                    div.appendChild(video);
                    video.appendChild(source);

                    container.appendChild(ul1);
                    return container;
                }


                var li = document.createElement("li");
                var  a = document.createElement("a");
                a.textContent = name.title;
                a.href = name.link;
                ul.appendChild(li);
                li.appendChild(a);
                container.appendChild(ul);
            })

        }

    };
    return container;
};
MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function() {

    var container = Container.prototype.render.call(this);


    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/json/mega-menulist.json");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var menuName = JSON.parse(xhr.responseText);

            menuName.forEach(function (name) {

                var div = document.createElement("div");
                div.className = "mega-dropmenu";

                var li = document.createElement("li");
                li.id = name.id;
                li.className = name.classNameLi;

                var  a = document.createElement("a");
                a.className = name.classNameLink;
                a.textContent = name.title;
                a.href = name.link;
                li.appendChild(div);
                li.appendChild(a);
                container.appendChild(li);
            })

        }

    };
    return container;
};


function SuperMenu(id, className, items, link, title) {
    MenuItem4.call(this, 'item', link, title);
    MenuItem3.call(this, 'item', link, title);
    MenuItem2.call(this, 'item', link, title);
    MenuItem1.call(this, 'item', link, title);
    MenuItem.call(this,  'item', link, title);
    Menu.call(this, id, className, items);

}

SuperMenu.prototype = Object.create(Menu.prototype);
SuperMenu.prototype.render = function() {
    if(this.link && this.title) {
        var Item4 = new MenuItem4(this.link, this.title).render();
        var Item3 = new MenuItem3(this.link, this.title).render();
        var Item2 = new MenuItem2(this.link, this.title).render();
        var Item1 = new MenuItem1(this.link, this.title).render();
        var Item = new MenuItem1(this.link, this.title).render();

        return Item,Item1 ;
    }else{
        return Menu.prototype.render.call(this);
    }
};

var menuItem3 = new MenuItem3("mega-menutext","/","");
var menuItem2 = new MenuItem2("mega-menutext","/","");
var menuItem1 = new MenuItem1("mega-menutext","/","");


var $menuSub = document.getElementById("wrap_menu");


$menuSub.appendChild(menuItem1.render());
$menuSub.appendChild(menuItem2.render());
$menuSub.appendChild(menuItem3.render());










var xhr = new XMLHttpRequest();
xhr.open("GET", "http://127.0.0.1:8080/../json/galeri.json");
xhr.send();
xhr.onreadystatechange = function () {

    if (xhr.readyState === XMLHttpRequest.DONE) {

        var imageName = JSON.parse(xhr.responseText);

        var div = document.createElement("div");
        div.className = "galeri";
        imageName.forEach(function (name) {

            var span = document.createElement("span");
            span.className = name.name;
            span.textContent = name.name;

            var img = document.createElement("img");
            img.src = name.miniature;
            img.className = "miniature";
            img.addEventListener("click", handleOpenModal);

            var modalImg = document.createElement("img");
            modalImg.src = name.fulldrawing;
            modalImg.className = "fulldrawing";
            modalImg.addEventListener("click", handleClostModal);


            div.appendChild(span);
            div.appendChild(img);
            div.appendChild(modalImg);


            function handleOpenModal(event) {
                modalImg.style.display = "flex";
                event.stopImmediatePropagation();

            }
            function handleClostModal(event) {
                modalImg.style.display = "none";
                event.stopImmediatePropagation();
            }

        });


        document.body.appendChild(div);

    }


}

var button = document.getElementById("success");
button = addEventListener("click",handleGetGaleri);
function handleGetGaleri(event) {
    if (event.target.id === "success") {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://127.0.0.1:8080/json/success.json");
        xhr.send();
        xhr.onreadystatechange = function () {
            var response = JSON.parse('{"result":"success"}', function (key, vual) {
                var a = document.getElementById("success");
                if (vual.result === "success") {
                    a.innerHTML = "Успех";
                    a.style.backgroundColor = "green";
                } else {
                    a.innerHTML = "Ошибка";
                    a.style.backgroundColor = "red";
                }
                return vual;
            });


        }

    }
}


