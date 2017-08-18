
var ClozeCard = function (full, cloze){

  this.full = full;
  this.cloze = cloze;
  this.partial = this.full.replace(this.cloze, "_______");

  };


module.exports = ClozeCard;
