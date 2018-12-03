function taskEstimator(story, tasks) {
    let stories = parseInt(story)
    let task = parseInt(tasks)
    let avgstories = stories * task
    // alert("The average total number of tasks will be: " + avgstories)
    document.getElementById("result").innerHTML = 'The average total number of tasks will be: ' + avgstories;
} 