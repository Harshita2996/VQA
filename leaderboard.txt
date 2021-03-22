
     $(document).ready(function(){
     $('.header').ready(function(){
      $.ajax({
       url:"https://cors-anywhere.herokuapp.com/https://competitions.codalab.org/competitions/29930/results/48980/data",
       dataType:"text",
       success:function(data)
       {
        var employee_data = data.split(/\r?\n|\r/);
        var table_data = '<table class="styled-table">';
        for(var count = 0; count<employee_data.length; count++)
        {
         var cell_data = employee_data[count].split(",");
         table_data += '<tr>';
         for(var cell_count=0; cell_count<cell_data.length; cell_count++)
         {
          if(count === 0)
          {
           table_data += '<th>'+cell_data[cell_count]+'</th>';
          }
          else if(cell_data[cell_count] != 0)
          {
           table_data += '<td>'+cell_data[cell_count]+'</td>';
          }
         }
         table_data += '</tr>';
        }
        table_data += '</table>';
        $('#okvqa_leaderboard_table').html(table_data);
       }
      });
     });
     
    });

    $(document).ready(function(){
     $('.header').ready(function(){
      $.ajax({
       url:"https://cors-anywhere.herokuapp.com/https://competitions.codalab.org/competitions/29930/results/48981/data",
       dataType:"text",
       success:function(data)
       {
        var employee_data = data.split(/\r?\n|\r/);
        var table_data = '<table class="styled-table">';
        for(var count = 0; count<employee_data.length; count++)
        {
         var cell_data = employee_data[count].split(",");
         table_data += '<tr>';
         for(var cell_count=0; cell_count<cell_data.length; cell_count++)
         {
          if(count === 0)
          {
           table_data += '<th>'+cell_data[cell_count]+'</th>';
          }
          else if(cell_data[cell_count] != 0)
          {
           table_data += '<td>'+cell_data[cell_count]+'</td>';
          }
         }
         table_data += '</tr>';
        }
        table_data += '</table>';
        $('#s3vqa_leaderboard_table').html(table_data);
       }
      });
     });
     
    });