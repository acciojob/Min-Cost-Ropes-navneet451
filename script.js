function mincost(arr)
{ 
//write your code here
// return the min cost
	 // If there are no ropes or only one rope, there's no cost to connect them
    if (arr.length < 2) return 0;

    // Helper function to maintain a min-heap (array sorted in ascending order)
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    while (arr.length > 1) {
        // Take the two smallest ropes
        let first = arr.shift(); // Remove the smallest
        let second = arr.shift(); // Remove the second smallest

        // Combine them and calculate the cost
        let cost = first + second;
        totalCost += cost;

        // Insert the combined rope back into the sorted array (min-heap)
        arr.push(cost);
        arr.sort((a, b) => a - b); // Keep the array sorted for the min-heap
    }

    return totalCost;
  
}

module.exports=mincost;
