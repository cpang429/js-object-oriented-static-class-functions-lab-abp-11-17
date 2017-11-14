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

  //reference the ID of the question
  /*static Find(id) {
    // id 1
    // [Question1, Question2, Question3]
    // index 0 id-1
    return this.All()[id-1]
  }*/
}

}

Question._All = [];
