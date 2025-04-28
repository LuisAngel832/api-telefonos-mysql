var url = "http://localhost:8080/api/phones";

function postPhone() {
  console.log(url);

  var myBrand = $('#brand').val();
  var myModel = $('#model').val();
  var myPrice = $('#price').val();
  var myDescription = $('#description').val();

  if (!myBrand || !myModel || !myPrice || !myDescription) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  var myPhone = {
    brand: myBrand,
    model: myModel,
    price: myPrice,
    description: myDescription
  };
  console.log(myPhone);

  $.ajax({
    url: url,
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
      $('#resultado').html(JSON.stringify(data.phone));
    },
    data: JSON.stringify(myPhone)
  });
}

function getPhones() {
  console.log("Obteniendo teléfonos...");

  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
    success: function (data) {
      console.log(data);

      var arrPhones = data.phones;
      var htmlTablePhones = '<table border="1">';
      
      // Agregamos encabezados aquí
      htmlTablePhones += `
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Precio</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
      `;

      arrPhones.forEach(function(item) {
        console.log(item);
        htmlTablePhones += '<tr>' +
          '<td>' + item.id + '</td>' +
          '<td>' + item.brand + '</td>' +
          '<td>' + item.model + '</td>' +
          '<td>' + item.price + '</td>' +
          '<td>' + item.description + '</td>' +
          '</tr>';
      });

      htmlTablePhones += '</tbody></table>';
      $('#resultado').html(htmlTablePhones);
    }
  });
}


function updatePhone() {
  console.log("Actualizando teléfono...");

  let phoneId = $('#id').val(); // ID del teléfono a actualizar
  let myBrand = $('#brand').val();
  let myModel = $('#model').val();
  let myPrice = $('#price').val();
  let myDescription = $('#description').val();

  if (!phoneId || !myBrand || !myModel || !myPrice || !myDescription) {
    alert("Todos los campos son obligatorios, incluido el ID.");
    return;
  }

  let updatedPhone = {
    brand: myBrand,
    model: myModel,
    price: myPrice,
    description: myDescription
  };
  console.log(updatedPhone);

  $.ajax({
    url: `${url}/${phoneId}`, // Endpoint con el ID del teléfono
    type: 'put',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
      alert("Teléfono actualizado correctamente.");
      getPhones(); // Refresca la lista de teléfonos
    },
    data: JSON.stringify(updatedPhone)
  });
}

function deletePhone() {
  console.log("Eliminando teléfono...");

  var phoneId = $('#id').val(); // ID del teléfono a eliminar

  if (!phoneId) {
    alert("El ID del teléfono es obligatorio para eliminar.");
    return;
  }

  $.ajax({
    url: `${url}/${phoneId}`, // Endpoint con el ID del teléfono
    type: 'delete',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      alert("Teléfono eliminado correctamente.");
      getPhones(); // Refresca la lista de teléfonos
    }
  });
}