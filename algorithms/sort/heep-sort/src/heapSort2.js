//Sources
function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function max_heapify(arr, i, length) {
    while (true) {
        var left = i*2 + 1;
        var right = i*2 + 2;
        var largest = i;

        if (left < length && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < length && arr[right] > arr[largest]) {
            largest = right;
        }

        if (i == largest) {
            break;
        }

        swap(arr, i, largest);
        i = largest;
    }
}

function heapify(arr, length) {
    for (var i = Math.floor(length/2); i >= 0; i--) {
        max_heapify(arr, i, length);
    }
}

function heapsort(arr) {
    heapify(arr, arr.length);

    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, i, 0);

        max_heapify(arr, 0, i-1);
    }
}

let arr = [ 9, 10, 2, 1, 5, 4, 3, 6, 8, 7, 13 ];
heapsort(arr);