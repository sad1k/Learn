
function Plane(name){
    this.name = name
    this.dateCreation = new Date(Date.now())
    this.serialNumber = Math.floor(Math.random() * 100)
}


function PlaneFactory(name, costPlane){
    this.name = name
    this.dateCreation = new Date(Date.now())
    this.countDetails = 0
    this.costPlane = costPlane
    this._timerId = null
    this.planes = []
  
    this.makePlane = () => {
        this.planes.push(new Plane("BOENG 1000PRO"))
        this.countDetails = 0
        console.log(`Создан самолет c серийным номером ${this.planes.at(-1).serialNumber}. \nДата создания ${this.planes.at(-1).dateCreation}`)
    }
    this.createPlane = (countPlanes = 1) => {
        if(this.countDetails == this.costPlane){
            this.makePlane()
        }
    }
    this.startConveyorBelt = (countPlanes) => {
        this._timerId = setInterval(() => {
            this.countDetails += 1
            console.log(`Количество деталей до создания самолета ${this.costPlane - this.countDetails}`)
            if(this.costPlane === this.countDetails){
                this.createPlane(countPlanes)
            }
        }, 1000)
        console.log(`Создание ${countPlanes} самолетов займет время ${ this.costPlane * 1000 * countPlanes} мс`)
        return this.costPlane * 1200 * countPlanes
    }

    this.stopConveyorBelt = () => {
        if(this._timerId){
            clearInterval(this._timerId)
            console.log("Конвейерная лента остановлена")
        }
    }
}

let planeFactory = new PlaneFactory("Шарики", 15)
let time = planeFactory.startConveyorBelt(3)
setTimeout(() => planeFactory.stopConveyorBelt(), time)