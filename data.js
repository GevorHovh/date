function myDate(year,month,date ,day,hours,minutes,) {
    this.year = year;
    this.month = month;
    this.date = date;
    this.day = day;
    this.hours = hours;
    this.minutes = minutes;
    
    this.getFullyear = function() {
        if(this.month > 11) {
             this.year = this.year + 1, this.month = 0
           }
        return this.year
    }
    this.getMonth = function() {
        if(this.date > 31) {
            this.month = this.month + 1,this.date = 0;
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
            this.date = this.date + 1,this.date = 0;
          }
        return this.date
    }
    this.getDay = function() {
        if(this.day > 7) {
            this.day = 0
        }
        if(this.hours >= 24) {
            this.day = this.day +1, this.hours = 0
        }
        return this.day
    }
    this.getHours = function() {
        if(this.minutes >= 60) {
            this.hours = this.hours +1, this.minutes = 0
        }
        return this.hours
    }
    this.getMinutes = function() {
        return this.minutes
    }
}
let date = new myDate(2023 , 10 , 17, 5, 20, 49);
console.log(date.getFullyear(), date.getMonth(), date.getDate(), date.getDay(), date.getHours(), date.getMinutes());

let da = new Date();
console.log(Date());