var petsJSON = `{
    "pets":[ 
        { "type":"fish", "animals":[ 
            { "name":{ "first":"Nemo", "last":"Finding"}, "colours":["orange", "white"]}, 
            { "name":{ "first":"Michael", "last":"Thomas"}, "colours":["yellow"]}, 
            { "name":{ "first":"Dory", "last":"Grubber"}, "colours":["blue", "yellow", "black"]} ]}, 
        { "type":"cat", "animals":[ 
            { "name":{ "first":"Squid", "last":"Johnson"}, "colours":["black"]}, 
            { "name":{ "first":"Peanut", "last":"Day"}, "colours":["black", "brown"]}, 
            { "name":{ "first":"Marley", "last":"Day"}, "colours":["black", "brown"]}, 
            { "name":{ "first":"Bear", "last":"Blue"}, "colours":["gray"]} ]}, 
        { "type":"dog", "animals":[ 
            { "name":{ "first":"Rin", "last":"Tin Tin"}, "colours":["black"]}, 
            { "name":{ "first":"Sharik", "last":"Gajos"}, "colours":["black", "brown"]} ]} 
    ]
}`;

var petsData = JSON.parse(petsJSON);

const tableHeader = `
<thead>
    <tr>
        <th>Category</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Colour</th>
    </tr>
</thead>
`;

function loadPets(){
    var tableBody = "<tbody>";
    petsData.pets.forEach(category => {
        var type = category.type;
        category.animals.forEach(pet => {
            var petRow = '<tr>';
            petRow += '<td>' + type + '</td>';
            petRow += '<td>' + pet.name.first + '</td>';
            petRow += '<td>' + pet.name.last + '</td>';
            petRow += '<td>';
            pet.colours.forEach(colour => {
                petRow += colour + '; ';
            });
            petRow += '</td>';
            petRow += '</tr>';
            tableBody += petRow;
        });
    });
    tableBody += '</tbody>';
    document.getElementById("pets_table").innerHTML = tableHeader + tableBody;
}
