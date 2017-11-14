'use strict';

class Question {
  constructor() {

  Question._All.push(this)
  }
  Static All() {
    return this.All;
  }
}

Question._All = []