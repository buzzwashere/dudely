$.fn.drag = function(fn) {
  var $document = $(document);
  return this.each(function() {
    var self = this;
    var $this = $(this);
    var mousemove = function() {
      fn.dragging && fn.dragging.call($this);
    };
    $this.mousedown(function() {
      fn.start && fn.start.call($this);
      fn.dragging && $this.on("mousemove", mousemove);
    });
    $document.mouseup(function() {
      fn.dragging && $this.off("mousemove", mousemove);
      fn.stop && fn.stop.call(self);
    });
  });
};