'use strict';

class Question {
  constructor(content) {
    this.content = content;
    this.save()
  }

  save() {
    this.constructor._All.push(this)
  }

  //The static keyword defines the Class Function
  static All() {
    return this._All;
  }

}

Question._All = [];
