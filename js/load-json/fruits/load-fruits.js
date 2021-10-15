var fruitsJSON = `{
	"fruits": [
		{
			"name": "apple",
			"color": "red"
		},
		{
			"name": "banana",
			"color": "yellow"
		},
		{
			"name": "cherries",
			"color": "red"
		}
	]
}`;

var fruitsData = JSON.parse(fruitsJSON);

const fruitsTableHeader = '<thead><tr><th>Name</th><th>Color</th></tr></thead>';

function loadFruits(){
    
    var fruitTableBody = "<tbody>";
    fruitsData.fruits.forEach(fruit => {
        var fruitRow = '<tr>';
        fruitRow += '<td>' + fruit.name + '</td>';
        fruitRow += '<td>' + fruit.color + '</td>';
        fruitRow += '</tr>';
        fruitTableBody += fruitRow;
    });
    fruitTableBody += '</tbody>';
    
    document.getElementById("fruits_table").innerHTML = fruitsTableHeader + fruitTableBody;
}
