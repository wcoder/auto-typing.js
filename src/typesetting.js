(function (w) {
	"use strict";

	w.typesetting = typesetting;

	function typesetting(element, data) {
		var speed = 50,
			pause = 1500,
			index = 0,
			position = 0,
			length = data[0].length;

		function worker()
		{
			var contents = '';
			var row = Math.max(0, index - 7);

			while (row < index) {
				contents += data[row++] + '\r\n';
			}

			element.value = contents + data[index].substring(0, position) + "_";
			
			if (position ++=== length)
			{
				position = 0;
				index++;
				if (index !== data.length)
				{
					length = data[index].length;
					w.setTimeout(worker, pause);
				}
			} else {
				w.setTimeout(worker, speed);
			}
		}

		worker();
	}

}(window));