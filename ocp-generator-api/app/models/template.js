function Template (opts) {
  if(!opts) opts = {};
  this.title = opts.title || '';
  this.url = opts.url || '';
  this.text = opts.text || '';
}

module.exports = Template;
