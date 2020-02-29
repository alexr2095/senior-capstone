var counter = 0;
var limit = 30;

function AddCoPres(divName)
{
   if (counter == limit)
   {
        alert("You have reached the limit of adding co-presenters. If you wish to add more, please contact the Research Days at (908) 737-3461 or researchdays@kean.edu.");
   }
   else
   {
        counter++;
        $("#coPresenterCount").val(counter);
        var newdiv = document.createElement('div');
        newdiv.innerHTML += "<div id=DivForCP" + counter + ">"+
        //delete after decision is made on morder
        "<hr class='CPdivider'>" +
        "<h5>Co-Presenter " + counter + "</h5>" +
        "<div class='row'>"+
            "<div class='form-group col-md-3'>"+
                "<label for='firstName'>First name</label>"+
                "<input type='text' class='form-control' id='firstName" + counter + "' name='firstName" + counter + "'required='true'>"+
            "</div>"+
            "<div class='form-group col-md-3'>"+
                "<label for='lastName'>Last name</label>"+
                "<input type='text' class='form-control' id='lastName" + counter + "' name='lastName" + counter + "'required='true'>"+
            "</div>"+
            "<div class='form-group col-md-2'>"+
                "<label for='keanID'>Student ID</label>"+
                "<input type='number' class='form-control' id='keanID" + counter + "' name='keanID" + counter + "' min='0' max='9999999' required='true'>"+
            "</div>"+
            "<div class='form-group col-md-4 '>"+
                "<label for='keanEmail'>Email Address</label>"+
                "<div class='input-group'>"+
                    "<input type='text' class='form-control' id='keanEmail" + counter + "' name='keanEmail" + counter + "' required='true'>"+
                    "<div class='input-group-append'>"+
                        "<span class='input-group-text' id='keanEmail" + counter + "' name='keanEmail" + counter + "'> @kean.edu</span>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>"+
        "<div class='row'>"+
            "<div class='form-group col-md-6'>"+
                "<label for='major'>Major</label>"+
                    "<select id='major" + counter + "' name='major" + counter + "' class='form-control' required='true'>"+
                        "<option></option>"+
                        "{% for major in major %}"+
                        "<option value='{{major.id}}'>{{major.major}}</option>"+
                        "{% endfor %}"+
                    "</select>"+
            "</div>"+
            "<div class='form-group col-md-3'>"+
                "<label for='class'>Class Level</label>"+
                "<select id='class" + counter + "' name='class" + counter + "' class='form-control' required='true'>"+
                    "<option></option>"+
                    "<option value='Freshman'>Freshman</option>"+
                    "<option value='Sophomore'>Sophomore</option>"+
                    "<option value='Junior'>Junior</option>"+
                    "<option value='Senior'>Senior</option>"+
                    "<option value='Graduate'>Graduate</option>"+
                "</select>"+
            "</div>"+
            "<div class='form-group col-md-3'>"+
                "<label for='campus'>Campus</label>"+
                "<select id='campus" + counter + "' name='campus" + counter + "' class='form-control' required='true'>"+
                    "<option></option>"+
                    "<option value='Union'>Union (Main)</option>"+
                    "<option value='Wenzhou'>Wenzhou (China)</option>"+
                    "<option value='Ocean'>Ocean (Toms River)</option>"+
                    "<option value='Skylands'>Skylands (Oak Ridge)</option>"+
                "</select>"+
            "</div>"+
        "</div><br>";
        document.getElementById(divName).appendChild(newdiv);
        
   }
}
   function DeleteCoPres()
   {
       if(counter<=0)
       {
         alert("No co-presenters added");
       }
       else
       {
           var RemLastCPform = document.getElementById("DivForCP" + counter);
           RemLastCPform.remove();
           counter--;
           $("#coPresenterCount").val(counter);
       }
     }