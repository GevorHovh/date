function myDate(year,month,date ,day,hours,minutes,) {
    this.year = year;
    this.month = month;
    this.date = date;
    this.day = day;
    this.hours = hours;
    this.minutes = minutes;
    
    this.getFullyear = function() {
        if(this.month > 11) {
             this.year = this.year + 1;
           }
        return this.year
    }
    this.getMonth = function() {    
      if(this.date > 31) {
        this.month++
      }
        for(let m = 0; m < this.month; m++) {
          if(this.month > 11) {
            this.month -= 11
          }
        }
          if(this.month == 0){
            this.month = "Jan"
          }if(this.month == 1){
            this.month = "Feb"
          }if(this.month == 2){
            this.month = "March"
          }if(this.month == 3){
            this.month = "April"
          }if(this.month == 4){
            this.month = "May"
          }if(this.month == 5){
            this.month = "June"
          }if(this.month == 6){
            this.month = "July"
          }if(this.month == 7){
            this.month = "aug"
          }if(this.month == 8){
            this.month = "sep"
          }if(this.month == 9){
            this.month = "oct"
          }if(this.month == 10){
            this.month = "Nov"
          }if(this.month == 11){
            this.month = "Dec"
          }
        return this.month
        }
    this.getDate = function() {
     
        if(this.date > 31) {
           for(let i = 0; i < this.date; i++) {
            if(this.date > 31) {
              this.date -= 31
            }
           }
          }
          return this.date
    }
    this.getDay = function() {
      for(let d = 0; d < this.day; d++) {
        if(this.day > 7) {
          this.day -= 7
        }
      }
      if(this.hours >= 24) {
        this.day ++
      }
        return this.day
    }
    this.getHours = function() {
      for(let h = 0; h < this.hours; h++) {
        if(this.hours >= 24) {
          this.hours -= 24
        }
      }
      if(this.minutes >= 60){
        this.hours++
      }
        return this.hours
    }
    this.getMinutes = function() {
      for(let m = 0; m < this.minutes; m++) {
        if(this.minutes >= 60) {
          this.minutes -= 60
        }
      }
        return this.minutes
    }
}
let datee =  new myDate(2023 , 1, 10, 5, 10, 70);
console.log(datee.getFullyear(), datee.getMonth(), datee.getDate(), datee.getDay(), datee.getHours(), datee.getMinutes());


