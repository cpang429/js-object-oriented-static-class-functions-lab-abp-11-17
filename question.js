'use strict';

class Question {
/*  constructor(ID) {
    this.ID = ID
    this.save()
  } */

  save() {
    this.constructor._All.push(this)
  }
/*
  Static All() {
    return this.All;
  }

  static FindByID(ID) {
    return this.All().filter(function(user) {
      return user.ID === ID;
    })
  }
*/
}
