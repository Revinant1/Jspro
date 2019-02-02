$(document).ready(function () {
    $(".wrap_form").on("click", ".tab", function () {
        $(".wrap_tab .tab").removeClass("tab_active");
        $(this).addClass("tab_active");
        if (this.id === "authorization_tab") {
            $(".authorization_tab").removeClass("del");
            $(".registration_tab").addClass("del");
            $(".conditions_tab").addClass("del");
        } else if (this.id === "registration_tab") {
            $(".registration_tab").removeClass("del");
            $(".authorization_tab").addClass("del");
            $(".conditions_tab").addClass("del");
        } else if (this.id === "registration_conditions_tab") {
            $(".conditions_tab").removeClass("del");
            $(".authorization_tab").addClass("del");
            $(".registration_tab").addClass("del");
        }


    });
    $("#reg_button").on("click", function () {

    });
    $("#chenge_city").on("click", function () {
        $("#list_city").toggle(500);
            $(function () {
                $.getJSON('json/city.json', function (data) {
                    $.each(data, function (key, val) {
                        $('#list_city').append('<p class="city" value="' + key + '">' + val.title + '</p>');
                        $('#list_city > p').bind('click', function() {
                            var val = $('#city').val();
                            var city = $(this).text();
                            $('#city').val(city);
                            if(val === city){
                                $("#list_city").css('display', 'none');
                            };
                        });
                    });

                })
            });
        });
    });




function autoComplit(inp,arr) {
    var  cursorActive;
    inp.addEventListener("input",function (e) {
        var a = this.value;
        var b = this.value;
        var i = this.value;
        var val = this.value;
        closeAllLists();
        if (!val) { return false;}
        cursorActive = -1;
        a = document.createElement("div");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete_items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("div");
                b.innerHTML = "<b>" + arr[i].substr(0, val.length) + "</b>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {

            cursorActive++;
            addActive(x);
        } else if (e.keyCode == 38) {
            cursorActive--;
            addActive(x);
        } else if (e.keyCode == 13) {

            e.preventDefault();
            if (cursorActive > -1) {
                if (x) x[cursorActive].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (cursorActive >= x.length) cursorActive = 0;
        if (cursorActive < 0) cursorActive = (x.length - 1);
        x[cursorActive].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete_items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
};






var listName = [];

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://127.0.0.1:8080/lesson4/json/name.json");
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        var menuName = JSON.parse(xhr.responseText);
        menuName.forEach(function (val) {
           var container = val.name ;
           listName.push(container);
           return listName;
        })
    }

};
autoComplit(document.getElementById("name"), listName);





