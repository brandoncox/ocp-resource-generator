function Pod (opts) {
  if(!opts) opts = {};
  this.title = opts.title || '';
  this.url = opts.url || '';
  this.text = opts.text || '';
}

module.exports = Pod;