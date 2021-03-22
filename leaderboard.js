
$(document).ready(function(){
     $('.header').ready(function(){
      $.ajax({
       url:"okvqa.csv",
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
          if(cell_count === 0){
               if(count === 0)
               {
               table_data += '<th>'+'#'+'</th>';
               }
               else if(cell_data[cell_count] != 0)
               {
               table_data += '<td>'+count+'</td>';
               }
          }else{ 
               if(count === 0)
               {
               table_data += '<th>'+cell_data[cell_count]+'</th>';
               }
               else if(cell_data[cell_count] != 0)
               {
               table_data += '<td>'+cell_data[cell_count]+'</td>';
               }
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


    $(document).ready(function(){
     $('.header').ready(function(){
      $.ajax({
       url:"s3vqa.csv",
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
          if(cell_count === 0){
               if(count === 0)
               {
               table_data += '<th>'+'#'+'</th>';
               }
               else if(cell_data[cell_count] != 0)
               {
               table_data += '<td>'+count+'</td>';
               }
          }else{ 
               if(count === 0)
               {
               table_data += '<th>'+cell_data[cell_count]+'</th>';
               }
               else if(cell_data[cell_count] != 0)
               {
               table_data += '<td>'+cell_data[cell_count]+'</td>';
               }
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
