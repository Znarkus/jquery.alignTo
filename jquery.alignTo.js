/* jquery.alignTo - License https://github.com/Znarkus/jquery.alignTo */

(function ($) {
	
	function _pos_size($e) {
		var w = $e.outerWidth(),
			h = $e.outerHeight(),
			p = $e.position();
		
		p.width = w;
		p.height = h;
		p.right = p.left + w;
		p.bottom = p.top + h;
		
		return p;
	}
	
	function _align($e, $to, alignment) {
		var e = _pos_size($e),
			to = _pos_size($to),
			offset = alignment.offset || {};
		
		delete alignment['offset'];
		
		$e.css({
			position: 'absolute'
			//left: p.left + 'px',
			//top: p.top + 'px'
		});
		
		$.each(alignment, function (e_attr, to_attr) {
			if (!to[to_attr]) {
				throw 'No property "' + to_attr + '"';
			}
			
			to_attr = to[to_attr];
			
			if (e_attr === 'right') {
				to_attr -= e.width;
				e_attr = 'left';
			} else if (e_attr === 'bottom') {
				to_attr -= e.height;
				e_attr = 'top';
			}
			
			if (offset[e_attr]) {
				to_attr += offset[e_attr];
			}
			
			$e.css(e_attr, to_attr + 'px');
		});
	}
	
	$.fn.alignTo = function ($to, alignment) {
		return this.each(function () {
			_align($(this), $to, alignment);
		});
	};
	
}(jQuery));