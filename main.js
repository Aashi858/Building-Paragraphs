function show_paragrapgh_1(){
     var inputs = [];
     for (var i = 1 ; i <= 6 ; i++)
     {
        inputs.push(document.getElementById("para1_input_box_" + i).value);
     }
     document.getElementById("Show_Paragraph").innerHTML = inputs.join(". "); 
}
function show_paragrapgh_2(){
    var inputs = [];
    for (var i = 7 ; i <= 12 ; i++)
    {
       inputs.push(document.getElementById("para1_input_box_" + i).value);
    }
    document.getElementById("Show_Paragraph").innerHTML = inputs.join(". "); 
}