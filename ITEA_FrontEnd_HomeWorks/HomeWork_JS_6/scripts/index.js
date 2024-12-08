/*
Створити об'єкт "Документ", де визначити властивості "Заголовок, тіло, футер, дата". Створити об'єкт вкладений об'єкт - "Додаток". Створити об'єкт "Додаток", вкладені об'єкти, "Заголовок, тіло, футер, дата". Створити методи для заповнення та відображення документа.
*/
const objDoc = {
    title: "Заголовок",
    body: "Тіло",
    footer: "Футер",
    data: "Дата",

    innerObj: {
        title: "Заголовок вкладеного об'єкту",
        body: "Тіло вкладеного об'єкту",
        footer: "Футер вкладеного об'єкту",
        data: "Дата вкладеного об'єкту",

        setData: function (title, body, footer, data) {
            this.title = title;
            this.body = body;
            this.footer = footer;
            this.data = data;
        }
    },

    setData: function (title, body, footer, data) {
        this.title = title;
        this.body = body;
        this.footer = footer;
        this.data = data;
    },

    toString: function(){
        document.write(`<p>${this.title}<br>${this.body}<br>${this.footer}<br>${this.data}<br><br><b>Вкладений об'єкт</b><br>${this.innerObj.title}<br>${this.innerObj.body}<br>${this.innerObj.footer}<br>${this.innerObj.data}</p>`)
    }

}

objDoc.toString();

document.write("<br>");
objDoc.innerObj.setData("Новий Заголовок вкладеного об'єкту","Нове Тіло вкладеного об'єкту","Новий Футер вкладеного об'єкту","Нова Дата вкладеного об'єкту");

objDoc.setData("Новий Заголовок","Нове Тіло","Новій Футер","Нова Дата");
objDoc.toString();

