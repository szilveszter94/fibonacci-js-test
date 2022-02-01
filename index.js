function fibonacciGenerator (n) {
    
    var current = 0;
    var next = 1;
    var sequence = [0];
    
    for (var i = 1; i < n; i++){
        sequence.push(next);
        const previous = sequence[sequence.length - 2];
        next = previous + next;
    }
    return sequence;

    
    // if (n > 1) {
    //   while (sequence.length < n) {
    //       sequence.push(next);
    //       const previous = sequence[sequence.length - 2];
    //       next