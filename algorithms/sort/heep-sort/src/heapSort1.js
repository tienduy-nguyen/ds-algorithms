//source: https://gist.github.com/jshaw/0fc0e1ebb348974f3d80

var list = [9,1,7,3,4,2,8,0,5,6];

function chunk(list) {
    var chunks = [];
    for(var i=0; i<list.length; i++) {
        if(list.length % 2 == 1 && i+1 == list.length) {
        	chunks.push(list[i]);
        } else {
           	if(i % 2 == 0) {
				chunks.push(Math.max(list[i], list[i+1]));
			}
        }
    }
   
    return chunks; 
}

function bubble(list) {
	var remainder = chunk(list),
		heap = [list];

	heap.push(remainder);
	while(remainder.length != 1) {
		remainder = chunk(remainder);
		heap.push(remainder);
	}

	return heap;
}

function getTopIndex(thing) {
	var currentIndex = 0,
		value = thing[thing.length-1][0],
		i = thing.length -2;

	while(i != -1) {
		if(!thing[i].length % 2 && currentIndex > 0) {
			currentIndex--;
		}

		if(thing[i][currentIndex + 1] == value) {
			currentIndex++;
			currentIndex = i ? currentIndex << 1 : currentIndex;
		} else if(currentIndex) {
					currentIndex = i ? currentIndex << 1 : currentIndex;

		}
			
		i--;
	}

	return currentIndex;
}

function heapSort(list) {
	var sortedList = [],
		listCopy = list,
		heap = [],
		targetLength = list.length;

	while(sortedList.length != targetLength) {
		heap = bubble(listCopy);
		sortedList.push(heap[heap.length-1][0]);
		listCopy.splice(getTopIndex(heap), 1);
	}		

	return sortedList;
}

console.log(heapSort(list));