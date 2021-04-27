name_of_the_student_array = [];

function submit(){
    var name_1 = document.getElementById("1stu").value;
    var name_2 = document.getElementById("2stu").value;
    var name_3 = document.getElementById("3stu").value;
    var name_4 = document.getElementById("4stu").value;
    name_of_the_student_array.push(name_1,name_2,name_3,name_4);
    console.log(name_of_the_student_array);
    document.getElementById("display").innerHTML = name_of_the_student_array
    document.getElementById("submit").style.display = "none"
    document.getElementById("sort").style.display = "inline-block"

}
function sort(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display").innerHTML = name_of_the_student_array
}

