'use babel';

export default class SupportArrView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('unique');
    this.element.style.margin = "30px";
    this.element.classList.add('support-arr');
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }



  visualizeNullArray(identifier,rows,columns)
   {
if(this.element.innerText!="")
{
this.element.innerText="";
}
    const message = document.createElement('table');

    message.style.border='thick solid #000000';
    message.style.fontSize='large';

    message.style.backgroundColor = "white";

     for (var r = 0; r < rows; r++)
        {
            var row = document.createElement("tr");
            row.style.border='solid #000000';
	     // create cells in row
             for (var c = 0; c < columns; c++)
             {
                var cell = document.createElement("td");
                cell.style.width = "100px";
                cell.style.border='solid #000000';
                cell.style.color='black';
            if (rows==1)
            {
                var cellText = document.createTextNode('null'+', '+ identifier+'['+c+']');
                //cellText.style.color='black';
              }
                else {
                  var cellText = document.createTextNode('null'+', '+identifier+'['+r+']'+'['+c+']');
                  //cellText.style.color='black';
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

	        message.appendChild(row); // add the row to the end of the table body
        }
     message.classList.add('message');
    this.element.appendChild(message);
  }
  nothing()
  {
    if(this.element.innerText!="")
    {
    this.element.innerText="";
  }
    const message = document.createElement('div');
    message.textContent = 'Nothing to visualize';
    message.style.fontSize="30px";
    message.classList.add('message');
    this.element.appendChild(message);

  }
visualize1d(identifier, rows, columns, elem)
{
   var fields = elem.split(',');
   //console.log(fields.length);
   if(this.element.innerText!="")
   {
   this.element.innerText="";
 }
   if ((fields.length==columns)||(columns==''))
   {

     const message = document.createElement('table');
      const mes= document.createElement('td');

     message.style.border='thick solid #000000';
     message.style.fontSize='large';

     message.style.backgroundColor = "white";
   for (var r = 0; r < rows; r++)
      {
          var row = document.createElement("tr");

     // create cells in row
           for (var c = 0; c < fields.length; c++)
           {
              var cell = document.createElement("td");
              cell.style.width = "100px";
              cell.style.border='solid #000000';
              cell.style.color='black';
              var cellText = document.createTextNode(fields[c]+', ' +identifier+'['+c+']');

              cell.appendChild(cellText);
              row.appendChild(cell);
          }

        message.appendChild(row); // add the row to the end of the table body
      }
   message.classList.add('message');
  this.element.appendChild(message);
}
else {
    const message = document.createElement('div');
    message.textContent = 'Wrong array definition';
    message.style.fontSize="30px";
    message.classList.add('message');
    this.element.appendChild(message);
}
}
visualize2d(identifier, rows, columns, elem)
{
   var fields = elem.split(/(?:,|}|{)+/);
   if(this.element.innerText!="")
   {
   this.element.innerText="";
 }
   if ((fields.length-2)==(columns*rows))
   {
     const message = document.createElement('table');
      const mes= document.createElement('td');
      message.style.border='thick solid #000000';
      message.style.fontSize='large';
      message.style.backgroundColor = "white";
     var i=1;
   for (var r = 0; r < rows; r++)
      {
          var row = document.createElement("tr");
     // create cells in row
           for (var c = 0; c < columns; c++)
           {
              var cell = document.createElement("td");
              cell.style.width = "100px";
              cell.style.border='solid #000000';
              cell.style.color='black';
              var cellText = document.createTextNode(fields[i]+', '+identifier+'['+r+']'+'['+c+']');
               i=i+1;
              cell.appendChild(cellText);
              row.appendChild(cell);
          }

        message.appendChild(row); // add the row to the end of the table body
      }
   message.classList.add('message');
  this.element.appendChild(message);
}
else {
    const message = document.createElement('div');
    message.textContent = 'Wrong array definition';
    message.style.fontSize="30px";
    message.classList.add('message');
    this.element.appendChild(message);



}
}
}
