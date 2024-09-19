/*
NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
NOTE: "T-50 seconds" read as "T-minus 50 seconds".

Directions:
Write a while loop that counts down from 60 seconds and:

If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.

Your output should look like the following:

T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!
*/
let count = 60
while (count > 0) {
    if (count !=50 && count != 30 && count != 16 && count != 10 && count != 0) {
        console.log(`T-${count}`)
    } else if (count == 50) {
        console.log(`T-${count} (Orbiter transfers from ground to internal power)`)
    } else if (count == 30) {
        console.log(`T-${count} (Ground launch sequencer is go for auto sequence start)`)
    } else if (count == 16) {
        console.log(`T-${count} (Activate launch pad sound suppression system)`)
    } else if (count == 10) {
        console.log(`T-${count} (Activate main engine hydrogen burnoff system)`)
    } else if (count == 6) {
        console.log(`T-${count} (Main engine start)`)
    } 
    count--
}
console.log(`T-${count} (Solid rocket booster ignition and liftoff!)`)
// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)
// let count = 6
// while (count > 0){
//     (function(count){
//         setTimeout(() => {
//             if (count !=50 && count != 30 && count != 16 && count != 10) {
//                 console.log(`T-${count}`)
//             } else if (count == 50) {
//                 console.log(`aasdsad 50`)
//             } else if (count == 30) {
//                 console.log(`123314 30`)
//             } else {
//                 console.log(count)
//             }
//         }, 500 * count)
//     })(count--)
// }