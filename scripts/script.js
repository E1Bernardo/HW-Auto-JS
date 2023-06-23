let automobile = {
    manufacturer: "Audi",
    model: "Rs6",
    yearRelease:"2022",
    averageSpeed: 90,
    info: function(){
        let information = '';
        information +=`Производитель - ${this.manufacturer}\n`;
        information +=`Модель - ${this.model}\n`;
        information +=`Год выпуска - ${this.yearRelease}\n`;
        information +=`Средняя скорость - ${this.averageSpeed}км/ч`;
        alert(information);
    },
    calcTime: function(way){
        let time = way/this.averageSpeed;
        time += Math.floor(time / 4);
        alert(`Время за которое машина проедет ${way}км = ${time.toFixed(2)}часа`);
    },
    ageCar: function(){
        let systemYear = new Date;
        let yearNow = systemYear.getFullYear();
        alert(`Возраст автомобиля в годах = ${yearNow - this.yearRelease}`);
    }
};
automobile.info();
automobile.calcTime(+prompt('Укажите длину пути в км.:'));
automobile.ageCar();