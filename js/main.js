$( document ).ready(function() {
  var $form = undefined;
  for(item in list){
    var listItem = list[item];
    if (listItem.enabled) {
      if ($form === undefined) {
        $form = $("<form></form>");
      }

      if (listItem.name !== undefined && typeof(listItem.name)==="string") {
        var nameString = '<div>' + listItem.name + '</div>'
        $form.append(nameString);
      }
      if (listItem.enabled !== undefined && typeof(listItem.enabled)==="boolean") {
        var enabledString = '<input type="checkbox" name="' + listItem.name + 'Enabled" ' + (listItem.enabled ? "checked":"") +'>Property Enabled?<br>'
        $form.append(enabledString);
      }
      if (listItem.ui !== undefined && typeof(listItem.ui)==="boolean") {
        var uiString = '<input type="checkbox" name="' + listItem.name + 'UI" ' + (listItem.ui ? "checked":"") +'>UI Enabled?<br>'
        $form.append(uiString);
      }
      if (listItem.standard !== undefined && typeof(listItem.standard)==="number") {
        var standardString = '<input type="text" name="' + listItem.name + 'Standard" value="' + listItem.standard + '">standard<br>';
        $form.append(standardString);
      }
      if (listItem.max !== undefined && typeof(listItem.max)==="number") {
        var maxString = '<input type="text" name="' + listItem.name + 'Max" value="' + listItem.max + '">max<br>';
        $form.append(maxString);
      }
      if (listItem.min !== undefined && typeof(listItem.min)==="number") {
        var minString = '<input type="text" name="' + listItem.name + 'Min" value="' + listItem.min + '">min<br>';
        $form.append(minString);
      }
      if (listItem.priority !== undefined && typeof(listItem.priority)==="number") {
        var priorityString = '<input type="text" name="' + listItem.name + 'Priority" value="' + listItem.priority + '">priority<br><br>';
        $form.append(priorityString);
      }
    }
  }
  if ($form) {
    $form.append('<input id="theButton" type="button" value="save" />');
    $('body').append($form);
  }

  $('#theButton').click(function(evt){
    console.log($(this).parent());
  });
});

var list = [
  {
    name: "thing 1",
    enabled: true,
    ui: true,
    standard: 50,
    max: 100,
    min: 0,
    priority: 10
  },
  {
    name: "thing 2",
    enabled: true,
    ui: false,
    standard: 50,
    max: 100,
    min: 0,
    priority: 0
  }
]