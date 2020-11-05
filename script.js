var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus est sed ante rhoncus iaculis. " +
    "Pellentesque nec risus lectus. Sed euismod diam et justo molestie, ut tincidunt lorem tincidunt. " +
    "Cras iaculis nisi placerat, varius justo at, consectetur lectus. Etiam porttitor sapien nibh, " +
    "non cursus massa finibus et. Fusce rhoncus accumsan purus, sit amet maximus nisl varius vitae. Maecenas " +
    "tincidunt placerat nibh eu convallis. Aenean vitae felis vitae metus iaculis pulvinar nec eu orci. Aliquam a " +
    "aliquam leo. Quisque feugiat ligula vel efficitur porttitor. Curabitur congue ex quis urna gravida aliquet. " +
    "Mauris arcu enim, pulvinar vitae nulla at, dignissim pharetra libero. "; /* ცვლადს lorem ენიჭება მნიშვნელობა
    სთრინგის სახით*/

var id = "container"; /* ცვლადის ენიჭება id სთრინგის სახით*/

var el = document.getElementById(id); /* html ელემენტს მიენიჭება ობიექტი, რომლის id დოკუმენტში არის container*/

for (var i = 0; i < 10; i++) { // ცვლადის საწყისი ინკრიმენტი არის 0, ნაკლებია 10ზე და იზრდება 1ით
    var row = document.createElement("div"); /* ცვლადს row ენიჭება ელემენტი div-ის შექმნის ფუნქცია*/
    row.classList.add("row"); /* ცვლადს ენიჭება კლასი row*/
    for (var j = 0; j < 3; j++) { //j რა არის ვერ მივხვდი
        var col = document.createElement("div"); //ცვლადს col ენიჭება დოკუმენტში ელემენტ divის შექმნის ფუნქცია
        col.classList.add("col"); //ცვლადს col ენიჭება კლასი col
        col.innerHTML = lorem; // html კოდში ცვლადს col ენიჭება ცვლადი loremის სთრინგი
        col.style.backgroundColor = "#5" + i + j * 4;
        row.appendChild(col); //ელემენტის ქვეშ, რომლის კლასიც არის row,ჩნდება "შვილობილი" კლასით col
    }
    el.appendChild(row);
}
