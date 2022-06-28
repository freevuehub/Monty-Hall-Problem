class MontyHall {
  room = [
    { number: 0, select: false, value: false, open: false },
    { number: 1, select: false, value: false, open: false },
    { number: 2, select: false, value: false, open: false },
  ]
  success: number = 0
  fail: number = 0

  set setRoomSelect(index: number) {
    this.room[index].select = true
  }
  set setRoomValue(index: number) {
    this.room[index].value = true
  }
  set setRoomOpen(index: number) {
    this.room[index].open = true
  }
  get getRandomNumber(): (list: any[]) => number {
    return (list) => list[Math.floor(Math.random() * list.length)].number
  }
  get getRoom() {
    return this.room
  }
  get getProbability() {
    return this.success / (this.success + this.fail)
  }

  createRoom() {
    this.setRoomValue = this.getRandomNumber(this.room)
    this.setRoomSelect = this.getRandomNumber(this.room)
    this.setRoomOpen = this.getRandomNumber(
      this.getRoom.filter((room) => !room.value && !room.select)
    )
  }
  calculation() {
    this.createRoom()

    const check = this.getRoom
      .filter((room) => !room.open && (room.value && room.select))
      .length

    if (!check) {
      this.success += 1
    } else {
      this.fail += 1
    }

    this.reset()
  }
  recursive() {
    this.calculation()

    console.clear()
    console.log('\x1b[33m 몬티홀의 역설 \x1b[0m')
    console.log(`\x1b[46m${Number(this.getProbability * 100).toFixed(2)}%\x1b[0m (${this.success + this.fail}회)`)
    console.log('몬티홀의 역설 확률은 [66.66%] 입니다.')

    setTimeout(() => {
      this.recursive()
    }, 1000)
  }
  reset() {
    this.room = [
      { number: 0, select: false, value: false, open: false },
      { number: 1, select: false, value: false, open: false },
      { number: 2, select: false, value: false, open: false },
    ]
  }
}

const mh = new MontyHall()

mh.recursive()
